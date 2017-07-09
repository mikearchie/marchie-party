$(function() {
    $("h3").fitText();
    $("h4").fitText(2, {minFontSize : '10px'});

});

var elClubSoda = document.getElementById('menu06');
var parent = elClubSoda.parentNode;
parent.removeChild(elClubSoda);

var el = document.getElementById('menu04');
el.setAttribute('class', 'drink');

//get all list items
var listItems = document.getElementsByTagName('li');
for (var i = 0; i < listItems.length; i++) {
    //update innerHTML to include menu item type
    if (listItems[i].className == 'churro')
        listItems[i].textContent += " (churro)";
    else if (listItems[i].className == 'drink')
        listItems[i].textContent += " (drink)";
}
