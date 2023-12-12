modules.define('button', ['i-bem-dom',/* 'form-call', 'form-call-callback'*/], function(provide, bemDom, Form, Callback) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
              // по-другому инициализировать form-call в модх minishop2 не получается
                // let _form = this.findMixedBlock(Form);
                // if(_form){
                //     // console.log(_form);
                //     _form.setMod('js','inited');
                // }
                // let _callback = this.findMixedBlock(Callback);
                // if(_callback){
                //     // console.log(_form);
                //     _callback.setMod('js','inited');
                // }
            }
        }
    }
}));

});
