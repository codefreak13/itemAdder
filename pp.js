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
    
//adding event listener to the form
form.addEventListener('submit', saveTask)
//saveTask function fires when form is submitted
function saveTask(e){
    e.preventDefault()


//setting the values to an object
    let card = {
        productName: product,
        productPrice: price,
        deliveryMethod: delivery
    };
//declaring an empty array to house the object created
    let productArray = [];
//a conditional for saving and retrieving data from trom the local storage
   if(product !== '' || price !== '' || delivery !== ''){
    if(localStorage.getItem('product') == null){
        productArray.push(card);
        localStorage.setItem('product', JSON.stringify(productArray));
    }else {
        productArray = JSON.parse(localStorage.getItem('product'));
        productArray.push(card);
        localStorage.setItem('product', JSON.stringify(productArray))
    }}
    //getting the card div
    
    const cardHold = document.querySelector('.cardHold');
  
let savedData = JSON.parse(localStorage.getItem('product'));

 let cards = savedData.map((product)=>{
     let pName = document.createElement('p');
     pName.textContent = product.productName;
     let pPrice = document.createElement('p');
     pPrice.textContent = product.productPrice;
     let pMethod = document.createElement('p');
     pMethod.textContent = product.deliveryMethod;
     cardHold.appendChild(pName);
     cardHold.appendChild(pPrice);
     cardHold.appendChild(pMethod)
    // productArray2.push(product.productName, product.productPrice, product.deliveryMethod)
})

// let nameArr = [];
// if(JSON.parse(localStorage.getItem('name') == null)){
    
//     nameArr.push(name)
//     localStorage.setItem('name', JSON.stringify(nameArr))
// }else{
//     nameArr.push(name)
//     localStorage.setItem('name', JSON.stringify(nameArr))
// }
}

const storage = localStorage.getItem('auth');

function save(value){
  localStorage.setItem("auth", value)
  return value
}

if(storage) {
    firstName.innerHTML = `${storage} logout`
}else{
    let name = prompt('what is your name?');
    if (name == null || name == ''){
        firstName.style.display = 'none'
    }  else {
        firstName.innerHTML = `${save(name)} logout`
    }
}
