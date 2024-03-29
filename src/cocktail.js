const baseURL = "http://localhost:3000/"
const cocktailsList = document.getElementById("cocktails-list")
const cocktailShow = document.getElementById("cocktail-show")
let currentCocktail;

class Cocktail {
    static all = []
    constructor({id, name, image_url}){
        this.id = id
        this.name = name
        this.image_url = image_url
        Cocktail.all.push(this)
    }

    //'this' is the instance here!

    // Creating new cocktail object

    static fetchCocktails(){
        console.log("A")
        fetch(baseURL + "cocktails")
        .then(res => res.json())
        .then(cocktailData => { 
            cocktailData.forEach(cocktail => {
                console.log('B')
                let c = new Cocktail(cocktail)
                c.addToDom()
                
            })
        })
        console.log("c")
    }

    // retrieving cocktail information from back-end

    handleClick(e){
        Review.all = []
        cocktailsList.style.display ="none"
        cocktailShow.style.display=""
        this.addToShow()
        let cocktailId = parseInt(e.target.id.split("-")[1])
        
        Review.fetchReviews(cocktailId)
        
        // currentCocktail = {}
        currentCocktail = this
    }
    // hides the list & takes space away
    addToDom(){
        let image = document.createElement('img');
        image.src = this.image_url
        image.id = `cocktail-${this.id}`
        image.className = 'cocktail-size'
       cocktailsList.appendChild(image)
        image.addEventListener('click', (e) => this.handleClick(e))
    }

    // grabbing cocktail and adding only image to the DOM.

    addToShow(){
        let div = document.createElement('div');
        div.id = `cocktail-${this.id}`
        let title = document.createElement('h2');
        title.innerText = this.name
        let image = document.createElement('img');
        image.src = this.image_url
        image.id = `cocktail-${this.id}`
        image.className = 'cocktail-size'
        div.appendChild(title)
        div.appendChild(image)
        cocktailShow.prepend(div)
        let input = document.createElement('input')
        input.type="hidden"
        input.value= this.id
        input.id="cocktail_id"
        reviewForm.prepend(input)

    }

    
    
}


// static listenForEvents(){
//     newReview.addEventListener('click', this.showForm)
//     reviewForm.addEventListener('submit', (e) => Cocktail.createCocktail(e))
// }

// static showForm(){
//     newReview.style.display="none"
//     reviewForm.style.display=""
    

// }
