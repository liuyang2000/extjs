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

    init: function () {
        console.log('modulecontroller.init')
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
    }

})