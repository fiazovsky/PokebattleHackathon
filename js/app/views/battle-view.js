
    import { externals as startController } from '../controllers/startController.js';
    import { externals as gameController } from '../services/gameController.js';
    
    var internals = {
        handlers: {},
        elements: {}
    };

    let health = document.getElementById("myHealth");
    let enemyHP = document.getElementById("enemyHealth");

    const selectedPokemon = localStorage.getItem('pokemon');
    
    export const externals = {};
    
    internals.renderQuestion = function(question) {
        $("#answers").css({
            "pointer-events": "all"
        });
        if (internals.elements.question) {
            internals.elements.question.empty();
            $("#answers").empty();
            $("#questions").empty();
        }
        console.log(question);
        internals.elements.question = $(internals.createQuestion(question));
        internals.elements.app.append(internals.elements.question);
    };
    internals.shuffleArray = function(question) {
        for (let i = question.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [question[i], question[j]] = [question[j], question[i]];
        }
        return question;
    }
    
    
    internals.createQuestion = function(question) {
        console.log(question.a);
        let correct = question.anwser[0]; 
        let random = internals.shuffleArray(question.anwser);

        let element = `<h1>${question.question}</h1>`;
        $(element).appendTo("#questions");
        let anwser = "";
        random.forEach(result => {
            if(result === correct){
                anwser += `<button class="correct button-53"`;
            }
            else {
                anwser += `<button class="incorrect button-53"`;
            }
            anwser += `>${result}</button>`
        });
        $(anwser).appendTo("#answers");
    };
    
    internals.renderButtons = function(){
        $(".correct").click( internals.rightAnswer);
        $(".incorrect").click( internals.wrongAnswer);
    }
    
    internals.rightAnswer = function(answer) {
        console.log(answer);
        $('.correct').css('background-color', '#42BD72');
        startController.level = startController.level + 1;
        // Wiggle the selected Pokemon when the right answer is chosen
        switch (selectedPokemon) {
            case 'bulbasaur':
                wigglePokemon('.pokemon-bulbasaur');
                break;
            case 'charmander':
                wigglePokemon('.pokemon-charmander');
                break;
            case 'squirtle':
                wigglePokemon('.pokemon-squirtle');
                break;
            // Add more cases if you have more Pokemon
        }
        $(".enemy").children().each(function() {
            takeDmg($(this));
        });

        enemyHP.value -= 34;
        $("#answers").css({
            "pointer-events": "none"
        });
        
  

        if(enemyHP.value <= 0){
        
            setTimeout(() => {enemyHP.value = 100;}, 1000); 
        }

              setTimeout(() => {
            startController.start();
        }, 1000);
    }
    
    
    internals.wrongAnswer = function(anwser){
        console.log(anwser);
        $('.incorrect').css('background-color', '#E36D42');
        $('.correct').css('background-color', '#42BD72');
        startController.life = startController.life-1;
        $(".enemy").children().each(function() {
            wigglePokemonReversed($(this));
        });
        switch (selectedPokemon) {
            case 'bulbasaur':
                takeDmg('.pokemon-bulbasaur');
                break;
            case 'charmander':
                takeDmg('.pokemon-charmander');
                break;
            case 'squirtle':
                takeDmg('.pokemon-squirtle');
                break;
            // Add more cases if you have more Pokemon
        }
        health.value -= 34;
        $("#answers").css({
            "pointer-events": "none"
        });
        setTimeout(() => {
            startController.start();
        }, 1000);
    }
    
    internals.renderButton = function() {
        if (internals.elements.button) {
           return;
        }
    
    };
    
    internals.check;
    
    externals.bind = function(event, handler) {
        internals.handlers[event] = handler;
    };
    
    externals.render = function(question) {
        internals.elements.app = $('#app');
        internals.renderButton();
    
        if (question) {
            internals.renderQuestion(question);
            internals.renderButtons();
        }
    };
    
    function wigglePokemon(pokemonSelector) {
        $(pokemonSelector).addClass('wiggle-animation')
    
        // Remove the 'wiggle-animation' class after the animation duration
        setTimeout(() => {
            $(pokemonSelector).removeClass('wiggle-animation');
        }, 800); // Adjust the duration as needed
    }

    function wigglePokemonReversed(pokemonSelector) {
        $(pokemonSelector).addClass('wiggle-animation-reversed')
        // Remove the 'wiggle-animation' class after the animation duration
        setTimeout(() => {
            $(pokemonSelector).removeClass('wiggle-animation-reversed');
        }, 800); // Adjust the duration as needed
    }
    function takeDmg(arg){
        $(arg).addClass("takeDMG-animation")
        setTimeout(() => {
            $(arg).removeClass('takeDMG-animation');
        }, 800); // Adjust the duration as needed
    }
    