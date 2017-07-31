// THE CODE THAT MAINTAINS DATA INTEGRITY

function CatService() {

  // PRIVATE PARTS
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

  // DATA HELPER
  function findCatById(catId) {
    var catArray = catLady.cats
    for (var i = 0; i < catArray.length; i++) {
      var cat = catArray[i];
      if (catId === cat.id) {
        return cat
      }
    }
    console.error("No such cat")
  }

  // PUBLIC PARTS 

  this.petCat = function petCat(catId){
    var cat = findCatById(catId)
    if(cat){
      cat.petCount++
    }
  }

  this.giveCatnip = function giveCatnip(catId){
    var cat = findCatById(catId)
    if(cat){
      cat.petCount = 0
    }
  }

  this.getCats = function getCats(){
    var catLadyCopy = JSON.parse(JSON.stringify(catLady))
    return catLadyCopy.cats
  }

}
