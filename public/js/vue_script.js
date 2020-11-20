

window.onload = function(){
    let KrabbyPatty = new menuItem('KrabbyPatty', 'Vegan friendly :)', 'Made w/ kelp.', '99kr', "https://www.mcdonalds.com/is/image/content/dam/nordic/nfl/nutrition/Items/Regular/mcd-sv-elmaco.jpg?$Category_Desktop$");
    let BobsBurger = new menuItem('BobsBurger', 'Contains meat', 'Super delish', '109kr', 'https://www.mcdonalds.com/is/image/content/dam/nordic/nfl/nutrition/Items/Regular/mcd-sv-truffleonions-big.jpg?$Category_Desktop$');
    let KeffanClassic = new menuItem('KeffanClassic', 'Contains meat', 'The best burger in the world', '137.7kr', 'https://www.mcdonalds.com/is/image/content/dam/nordic/nfl/nutrition/Items/Regular/mcd-sv-tastybacon-big.jpg?$Category_Desktop$');
    let FettoSuperstar = new menuItem('FettoSuperstar', 'Def not vegan ;-)', '"Fetto Superstar - det är vad du tar"', '150gram kr', 'https://www.mcdonalds.com/is/image/content/dam/nordic/nfl/nutrition/Items/Regular/mcd-sv-cheddardijon-big.jpg?$Category_Desktop$')
    let BurgerArray = [KrabbyPatty, BobsBurger, KeffanClassic, FettoSuperstar];


    var vue = new Vue({
        el: '#vueTable',
        data: {
        heads:[
            {head: BurgerArray[0].name},
            {head: BurgerArray[1].name},
            {head: BurgerArray[2].name},
            {head: BurgerArray[3].name},

            ],
          rows: [
            { name: BurgerArray[0].name, image: BurgerArray[0].image, isVegan: BurgerArray[0].isVegan, description: BurgerArray[0].description, price: BurgerArray[0].price,},
            { name: BurgerArray[1].name, image: BurgerArray[1].image, isVegan: BurgerArray[1].isVegan, description: BurgerArray[1].description, price: BurgerArray[1].price },
            { name: BurgerArray[2].name, image: BurgerArray[2].image, isVegan: BurgerArray[2].isVegan, description: BurgerArray[2].description, price: BurgerArray[2].price },
            { name: BurgerArray[3].name, image: BurgerArray[3].image, isVegan: BurgerArray[3].isVegan, description: BurgerArray[3].description, price: BurgerArray[3].price }
          ],
          checkedBurgers: [],
        },
        
        computed: {
          "columns": function columns() {
            if (this.rows.length == 0) {
              return [];
            }
            return Object.keys(this.rows[0])
          }
        },
      });
    
    var custOrder = new Vue({
      el: '#CustomerInfo',
            data: {


            }
        });
    }
 




