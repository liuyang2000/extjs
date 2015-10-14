/**
 * Created by Administrator on 2015/10/14.
 */
/**
 * 模块的控制器
 */

Ext.define('app.view.module.ModuleController', {
    extend: 'Ext.app.ViewController',

    //requires: ['Ext.MessageBox', 'Ext.window.Toast'],

    alias: 'controller.module',

    uses : ['app.view.main.menu.Monetary'],

    init : function() {
        var vm = this.getView().getViewModel();
        // 绑定金额单位修改过后需要去执行的程序
        vm.bind('{monetary.value}', function(value) {
            this.onMonetaryChange(value);
        }, this)
    },

    addRecord : function(){
        var grid = this.getView().down('modulegrid');
        var model = Ext.create(grid.getStore().model);
        model.set('tf_id',1);
        model.set('tf_name', '太湖花园小区建设');
        model.set('tf_code','2004-01');
        model.set('tf_squaremeter',12000);
        model.set('tf_budget',3800000);
        model.set('tf_rjl',0.67);
        model.set('tf_startDate',new Date());
        model.set('tf_endDate',new Date());
        model.set('tf_isValid',false);
        model.set('tf_m3',1239.24);

        grid.getStore().add(model);
        console.log(model);
        grid.getStore().sync();
    },

    // 金额单位修改过后执行
    onMonetaryChange : function(value) {
        console.log('金额单位变更:' + value);
        var m = app.view.main.menu.Monetary.getMonetary(value);
        Ext.monetaryText = m.monetaryText; // 设置当前的全局的金额单位
        Ext.monetaryUnit = m.monetaryUnit;
        Ext.each(this.getView().query('modulegrid'), function(grid) {
            if (grid.rendered) {
                grid.getView().refresh();
                Ext.Array.forEach(grid.columnManager.getColumns(), function(column) {
                    // 如果可以改变大小，并且是金额字段，则在改变了金额单位以后，自动调整一下列宽
                    if (!column.resizeDisabled && column.fieldDefine
                        && column.fieldDefine.tf_isCurrency) {
                        column.autoSize();
                    }
                })
            }
        });
    }

})