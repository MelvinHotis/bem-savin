block('elips')(
    addJs()(true),
    addMix()(),
    content()(function(){
        return [
            { elem: 'image',
            content: [
              {block: 'image',
              url: '../../img/Ellipse.svg',
              alt: 'ellipse'
            }
          ]},
           
        ];
    })
)