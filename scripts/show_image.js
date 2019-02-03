var showBtns = document.querySelectorAll('.picture-block');
var image_wrap = document.querySelector('.image-wrap');
var image_block = image_wrap.querySelector('.image-block');
var win_Height = window.innerHeight;
//  Set size image in full screen mode
var setSize = function( winHeight ) {
    let heightImage = winHeight * 0.9;
    image_block.style.height = heightImage + 'px';
    image_block.style.width = (4 * heightImage / 3) + 'px';
    image_block.style.margin = (winHeight * 0.05) + 'px auto';
}

var closeImage = function(class_name) {
    image_wrap.classList.remove('image-wrap-show');
    image_block.classList.remove( class_name );
    setSize( 0 );
};

for (let i=0; i<showBtns.length; i++) {
    var showBtn = showBtns[i];
    showBtn.addEventListener('click', function(ev) {
        image_wrap.classList.add('image-wrap-show');

        var img_class = ev.target.getAttribute('img-class');
        image_block.classList.add( img_class );

        image_wrap.addEventListener('click', function() {
            closeImage(img_class);
        });
        
        document.addEventListener('keydown', function(ev) {
            if (ev.keyCode === 27) {
                closeImage(img_class);
            }
        });

        var start = Date.now();

        var timer = setInterval( function() {
            var timePassed = Date.now() - start;

            //image_block.style.left = timePassed / 5 + 'px';
            var timeHeight = win_Height * timePassed / 200;
            setSize( timeHeight );

            if (timePassed >= 200) clearInterval(timer);
        }, 10);

    });
}      