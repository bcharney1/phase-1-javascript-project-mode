const scryfallUrl = 'https://api.scryfall.com/cards/search?format=json&include_extras=false&include_multilingual=false&include_variations=false&'
const savedCards = []
const searchResults = []

function searchCardsByName(cardName) {
  fetch(buildSearchURL(cardName))
  .then(response => response.json())
  .then(data => {
    console.log("DATA", data)
    clearSearchResults()
    renderSearchResults(data.data)
  })
}

function clearSearchResults() {
    const cardList = document.querySelector('#cardsearch-container')
    cardList.innerHTML = ""
}

function buildSearchURL(cardName) {
  return scryfallUrl + 'q=' + cardName
}

function renderSearchResults(results) {
  results.forEach((result) => { renderSearchResult(result) })
}

function renderSearchResult(cardObj) {
  const cardList = document.querySelector('#cardsearch-container')

  const cardContainer = document.createElement("li")
  // click handler attach
  cardContainer.addEventListener("click", function (e) {
    // save the card to the list
  })
  // hover handler attach
  cardContainer.addEventListener("hover", function (e) {
    // show card sets
  })
  const cardImage = document.createElement("img")
  cardImage.src = cardObj.image_uris.small

  cardContainer.appendChild(cardImage)
  cardList.appendChild(cardContainer)
}

function displayCardSets(cardObj) {

}

function saveCard(cardObj) {

}

function renderSavedCards() {
  // for each saved card...
}

function renderSavedCard(cardObj) {

}

document.addEventListener("DOMContentLoaded", function () {
    const cardSearchForm = document.querySelector("#cardsearch-form")
    cardSearchForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const searchValue = e.target.elements[0].value
        searchCardsByName(searchValue)
    })
  // attach submit handler

})

