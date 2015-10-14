/**
 * Created by Administrator on 2015/10/14.
 */
/**
 * 模块数据的主显示区域，继承自Grid
 */

Ext.define('app.view.module.region.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.modulegrid',
    uses: ['app.view.module.region.GridToolbar'],
    bind: {
        title: '{tf_title}' // 数据绑定到ModuleModel中的tf_title
    },
    dockedItems: [{
        xtype: 'gridtoolbar', // 按钮toolbar
        dock: 'top'
    }],

    // 自定义字段的还没有做，先放几个固定的
    columns: [{
        dataIndex: 'tf_name',
        text: '工程项目名称',
        width: 250
    }, {
        dataIndex: 'tf_budget',
        text: '投资总额'
    }],
    store: new Ext.data.Store({
        fields: ['tf_name', {
            name: 'tf_budget',
            type: 'float'
        }],
        data: [{
            tf_name: '安居房建设工程',
            tf_budget: 1230000
        }, {
            tf_name: '道路建设工程',
            tf_budget: 453092
        }]
    })
})