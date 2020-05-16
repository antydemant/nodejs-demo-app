window.onload = function() {
    var elem = document.querySelector('.grid');
    elem.style.display = 'block';
    
    var msnry = new Masonry( elem, {
        itemSelector: '.grid-item',
        columnWidth: 200,
        gutter: 10,
        fitWidth: true,
    });
}