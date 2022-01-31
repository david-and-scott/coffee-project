"use strict"

function renderCoffee(coffeeName,coffeeRoast) {
    var html = '';
    var roastDef = '<div class="col-6">';
    var roastTitleDef = '<span class="roast-title">';
    var roastSubtitleDef = '<span class="roast-subtitle ml-1 text-muted">';

    html += roastDef + roastTitleDef + coffeeName + '</span>';
    html += roastSubtitleDef + coffeeRoast + '</span></div>';

    // html += '<td>' + coffee.id + '</td>';
    // html += '<td>' + coffee.name + '</td>';
    // html += '<td>' + coffee.roast + '</td>';
    // html += '</tr>';
    //
    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i].name,coffees[i].roast);
    }
    return html;
}

function updateCoffees() {
    //e.preventDefault(); // don't submit the form, we just want to update the data
    //var selectedRoast = roastSelected;
    var filteredCoffees = [];
    var roastSelected = roastSelection.value;
    if (roastSelected === "all") {
        for (let i = 0; i < coffees.length; i++) {
            filteredCoffees.push(coffees[i]);
        }
    }
    // coffees.forEach(function(coffee) {
    for (let i = 0; i < coffees.length; i++) {
        if (coffees[i].roast === roastSelected) {
            console.log(coffees[i].name + ": " + coffees[i].roast);
            filteredCoffees.push(coffees[i]);
        }
    }
    // roastResults.innerHTML = showMeTheFilter(filteredCoffees);
    return renderCoffees(filteredCoffees);
}

function showMeTheFilter(typeInput) {
    var filteredList = [];
    coffees.forEach(function (coffee) {
        if (coffee.roast === typeInput) {
            filteredList.push(coffee.name)
        }
    })
    console.log(filteredList);
    return filteredList;
}

function searchFilter(stringInput) {
    var filteredCoffees = []
    coffees.forEach(function (coffee) {
        if (coffee.name.includes(stringInput)) {
            filteredCoffees.push(coffee);
        }
    });
    roastResults.innerHTML = renderCoffees(filteredCoffees);
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

//var tbody = document.querySelector('#coffees');
//var submitButton = document.querySelector('#submit');

var roastSelection = document.querySelector('#roast-selection1');

//
var searchByName = document.querySelector('#search1');
var searchString = searchByName.value;
//
var roastResults = document.querySelector('#roast-results');
roastResults.innerHTML = updateCoffees('all');
//
var magicButton = document.querySelector('#roast-me');
//
//
//EventListeners
roastSelection.addEventListener('change',function (){roastResults.innerHTML = updateCoffees()});
searchByName.addEventListener('keydown', searchFilter);
magicButton.addEventListener('click',function (){roastResults.innerHTML = updateCoffees()}));

console.log(updateCoffees('all'));
// document.getElementById("roast-results").innerHTML = updateCoffees('all');
// updateCoffees('medium');