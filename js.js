/* Style the HTML elements according to the following instructions.
DO NOT ALTER THE EXISTING HTML TO DO THIS.  WRITE ONLY CSS!
*/


/* Give everything with the class 'hello' a white background when you click on one of them*/

//todo: Created a selecter that when the class "hello is clicked it turned the background some color of choice.
$(".hello").click(function()
{
    // alert('click made');
    $(this).css('background-color','blue')
}
);



/* When you mouse over the "Selectors Exercise" element, change the height&width to 20px. When you mouse off of it change it back */


//todo:  When the "h1" was moused over it changed size, and when the mouse left it went back to the original size.
$('h1').mouseenter(function ()
{
    $(this).css('height','20px');
    $(this).css('width','20px');
});
$('h1').mouseleave(function(){
    $(this).css('height','');
    $(this).css('width','');
});


//todo: attempts that did not work:
// $('h2').mouseenter(function ()
// {
//     console.log('fired mouse enter');
// });
// $('h2').mouseleave(function ()
// {
//     console.log('fired mouse leave');
// });
// .............................
// $('#menu ul li').mouseenter(function(){
//     $(this).children(".dropdown").toggle();
// }).mouseleave(function(){
//     $(this).children(".dropdown").toggle();
// });
// ..............
// $('h1').mouseout(function ()
// {
//     $('h1').css('')
// });





// CHALLENGE
/* Each time the sentence "I am a paragraph with a class" is clicked, add a "." to the end of the sentence. */
// todo: When the 'p' tag and class 'hello' is clicked to add a '.' at the end of the class paragraph.
$('p.hello').click(function ()
{
    alert("Whatttttt!!!");
    $('p.hello').append('.')
});

