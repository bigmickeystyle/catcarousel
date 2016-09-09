(function(){
    var clearer;
    var timer;
    var cats = document.getElementsByClassName('cat');
    var len = cats.length;
    var buttons = document.getElementsByClassName('button');
    var i = 0;
    var start;
    var end;

    var catReset = function(){
        for (var l = 0; l < len; l++){
            if (cats[l].classList.value == ("cat gomiddle goleft")){
                cats[l].classList.remove("gomiddle", "goleft");
            }
        }
    };

    function movecat(){
        // shift the cats
        cats[i % len].classList.add("goleft");
        cats[(i + 1) % len].classList.add("gomiddle");

        //shift the buttons
        buttons[i % len].className = "button";
        buttons[(i + 1) % len].className = "button whitebutton";

        // shift all cats to the right after half a second

        clearer = setTimeout(catReset, 500);

        i++;

        console.log("normal");
        timer = setTimeout(movecat, 5000);
    }

    for (var j = 0; j < buttons.length; j++){
        buttons[j].addEventListener('click', function(){
            clearTimeout(timer);
            clearTimeout(clearer);
            var pressed = parseInt(this.id);
            for (var k = 0; k < cats.length; k++){
                if (cats[k].classList.value == ("cat gomiddle")){
                    cats[k].classList.add("goleft");
                }
                buttons[k].className = "button";
            }
            cats[pressed].className ="cat gomiddle";
            buttons[pressed].className = "button whitebutton";
            i = pressed;
            console.log("button");
            timer = setTimeout(movecat, 5000);
            setTimeout(catReset, 500);
        });
        buttons[j].addEventListener('mouseover', function(){
            this.style.cursor = 'pointer';
        });
    }
    swipe();
    console.log ("start");
    setTimeout(movecat, 5000);

    function swipe(){

        document.body.addEventListener('touchstart', function(e){
            e.preventDefault();
            start = e.touches[0].clientX;
        });

        document.body.addEventListener('touchend', function(e){
            e.preventDefault();
            end = e.changedTouches[0].clientX;
            if (start > end){
                console.log("go!");
                clearTimeout(timer);
                clearTimeout(clearer);
                movecat();
            }
            start = null;
            end = null;
        });


    }

})();
