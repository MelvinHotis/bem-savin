block('menu-list')(
    {tag: 'footer'},
    addJs()(true),
    addAttrs()({itemcsope: true, itemtype: 'http://schema.org/SiteNavigationElement'}),
    content()(function(){

    return [
      {elem: 'ul', tag: 'ul',
          attrs: {itemprop:'about', itemscope: true, itemtype: 'http://schema.org/ItemList'},
          elemMods: {'level': 1},
          content:[
              { elem: 'li',
                  tag: 'li',
                  attrs: {itemprop: "itemListElement", itemscope: true, itemtype: "http://schema.org/ItemList"},
                  elemMods: {'livel': 1},
                  content: [{ block: 'link', url: '#', attrs: {itemprop: 'url',},
                  content: 'Agency'},
                  {tag: 'meta', attrs: {itemprop: 'name', content: 'Главная'}}
                ]
              },
              { elem: 'li',
                  tag: 'li',
                  attrs: {itemprop: "itemListElement", itemscope: true, itemtype: "http://schema.org/ItemList"},
                  elemMods: {'livel': 1, 'drop':'down'},
                  content: [
                      { block: 'link', url: '#', attrs: {itemprop: 'url'},
                        content: [
                          'Works',
                        ]
                      },
                      {tag: 'meta', attrs: {itemprop: 'name', content: 'О нас'}}
                  ]
              },
              { elem: 'li',
                  tag: 'li',
                  attrs: {itemprop: "itemListElement", itemscope: true, itemtype: "http://schema.org/ItemList"},
                  elemMods: {'livel': 1, 'drop':'down'},
                  content: [
                    { block: 'link', url: '#', attrs: {itemprop: 'url'}, content:
                    'Service'
                    },
                    {tag: 'meta', attrs: {itemprop: 'name', content: 'Оплата'}}
                  ]
              },
              { elem: 'li',
                  tag: 'li',
                  attrs: {itemprop: "itemListElement", itemscope: true, itemtype: "http://schema.org/ItemList"},
                  elemMods: {'livel': 1, 'drop':'down'},
                  content: [
                    { block: 'link', url: '#', attrs: {itemprop: 'url'}, content:
                    'Team'
                    },
                    {tag: 'meta', attrs: {itemprop: 'name', content: 'Доставка'}}
                  ]
              },
              { elem: 'li',
                  tag: 'li',
                  attrs: {itemprop: "itemListElement", itemscope: true, itemtype: "http://schema.org/ItemList"},
                  elemMods: {'livel': 1, 'drop':'down'},
                  content: [{ block: 'link', url: '#', attrs: {itemprop: 'url'}, content:
                    'Blog'
                  },
                  {tag: 'meta', attrs: {itemprop: 'name', content: 'Контакты'}}
                ]
              },
               { elem: 'li',
                  tag: 'li',
                  attrs: {itemprop: "itemListElement", itemscope: true, itemtype: "http://schema.org/ItemList"},
                  elemMods: {'livel': 1, 'drop':'down'},
                  content: [{ block: 'link', url: '#', attrs: {itemprop: 'url'}, content:
                    'Contacts'
                  },
                  {tag: 'meta', attrs: {itemprop: 'name', content: 'Контакты'}}
                ]
              },
          ]
    }
  ]
}))
