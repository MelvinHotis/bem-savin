modules.define('page', function(provide, Page) {

provide(Page.declMod({ modName: 'theme', modVal: 'main' }, {
    onSetMod: {
        js: {
            inited: function() {
                
            }
        }
    }
}));

});
