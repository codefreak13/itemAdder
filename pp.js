//getting the form
const form = document.querySelector('#form');
//getting the div for the name display
let firstName = document.querySelector('#firstName');

 //getting the product value
 const product = document.querySelector('#product').value;
 //getting the product price
 const price = document.querySelector('#price').value;
 //getting the delivery method
 const delivery = document.querySelector('#delivery').value;

const container = document.querySelector('#container');

let card = {
    productName: product,
    productPrice: price,
    deliveryMethod: delivery
};


    //adding event listener to the form
    form.addEventListener('submit', tasker);

    document.addEventListener('DOMContentLoaded', persistUL)


//saveTask function fires when form is submitted
function tasker(e){

   

    container.style.display = 'flex';
    // addTask()
    saveToLS(card);
    persistUL()   
    
    e.preventDefault() 
}

// function addTask(){
        
//     let pName = document.createElement('p');
//     pName.appendChild(document.createTextNode(element.productName));
//     let pPrice = document.createElement('p');
//     pPrice.appendChild(document.createTextNode(element.productPrice));
//     let pMethod = document.createElement('p');
//     pMethod.appendChild(document.createTextNode(element.deliveryMethod));
//     let cardHold = document.createElement('div');
//      cardHold.className = 'cardHold';
//     cardHold.appendChild(pName);
//     cardHold.appendChild(pPrice);
//     cardHold.appendChild(pMethod);
//     container.appendChild(cardHold);    
// }

function saveToLS(value){
    //declaring an empty array to house the object created
let productArray = [];
//a conditional for saving and retrieving data from trom the local storage
   if(product !== '' || price !== '' || delivery !== ''){
    if(localStorage.getItem('product') === null){
        productArray.push(value);
        localStorage.setItem('product', JSON.stringify(productArray));
    }else {
        productArray = JSON.parse(localStorage.getItem('product'));
        productArray.push(value);
        localStorage.setItem('product', JSON.stringify(productArray));
    }   
}
}

function persistUL(){
    let localArray;
    if(localStorage.getItem('product') === null){
        localArray = [];
    }else {
     localArray = JSON.parse(localStorage.getItem('product'));
    }

   localArray.forEach(function(element){
    let pName = document.createElement('p');
    pName.appendChild(document.createTextNode(element.productName));
    let pPrice = document.createElement('p');
    pPrice.appendChild(document.createTextNode(element.productPrice));
    let pMethod = document.createElement('p');
    pMethod.appendChild(document.createTextNode(element.deliveryMethod));
    let cardHold = document.createElement('div');
     cardHold.className = 'cardHold';
    cardHold.appendChild(pName);
    cardHold.appendChild(pPrice);
    cardHold.appendChild(pMethod);
    container.appendChild(cardHold)
   });
}

const storage = localStorage.getItem('auth');

function save(value){
  localStorage.setItem("auth", value)
  return value
}

if(storage) {
    firstName.innerHTML += storage
}else{
    let name = prompt('what is your name?');
    if (name == null || name == ''){
        // firstName.style.display = 'none';
        firstName.innerHTML = 'Welcome'
    }  else {
        firstName.innerHTML += save(name)
    }
}


function logOut(){
 location.replace('logout.html')
}