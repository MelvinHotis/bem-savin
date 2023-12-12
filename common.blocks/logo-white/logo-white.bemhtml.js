block('logo-white').content()(function() {
    return [
        { block: 'link', 
          url:'/',
          content: 
            { block: 'image',
              url: '../../img/logo-white.png',
              alt: 'logo white'
            }
        }
    ];
});
