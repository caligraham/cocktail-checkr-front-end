
document.addEventListener("DOMContentLoaded", function(){
    Cocktail.fetchCocktails()
    Review.listenForEvents()
    Review.listenForBackBtn()
    Review.listenForKeyUp()
    Review.listenForSortedBtn()
})

function myFunction() {
    let element = document.body;
    element.classList.toggle("dark-mode");
 }
