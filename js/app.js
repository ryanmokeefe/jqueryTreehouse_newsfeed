const $odd = $('a:odd');
// ^ signifies 'Starts With'
const $secureLinks = $('a[href^="https://"]');
// $ signifies 'Ends With'
const $pdfs = $('a[href$=".pdf"]');
const $pdfCheckbox = $('<label><input type="checkbox"> Allow PDF downloads</label>');

// target="_blank" Opens in new tab
$secureLinks.attr('target', '_blank');
$pdfs.attr('download', true);

$secureLinks.addClass('secure');
$pdfs.addClass('pdf');

$pdfs.on('click', function(event){
  //check if checkbox has been checked 
  //if zero checkboxes are checked 
  if ($(':checked').length === 0){
    //prevent download of document 
    event.preventDefault();
    //alert the user 
    alert('Please check the box to allow PDF downloads.');
  }
});

$('#links').append($pdfCheckbox);

$('a').each(function(){
  const url = $(this).attr('href');
    // `(${url})` = string interpolation using template literals (parentheses are used as plain text)
  $(this).parent().append(`(${url})`);
});