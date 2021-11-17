export default class DeckService {
  static getDeck() {
    return fetch(`http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
  
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .catch(function(error) {
      return error;
    })
  }

  static drawCard(number, id) {
    return fetch(`http://deckofcardsapi.com/api/deck/${id}/draw/?count=${number}`)

    .then (function(response) {
      if(!response.ok) {
        throw Error(response.statusText)
      }
      return response.json();
    })
    .catch(function(error) {
      return error;
    })
  }
}
