block('menu-top')(
    {tag: 'nav'},
    addJs()(true),
    addAttrs()({itemcsope: true, itemtype: 'http://schema.org/SiteNavigationElement'}),
    content()(function(){

    return [
      {elem: 'ul', tag: 'ul',
          attrs: {itemprop:'about', itemscope: true, itemtype: 'http://schema.org/ItemList'},
          elemMods: {'level': 0},
          content:[
              { elem: 'li',
                  tag: 'li',
                  attrs: {itemprop: "itemListElement", itemscope: true, itemtype: "http://schema.org/ItemList"},
                  elemMods: {'level': 1},
                  content: [{ block: 'link', url: '#', attrs: {itemprop: 'url'},
                  content: 'Главная'},
                  {tag: 'meta', attrs: {itemprop: 'name', content: 'Главная'}}
                ]
              },
              { elem: 'li',
                  tag: 'li',
                  attrs: {itemprop: "itemListElement", itemscope: true, itemtype: "http://schema.org/ItemList"},
                  elemMods: {'level': 1, 'drop_down':'parent'},
                  content: [
                      { block: 'link', url: '#', attrs: {itemprop: 'url'},
                        content: [
                          'Каталог',
                          { block: 'icon', mods:{size:'l','navigation-chevron-down':true} },
                          {tag: 'meta', attrs: {itemprop: 'name', content: 'Каталог'}}
                        ]
                      },                
                  ]
              },
              { elem: 'li',
                  tag: 'li',
                  attrs: {itemprop: "itemListElement", itemscope: true, itemtype: "http://schema.org/ItemList"},
                  elemMods: {'level': 1, 'drop':'down'},
                  content: [{ block: 'link', url: '#', attrs: {itemprop: 'url'}, content:
                    'Контакты'
                  },
                  {tag: 'meta', attrs: {itemprop: 'name', content: 'Контакты'}}
                ]
              },
          ]
    }
  ]
}))
