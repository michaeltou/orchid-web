async function populate() {
    const requestURL =
        "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
    const request = new Request(requestURL);

    const response = await fetch(request);
    const superHeroesText = await response.text();

    const superHeroes = JSON.parse(superHeroesText);
    console.log(superHeroes)
}

// populate();

let myObj = {name:"chris",age:38}

console.log(myObj)

let myJsonStr = JSON.stringify(myObj);

console.log(myJsonStr)

let parseObj = JSON.parse(myJsonStr);
console.log(parseObj)
