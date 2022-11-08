const scryfallUrl = 'https://api.scryfall.com/cards/search?format=json&include_extras=false&include_multilingual=false&include_variations=false&'
const savedCards = []
const searchResults = []

function searchCardsByName(cardName) {
  fetch(buildSearchURL(cardName))
    .then(response => response.json())
    .then(data => {
      console.log("DATA", data)
      clearSearchResults()
      searchResults = data.data
      renderSearchResults(data.data)
    })
}

function getSearchedCardById(cardId) {
  searchResults.forEach((card) => {
    if (card.id === cardId) {
      return card
    }
  })

  return null
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
  cardContainer.id = cardObj.id
  // click handler attach
  cardContainer.addEventListener("click", function (e) {
    saveCard(e)
  })
  // hover handler attach
  cardContainer.addEventListener("hover", function (e) {
    // show card sets or prices or whatever
  })
  const cardImage = document.createElement("img")
  cardImage.src = cardObj.image_uris.small

  cardContainer.appendChild(cardImage)
  cardList.appendChild(cardContainer)
}

function displayCardSets(cardObj) {

}

function saveCard(e) {
  // get card id from e.target.id
  // pass this id to getSearchedCardById, storing result in a variable
  // add the value in the variable to savedCards
  // render the list of saved cards to the page (cardstorage-container)
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
})

