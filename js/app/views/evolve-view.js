import { externals as evolve_view } from "../controllers/evolveController.js";

export const externals = {};

externals.render = function (boolean) {
  $("#test").empty();
  $("#app").empty();

  // Create the image element
  let imageElement = $("<img id='yourImageId' />").attr("src", "img/bulbasaur.gif"); // Set initial image source
  imageElement.appendTo("#test");

  // Function to rapidly alternate between two images
  function alternateImages(imageElement, alternateImagePath, rapidInterval, maxAlternations) {
    let alternations = 0;

    function toggleImage() {
      // Toggle between the original image and the provided alternate image
      imageElement.attr("src", imageElement.attr("src") === imageElement.data("originalSrc") ? alternateImagePath : imageElement.data("originalSrc"));

      alternations++;

      // If the maximum number of alternations is reached, stop toggling
      if (alternations < maxAlternations) {
        setTimeout(toggleImage, rapidInterval);
      }
    }

    // Save the original image source for toggling back
    imageElement.data("originalSrc", imageElement.attr("src"));

    // Start the rapid alternating process
    toggleImage();
  }

  // Example usage
  const initialImagePath = "img/bulbasaur.gif"; // Set the path for the initial image
  const alternateImagePath = "img/ivysaur.gif"; // Set the path for the alternate image
  const rapidInterval = 100; // Rapid alternation interval in milliseconds
  const maxAlternations = 33; // Maximum number of alternations MAKE IT ALWAYS ODD TO GET THE LVLD UP VERSION

  // Set the initial image path
  imageElement.attr("src", initialImagePath);

  // Start rapidly alternating between images for a maximum of 100 alternations
  alternateImages(imageElement, alternateImagePath, rapidInterval, maxAlternations);

  // Set a timeout to wait for the animation to complete
  setTimeout(function () {
    window.location.hash = "#start";
  }, rapidInterval * maxAlternations + 2500); // Adjust the timeout duration as needed
};
