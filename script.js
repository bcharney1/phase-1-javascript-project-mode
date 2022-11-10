const scryfallUrl = 'https://api.scryfall.com/cards/search?format=json&include_extras=false&include_multilingual=false&include_variations=false&'
let savedCards = []
let searchResults = []

function searchCardsByName(cardName) {
  fetch(buildSearchURL(cardName))
    .then(response => response.json())
    .then(data => {
      clearSearchResults()
      searchResults = data.data
      renderSearchResults(data.data)
    })
}

function getSearchedCardById(cardId) {
  let grabbedCard = null

  searchResults.forEach((card) => {
    if (card.id === cardId) {
      grabbedCard = card
    }
  })

  return grabbedCard
}

function clearSearchResults() {
  const cardList = document.querySelector('#cardsearch-container')
  cardList.innerHTML = ""
}

function clearSavedCards() {
  const cardList = document.querySelector('#saved-cards')
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
  cardImage.id = cardObj.id

  cardContainer.appendChild(cardImage)
  cardList.appendChild(cardContainer)
}

function displayCardSets(cardObj) {

}

function saveCard(e) {
  // get card id from e.target.id
  const cardId = e.target.id
  const isAlreadySaved = savedCards.some((card) => card.id === cardId)

  if (isAlreadySaved) {
    savedCards = savedCards.filter((card) => card.id !== cardId)
  } else {
    // pass this id to getSearchedCardById, storing result in a variable
    const searchedCard = getSearchedCardById(cardId)
    // add the value in the variable to savedCards
    savedCards = [...savedCards, searchedCard]
  }

  // render the list of saved cards to the page (cardstorage-container)
  renderSavedCards()
}

function renderSavedCards() {
  // for each saved card...
  clearSavedCards()
  savedCards.forEach((savedCard) => {renderSavedCard(savedCard)})
}

function renderSavedCard(cardObj) {
  const cardList = document.querySelector('#saved-cards')

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
  cardImage.id = cardObj.id

  cardContainer.appendChild(cardImage)
  cardList.appendChild(cardContainer)
}

document.addEventListener("DOMContentLoaded", function () {
  const cardSearchForm = document.querySelector("#cardsearch-form")
  cardSearchForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const searchValue = e.target.elements[0].value
    searchCardsByName(searchValue)
  })
})

