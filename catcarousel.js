(function(){
    var timer;
    var len = 4;
    var i = 0;
    var lock = false;

    function movecat(){
        var current = i % len;
        var next = (i + 1) % len;
        // shift the $('.cat')
        motion(current, next);
        i++;
        timer = setTimeout(movecat, 5000);
    }

    function motion(current, next){

        $('.cat')[current].classList.add("goleft");
        $('.cat')[current].classList.remove("gomiddle");
        $('.cat')[next].classList.add("gomiddle");

        $('.button')[current].className = "button";
        $('.button')[next].className = "button whitebutton";

        $('.goleft').on('transitionend', function(){
            this.classList.remove("goleft");
        });
    }

    function lockout(){
        setTimeout(function(){
            lock = false;
        }, 1000);
    }

    $('.button').on('click', function(){
        var pressed = parseInt(this.id);
        var current = i % len;
        if (lock == false && pressed != i){
            clearTimeout(timer);
            motion(current, pressed);
            i = pressed;
            lock = true;
            lockout();
            timer = setTimeout(movecat, 5000);
        }
    }).on('mouseover', function(){
        this.style.cursor = 'pointer';
    });

    swipe();
    timer = setTimeout(movecat, 5000);

    var start;
    var end;

    function swipe(){

        $('body').on('touchstart', function(e){
            e.preventDefault();
            start = e.touches[0].clientX;
        });

        $('body').on('touchend', function(e){
            e.preventDefault();
            end = e.changedTouches[0].clientX;
            if (start > end){
                clearTimeout(timer);
                movecat();
            }
            start = null;
            end = null;
        });
    }
})();
