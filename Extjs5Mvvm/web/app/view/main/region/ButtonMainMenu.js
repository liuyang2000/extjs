/**
 * Created by Administrator on 2015/10/13.
 */
/**
 * 显示在顶部的按钮菜单，可以切换至标准菜单，菜单树
 */
Ext.define('app.view.main.region.ButtonMainMenu', {

    extend: 'app.ux.ButtonTransparent',

    alias: 'widget.buttonmainmenu',

    viewModel: 'main',

    text: '菜单',
    glyph: 0xf0c9,

    initComponent: function () {

        this.menu = this.getViewModel().getMenus();

        this.callParent();
    }

})