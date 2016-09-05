(function(){
    var cat =  document.getElementsByClassName('cat');
    var catArray = [].slice.call(cat);
    function movecat(){
        for (var i = 0; i < catArray.length + 1; i++){
            (function(i){
                setTimeout(function(){
                    if (i == 3) {
                        catArray[i].className = "cat moving";
                        catArray[i - 1].className = "cat moving2";
                        catArray[i - 3].className = "cat";
                        movecat();
                    }
                    else if (i == 2){
                        catArray[i].className = "cat moving";
                        catArray[i - 1].className = "cat moving2";
                        catArray[i + 1].className = "cat";
                    }
                    else if (i == 1){
                        catArray[i].className = "cat moving";
                        catArray[i - 1].className = "cat moving2";
                        catArray[i + 1].className = "cat";
                    }
                    else if (i == 0){
                        catArray[i].className = "cat moving";
                        catArray[i + 3].className = "cat moving2";
                        catArray[i + 1].className = "cat";
                    }
                }, 5000 * (i + 1));
            })(i);
        }
    }
    movecat();
})();
