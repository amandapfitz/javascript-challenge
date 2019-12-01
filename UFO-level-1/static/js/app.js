// from data.js
// Get a reference to the table body
var tableData = data;
var tbody = d3.select("tbody");
var filterData = data;

// Check that the data using console.log
console.log(tableData);

// Start adding data to the table
// sighting values (datetime, city, state, country, shape, duration, comments)
tableData.forEach(function(sighting) {
    console.log(sighting);
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]) {
      console.log(key, value);
  //     // Append a cell to the row for each value
  //     // in the sighting object
      var cell = row.append("td");
      cell.text(value);
    });
  });

  // Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(sightings => sightings.datetime === inputValue);

  console.log(filteredData);
  
  
  // Delete original table items to show only filtered table items
  // Use the length of the original table to limit the number of rows deleted
  for (var j = 0; j < tableData.length; j++) {
  let table = document.querySelector('table');

  // Delete second row so that the header remains
  table.deleteRow(1);
  };

  // Filter the table based on the user input
  filteredData.forEach(function(ufo) {
    console.log(ufo);
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(function([key, value]) {
      console.log(key, value);
       // Append a cell to the row for each value
       // in the sightings report object
      var cell = row.append("td");
      cell.text(value);
    });
    });

});

