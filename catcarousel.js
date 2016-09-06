(function(){
    var cats = document.getElementsByClassName('cat');
    var buttons = document.getElementsByClassName('button');
    var i;
    function movecat(){
        for (i = 0; i < cats.length; i++){
            (function(i){
                setTimeout(function(){
                    cats[i].className = "cat moving2";
                    buttons[i].className = "button";
                    if (i == 3) {
                        cats[i - 1].className = "cat";
                        cats[i - 3].className = "cat moving";
                        buttons[i - 3].className = "button whitebutton";
                        movecat();
                    }

                    else {
                        cats[i + 1].className = "cat moving";
                        buttons[i + 1].className = "button whitebutton";
                        if (i == 0) {
                            cats[i + 3].className = "cat";
                        }
                        else {
                            cats[i - 1].className = "cat";
                        }
                    }
                }, 1000 * (i + 1));
            })(i);
        }
    }
    movecat();
})();
