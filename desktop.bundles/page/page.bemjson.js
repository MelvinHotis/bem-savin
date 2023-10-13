module.exports = {
    block: 'page',
    title: 'page',
    head: [
        { elem: 'css', url: 'page.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'page.min.js' }],
    mods: { theme: 'main'},
    content: [
       { block: 'header'},
       { block: 'menu-top'},
       { block: 'cover'},
       { block: 'content'},
       { block: 'footer'},
       
    ]
};  