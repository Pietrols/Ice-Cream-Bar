import fudgeIceCream from "./images/fudge-ice-cream-bar.jpg";
import cherryCream from "./images/cherry-cream-cheese.jpg";
import strawberryPudding from "./images/strawberry-pudding.jpg";
import iceCreamCake from "./images/ice-cream-cake.jpg";
import iceCreamSandwitch from "./images/ice-cream-sandwich-cake.jpg";
import coconutIceCream from "./images/coconut-ice-cream.jpg";
import creamVanillaICeCream from "./images/creamy-vanilla-ice-cream.jpg";
import carrotCakeIceCream from "./images/carrot-cake-ice-cream.jpg";

// Content container file
const container = document.querySelector("#container");

export function menuSelection() {
  const menuContainer = document.createElement("div");
  menuContainer.id = "menu-container";
  container.appendChild(menuContainer);

  const menuTitle = document.createElement("h2");
  menuTitle.textContent = "Menu";
  menuTitle.id = "menu-title";
  menuContainer.appendChild(menuTitle);

  const menuCards = document.createElement("div");
  menuCards.id = "menu-cards";
  menuContainer.appendChild(menuCards);

  const dish1 = document.createElement("div");
  dish1.id = "menu-card";
  const dishText1 = document.createElement("div");
  dishText1.id = "text";
  const dishName1 = document.createElement("h3");
  dishName1.id = "name";
  dishName1.textContent = "Hot Fudge Ice Cream Bar Dessert";
  const dishDescr1 = document.createElement("div");
  dishDescr1.id = "description";
  dishDescr1.textContent =
    "This is an incredibly easy rich and satisfying ice cream dessert made with ice cream sandwiches and fudge sauce.";
  const dishPrice1 = document.createElement("div");
  dishPrice1.id = "price";
  dishPrice1.textContent = "$10";
  const dishImage1 = document.createElement("img");
  dishImage1.src = fudgeIceCream;
  //   dishImage1.style.height = "200px";
  menuCards.appendChild(dish1);
  dish1.appendChild(dishText1);
  dishText1.appendChild(dishName1);
  dishText1.appendChild(dishDescr1);
  dishText1.appendChild(dishPrice1);
  dish1.appendChild(dishImage1);

  const dish2 = document.createElement("div");
  dish2.id = "menu-card";
  const dishText2 = document.createElement("div");
  dishText2.id = "text";
  const dishName2 = document.createElement("h2");
  dishName2.id = "name";
  dishName2.textContent = "Cherry Cream Cheese Dessert";
  const dishDescr2 = document.createElement("div");
  dishDescr2.id = "description";
  dishDescr2.textContent =
    "This dessert is the ideal way to get your cherry fix, especially when they're not in season.";
  const dishPrice2 = document.createElement("div");
  dishPrice2.id = "price";
  dishPrice2.textContent = "$10";
  const dishImage2 = document.createElement("img");
  dishImage2.src = cherryCream;
  menuCards.appendChild(dish2);
  dish2.appendChild(dishText2);
  dishText2.appendChild(dishName2);
  dishText2.appendChild(dishDescr2);
  dishText2.appendChild(dishPrice2);
  dish2.appendChild(dishImage2);

  const dish3 = document.createElement("div");
  dish3.id = "menu-card";
  const dishText3 = document.createElement("div");
  dishText3.id = "text";
  const dishName3 = document.createElement("h2");
  dishName3.id = "name";
  dishName3.textContent = "Strawberry Pudding Dessert";
  const dishDescr3 = document.createElement("div");
  dishDescr3.id = "description";
  dishDescr3.textContent = "This is a chilled strawberry fruit dessert.";
  const dishPrice3 = document.createElement("div");
  dishPrice3.id = "price";
  dishPrice3.textContent = "$10";
  const dishImage3 = document.createElement("img");
  dishImage3.src = strawberryPudding;
  menuCards.appendChild(dish3);
  dish3.appendChild(dishText3);
  dishText3.appendChild(dishName3);
  dishText3.appendChild(dishDescr3);
  dishText3.appendChild(dishPrice3);
  dish3.appendChild(dishImage3);

  const dish4 = document.createElement("div");
  dish4.id = "menu-card";
  const dishText4 = document.createElement("div");
  dishText4.id = "text";
  const dishName4 = document.createElement("h2");
  dishName4.id = "name";
  dishName4.textContent = "Ice Cream Cake";
  const dishDescr4 = document.createElement("div");
  dishDescr4.id = "description";
  dishDescr4.textContent =
    "This ice cream blends two of everyone's favourite things. Cake and ice cream. stacked with a thick fudge topping, and crushed Oeros";
  const dishPrice4 = document.createElement("div");
  dishPrice4.id = "price";
  dishPrice4.textContent = "$10";
  const dishImage4 = document.createElement("img");
  dishImage4.src = iceCreamCake;
  menuCards.appendChild(dish4);
  dish4.appendChild(dishText4);
  dishText4.appendChild(dishName4);
  dishText4.appendChild(dishDescr4);
  dishText4.appendChild(dishPrice4);
  dish4.appendChild(dishImage4);

  const dish5 = document.createElement("div");
  dish5.id = "menu-card";
  const dishText5 = document.createElement("div");
  dishText5.id = "text";
  const dishName5 = document.createElement("h2");
  dishName5.id = "name";
  dishName5.textContent = "Ice Cream Sandwich Cake";
  const dishDescr5 = document.createElement("div");
  dishDescr5.id = "description";
  dishDescr5.textContent =
    "This ice cream sandwich cake was renamed as 'The Best Dessert I've Ever Eaten' by the ice cream association president. You already know what that means.";
  const dishPrice5 = document.createElement("div");
  dishPrice5.id = "price";
  dishPrice5.textContent = "$10";
  const dishImage5 = document.createElement("img");
  dishImage5.src = iceCreamSandwitch;
  menuCards.appendChild(dish5);
  dish5.appendChild(dishText5);
  dishText5.appendChild(dishName5);
  dishText5.appendChild(dishDescr5);
  dishText5.appendChild(dishPrice5);
  dish5.appendChild(dishImage5);

  const dish6 = document.createElement("div");
  dish6.id = "menu-card";
  const dishText6 = document.createElement("div");
  dishText6.id = "text";
  const dishName6 = document.createElement("h2");
  dishName6.id = "name";
  dishName6.textContent = "Coconut Ice Cream";
  const dishDescr6 = document.createElement("div");
  dishDescr6.id = "description";
  dishDescr6.textContent =
    "Creamy coconut ice cream with a rich coconut flavor. A sweet treat that any coconut lover would enjoy.";
  const dishPrice6 = document.createElement("div");
  dishPrice6.id = "price";
  dishPrice6.textContent = "$10";
  const dishImage6 = document.createElement("img");
  dishImage6.src = coconutIceCream;
  menuCards.appendChild(dish6);
  dish6.appendChild(dishText6);
  dishText6.appendChild(dishName6);
  dishText6.appendChild(dishDescr6);
  dishText6.appendChild(dishPrice6);
  dish6.appendChild(dishImage6);

  const dish7 = document.createElement("div");
  dish7.id = "menu-card";
  const dishText7 = document.createElement("div");
  dishText7.id = "text";
  const dishName7 = document.createElement("h2");
  dishName7.id = "name";
  dishName7.textContent = "Creamy Vanilla Ice Cream";
  const dishDescr7 = document.createElement("div");
  dishDescr7.id = "description";
  dishDescr7.textContent =
    "This is the best vanilla ice cream you'll ever eat.";
  const dishPrice7 = document.createElement("div");
  dishPrice7.id = "price";
  dishPrice7.textContent = "$10";
  const dishImage7 = document.createElement("img");
  dishImage7.src = creamVanillaICeCream;
  menuCards.appendChild(dish7);
  dish7.appendChild(dishText7);
  dishText7.appendChild(dishName7);
  dishText7.appendChild(dishDescr7);
  dishText7.appendChild(dishPrice7);
  dish7.appendChild(dishImage7);

  const dish8 = document.createElement("div");
  dish8.id = "menu-card";
  const dishText8 = document.createElement("div");
  dishText8.id = "text";
  const dishName8 = document.createElement("h2");
  dishName8.id = "name";
  dishName8.textContent = "Carrot Cake Ice Cream";
  const dishDescr8 = document.createElement("div");
  dishDescr8.id = "description";
  dishDescr8.textContent =
    "Every loves carrot cake, wait till you feast your taste buds on this super delicious ice cream";
  const dishPrice8 = document.createElement("div");
  dishPrice8.id = "price";
  dishPrice8.textContent = "$10";
  const dishImage8 = document.createElement("img");
  dishImage8.src = carrotCakeIceCream;
  menuCards.appendChild(dish8);
  dish8.appendChild(dishText8);
  dishText8.appendChild(dishName8);
  dishText8.appendChild(dishDescr8);
  dishText8.appendChild(dishPrice8);
  dish8.appendChild(dishImage8);
}
