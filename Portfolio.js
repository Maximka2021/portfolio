let scrolled;
window.addEventListener('scroll', () =>{
scrolled = window.scrollY; 
if(scrolled >= 250){
    document.querySelector('.aboutAuthorHeader').style.opacity = '1';
    document.querySelector('.aboutAuthorText').style.opacity = '1';
    document.querySelector('.mySkillsText').style.opacity = '1';
    document.querySelector('.mySkillsList').style.opacity = '1';
} 

})

function transfer(){
    window.location.href = 'https://github.com/Maximka2021';
}

let inputName = document.querySelector('.inputName');
let inputEmail = document.querySelector('.inputEmail');
let inputMessage = document.querySelector('.inputMessage');
let submitBtn = document.querySelector('.messageButton')

submitBtn.addEventListener('click', () =>{
    if(inputName.value == '' || inputEmail.value == '' || inputMessage.value == ''){
        alert('Fields cannot be empty');
    }else{  
        inputName.value = '';
        inputEmail.value = '';
        inputMessage.value = '';
    }
})