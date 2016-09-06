(function(){
    var cat =  document.getElementsByClassName('cat');
    var button =  document.getElementsByClassName('button');
    var catArray = [].slice.call(cat);
    var buttonArray = [].slice.call(button);
    function movecat(){
        for (var i = 0; i < catArray.length + 1; i++){
            (function(i){
                setTimeout(function(){
                    if (i == 3) {
                        catArray[i].className = "cat moving2";
                        catArray[i - 1].className = "cat";
                        catArray[i - 3].className = "cat moving";
                        buttonArray[i - 3].className = "button whitebutton";
                        buttonArray[i].className = "button";
                        movecat();
                    }
                    else if (i == 2){
                        catArray[i].className = "cat moving2";
                        catArray[i - 1].className = "cat";
                        catArray[i + 1].className = "cat moving";
                        buttonArray[i + 1].className = "button whitebutton";
                        buttonArray[i].className = "button";
                    }
                    else if (i == 1){
                        catArray[i].className = "cat moving2";
                        catArray[i - 1].className = "cat";
                        catArray[i + 1].className = "cat moving";
                        buttonArray[i + 1].className = "button whitebutton";
                        buttonArray[i].className = "button";
                    }
                    else if (i == 0){
                        catArray[i].className = "cat moving2";
                        catArray[i + 3].className = "cat";
                        catArray[i + 1].className = "cat moving";
                        buttonArray[i + 1].className = "button whitebutton";
                        buttonArray[i].className = "button";
                    }
                }, 5000 * (i + 1));
            })(i);
        }
    }
    movecat();
})();
