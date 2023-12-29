import { externals as battle_view } from '../views/battle-view.js';
import { externals as gameController } from '../services/gameController.js';
import { externals as main } from '../main.js';


   export const externals = {};

    externals.start = function() {
        if(externals.life === 0){
            //$(".full-page").css({
            //    "filter": "blur(20px)"
           // });
           let final = "#final";
            $(final).css({
                "visibility" : "visible"
            });
            $("#answers").css({
                "pointer-events": "none"
            });
            let element = "<h1><p class = 'lostWon'>YOU LOST!<p></h1> <button onclick='redirectToReceiver()' class='index-button tryAgain'>TRY AGAIN!</button>" ;
            $(element).appendTo(final);
            $(".index-button").click( function() {
                window.localStorage.setItem('winner', "winner");
                window.location.href = 'index.html'});
            
        return;
        }
        if (externals.level === 3){
            main.randomPoke();
        }
        if(externals.level === 9){
            //$(".full-page").css({
            //    "filter": "blur(20px)"
           // });
           let final = "#final";
            $(final).css({
                "visibility" : "visible"
            });
            let element = "<h1><p class = 'lostWon'>YOU WON!<p></h1> <button onclick='redirectToReceiver()' class='index-button tryAgain wonButton'>COLLECT YOUR PIKACHU</button>" ;
            $(element).appendTo(final);
            $(".index-button").click( function() {
                window.sessionStorage.setItem('winner', "winner");
                window.location.href = 'index.html'});
            ;
        return;
        }
        if(externals.life > 0){
      //  battle_view.render();
        let test = gameController.getQuestion();
        battle_view.render(test);}
    };

    externals.life = 3;
    externals.level = 0;
