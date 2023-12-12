block('header')(
    addJs()(true),
    addMix()(),
    content()(function(){
        return [
            { elem: 'menu',
              content: [
                {block: 'menu'}
            ]},
        ];
    })
)