 import { externals as router } from './router.js'

 var internals = [{ pokemon: "clefairy"} , {pokemon : "dugtrio"} , {pokemon : "machop"}, {pokemon : "haunter"}, {pokemon : "magikarp"}, {pokemon : "meowth"}];
export let externals = {};

   $(document).ready(function() {
        console.log('DOM is mounted and ready');

        console.log('DOM is mounted and ready');
        let pokemon = ".pokemon-" + localStorage.getItem("pokemon");
        console.log(pokemon);
        let image = `<img id="enemyPokemon"src="resources/Bulbasour.gif"class="rounded float-end"alt="your enemy"/>`
        $(`${pokemon}`).css({"visibility" : "visible"});
        externals.randomPoke()
        router.start();
    });

    externals.randomPoke = function (){
      $(".enemy").empty();
      let valor = Math.floor(Math.random() * 6);
      let enemmy = internals[valor].pokemon;
      let test = `<img id="enemyPokemon" src="resources/${enemmy}.gif" class="rounded float-end" alt="your enemy" />`;
      $(test).appendTo('.enemy');
    }