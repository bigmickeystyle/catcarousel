(function(){
    var cats = document.getElementsByClassName('cat');
    var buttons = document.getElementsByClassName('button');
    var i;
    function movecat(){
        for (i = 0; i < cats.length; i++){
            buttons[0].addEventListener('click', function(){
                i = 0;
            });
            (function (i){
                setTimeout(function(){
                    cats[i].classList.add("goleft");
                    buttons[i].className = "button";
                    if (i == 3) {
                        cats[i - 1].classList.remove("gomiddle", "goleft");
                        cats[i - 3].classList.add("gomiddle");
                        buttons[i - 3].classList.add("whitebutton");
                        movecat();
                    }

                    else {
                        cats[i + 1].classList.add("gomiddle");
                        buttons[i + 1].classList.add("whitebutton");
                        if (i == 0) {
                            cats[i + 3].classList.remove("gomiddle", "goleft");
                        }
                        else {
                            cats[i - 1].classList.remove("gomiddle", "goleft");
                        }
                    }
                }, 2000 * (i + 1));
            })(i);
        }

    }

    movecat();

    buttons[0].addEventListener('click', function(){

    });


})();
