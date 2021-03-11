
document.addEventListener("DOMContentLoaded", function(){
    Cocktail.fetchCocktails()
    Review.listenForEvents()
})


// load the page & fetch data




    // fetch(baseURL + "cocktails")
    // .then(res => res.json())
    // .then(res => console.log(res))


    

// let config = {
//     method: "POST",
//     headers: {ç
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