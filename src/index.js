import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
// import createDeck from "./blackjack.js";
import DeckService from './deck-service.js';


$(document).ready(function(){
  let deck
  DeckService.getDeck()
  .then(function(deck) {
    console.log(deck)
    
    
  })
});

