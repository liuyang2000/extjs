/**
 * 显示在顶部的按钮菜单，可以切换至标准菜单，菜单树
 */
Ext.define('app.view.main.menu.SettingMenu', {
    extend: 'app.ux.ButtonTransparent',
    alias: 'widget.settingmenu',

    uses : ['app.view.main.menu.Monetary'],

    text: '设置',
    glyph: 0xf013,
    tooltip: '偏好设置',

    initComponent: function () {
        this.menu = [];
        this.menu.push({
            text: '菜单样式',
            menu: [{
                xtype: 'segmentedbutton',
                reference: 'menuType',
                //defaultUI : 'default',
                value: 'toolbar',
                items: [{
                    text: '标准菜单',
                    value: 'toolbar'
                }, {
                    text: '树形菜单',
                    value: 'tree'
                }, {
                    text: '按钮菜单',
                    value: 'button'
                }]
            }]
        }, {
            text: '金额单位',
            menu: [{
                xtype: 'segmentedbutton',
                reference: 'monetary', // 加入了这一句，在改变数据的时候可以触发bind绑定的事件
                defaultUI: 'default',
                value: 'tenthousand',
                items: app.view.main.menu.Monetary.getMonetaryMenu()
            }]
        })
        this.callParent();
    }

})