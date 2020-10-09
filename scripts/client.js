console.log('Pokemon');

const pokemonList = [];

$(document).ready(onReady);

function onReady() {
  console.log('Stuff is ready');

  // event listener for targeted element
  $('.js-click-add').on('click', clickToAdd);
  // event listener for children of targeted element
  $('.js-pokemon-list').on('click', '.js-btn-select', selectPokemon);
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
    isSelected: false,
  };
  pokemonList.push(pokemon);
  render();
}

function selectPokemon() {
  console.log(selectPokemon);
  // data attribute
  const index = $(this).data('index'); // data-index
  pokemonList[index].isSelected = true;

  $(this)
    .parent() // td
    .parent() // tr
    .addClass('isSelected');

  addSelectedAtt();
}

function render() {
  $('.js-pokemon-list').empty();
  for (let i = 0; i < pokemonList.length; i++) {
    console.log('Render', pokemonList[i]);
    const item = pokemonList[i];

    $('.js-pokemon-list').append(
      `<tr>
        <td>${item.name}</td>
        <td>${item.hp}</td>
        <td>${item.att}</td>
        <td>${item.def}</td>
        <td><img src="${item.image}" /></td>
        <td><button class="js-btn-select" data-index="${i}">Select</button></td>
      </tr>`
    );
  }
}

function addSelectedAtt() {
  let attTotal = 0;

  for (let i = 0; i < pokemonList.length; i++) {
    const item = pokemonList[i];

    // check if selected
    if (item.isSelected) {
      attTotal += parseInt(item.att);
    }
  }

  $('.js-total-att').text(attTotal);
}
