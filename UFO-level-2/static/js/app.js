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
var form = d3.select("#form");

form.on('submit', runEnter);
button.on('click', runEnter);

function runEnter() {
    d3.event.preventDefault();
    var inputDate = d3.select('#datetime').property('value');
    var inputCity = d3.select('#city').property('value');
    var inputState = d3.select('#state').property('value');
    var inputCountry = d3.select('#country').property('value');
    var inputShape = d3.select('#shape').property('value');
    // console.log(inputDate);
    // console.log(inputCity);
    // console.log(inputState);
    // console.log(inputCountry);
    // console.log(inputShape);

    let target = data;
    if (inputDate !== '') {
        target = target.filter(sighting =>sighting.datetime === inputDate);
    };

    if (inputCity !== '') {
        target = target.filter(sighting =>sighting.city === inputCity);
    };

    if (inputState !== '') {
        target = target.filter(sighting =>sighting.state === inputState);
    };

    if (inputCountry !== '') {
        target = target.filter(sighting =>sighting.country === inputCountry);
    };

    if (inputShape !== '') {
        target = target.filter(sighting =>sighting.shape === inputShape);
    };

    // console.log("This is target", target);


    tbody.html("");
    target.forEach((sighting) => {
        var row = tbody.append('tr');
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append('td');
            cell.text(value);
        });
    });
};

var cities = [];
var states = [];
var countries = [];
var shapes = [];

data.forEach((sighting) => {
    if (cities.includes(sighting.city)) {
        ;
    } else {
        cities.push(sighting.city);
    };

    if (states.includes(sighting.state)) {
        ;
    } else {
        states.push(sighting.state );
    };

    if (countries.includes(sighting.country)) {
        ;
    } else {
        countries.push(sighting.country);
    };

    if (shapes.includes(sighting.shape)) {
        ;
    } else {
        shapes.push(sighting.shape);
    };
});


cities.sort();
states.sort();
countries.sort();
shapes.sort();

// console.log(cities);
// console.log(states);
// console.log(countries);
// console.log(shapes);


let countryDropdown = d3.select('#country');
for (i=0; i < countries.length; i++){
     let option = countryDropdown.append('option');
     option.attr('value', countries[i]);
     option.text(countries[i]);
}


let stateDropdown = d3.select('#state');
for (i=0; i < states.length; i++){
     let option = stateDropdown.append('option');
     option.attr('value', states[i]);
     option.text(states[i]);
}

let shapeDropdown = d3.select('#shape');
for (i=0; i < shapes.length; i++){
     let option = shapeDropdown.append('option');
     option.attr('value', shapes[i]);
     option.text(shapes[i]);
}









