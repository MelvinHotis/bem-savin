block('header')(
    addJs()(true),
    addMix()(),
<<<<<<< HEAD
    content()(function(){
        return [
            { elem: 'menu',
              content: [
                {block: 'menu'}
=======
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
>>>>>>> de1f750f9b27cab8e989e6022c0eaef846e62fb4
            ]},
        ];
    })
)