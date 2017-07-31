// IS THE CODE THAT TALKS TO THE VIEW

function CatController() {

  // PRIVATE PARTS
  var catService = new CatService()
  // var x = {favNum:7}

  function draw() {
    //draw all my cats to the screen in a given html format
    var cats = catService.getCats()
    var template = ''
    for (var i = 0; i < cats.length; i++) {
      var cat = cats[i];
      //check number of pets, to determine status
      var statusIndex = 0
      if (cat.petCount > 5) {
        statusIndex = 1
      }
      template += `
            <div class="cat">
                <img src="${cat.picture}" alt="">
                <h3>Name: ${cat.name}</h3>
                <p>Status: ${cat.status[statusIndex]}</p>
                <p>Number of Pets: ${cat.petCount}</p>
                <button type="button" onclick="app.controllers.catController.pet(${cat.id})">Pet Me!</button>
                <button type="button" onclick="app.controllers.catController.catnip(${cat.id})">Catnip</button>
            </div>
            `
    }
    document.getElementById("cats").innerHTML = template
  }

  // PUBLIC PARTS 
  // this.whatever = x
  this.pet = function pet(catId) {
    catService.petCat(catId)
    draw()
  }

  this.catnip = function catnip(catId) {
    catService.giveCatnip(catId)
    draw()
  }
  draw()
}

