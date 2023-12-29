import { externals as evolve_view } from "../views/evolve-view.js";
//import { externals as gameController } from '../services/gameController.js';

export const externals = {};

externals.start = function () {
  $("#test").empty();
  $("#app").empty();
  evolve_view.render(true);

  //setTimeout(evolve_view.render(true), 500)
};
