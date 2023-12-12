block('left')(
    addJs()(true),
    addMix()(),
    content()(function(){
        return [
            { elem: 'logo-white',
              content: [
                {block: 'logo-white'}
            ]},
            { elem: 'menu-list',
            content: [
              {block: 'menu-list'}
          ]},
          { elem: 'copy',
            content: [
              {block: 'copy'}
          ]},
        ];
    })
)