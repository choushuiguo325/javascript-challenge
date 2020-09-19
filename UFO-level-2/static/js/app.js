// from data.js
var tableData = data;

// YOUR CODE HERE!

// create table body 
var tbody = d3.select("tbody");
// use a loop to append each value in the dictionary list to each row
data.forEach((sighting) => {
    var row = tbody.append('tr');
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append('td');
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");
// console.log(button.text());
// console.log("test");
var form = d3.select("#form");

form.on('submit', runEnter);
button.on('click', runEnter);

function runEnter() {
    d3.event.preventDefault();
    var inputField = d3.select('#datetime');
    var inputValue = inputField.property('value');
    console.log(inputValue);

    var target = data.filter(sighting => sighting.datetime === inputValue);
    console.log(target);

    tbody.html("");
    target.forEach((sighting) => {
        var row = tbody.append('tr');
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append('td');
            cell.text(value);
        });
    });

};

