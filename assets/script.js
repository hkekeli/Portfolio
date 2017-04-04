<<<<<<< HEAD
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
=======
let bird = document.querySelector('.shape'),
    dot  = document.querySelector('.dot'),
    lowerBeak = document.querySelector('.beak--lower'),
    headWrapperChild = document.querySelector('.head-wrapper-child'),
    birdChildren = bird.children;

bird.onmouseenter = function() {
    bird.classList.add('pause-animation');
    dot.classList.add('pause-animation');
    lowerBeak.classList.add('pause-animation');
    headWrapperChild.classList.add('pause-animation');
    
    for(var i = 0; i < birdChildren.length; i++) {
        birdChildren[i].classList.add('pause-animation');
    }
}

bird.onmouseleave = function() {
    bird.classList.remove('pause-animation');
    dot.classList.remove('pause-animation');
    lowerBeak.classList.remove('pause-animation');
    headWrapperChild.classList.remove('pause-animation');
    
    for(var i = 0; i < birdChildren.length; i++) {
       birdChildren[i].classList.remove('pause-animation');
    }
>>>>>>> pause bird on hover
}