
var request = new XMLHttpRequest();

request.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")

request.send();


request.onload = function () {
    var result = JSON.parse(request.response);
    //1] Get all the countries from the Asia continent /region using the Filter function
    let asianCountries = result.filter((data) => data.region === "Asia").map((data) => `Name: ${data.name}`)
    console.log(asianCountries)

    //2] Get all the countries with a population of less than 2 lakhs using Filter function
    let population = result.filter((data) => data.population < 200000).map((data) => `Population: ${data.population}`)
    console.log(population)

    //3] Print the following details name, capital, flag using forEach function
    let name = []
    let capital = []
    let flag = []
    result.forEach((result) => {
        name.push(`Name: ${result.name}`)
        capital.push(`Capital: ${result.capital}`)
        flag.push(`Flag: ${result.flag}`)
    })
    console.log(name)
    console.log(capital)
    console.log(flag)
    //4] Print the total population of countries using reduce function
    let allPopulation = result.map((data) => data.population).reduce(function (a, b) { return a + b }, 0)
    
    console.log(allPopulation)
   
   
    //5] Print the country which uses US Dollars as currency.
    let countries = result.currencies.filter(function (currencies) { if (currencies.code === "USD"){ return result.name}})
console.log(countries)

}
