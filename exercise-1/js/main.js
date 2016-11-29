// Main JavaScript File

// You'll have to wait for you page to load to assign events to the elements created in your index.html file
$(function() {

  // Select the element with id `sandbox` and append a `div` element to it. Make sure to store the div in a JavaScript varaible
    d3.select('#sandbox').append('div')
        .attr('id', 'newDiv');
  // Create a variable `mySvg` by appending an `svg` element to your newly created `div`
    d3.select('#newDiv').append('svg');
  // Set both the width and height attributes of your `svg` to 300 
    d3.select('svg')
        .attr('width', '300')
        .attr('height', '500');
  // Append a `circle` element to your `svg`, setting the properties noted in index.html
    d3.select('svg').append('circle');
    d3.select('circle')
        .attr('r', '30')
        .attr('cx', '75')
        .attr('cy', '30')
        .attr('style', 'opacity: 0.5; fill: blue');
    
  // Append a `rect` element to your `svg`, setting the properties noted in index.html
    d3.select('svg').append('rect')
        .attr('id', 'rect1')
        .attr('x', '70')
        .attr('y', '60')
        .attr('width', '10')
        .attr('height', '250')
        .attr('style', 'opacity: 0.5; fill: orange');
    
    // making grass lmao
    d3.select('svg').append('rect')
        .attr('id', 'getrect')
        .attr('x', '0')
        .attr('y', '310')
        .attr('width', '250')
        .attr('height', '10')
        .attr('style', 'fill: green; opacity: 0.5');
    
    
});
