

 k = 0
 d = 0
 const Spaghettibtn = document.getElementById('Spaghetti');
const SpaghettimyText = document.getElementById('CartList');

Spaghettibtn.addEventListener('click', function(){
  const myInsertText = 'Spaghetti: 10€; ';
SpaghettimyText.innerHTML += myInsertText;
k += 12
d += 1
});
//Button code taken from https://stackoverflow.com/a/59115881

const Pizzabtn = document.getElementById('Pizza');
const PizzamyText = document.getElementById('CartList');

Pizzabtn.addEventListener('click', function(){
  const myInsertText = 'Pizza: 12€; ';
PizzamyText.innerHTML += myInsertText;
k += 12
d += 1
});

const Burgerbtn = document.getElementById('Burger');
const BurgermyText = document.getElementById('CartList');

Burgerbtn.addEventListener('click', function(){
  const myInsertText = 'Burger: 7€; ';
BurgermyText.innerHTML += myInsertText;
k += 7
d += 1
});

const Hotdogbtn = document.getElementById('Hotdog');
const HotdogmyText = document.getElementById('CartList');

Hotdogbtn.addEventListener('click', function(){
  const myInsertText = 'Hotdog: 5€; ';
HotdogmyText.innerHTML += myInsertText;
k += 5
d += 1
});

const Sandwitchbtn = document.getElementById('Sandwitch');
const SandwitchmyText = document.getElementById('CartList');

Sandwitchbtn.addEventListener('click', function(){
  const myInsertText = 'Sandwitch: 6€; ';
SandwitchmyText.innerHTML += myInsertText;
k += 6
d += 1
});

const Kebabbtn = document.getElementById('Kebab');
const KebabmyText = document.getElementById('CartList');

Kebabbtn.addEventListener('click', function(){
  const myInsertText = 'Kebab: 15€; ';
KebabmyText.innerHTML += myInsertText;
k += 15
d += 1
});

const Saladbtn = document.getElementById('Salad');
const SaladmyText = document.getElementById('CartList');

Saladbtn.addEventListener('click', function(){
  const myInsertText = 'Salad: 4€; ';
SaladmyText.innerHTML += myInsertText;
k += 4
d += 1
});

const Heeringbtn = document.getElementById('Fish');
const HeeringmyText = document.getElementById('CartList');

Heeringbtn.addEventListener('click', function(){
  const myInsertText = 'Herring: 10€; ';
HeeringmyText.innerHTML += myInsertText;
k += 10
d += 1
});

const FSaladbtn = document.getElementById('FruitSalad');
const FSaladmyText = document.getElementById('CartList');

FSaladbtn.addEventListener('click', function(){
  const myInsertText = 'Fruit Salad: 5€; ';
FSaladmyText.innerHTML += myInsertText;
k += 5
d += 1
});

const Steakbtn = document.getElementById('Steak');
const SteakmyText = document.getElementById('CartList');

Steakbtn.addEventListener('click', function(){
  const myInsertText = 'Steak: 25€; ';
SteakmyText.innerHTML += myInsertText;
k += 25
d += 1
});

const Finalbtn = document.getElementById('GoToCart');
const FinalmyText = document.getElementById('TotalCost');
const FinalCart = document.getElementById('Cart')
const HideOrders = document.getElementById('Orders')
const HideButton = document.getElementById('GoToCart')
const Show2Buttons = document.getElementById('Page2Buttons')
const List = document.getElementById('CartList').length;
const Discount = document.getElementById('TotalDiscount')
Finalbtn.addEventListener('click', function(){
  const myInsertText = k + "€";
FinalmyText.innerHTML = myInsertText;
FinalCart.style.display = 'block';
HideOrders.style.display = 'None';
HideButton.style.display = 'None';
Show2Buttons.style.display = 'block';
if (d >= 3) {
Discount.innerHTML =  k - 10 + "€";
}
else {Discount.innerHTML = "No discount"}
});

function Return(clickedButton)
{
  FinalCart.style.display = 'None';
  HideOrders.style.display = 'Block';
  HideButton.style.display = 'Block';
  Show2Buttons.style.display = 'None';
}
const InfoForm = document.getElementById("PersonalInfoForm")
const FormButtons = document.getElementById('FormButtons')
function CheckOut(clickedButton)
{
  FinalCart.style.display = 'None';
  Show2Buttons.style.display = 'None';
  InfoForm.style.display = 'block';
  FormButtons.style.display = 'block';
}

function ReturnCheckOut(clickedButton)
{
  FinalCart.style.display = 'block';
  Show2Buttons.style.display = 'block';
  InfoForm.style.display = 'None';
  FormButtons.style.display = 'None';
}
const EndM = document.getElementById("EndMessage")
function FinaliseForm(clickedButton)
{
  EndM.style.display = 'block'
  FinalCart.style.display = 'none';
  Show2Buttons.style.display = 'none';
  InfoForm.style.display = 'None';
  FormButtons.style.display = 'None';
}

