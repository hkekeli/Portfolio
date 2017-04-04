const bird             = document.querySelector('.shape'),
      dot              = document.querySelector('.dot'),
      lowerBeak        = document.querySelector('.beak--lower'),
      headWrapperChild = document.querySelector('.head-wrapper-child'),
      birdChildren     = bird.children;

const birdElements = Array.from(birdChildren).concat([bird, dot, lowerBeak, headWrapperChild]);

function toggleMovement() {
    birdElements.forEach(function(item){
        item.classList.toggle('pause-animation');
    })
}
bird.onmouseenter = function(){
    toggleMovement();
}
bird.onmouseleave = function(){
    toggleMovement();
}