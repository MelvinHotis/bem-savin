block('footer')(
    addJs()(true),
    addMix()(),
    content()(function(){
        return [
            { elem: 'container',
              content: [
                {block: 'container'}
            ]},
        ];
    })
)