//getting the form
const form = document.querySelector('form');
//getting the div for the name display
let firstName = document.querySelector('#firstName');

 //getting the product value
 const product = document.querySelector('#product');
 //getting the product price
 const price = document.querySelector('#price');
 //getting the delivery method
 const delivery = document.querySelector('#delivery');

const container = document.querySelector('#container');



    //adding event listener to the form
    form.addEventListener('submit', tasker);

    // document.addEventListener('DOMContentLoaded', persistor)


//saveTask function fires when form is submitted
function tasker(e){

    let card = {
        productName: product.value,
        productPrice: price.value,
        deliveryMethod: delivery.value
    }

    container.style.display = 'flex';
    addTask()
    saveToLS(card);   
     
    product.value = '';
     price.value = '';
     delivery.value = ''
    e.preventDefault() 
}

function addTask(){
      if(product.value == '' || price.value == '' || delivery.value == ''){
          alert('please fill in the missing details')
      }else{

    let pName = document.createElement('p');
    pName.appendChild(document.createTextNode(product.value));
    let pPrice = document.createElement('p');
    pPrice.appendChild(document.createTextNode(price.value));
    let pMethod = document.createElement('p');
    pMethod.appendChild(document.createTextNode(delivery.value));
    let cardHold = document.createElement('div');
     cardHold.className = 'cardHold';
    cardHold.appendChild(pName);
    cardHold.appendChild(pPrice);
    cardHold.appendChild(pMethod);
    container.appendChild(cardHold); 
      }
}

function saveToLS(value){
    //declaring an empty array to house the object created
let productArray = [];
//a conditional for saving and retrieving data from trom the local storage
   if(product.value !== '' || price.value !== '' || delivery.value !== ''){
    if(localStorage.getItem('product') == null){
        productArray.push(value);
        localStorage.setItem('product', JSON.stringify(productArray));
    }else {
        productArray = JSON.parse(localStorage.getItem('product'));
        productArray.push(value);
        localStorage.setItem('product', JSON.stringify(productArray));
    }   
}
}

// function persistor(){
//     let localArray;
//     if(localStorage.getItem('product') == null){
//         localArray = [];
//     }else {
//      localArray = JSON.parse(localStorage.getItem('product'));
//      }

//    localArray.forEach(function(element){
//     let pName = document.createElement('p');
//     pName.appendChild(document.createTextNode(element.productName));
//     let pPrice = document.createElement('p');
//     pPrice.appendChild(document.createTextNode(element.productPrice));
//     let pMethod = document.createElement('p');
//     pMethod.appendChild(document.createTextNode(element.deliveryMethod));
    
//     const cardHold = document.createElement('div');
//      cardHold.className = 'cardHold';
//     cardHold.appendChild(pName);
//     cardHold.appendChild(pPrice);
//     cardHold.appendChild(pMethod);
//     container.appendChild(cardHold)
//    });
// }



const storage = localStorage.getItem('auth');

function save(value){
  localStorage.setItem('auth', value)
  return value
}

if(storage) {
    firstName.innerHTML += storage
}else{
    let name = prompt('what is your name?')
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