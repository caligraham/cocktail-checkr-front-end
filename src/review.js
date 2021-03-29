const newReview = document.querySelector("#new-review")
const reviewForm = document.querySelector('#review-form')
const backButton = document.querySelector('#backbutton')
const inputSearch = () => document.querySelector("#search")
const sortedButton = () => document.querySelector("#sorted")


class Review {
    static all = []

    constructor({id, title, content, rating, cocktail_id}){
        this.title = title
        this.content = content
        this.rating = rating
        this.cocktail_id = cocktail_id
        this.element = document.createElement("div")
        this.element.id = `review-${id}`
        this.reviewsList = document.querySelector("#reviews-list")
    }

    save() {
        // not saving into DB, saving in array
        Review.all.push(this)
      }

      static fetchReviews(id){

        fetch(`http://localhost:3000/cocktails/${id}`)
        .then(res => res.json())
        .then(cocktailData => { Review.render(cocktailData.reviews)
        })
        
    }
  
    //static sorted()  {
      //  const sorted = Review.all.sort(function (a, b) {
        //    return b.title - a.title;
        //})
   // }

    static render(array){
        document.querySelector("#reviews-list").innerHTML = " "
        array.forEach(review => {
            let x = new Review(review)
            x.save()
            x.addToDom()
        })
    }

    static createReview(e){
        e.preventDefault()
        let title = document.querySelector("#title").value
        let content = document.querySelector("#content").value
        let rating = document.querySelector("#rating").value
        let cocktailId = document.getElementById("cocktail_id").value

        reviewForm.reset()

        let reviewObj = {
            title, content, rating
    }
    
    let config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(reviewObj)
    }

    fetch(`http://localhost:3000/cocktails/${cocktailId}/reviews`, config)
        .then(res => res.json())
        .then(res => {
            let r = new Review(res)
            r.save()
            r.addToDom()
            newReview.style.display=""
            reviewForm.style.display="none"

        })
    }

    static listenForEvents(){
        newReview.addEventListener('click', this.showForm)
        reviewForm.addEventListener('submit', (e) => Review.createReview(e))
    }

    static showForm(){
        newReview.style.display="none"
        reviewForm.style.display="block"
        
    }
    
    static listenForBackBtn() {
        backButton.addEventListener('click', this.goBack)
        
    }
    static goBack() {
        // const reviewDiv = document.getElementById("reviews-list")
       //  const cocktailShowDiv = document.getElementById("cocktail-show")
        // reviewDiv.innerHTML = ""
        // cocktailShowDiv.innerHTML = ""
        document.querySelector("#reviews-list").innerHTML = ""
        document.querySelector("#cocktail-show").style.display = "none"
        // document.querySelector("#cocktail-this")
        document.querySelector("#cocktails-list").style.display = "block"
        let showDiv = cocktailShow.querySelector("div")
        showDiv.remove()
       

    }

    addToDom(){
        this.reviewsList.appendChild(this.setElementHTML())
    }

    setElementHTML() {
        this.element.innerHTML = `
        <h1>${this.title} --- ${this.rating}⭐</h1>
        <p>${this.content}</p>
        `
        return this.element
    }

    static searchRender(array){
        document.querySelector("#reviews-list").innerHTML = " "
        array.forEach(review => {
            let x = new Review(review)
            x.addToDom()
        })
    }

    static listenForKeyUp() {
        inputSearch().addEventListener("change", this.inputFilter)
    }

    static inputFilter(e) {
        const text = e.target.value
        document.querySelector("#reviews-list").innerHTML = " "
        if(text === "all" ) {
            Review.searchRender(Review.all)
        }
        else{
        const filtered = Review.all.filter(review => review.rating === parseInt(text))
        Review.searchRender(filtered)
        }
    }

    static sortedReviews() {
        document.querySelector("#reviews-list").innerHTML = " "
        const sorted = Review.all.sort(function(a, b) {
            
            let nameA = a.title.toUpperCase(); // ignore upper and lowercase
            let nameB = b.title.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
        });
        Review.searchRender(sorted)

        }

        static listenForSortedBtn() {
            sortedButton().addEventListener('click', this.sortedReviews)
        }
    
}