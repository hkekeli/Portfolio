class Bird{
    bird = null;
    dot = null;
    lowerBeak = null;
    headWrapperChild = null;
    birdChildren = null;
    
    constructor(){
        this.bird = document.querySelector('.bird'); 
        this.dot = document.querySelector('.i-dot');
        this.lowerBeak        = document.querySelector('.beak--lower');
        this.headWrapperChild = document.querySelector('.head-wrapper-child');
        this.birdChildren     = this.bird.children;
        
        this.birdElements = Array.from(this.birdChildren).concat([this.bird, this.dot, this.lowerBeak, this.headWrapperChild]);
    }
    
    bind(){
        this.bird.onmouseenter = function(){
            this.toggleMovement();
        }
        this.bird.onmouseleave = function(){
            this.toggleMovement();
        }
    }
    
    toggleMovement() {
        this.birdElements.forEach(function(item){
            this.item.classList.toggle('pause-animation');
        })
    }
}

onDocumentRead = (fn) => {
    if(document.readyState === "complete"){
        fn();
    }
    else{
        window.addEventListener('load', (event) => {
            fn();
        });
    }
};

onDocumentRead(() => {
    window.firstBird = new Bird();
    window.firstBird.bind();
});