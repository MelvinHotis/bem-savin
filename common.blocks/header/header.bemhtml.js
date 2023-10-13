block('header')(
    addJs()(true),
    addMix()(),
    addMods()({'bg-color':'red','font-color':'yellow'}),
    content()(function(){
        return [
            { elem: 'logo',
              content: [
                {block: 'logo'}
            ]},
            { elem: 'search',
              content: [
                {block: 'search'}
            ]},
            { elem: 'phone',
              content: [
                {block: 'phone'}
            ]},
        ];
    })
)