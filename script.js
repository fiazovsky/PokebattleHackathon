$(document).ready(function () {
    const song = new Audio('resources/Song1.mp3');
    const songButton = document.querySelector('.musicBtn');


    songButton.addEventListener('click', () => {
        if (song.paused) {
            song.loop = true;
            song.play();
            songButton.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            song.pause();
            songButton.innerHTML = '<i class="fas fa-play"></i>';
        }

    });

    let test = function () {
        let sup = sessionStorage.getItem("winner")
        console.log(sup);
        if(sup === "winner"){
            $(".pokemon-walk").css({"visibility" : "visible"});
        }
    };

    $("#bulbasaur").on("click", function () {
        test();
        $(".choose-pokemon").remove();
        $(".full-page").css({
            "filter": "none",
            "pointer-events": "all"
        });
        $(".pokemon-bulbasaur").css({ "visibility": "visible" });
        localStorage.setItem('pokemon', "bulbasaur");
    })

    $(".charmander").on("click", function () {
        test();
        $(".choose-pokemon").remove();
        $(".full-page").css({
            "filter": "none",
            "pointer-events": "all"
        });
        $(".pokemon-charmander").css({ "visibility": "visible" });
        localStorage.setItem('pokemon', "charmander");
    })
    $(".squirtle").on("click", function () {
        test();
        $(".choose-pokemon").remove();
        $(".full-page").css({
            "filter": "none",
            "pointer-events": "all"
        });
        $(".pokemon-squirtle").css({ "visibility": "visible" });
        localStorage.setItem('pokemon', "squirtle");
    })

    const pikachu = document.querySelector('.pokemon-walk');
    const screenWidth = window.innerWidth;
    const divWidth = 170;
    const speed = 10; // Adjust the speed as needed

    function moveAndFlip() {
        let currentPosition = 170;
        let direction = 1; // 1 for right, -1 for left

        function animate() {
            currentPosition += speed * direction;

            if (currentPosition > screenWidth - divWidth) {
                currentPosition = screenWidth - divWidth;
                direction = -1;
                flipDiv();
              } else if (currentPosition < 0) {
                currentPosition = 0;
                direction = 1;
                flipDiv();
              }

            pikachu.style.left = currentPosition + 'px';
            requestAnimationFrame(animate);
        }

        function flipDiv() {
            const scale = direction === -1 ? -1 : 1;
            pikachu.style.transform = 'scaleX(' + scale + ')';
        }

        animate();
    }

    moveAndFlip();

})
