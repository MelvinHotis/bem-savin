block('ul')(
    addJs()(true),
    addMix()(),
    content()(function(){
        return [
            {
                block: 'menu',
                tag: 'ul',
                mods: {
                    theme: 'islands',
                    size: 'm'
                },
                content: [
                    {
                        block: 'menu-item',
                        tag: 'li',
                        mods: {
                            type: 'link'
                        },
                        content: {
                            block: 'link',
                            url: 'https://bem.info/',
                            content: 'Главная'
                        }
                    },
                    {
                        block: 'menu-item',
                        tag: 'li',
                        mods: {
                            type: 'link'
                        },
                        content: {
                            block: 'link',
                            url: 'https://tech.yandex.ru/',
                            content: 'Страница'
                        }
                    }
                ]
            }
        ];
    })
)