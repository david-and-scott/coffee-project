"use strict";

function renderCoffee(coffee) {
    let html = '<div class="col-6">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<span class="coffeeName">' + coffee.name + '</span>';
    html += '<span class="roastType text-muted">' + coffee.roast + '</span>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for(let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); /*don't submit the form, we just want to update the data*/
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];

    if (selectedRoast === "all") {
        for (let i = 0; i < coffees.length; i++) {
            filteredCoffees.push(coffees[i]);
        }
    }
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    coffeeList.innerHTML = renderCoffees(filteredCoffees);
}

function searchFilter(userInput) {
    userInput.preventDefault();
    let userQuery = '';
    let filteredQuery = [];

    for (let i = 0; i < searchBar.value.length; i++) {
        userQuery += searchBar.value[i].toUpperCase();
    }

    coffees.forEach(function (coffee) {

        if (coffee.name.toUpperCase() === userQuery) {
            filteredQuery.push(coffee);
        }
    });
    coffeeList.innerHTML = renderCoffees(filteredQuery);
}
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var coffeeList = document.querySelector('#coffees');
var searchBar = document.querySelector('#search1');
var roastSelection = document.querySelector('#roast-selection1');

coffeeList.innerHTML = renderCoffees(coffees);
roastSelection.addEventListener('change', updateCoffees);
searchBar.addEventListener('input', searchFilter);
// searchBar.addEventListener('change', updateCoffees);
