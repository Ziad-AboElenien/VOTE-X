const backToCandidates=document.querySelector('#back-election')
const backToelections=document.querySelector('.back-all-elections')
var goToHome=document.querySelector('.goto-home')

window.addEventListener('click' , function(e){
    if(e.target == backToCandidates) window.location.href='../Elections/elections.html'
    else if(e.target == goToHome) window.location.href='../Home/index.html'
    else if(e.target == backToelections) window.location.href='../pastelec/past.html'
})
