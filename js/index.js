$('#searchItem').on('submit', function(e){
  e.preventDefault();
  const name = $(this).find('input').val();

  if(name === ''){
    alert('Please provide a valid item');
    return;
  }

  $(this).find('input').val('');
  
  $('.list').append(`
    <li class="item">
      <p class="itemTitle">${name}</p>
      <button id="check" type="button">check</button>
      <button id="delete" type="button">delete</button>
    </li>
  `);
});

$('.list').delegate('#check', 'click', function(e){
  $(this).parent().find('.itemTitle').toggleClass('checked');
});

$('.list').delegate('#delete', 'click', function(e){
  $(this).parent().remove();
});