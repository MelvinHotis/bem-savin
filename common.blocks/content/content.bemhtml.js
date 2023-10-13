block('content')(
    addJs()(true),
    addMix()(),
    content()(function(){
        return [
            { elem: 'category',
              content: [
                {block: 'category'}
            ]},

            { elem: 'news',
              content: [
                {block: 'news'}
            ]},
        ];
    })
)