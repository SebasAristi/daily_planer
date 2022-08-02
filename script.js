$('.saveBtn').on('click', function() {
  console.log('save button is clicked!');
  var key =$(this).parent().attr('id')
  var value=$(this).siblings('.description').val()
   // TODO save to local storage
  localStorage.setItem(key, value);

});


var currenthour=moment().hour();

$('.time-block').each(function() {
  
 var hour=$(this).attr("id");
 if (hour<currenthour){
   $(this).addClass('past')

 }
  else if (hour===currenthour){

    $(this).addClass("present")
  }else{
    $(this).addClass("future")
  }
  
  //console.log($(this).dataset.hour)
})

$('#9 .description').val(localStorage.getItem('9'));
$('#10 .description').val(localStorage.getItem('10'))
$('#11 .description').val(localStorage.getItem('11'))
$('#12 .description').val(localStorage.getItem('12'))
$('#13 .description').val(localStorage.getItem('13'))
$('#14 .description').val(localStorage.getItem('14'))
$('#15 .description').val(localStorage.getItem('15'))
$('#16 .description').val(localStorage.getItem('16'))
$('#17 .description').val(localStorage.getItem('17'))
$ ('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'))