var inventory = [];

var cartTotal = 0;

var printTotal = document.createElement('h3');

function addItem(){
  var quantity = document.getElementById('itemQuan').value;
  var name = document.getElementById('itemName').value;
  var price = document.getElementById('itemPrice').value;
  var itemTotal = (quantity * price);
  cartTotal = (itemTotal + cartTotal);

  tabBody=document.getElementsByTagName("tbody").item(0);
  row=document.createElement("tr");
  cell1 = document.createElement("td");
  cell2 = document.createElement("td");
  cell3 = document.createElement("td");
  cell4 = document.createElement("td");
  textnode1=document.createTextNode(name);
  textnode2=document.createTextNode(price);
  textnode3=document.createTextNode(quantity);
  textnode4=document.createTextNode(itemTotal);
  cell1.appendChild(textnode1);
  cell2.appendChild(textnode2);
  cell3.appendChild(textnode3);
  cell4.appendChild(textnode4);
  row.appendChild(cell1);
  row.appendChild(cell2);
  row.appendChild(cell3);
  row.appendChild(cell4);
  tabBody.appendChild(row);

  printTotal.innerText = ('cart total: $' + cartTotal.toFixed(2));
  printTotal.className = 'printCartTotal';
  cartList.appendChild(printTotal);
}
