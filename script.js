function A11yChromatic(chromaticClass) {
  try {
    // Get everything that has the chromatics class.
    var chromatics = document.getElementsByClassName(chromaticClass);
    // Loop through everything that has the chromatic class.
    for (var i = 0, len = chromatics.length; i < len; i++) {
      // Set the current array item to a variable.
      var currChromatic = chromatics[i];
      // Duplicate the element of the current array item (before we add stuff to it below).
      var dupeChromatic = currChromatic.cloneNode(true);
      // Get the text content of the current array element.
      currChromaticText = currChromatic.textContent;
      // Now create the data-copy attribute we use for the CSS.
      currChromatic.setAttribute('data-copy', currChromaticText);
      // Add aria-hidden to the original node.
      currChromatic.setAttribute('aria-hidden', 'true');
      // Remove the class from the duplicated node.
      dupeChromatic.className = '';
      // Create a .
      var chromaticGen = document.createElement("span");
      // Put the  immediately after the current array item, as a sibling not a child, then add the duplicated node as its child.
      currChromatic.parentNode.insertBefore(chromaticGen, currChromatic.nextSibling).appendChild(dupeChromatic);
    }
  } catch (e) {
    console.log(e);
  }
}

A11yChromatic('chromatic');