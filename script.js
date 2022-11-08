const scryfallUrl = 'https://api.scryfall.com/cards/search'
const savedCards = []
const searchResults = []

function searchForCard(cardName) {
  // lblkj
}

function buildSearchURL(cardName) {
  // asldjkfalskdjf
}

function renderSearchResults(results) {
  // for each result...
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
  cardImage.src = cardObj.image_uris.normal

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

  // attach submit handler

})

