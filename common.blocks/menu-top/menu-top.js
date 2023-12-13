modules.define('menu-top', ['i-bem-dom', 'icon'], function(provide, bemDom, Icon) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {

                    console.log('menu JS init');
                    var _this = this;



                    var menu_level_0 = this.findChildElems({
                        elem: 'li',
                        modName: 'level',
                        modVal: '1'
                    });
                    var menu_level_1 = this.findChildElems({
                        elem: 'li',
                        modName: 'level',
                        modVal: '2'
                    });

                    menu_level_0._entities.forEach(function(item, i, arr) {

                        var handlerInIN = function(e) {
                          if(arr[i].findChildElem({elem:'ul'})){
                            // console.log('hover=', arr[i].findChildElem({elem:'ul'}));
                            // console.log('icon=', arr[i].findChildBlock({block: 'icon'}));

                            arr[i].findChildElem({elem:'ul'}).setMod('drop-down_show');
                            arr[i].findChildElem({elem:'ul'}).delMod('drop-down_hidden');
                            arr[i].findChildBlock(Icon).setMod('rotate');
                          }
                        };
                        $(item.domElem[0]).on("mouseenter", handlerInIN); //mouseleave

                        var handlerInOut = function(e) {
                          if(arr[i].findChildElem({elem:'ul'})){
                            // console.log('hover=', arr[i].findChildElem({elem:'ul'}));
                            arr[i].findChildElem({elem:'ul'}).setMod('drop-down_hidden');
                            arr[i].findChildElem({elem:'ul'}).delMod('drop-down_show');
                            arr[i].findChildBlock(Icon).delMod('rotate');
                          }
                        };

                        $(item.domElem[0]).on("mouseleave", handlerInOut);

                    });
                    menu_level_1._entities.forEach(function(item, i, arr) {

                        var handlerInIN = function(e) {
                          if(arr[i].findChildElem({elem:'ul'})){
                            // console.log('hover=', arr[i].findChildElem({elem:'ul'}));
                            // console.log('icon=', arr[i].findChildBlock({block: 'icon'}));

                            arr[i].findChildElem({elem:'ul'}).setMod('drop-down_show');
                            arr[i].findChildElem({elem:'ul'}).delMod('drop-down_hidden');
                            arr[i].findChildBlock(Icon).setMod('rotate');
                          }
                        };
                        $(item.domElem[0]).on("mouseenter", handlerInIN); //mouseleave

                        var handlerInOut = function(e) {
                          if(arr[i].findChildElem({elem:'ul'})){
                            // console.log('hover=', arr[i].findChildElem({elem:'ul'}));
                            arr[i].findChildElem({elem:'ul'}).setMod('drop-down_hidden');
                            arr[i].findChildElem({elem:'ul'}).delMod('drop-down_show');
                            arr[i].findChildBlock(Icon).delMod('rotate');
                          }
                        };

                        $(item.domElem[0]).on("mouseleave", handlerInOut);

                    });

                }
            }
        }
    }))

});
