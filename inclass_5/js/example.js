// ADD NEW ITEM TO END OF LIST
var list = document.getElementsByTagName('ul')[0];
var new_li = document.createElement('li');
var new_cream = document.createTextNode('cream');
new_li.appendChild(new_cream);
list.appendChild(new_li);


// ADD NEW ITEM START OF LIST
var new_li2 = document.createElement('li');
var new_kale = document.createTextNode('kale');
new_li2.appendChild(new_kale);
list.insertBefore(new_li2, list.firstChild);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var all_list = document.getElementsByTagName('li');
for (i = 0; i < all_list.length; i++) {
    all_list[i].className = 'cool';
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var T_number = all_list.length;
var head1 = '<span>'+ T_number;
document.getElementsByTagName('h2')[0].innerHTML += head1;