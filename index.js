// load the page & fetch data

const baseUrl = "http://localhost:3000/"
const cocktailsList = document.querySelector("#cocktails-list")


    fetch(baseUrl + "cocktails")
    .then(res => res.json())
    .then(res => console.log(res))








document.addEventListener("DOMContentLoaded", function(){
    fetch(baseUrl + "cocktails")
    .then(res => res.json())
    .then(cocktailData => { 
        cocktailData.forEach(cocktail => {
            let image = document.createElement('image');
            image.src = cocktail.image_url
            cocktailsList.appendChild(image)
        })
    })

})


// let config = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify({
//         title: "Fantastic",
//         content: "So delicious and refreshing. I could drink 10",
//         rating: 5
//     })
// }

// fetch("http://localhost:3000/cocktails/1/reviews", config)
//  .then( res => res.json() )
//  .then( res => console.log(res) )