var chatBtn= document.querySelector('#askBtn')
var chatModel=document.querySelector('.chat-modal')
var closeBtn=document.querySelector('.closeBtn')
var signBtn =document.querySelector('#signBtn')
var gotoAbout=document.querySelector('.goto-about')
var gotoAbout2=document.querySelector('.learnBtn')
var goToElections =document.querySelector('.goto-elections')
const voteNow=document.querySelector('.home-vote-now')


signBtn.addEventListener('click' , function(){
    window.location.href = '../Signin/signin.html' ;
    console.log("msamsa")
})

chatBtn.addEventListener('click' ,function(){
    chatModel.classList.toggle("d-none")
})

window.addEventListener('click' ,function(e){
    if(e.target == closeBtn)
    {
        chatModel.classList.add("d-none")
    }
    else if(e.target == gotoAbout2){window.location.href='../About/about.html'}
    else if(e.target == gotoAbout){window.location.href='../About/about.html' ; console.log("ahoo")}
    else if(e.target == goToElections){window.location.href='../Elections/elections.html'}
    else if(e.target == voteNow){window.location.href='../Elections/elections.html'}
})
window.addEventListener('keydown' ,function(e){
    if(e.key == 'Escape')
    {
        chatModel.classList.add("d-none")
    }
})