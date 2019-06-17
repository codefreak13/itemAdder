//getting the form
const form = document.querySelector('form');
//getting the div for the name display
let firstName = document.querySelector('#firstName');
//getting the product 
const product = document.querySelector('#product');
//getting the product price
const price = document.querySelector('#price');
//getting the delivery method
const delivery = document.querySelector('#delivery');
// getting the container for the tasks
const container = document.querySelector('#container');

//calling the eventlistener function
fire()

function fire() {
  //adding event listener to the form
  form.addEventListener('submit', tasker);
  //event listener for removing from UI
  container.addEventListener('click', removeFromUI);
  //event listener for persisting the ul content on reload 
  //document.addEventListener('DOMContentLoaded', persistor);
}

//tasker function for when the form is submitted
function tasker(e) {

  let card = {
    productName: product.value,
    productPrice: price.value,
    deliveryMethod: delivery.value
  };

  // container.style.display = 'flex';

  //calling the addTask to add the inputted tasks to the ui
  addTask();

  //saving the tasks to the local storage
  saveToLS(card);

  //clearing the values after saving to local storage
  product.value = '';
  price.value = '';
  delivery.value = '';
  //To prevent the form from reloading when submitted
  e.preventDefault()
}

//The addTask function for adding inputted tasks to ui
function addTask() {
  //conditional to ensure task values are inputted
  if (product.value == '' || price.value == '' || delivery.value == '') {
    alert('please fill in the missing details')
  } else {
    //creating a p tag
    let pName = document.createElement('p');
    //adding the product value to the p tag
    pName.appendChild(document.createTextNode(product.value));
    let pPrice = document.createElement('p');
    pPrice.appendChild(document.createTextNode(price.value));
    let pMethod = document.createElement('p');
    pMethod.appendChild(document.createTextNode(delivery.value));
    //create a delete option
    let deleteLink = document.createElement('img');
    deleteLink.className = 'delete';
    // adding attribute
    deleteLink.setAttribute('src', 'images/cancel.svg');
    let pDelete = document.createElement('p');
    pDelete.className = 'pDelete';
    pDelete.appendChild(deleteLink);
    //creating a div to house the created p tags
    let cardHold = document.createElement('div');
    //assigning a class to the div
    cardHold.className = 'cardHold';
    //appending the p tags to the created div
    cardHold.appendChild(pName);
    cardHold.appendChild(pPrice);
    cardHold.appendChild(pMethod);
    cardHold.appendChild(pDelete);
    //appending the div to a div in the ul for display
    container.appendChild(cardHold);
  }
}

//removing card from UI
function removeFromUI(e) {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.parentElement.remove()
  };
  removeFromLS(e.target.parentElement.parentElement)
  // console.log(e.target.parentElement.parentElement.children[0].textContent)
}

//Removing card from local storage
function removeFromLS(task) {
  let savedData = JSON.parse(localStorage.getItem('product'));
  savedData.forEach(function (item, index) {
    if (task.children[0].textContent === item.productName) {
      savedData.splice(index, 1)
    }
  })
  localStorage.setItem('product', JSON.stringify(savedData))
}

//saving to local storage
function saveToLS(value) {
  //declaring an empty array to house the object created
  let productArray = [];
  //a conditional for saving and retrieving data from trom the local storage
  if (product.value !== '' || price.value !== '' || delivery.value !== '') {
    if (localStorage.getItem('product') == null) {
      productArray.push(value);
      //stringify the array before saving to local storage
      localStorage.setItem('product', JSON.stringify(productArray));
    } else {
      //parsing the stringified arrays back to JSON array
      productArray = JSON.parse(localStorage.getItem('product'));
      productArray.push(value);
      localStorage.setItem('product', JSON.stringify(productArray));
    }
  }
}

//Persisting the ul contents when reloaded
function persistor() {
  let localArray;
  //conditional to check if the local storage contains 'product'
  if (localStorage.getItem('product') == null) {
    localArray = [];
  } else {
    localArray = JSON.parse(localStorage.getItem('product'));
  }
  //  container.style.display = 'flex';
  //using forEach to loop through the local storage and display on ui
  localArray.forEach(function (element) {
    let pName = document.createElement('p');
    pName.appendChild(document.createTextNode(element.productName));
    let pPrice = document.createElement('p');
    pPrice.appendChild(document.createTextNode(element.productPrice));
    let pMethod = document.createElement('p');
    pMethod.appendChild(document.createTextNode(element.deliveryMethod));
    //create a delete option
    let deleteLink = document.createElement('img');
    deleteLink.className = 'delete';
    // adding attribute
    deleteLink.setAttribute('src', 'images/cancel.svg');
    let pDelete = document.createElement('p');
    pDelete.className = 'pDelete';
    pDelete.appendChild(deleteLink);
    //creating a div to house the created p tags
    let cardHold = document.createElement('div');

    cardHold.className = 'cardHold';
    cardHold.appendChild(pName);
    cardHold.appendChild(pPrice);
    cardHold.appendChild(pMethod);
    cardHold.appendChild(pDelete)

    container.appendChild(cardHold)
  });
}

//Saves this value retrieved local storage
// const storage = localStorage.getItem('auth');

// //saving to local storage as well as returninng the value 
// function save(value){
//   localStorage.setItem('auth', value)
//   return value
// }

// /*conditional to check if in local storage. 
// If in LS, it displays the LS value stored in storage*/
// if(storage) {
//     firstName.innerHTML += storage
// }else{
//     //else it prompts for input
//     let name = prompt('what is your name?')
//     //checks if input value is null or empty and displays 'welcome'
//     if (name == null || name == ''){
//         firstName.innerHTML = 'Welcome'
//     }  else {
//         /*else displays the content in 'firstName' p tag and the
//          prompt value saved to local storage*/
//         firstName.innerHTML += save(name)
//     }
// }

//same function as above but shorter
if (localStorage.getItem('name') == null) {
  let name = prompt('what is your name?');
  localStorage.setItem('name', name);
  firstName.innerHTML += name
} else {
  firstName.innerHTML += localStorage.getItem('name')
}

//This function redirects out of the current page ie logging out
function logOut() {
  location.replace('logout.html')
}

//This function opens the chat interface when the chat button in the ui is clicked.  It is called in the HTML
function chat() {
  document.querySelector('#hidden').style.display = 'block'
}

//this function hides the chat interface
function hideChat() {
  document.querySelector('#hidden').style.display = 'none'
}

//clearing tasks
function clearTasks() {
  container.innerHTML = '';
  localStorage.removeItem('product')
}