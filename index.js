function addCard(title = "Untitled", text = "Missing text") {
    // clone the template
    const template = document.getElementById("card-template").content.cloneNode(true);
    
    // populate the template
    template.querySelector('.card-title').innerText = title;
    template.querySelector('.card-text').innerText = text;
    
    // include the populated template into the page
    document.querySelector('#card-list').appendChild(template);
}

addCard("First Title", "Cool beans");
addCard("Second Title", "Cooler beans");
addCard("Third title", "Coolest beans");

const data = [
    {name: 'bob', age: 23},
    {name: 'alice', age: 39}
]

addCard(data[0].name, data[0].age)
addCard(data[1].name, data[1].age)
// addCard(data[2].name, data[2].age)

const artist = {
    name: "Van Gogh",
    portfolio: [
        {title: "portrait", url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image"},
        {title: "sky", url: "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg"}
    ]
}

// addCard(artist.name, artist.portfolio[title, url])

function loop(array){
    for (value in array){
        return array[value] + ": " + array.url
    }
    // return array.foreach(object => object.value)
}

console.log(loop(artist.portfolio))
addCard(artist.name, loop(artist.portfolio[1]))