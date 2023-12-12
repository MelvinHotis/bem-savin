block('right')(
    addJs()(true),
    addMix()(),
    content()(function(){
        return [
            { elem: 'que',
              content: [
                {block: 'que'},
            ]},
            { block: 'button', mix:{ block: 'decorator', mods: { 'indent-t':'m'}}, mods: { theme: 'normal', size: 'm', width: 'available'}, content: ['Brief ',{ block: 'icon', mods: { size: 'm', 'button-pencin': true}}]},
        ];
    })
)