block('category')(
    addJs()(true),
    addMix()(),
    content()(function(){
        return [
            {
                block: 'links',
                content: [
                    {
                        block: 'title',
                        mods: {
                            type: 'link'
                        },
                        content: {
                            block: 'link',
                            url: '#',
                            content: 'Категория'
                        },
                    },
                    {
                        block: 'title',
                        mods: {
                            type: 'link'
                        },
                        content: {
                            block: 'link',
                            url: '#',
                            content: 'Категория'
                        },
                    }
                ]
            }
        ];
    })
)