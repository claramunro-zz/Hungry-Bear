import HungryBear from "../src/js/hungrybear";
import $ from 'jquery';
import './styles.css';

$(document).ready(function () {
  let newBear = new HungryBear();
  newBear.setHunger();
  setInterval(function() {
    $('#bearLevel').text(newBear.foodLevel);
    newBear.didYouGetEaten();
  }, 150);
  $('#bearLevel').text(newBear.foodLevel);
  $('#feedBear').click(function (event) {
    event.preventDefault();
    newBear.feed();
    $('#bearLevel').text(newBear.foodLevel);
  });
});