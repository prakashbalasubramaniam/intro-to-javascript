// from data.js
var tableData = data;

// Get a reference to the table body
var ttable = d3.select("#ufo-table");

// Select the "Filter Table" button
var button = d3.select("#filter-btn");

// Declare global variable for textbox input
var inputValue;

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
    for (mycounter_i = 0; mycounter_i < temp_table.length; mycounter_i++) { 
        var row = ttable.append("tr");        
        Object.entries(temp_table[mycounter_i]).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    };
}

// Create a custom filtering function
function datefilter_func(datetime_filter) {
    //var filter_datetemp = inputValue; 
    if (datetime_filter.datetime === inputValue) {
        return datetime_filter;
    } else {
        return 0;
    }     
}

function clr_tbl(temp_table) {
    var table = d3.select("body").append("table");
    var tbody = table.append("tbody");
    var rows = table.selectAll("tbody tr")
    var cells = rows.selectAll('td');
    cells.enter();
    cells.append("td")
    cells.text("");
    cells.exit().remove();
//    for (mycounter_i = 0; mycounter_i < temp_table.length; mycounter_i++) { 
        
//        tbody.remove("tr");       
//        Object.entries(temp_table[mycounter_i]).forEach(([key, value]) => {
//            var cell = row.append("td");
//            cell.text("");
//        });
//    };
}

// DateTime filter handler
button.on("click", function() {

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    
    // Get the value property of the input element
    inputValue = inputElement.property("value");
    
    // Display to console
    console.log(inputValue);
  
    // filter() uses the custom function as its argument
    var filter_result = tableData.filter(datefilter_func);
  
    // Display filtered result to console
    console.log(filter_result);

    // initialize html page with table
    clr_tbl(tableData);  
    //reload_tbl([]);  
//    update_tbl(filter_result);
}); 

// initialize html page with table
init_tbl(tableData);
//reload_tbl([]);