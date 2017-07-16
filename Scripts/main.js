$(document).ready(function() { 
    /* 1 */
      $('div#target1').css('background-color','blue');
    
    /* 2 */
      $('div#target2 > span').text('Meir go to bed');

    /* 3 */
      $('div#target3' ).clone().insertAfter('#ex3');

    /* 4 */
      $('.target4:nth-child(2)').css('background-color','cyan');

    /* 5 */
      $('.target5 button').prop("disabled",true);
 
    /* 6 */
      $('div#ex6 .target6 input:checkbox').prop('checked', false);

    /* 7 */
      $("div#ex7 #parent1 #child").appendTo("div#ex7 #parent2");


    /* 8 */
      $('div#target8 input:text').prop("readonly",true);


      
    /* 9 */
      $('div#target9 select option:eq(1)').attr('selected', 'selected');

    /* 10 */
      $('div#target10').css("height", $('div#target10').height() * 2);
      $('div#target10').css("width", $('div#target10').width() * 2);


    /* 11 */
      $('div#target11').empty();


    /* 12 */


    /* 13 */
      var numberChildren = $("div#target13 .child").length;
      alert( "numberChildren: " + numberChildren );


    /* 14 */
    $("div#target14").animate({
            height: $('div#target14').height() * 2,
            width: $('div#target14').width() * 2
        });

    /* 15 */
    $('div#target15 select option').each(function(key,value) {
                    let color = 'blue';
                    if (key % 2 == 0) {
                        color ='red';
                    }
                    $(this).css('color', color);   
                }); 

        
});