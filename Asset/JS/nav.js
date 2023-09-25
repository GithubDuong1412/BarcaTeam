var header = document.getElementById('nav');
var mobileMenu = document.getElementById('js-mobile-menu');
var headerHeight = header.clientHeight;

// Close/Open Menu
mobileMenu.onclick = function() {
    var isClosed = header.clientHeight === clientHeight;
    if(isClosed) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

// Close when choose one item in menu
var itemMenu = document.querySelectorAll('#nav-list li a[href="#"]');
for (var i = 0; i < itemMenu.length; i++) {
    var item = itemMenu[i];

    item.onclick = function() {
        var isParentMenu = this.nextElementSibling ;
        if(!isParentMenu) {
            header.style.height = null;
        }
    }
}