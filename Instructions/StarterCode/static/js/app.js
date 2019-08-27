// from data.js
var tableData = data;

// Get a reference to the table body
var ttable = d3.select("#ufo-table");

// Select the "Filter Table" button
var button = d3.select("#filter-btn");

// Declare global variable for textbox input
var inputValue;

// Declare a global filter inputs array
var inputValue_array = [];

// Declare the filter input IDs
var filterInputID = ["#datetime_input", "#city_input", "#state_input", "#country_input", "#shape_input"];



// Declare global variable counter
var mycounter_i=0;
var mycounter_j=0;

// Load data into table, ufo_reporting_data is placeholder for data object from data.js
//tableData.forEach((
    
    
function init_tbl(temp_table) {
    for (mycounter_i = 0; mycounter_i < temp_table.length; mycounter_i++) { 
        var row = ttable.append("tr");        
        Object.entries(temp_table[mycounter_i]).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    };
}

function update_tbl(temp_table) {
    var mytable = d3.select("#mybody");
    mytable.html("");
    for (mycounter_i = 0; mycounter_i < temp_table.length; mycounter_i++) { 
        var row = ttable.append("tr");        
        Object.entries(temp_table[mycounter_i]).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    };
}

//["#datetime_input", "#city_input", "#state_input", "#country_input", "#shape_input"]
// Create a datetime filtering function
function datefilter_func(datetime_filter) {
      return datetime_filter.datetime === inputValue_array[0];    
}

// Create a city filtering function
function cityfilter_func(city_filter) {
    return city_filter.city === inputValue_array[1];    
}

// Create a state filtering function
function statefilter_func(state_filter) {
    return state_filter.state === inputValue_array[2];    
}

// Create a country filtering function
function countryfilter_func(country_filter) {
    return country_filter.country === inputValue_array[3];    
}

// Create a shape filtering function
function shapefilter_func(shape_filter) {
    return shape_filter.shape === inputValue_array[4];    
}

function clr_tbl(temp_table) {
//    var table = d3.select('#mybody').append('table');
    var mytable = d3.select("#mybody");
//    mytable.html("");
    //var test = mytable.selectAll("tr");
    mytable.html("");
//    var tr = table.selectAll('tr')
//    .data(temp_table).enter()
//    .append('tr');
//    for (mycounter_i = 0; mycounter_i < tableData.length; mycounter_i++) { 
//        mytable.d3.selectAll("tr").remove;

//        tbody.remove("tr");       
//        Object.entries(temp_table[mycounter_i]).forEach(([key, value]) => {
//            var cell = row.append("td");
//            cell.text("");
//        });
//    };
}

// DateTime filter handler
button.on("click", function() {
    inputValue_array = [];

    // temp filter result
    var filter_result = tableData;

    // Get user filter inputs
    for (mycounter_j = 0; mycounter_j < filterInputID.length; mycounter_j++) { 
        // Select the input element and get the raw HTML node
        var inputElement = d3.select(filterInputID[mycounter_j]);
    
        // Get the value property of the input element
        inputValue = inputElement.property("value");

        // save filter inputs into an array
        inputValue_array.push(inputValue);

        // filter() uses the custom function as its argument
        //["#datetime_input", "#city_input", "#state_input", "#country_input", "#shape_input"];
        if (mycounter_j == 0 && inputValue != ""){
            filter_result = filter_result.filter(datefilter_func);
        } else if (mycounter_j == 1 && inputValue != ""){
            filter_result = filter_result.filter(cityfilter_func);
        } else if (mycounter_j == 2 && inputValue != ""){
            filter_result = filter_result.filter(statefilter_func);
        } else if (mycounter_j == 3 && inputValue != ""){
            filter_result = filter_result.filter(countryfilter_func);
        } else if (mycounter_j == 4 && inputValue != ""){
            filter_result = filter_result.filter(shapefilter_func);
        } else {
            //filter_result = [];
        }

        

    }

    // Select the input element and get the raw HTML node
    //var inputElement = d3.select("#city_input");
    
    // Get the value property of the input element
    //inputCity = inputElement.property("value");
    
    // Display to console
    console.log(inputValue_array);
  
    // filter() uses the custom function as its argument
    //var filter_result = tableData.filter(datefilter_func);
  
    // Display filtered result to console
    console.log(filter_result);

    // initialize html page with table
    //clr_tbl(filter_result);  
    //reload_tbl([]);  
    //update_tbl(filter_result);
    var mytable = d3.select("body").selectAll("td").remove();
    //mytable.selectAll("td").remove();
    //var mytable = d3.select("tbody").append("ttable");
    //mytable.html("");
    // Get a reference to the table body
    //var ttable_local = d3.select("#ufo-table");
    //ttable.html("");
    for (mycounter_i = 0; mycounter_i < filter_result.length; mycounter_i++) { 
        //mytable.html("");
        var row = ttable.append("tr");                
        Object.entries(filter_result[mycounter_i]).forEach(([key, value]) => {            
            var cell = row.append("td");
            cell.text(value);            
        });
    };
    
}); 

// initialize html page with table
init_tbl(tableData);
//reload_tbl([]);
//ttable.html("");
//clr_tbl();