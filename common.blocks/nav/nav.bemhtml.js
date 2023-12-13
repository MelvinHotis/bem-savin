block('nav')(
    addJs()(true),
    addMix()(),
    content()(function(){
        return [
            { elem: 'ul',
              content: [
                {block: 'menu'}
            ]},
        ];
    })
)