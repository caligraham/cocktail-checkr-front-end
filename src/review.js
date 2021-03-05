class Review {
    constructor({title, content, rating}){
        this.title = title
        this.content = content
        this.rating = rating

        this.element = document.createElement("div")
        this.element.id = `reviews-${id}`
        this.reviewsList = document.querySelector("#reviews-list")


    }
    static fetchReviews(id){

        fetch(`http://localhost:3000/cocktails/${id}/reviews`)
        .then(res => res.json())
        .then(reviewData => {
            reviewData.forEach(review => {
                let r = new Review(review)
                r.addToDom()
            })
        })
        
    }
    addToDom(){
        this.reviewsList.appendChild(this.setElementHTML())
    }

    setElementHTML() {
        this.element.innerHTML = `
        <h1>${this.title} ${this.rating} </h1>
        <p>${this.content}</p>
        `
        return this.element
    }
}