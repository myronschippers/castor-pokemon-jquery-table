console.log('Pokemon');

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
  console.log(name, hp, att, def, image);

  // store pokemon data
}
