/**
 * Created by Administrator on 2015/10/14.
 */
/**
 * 模块数据的主显示区域，继承自Grid
 */

Ext.define('app.view.module.region.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.modulegrid',
    uses: ['app.view.module.region.GridToolbar',
            'app.view.module.factory.ColumnsFactory'],
    bind: {
        title: '{tf_title}' // 数据绑定到ModuleModel中的tf_title
    },
    dockedItems: [{
        xtype: 'gridtoolbar', // 按钮toolbar
        dock: 'top'
    }],

    dockedItems: [{
        xtype: 'gridtoolbar', // 按钮toolbar
        dock: 'top'
    }],
    columnLines: true, // 加上表格线
    viewConfig: {
        stripeRows: true, // 奇偶行不同底色
        enableTextSelection: true
    },
    initComponent: function () {
        var viewModel = this.up('modulepanel').getViewModel();
        // 创建grid列
        this.columns = app.view.module.factory.ColumnsFactory.getColumns(
            viewModel, 10);
        this.callParent();
    }
})