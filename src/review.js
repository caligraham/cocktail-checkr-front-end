const newReview = document.querySelector("#new-review")
const reviewForm = document.querySelector('#review-form')

class Review {
    constructor({id, title, content, rating}){
        this.title = title
        this.content = content
        this.rating = rating

        this.element = document.createElement("div")
        this.element.id = `review-${id}`
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

    static createReview(e){
        e.preventDefault()
        let title = document.querySelector("#title").value
        let content = document.querySelector("#content").value
        let rating = document.querySelector("#rating").value
    }
    static listenForEvents(){
        newReview.addEventListener('click', this.showForm)
        reviewForm.addEventListener('submit', (e) => Review.createReview(e))
    }

    static showForm(){
        newReview.style.display="none"
        reviewForm.style.display=""
        
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