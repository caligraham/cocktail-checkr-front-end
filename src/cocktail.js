const baseURL = "http://localhost:3000/"
const cocktailsList = document.getElementById("cocktails-list")

class Cocktail {
    static all = []
    constructor({id, name, image_url}){
        this.id = id
        this.name = name
        this.image_url = image_url

        Cocktail.all.push(this)
    }

    static fetchCocktails(){
        fetch(baseURL + "cocktails")
        .then(res => res.json())
        .then(cocktailData => { 
            cocktailData.forEach(cocktail => {
                let c = new Cocktail(cocktail)
                c.addToDom()
                
            })
        })
    }

    static handleClick(){
        
    }

    addToDom(){
        let image = document.createElement('img');
        image.src = this.image_url
        image.id = `cocktail-${this.id}`
        cocktailsList.appendChild(image)
        image.addEventListener('click', Cocktail.handleClick)
    }



}



