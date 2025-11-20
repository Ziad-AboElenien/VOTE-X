const backToCandidates=document.querySelector('#back-election')
var goToHome=document.querySelector('.goto-home')

window.addEventListener('click' , function(e){
    if(e.target == backToCandidates) window.location.href='../Elections/elections.html'
    else if(e.target == goToHome) window.location.href='../index.html'
})
