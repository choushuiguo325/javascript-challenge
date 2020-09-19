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
    console.log(inputDate);
    console.log(inputCity);
    console.log(inputState);
    console.log(inputCountry);
    console.log(inputShape);

    var target = data.filter(sighting => sighting.datetime === inputDate 
        && sighting.country === inputCountry 
        && sighting.city === inputCity 
        && sighting.state === inputState
        && sighting.shape === inputShape );
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

console.log(cities);
console.log(states);
console.log(countries);
console.log(shapes);





// var formGroup = d3.select(".form-group");

// filtration = {"city":cities, "state":states, "country": countries, "shape": shapes};
// Object.entries(filtration).forEach(([key, value]) => {
//     var conditionGroup = formGroup.append('div');
//     conditionGroup.attr('class', 'btn-group');
//     conditionGroup.append(`<button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">find a ${key}</button>`);
//     conditionGroup.append(`<label for="date">Enter a Date</label>`);
//     var dropdownManu = conditionGroup.append('div');
//     dropdownManu.attr('class', 'dropdown-menu');
//     value.forEach(elt => {
//         dropdownManu.append(`<a class="dropdown-item" href="#">${elt}</a>`);
//     });

// });

