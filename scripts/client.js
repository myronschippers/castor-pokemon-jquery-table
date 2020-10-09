console.log('Pokemon');

const pokemonList = [];

$(document).ready(onReady);

function onReady() {
  console.log('Stuff is ready');

  $('.js-click-add').on('click', clickToAdd);
}

function clickToAdd() {
  // capture input info
  const name = $('.js-field-name').val();
  const hp = $('.js-field-hp').val();
  const att = $('.js-field-att').val();
  const def = $('.js-field-def').val();
  const image = $('.js-field-image').val();

  // store pokemon data
  const pokemon = {
    name,
    hp: hp,
    att,
    def,
    image,
  };
  pokemonList.push(pokemon);
}
