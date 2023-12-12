block('menu')(
  {tag: 'nav'},
  addJs()(true),
  content()(function(){

  return [
    {
        elem: 'ul', tag: 'ul',
        elemMods: {'level': 1},
        content:[
            { elem: 'li',
                tag: 'li',
                elemMods: {'livel': 1},
                content:
                  { block: 'link', mix:[{ block: 'font', mods: { 'color': 'graphite'}}, { block: 'page', mods: { 'display': 'block'}}], url: '#', mods: {'active':true}, content: 'Главная'}
            },
        ]
  }
]
}))
