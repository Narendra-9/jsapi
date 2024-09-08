let rsubmit=document.querySelector('.rsubmit')
rsubmit.addEventListener('click',submitrdetails)


function submitrdetails(){
    let email=document.querySelector('#Email')
    let passsword1=document.querySelector('#password1')
    let passsword2=document.querySelector('#password2')
    if(passsword1.value==passsword2.value){
        localStorage.setItem(email.value,passsword1.value)
        window.location.href='../index.html'
        alert('Registered Successfully , Login to Continue ')

    }
    else{
        document.querySelector('.fmessage').innerText="Password didn't match ! Please Check";
        document.querySelector('.fmessage').style.color='red';
    }
    
}

