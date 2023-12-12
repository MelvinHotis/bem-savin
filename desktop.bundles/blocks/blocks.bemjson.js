module.exports = {
    block: 'page',
    title: 'Savin-Blocks',
    head: [
        { elem: 'css', url: 'blocks.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'page.min.js' }],
    mods: { theme: 'main'},
    content: [
       { block: 'header'},       
       { block: 'footer'},       
    ]
};  