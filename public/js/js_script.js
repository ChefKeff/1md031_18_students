

function menuItem(name, isVegan, description, price, img) {         //Skapar en menuItem, som innehåller allt som behövs för att visa burgarna
    this.name = name;
    this.isVegan = isVegan;
    this.description = description;
    this.price = price;
    this.image = img;
}

window.getMenuItem = menuItem();



//Skapar mina burgare
    let KrabbyPatty = new menuItem('KrabbyPatty', 'Vegan friendly :)', 'Made w/ kelp.', '99kr', "https://www.mcdonalds.com/is/image/content/dam/nordic/nfl/nutrition/Items/Regular/mcd-sv-elmaco.jpg?$Category_Desktop$");
    let BobsBurger = new menuItem('BobsBurger', 'Contains meat', 'Super delish', '109kr', 'https://www.mcdonalds.com/is/image/content/dam/nordic/nfl/nutrition/Items/Regular/mcd-sv-truffleonions-big.jpg?$Category_Desktop$');
    let KeffanClassic = new menuItem('KeffanClassic', 'Contains meat', 'The best burger in the world', '137.7kr', 'https://www.mcdonalds.com/is/image/content/dam/nordic/nfl/nutrition/Items/Regular/mcd-sv-tastybacon-big.jpg?$Category_Desktop$');
    let FettoSuperstar = new menuItem('FettoSuperstar', 'Def not vegan ;-)', '"Fetto Superstar - det är vad du tar"', '150gram kr', 'https://www.mcdonalds.com/is/image/content/dam/nordic/nfl/nutrition/Items/Regular/mcd-sv-cheddardijon-big.jpg?$Category_Desktop$')
//Skapar en array av burgare
    let BurgerArray = [KrabbyPatty, BobsBurger, KeffanClassic, FettoSuperstar];

//Lite kladdigt, men skapar min table
//  let Table = document.getElementById('table');
//  let tbl = document.createElement('table');
//  let tblBdy = document.createElement('tbody');
//  let rowArray = [];
//  let numberOfRows = 6;
//  for (let i = 0; i < numberOfRows; i++) {
//      rowArray[i] = document.createElement('tr');
//  }
//  for (let i = 0; i < BurgerArray.length; i++) {
//      var tblImg = document.createElement('td');
//      var image = document.createElement('img');
//      image.src = BurgerArray[i].image;
//      tblImg.appendChild(image);
//      rowArray[1].appendChild(tblImg);
//  }
//  for (let i = 0; i < BurgerArray.length; i++) {
//      var header = document.createElement('td');
//      var headText = document.createTextNode(BurgerArray[i].name)
//      header.appendChild(headText);
//      rowArray[0].appendChild(header);
//  }
//  for (let i = 0; i < BurgerArray.length; i++) {
//      var veg = document.createElement('td');
//      var vegan = document.createTextNode(BurgerArray[i].isVegan)
//      veg.appendChild(vegan);
//      rowArray[2].appendChild(veg);
//  }
//  for (let i = 0; i < BurgerArray.length; i++) {
//      var desc = document.createElement('td');
//      var desctxt = document.createTextNode(BurgerArray[i].description)
//      desc.appendChild(desctxt);
//      rowArray[3].appendChild(desc);
//  }
//  for (let i = 0; i < BurgerArray.length; i++) {
//      var money = document.createElement('td');
//      var pay = document.createTextNode(BurgerArray[i].price)
//      money.appendChild(pay);
//      rowArray[4].appendChild(money);
//  }

//  for (let i = 0; i < BurgerArray.length; i++) {
//      let addToOrder = document.createElement('td');
//      let checkbox = document.createElement('input');
//      checkbox.type = 'checkbox';
//      checkbox.setAttribute("id", BurgerArray[i].name);
//      var label = document.createElement('label');
//      label.appendChild(document.createTextNode('Add to order.'));
//      addToOrder.appendChild(checkbox);
//      addToOrder.appendChild(label);
//      rowArray[5].appendChild(addToOrder);
//  }
//  for (let i = 0; i < numberOfRows; i++) {
//      tblBdy.appendChild(rowArray[i]);
//  }
//  tbl.appendChild(tblBdy);
//  Table.appendChild(tbl);


//  let Submit = document.getElementById("submitbtn");
//  Submit.addEventListener("click", function () {
//      let orderconfirm = document.getElementById("orderconfirm");
//      orderArray = OrderData();
//      orderconfirm.innerHTML = orderArray += ' ' + 'To: ' + document.getElementById('firstlastname').value + ', ' + 'E-mail: ' + document.getElementById('email').value + ', ' + document.getElementById('phoneno').value + '.';
//  });


function OrderData() {
    let orderArray = [];
    var payment = document.getElementById("payment");
    var payStr = payment.options[payment.selectedIndex].text;
    var custName = document.getElementById("firstlastname").value;
//    var custNameStr = custName.value[custName.selectedIndex].text;
    var custPhone = document.getElementById("phoneno").value;
//    var custPhoneStr = custPhone.value[custPhone.selectedIndex].text;
    var custMail = document.getElementById("email").value;
//   var custMailStr = custMail.value[custMail.selectedIndex].text;
    

    orderArray.push(custName);
    orderArray.push(custPhone);
    orderArray.push(custMail);


    for (let i = 0; i < BurgerArray.length; i++) {
        var burgercheck = document.getElementById(BurgerArray[i].name);
        if (burgercheck.checked) {
            orderArray.push(BurgerArray[i].name);

        }
    }

    orderArray.push(payStr);

    return orderArray;
}


