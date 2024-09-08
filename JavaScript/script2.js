let loginbtn=document.querySelector('.loginbtn')
loginbtn.addEventListener('click',loginfunction)

function loginfunction(){
    let email=document.querySelector('#email')
    let Password=document.querySelector('#password')

    if(Object.keys(localStorage).includes(email.value)){
        if(localStorage[email.value]==Password.value){
            window.location.href='../Home.html';
            email.value=''
            Password.value=''
        }
        else{
            document.querySelector('.fmessage').innerText='Invalid Password!'
            document.querySelector('.fmessage').style.color='red'
        }
            
    }
    else{
        document.querySelector('.fmessage').innerText="User doesn't exist, Resgister to login!"
        document.querySelector('.fmessage').style.color='red'
    }
}

// email.addEventListener('input',()=>{
//     document.querySelector('.fmessage').remove()
// })