Ext.define('MyApp.view.MyWindow', {
    extend: 'Ext.window.Window',

    height: 137,
    width: 233,
    layout: {
        align: 'middle',
        pack: 'center',
        type: 'hbox'
    },
    title: 'My Window',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'button',
                    text: 'MyButton'
                }
            ]
        });
        me.callParent(arguments);
    }
});
