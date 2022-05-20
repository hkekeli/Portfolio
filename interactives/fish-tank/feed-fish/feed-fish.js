var feedBtn = document.getElementById('btn');

// Method 1

feedBtn.addEventListener('click', function(){
    var foodWrapper = document.querySelector('.food-wrapper');
    var foodDiv = "<div class='food'></div>";

    for(var i = 0; i < 10; i++){
        foodWrapper.innerHTML += foodDiv;
    }
});