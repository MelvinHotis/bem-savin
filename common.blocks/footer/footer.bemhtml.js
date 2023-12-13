<<<<<<< HEAD
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
=======
block('footer').content()(function() {
    return [
        {   
    block: 'title',
    content: 'Подвал сайта',
}
    ];
});
>>>>>>> de1f750f9b27cab8e989e6022c0eaef846e62fb4
