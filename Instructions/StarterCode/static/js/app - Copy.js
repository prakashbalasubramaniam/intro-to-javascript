// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("#ufo-table");

// Select the "Filter Table" button
var button = d3.select("#filter-btn");

var inputValue;

// Load data into table, ufo_reporting_data is placeholder for data object from data.js
data.forEach((ufo_reporting_data) => {
    var row = tbody.append("tr");
    Object.entries(ufo_reporting_data).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Create a custom filtering function
function datefilter_func(datetime_filter) {
    //var filter_datetemp = inputValue; 
    if (datetime_filter.datetime === inputValue) {
        return datetime_filter;
    } else {
        return 0;
    }     
}

// DateTime filter handler
button.on("click", function() {

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    
    // Get the value property of the input element
    inputValue = inputElement.property("value");
    
    console.log(inputValue);
  
    // filter() uses the custom function as its argument
    var filter_result = tableData.filter(datefilter_func);
  
    // Display filtered result to console
    console.log(filter_result);
}); 
