//For login page
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const login = document.querySelector('#login')



login.addEventListener('submit', loginFunction)

function loginFunction(e){
    if(input1.value == 'admin' && input2.value == 'admin'){
        location.replace('pp.html')
    }
    e.preventDefault()
}