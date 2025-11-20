var xHome=document.querySelector(".x-home")
var enterId =document.querySelector('.enter-id')
var continueBtn=document.querySelector('#continue-btn')
var camVerify=document.querySelector('.cam-verify')
var takeBtn=document.querySelector(".take-photo")
var camChot=document.querySelector('.cam-chot')
var retakeBtn=document.querySelector('.retake-btn')
var verifyBtn=document.querySelector('.verify-btn')
var verfSuccess=document.querySelector('.verf-success')
var backToId=document.querySelector(".backid-btn")
var verfContent =document.querySelector('.verification-content')
const successBox=document.querySelector('.verf-success')
const letGoToVote=document.querySelector('.lets-vote')


xHome.addEventListener('click',function(){window.location.href='../index.html'})

continueBtn.addEventListener('click' ,function(){
    enterId.classList.toggle("d-none")
    camVerify.classList.toggle("d-none")
})

takeBtn.addEventListener('click' ,function(){
    camVerify.classList.toggle("d-none")
    camChot.classList.toggle("d-none")
})

camChot.addEventListener('click' , function(e){
    if(e.target == backToId)
    {
        camChot.classList.toggle("d-none")
        enterId.classList.toggle("d-none")
    }
    else if(e.target == retakeBtn)
    {
        camChot.classList.toggle("d-none")
        camVerify.classList.toggle("d-none")
    }
    else if(e.target == verifyBtn)
    {
        verfContent.classList.toggle("d-none")
        verfSuccess.classList.toggle("d-none")
    }
})

successBox.addEventListener('click' , function(e){
    if(e.target == letGoToVote) window.location.href='../Elections/elections.html'
})