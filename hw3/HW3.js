function Table_go() {
    /*Check the input with checkValidity from w3school
    Check all the inputs from user
    Chek then with MSG
    We have the range in the input type number
    */

    var inpObj1 = document.getElementById("firstr");
    if (inpObj1.checkValidity() == false) {
        document.getElementById("Num1").innerHTML = inpObj1.validationMessage;
        return false;
    } 
 
    var inpObj2 = document.getElementById("secondr");
    if (inpObj2.checkValidity() == false) {
        document.getElementById("Num2").innerHTML = inpObj2.validationMessage;
        return false;
    } 

    var inpObj3 = document.getElementById("firstc");
    if (inpObj3.checkValidity() == false) {
        document.getElementById("Num3").innerHTML = inpObj3.validationMessage;
        return false;
    }

    var inpObj4 = document.getElementById("secondc");
    if (inpObj4.checkValidity() == false) {
        document.getElementById("Num4").innerHTML = inpObj4.validationMessage;
        return false;
    }

    //Get value from input
    var row1 = parseInt(document.getElementById('firstr').value);
    var col1 = parseInt(document.getElementById('firstc').value);
    var row2 = parseInt(document.getElementById("secondr").value);
    var col2 = parseInt(document.getElementById("secondc").value);

    //Table 
    var body = document.getElementsByTagName('body')[0];
    var table = document.createElement('table');
    table.setAttribute('id', 'newtable');
    var tr = document.createElement('tr');
    var th = document.createElement('th');

    // how to get the first row and col are blank


    //remove used table
    var used_table = document.getElementById('newtable');  
    if (used_table){
        used_table.parentNode.removeChild(used_table);
    }
    //Check that min is less than max
    if (row1 > row2) {
        document.getElementById("MSG").innerHTML = "Error:The min row cannot be greater than the max row";
        return false;
    }
    else if (col1 > col2) {
        document.getElementById("MSG").innerHTML = "Error:The min column cannot be greater than the max column";
        return false;
    }
    else {
        document.getElementById("MSG").innerHTML = "Great! We got the Multiplication Table";
    }

    //for the  column of table.
    for (var i = col1; i <= col2; i++) {
        tr.appendChild(tablebox(i, 'th'));
    }

    //for the row of the table. 
    for (var j = row1; j <= row2; j++) {

        var tr = document.createElement('tr');
        tr.appendChild(tablebox(j, 'th'));
        for (var i = col1; i <= col2; i++) {
            //Calculate the output  
            var value = j * i;
            tr.appendChild(tablebox(value, 'td'));
        }
        table.appendChild(tr);
    }
    body.appendChild(table);
    
}


//Create box
function tablebox(text, type) {
    var box = document.createElement(type);
    box.appendChild(document.createTextNode(text));
    return box;
}
