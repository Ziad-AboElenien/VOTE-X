const returnToElections=document.querySelector('.return-to-elections')
var goToHome=document.querySelector('.goto-home')



window.addEventListener('click' , function(e){
    if(e.target == returnToElections) window.location.href='../Elections/elections.html'
    else if(e.target == goToHome) window.location.href='../Home/index.html'

})