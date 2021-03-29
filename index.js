
document.addEventListener("DOMContentLoaded", function(){
    Cocktail.fetchCocktails()
    Review.listenForEvents()
    Review.listenForBackBtn()
    Review.listenForKeyUp()
    Review.listenForSortedBtn()
})


