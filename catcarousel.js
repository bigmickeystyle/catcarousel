(function(){
    var clearer;
    var timer;
    var cats = document.getElementsByClassName('cat');
    var buttons = document.getElementsByClassName('button');
    var i = 0;

    var catReset = function(){
        for (var l = 0; l < cats.length; l++){
            if (cats[l].classList.value == ("cat gomiddle goleft")){
                cats[l].classList.remove("gomiddle", "goleft");
            }
        }
    };




    function movecat(){
        // shift the cats
        cats[i % 4].classList.add("goleft");
        cats[(i + 1) % 4].classList.add("gomiddle");

        //shift the buttons
        buttons[i % 4].className = "button";
        buttons[(i + 1) % 4].className = "button whitebutton";

        // shift all cats to the right after half a second

        clearer = setTimeout(catReset, 500);

        i++;

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
                timer = setTimeout(movecat, 2000);
                setTimeout(catReset, 500);
            });
        }
        timer = setTimeout(movecat, 5000);
    }
    movecat();
})();
