var id = 1

function Cat(name, picture) {
    this.id = id
    this.name = name;
    this.picture = picture;
    this.status = ["Happy", "Bite-y"]
    this.petCount = 0

    id++
}
var catLady = {
    cats: []
}
var cat1 = new Cat('Mr. Snibbly', "http://cutecatsinhats.com/wp-content/uploads/2016/01/monocle-top-hat-cat.jpg")
var cat2 = new Cat("Snuffles", "http://orig14.deviantart.net/dd6f/f/2015/066/f/5/top_hat_cat_by_yelsa_girl-d3hdgrj.jpg")
var cat3 = new Cat("Mittens", "https://s-media-cache-ak0.pinimg.com/originals/ab/47/be/ab47bef8c61310308a32bcaeec6b3164.jpg")
catLady.cats.push(cat1, cat2, cat3)

function draw(cats) {
    debugger
    //draw all my cats to the screen in a given html format
    var template = ''
    for (var i = 0; i < cats.length; i++) {
        var cat = cats[i];
        //check number of pets, to determine status
        var statusIndex = 0
        if(cat.petCount > 5){
            statusIndex = 1
        }
        template += `
            <div class="cat">
                <img src="${cat.picture}" alt="">
                <h3>Name: ${cat.name}</h3>
                <p>Status: ${cat.status[statusIndex]}</p>
                <p>Number of Pets: ${cat.petCount}</p>
                <button type="button" onclick="pet(${cat.id})">Pet Me!</button>
                <button type="button" onclick="catnip(${cat.id})">Catnip</button>
            </div>
            `
    }
    document.getElementById("cats").innerHTML = template
}


function pet(catId){
    var catToPet = findCatById(catLady.cats, catId)
    catToPet.petCount++
    draw(catLady.cats)
}

function catnip(catId){
    var catToNip = findCatById(catLady.cats, catId)
    catToNip.petCount = 0
    draw(catLady.cats)
}
function findCatById(catArray, catId){
    for (var i = 0; i < catArray.length; i++) {
        var cat = catArray[i];
        if(catId === cat.id){
            return cat
        }
    }
    console.error("No such cat")
}

draw(catLady.cats)