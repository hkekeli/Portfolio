const   container = document.querySelector('.container'),
        lantern = document.querySelector('.round');



    let initial_maker;
    let created = 0;
    let max_lanterns = 25;
    let spawn_rate = 20 / 3;
    let spawn_every = 750;


    function randomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    function genLanternProps() {
        let x = randomInt(50, window.innerWidth - 100);
        let y = -100;
        let speed = Math.random() / 100;
        speed = Math.min(speed, 0.015 * (max_lanterns/60));
        speed = Math.max(speed, 0.01 * (max_lanterns/60));
        return {x, y, speed};
    }

    function animateLantern(lantern, index) {
        const id = setInterval(frame, 6);
        let final = window.innerHeight + 100;

        let {x, y, speed} = genLanternProps();


        lantern.style.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16);

        lantern.style.left = x + 'px';
        lantern.style.bottom =  y + 'px';
        function frame() {
            if (y >= final) {
                let props = genLanternProps();
                x = props.x;
                speed = props.speed;
                y = props.y;
                console.log(`Restarted ${index} with ${speed} speed`);
            }
            else {
                y = y + speed;
                lantern.style.bottom = y + 'px';
                // lantern.style.transform = `translateY(-${y}px)`;
                window.requestAnimationFrame(frame);
            }
        }
    }



    function initial(){
        if(created > max_lanterns - 1) {
            clearInterval(initial_maker);
            return;
        }

        let spawn_limit = Math.min(max_lanterns, created+spawn_rate);
        for(let i = created; i < spawn_limit; i++){
            created++;
            let cloned = lantern.cloneNode(true);
            container.appendChild(cloned)
            animateLantern(cloned, created);
        }

        console.log(`Created lantern #${created}`);
    }


    document.addEventListener('DOMContentLoaded',function(event) {
        initial();

        initial_maker = setInterval(function(){
          initial();
        }, spawn_every);
    });

