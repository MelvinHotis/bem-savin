block('container')(
    addJs()(true),
    addMix()(),
    content()(function(){
        return [
            { elem: 'left',
              content: [
                {block: 'left'}
            ]},
            { elem: 'right',
              content: [
                {block: 'right'}
            ]},
        ];
    })
)