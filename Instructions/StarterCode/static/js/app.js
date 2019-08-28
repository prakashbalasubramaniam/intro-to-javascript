// Get a reference to the table body
var ttable = d3.select("#ufo-table");

// Select the "Filter Table" button
var button = d3.select("#filter-btn");

// Declare global variables
var inputValue ="", tableData = data, mycounter_i=0;

// Declare the filter input IDs
var filterInputID = ["#datetime_input", "#city_input", "#state_input", "#country_input", "#shape_input"];

// function to load table the 1st time
function init_tbl(temp_table) {
    for (mycounter_i = 0; mycounter_i < temp_table.length; mycounter_i++) { 
        var row = ttable.append("tr");        
        Object.entries(temp_table[mycounter_i]).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    };
}

// Create a datetime filtering function
function datefilter_func(datetime_filter) {
      return datetime_filter.datetime === inputValue;    
}

// Create a city filtering function
function cityfilter_func(city_filter) {
    return city_filter.city === inputValue;    
}

// Create a state filtering function
function statefilter_func(state_filter) {
    return state_filter.state === inputValue;    
}

// Create a country filtering function
function countryfilter_func(country_filter) {
    return country_filter.country === inputValue;    
}

// Create a shape filtering function
function shapefilter_func(shape_filter) {
    return shape_filter.shape === inputValue;    
}

// Main filter handler
button.on("click", function() {
    inputValue_array = [];

    // reload filter result with table data each time button activated
    var filter_result = tableData;

    // Get user filter inputs and filter the result accordingly
    for (mycounter_i = 0; mycounter_i < filterInputID.length; mycounter_i++) { 
        // Select the input element and get the raw HTML node
        var inputElement = d3.select(filterInputID[mycounter_i]);
    
        // Get the value property of the input element
        inputValue = inputElement.property("value");

        // filter by input calling individual filter function        
        if (mycounter_i == 0 && inputValue != ""){
            filter_result = filter_result.filter(datefilter_func);
        } else if (mycounter_i == 1 && inputValue != ""){
            filter_result = filter_result.filter(cityfilter_func);
        } else if (mycounter_i == 2 && inputValue != ""){
            filter_result = filter_result.filter(statefilter_func);
        } else if (mycounter_i == 3 && inputValue != ""){
            filter_result = filter_result.filter(countryfilter_func);
        } else if (mycounter_i == 4 && inputValue != ""){
            filter_result = filter_result.filter(shapefilter_func);
        } else {
            // Do nothing
        }
    }
    // remove old tbody info to display new filtered info
    var mytable = d3.select("body").selectAll("td").remove();
    for (mycounter_i = 0; mycounter_i < filter_result.length; mycounter_i++) { 
        // display new filtered info in tbody
        var row = ttable.append("tr");                
        Object.entries(filter_result[mycounter_i]).forEach(([key, value]) => {            
            var cell = row.append("td");
            cell.text(value);            
        });
    };    
}); 

// initialize html page with table the 1st time webpage loads
init_tbl(tableData);
