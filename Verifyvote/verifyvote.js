const backToCandidates=document.querySelector('#back-election')
const confirmBtn=document.querySelector('.confirm-btn')
const backToSelect=document.querySelector('.back-to-verf-btn')
var goToHome=document.querySelector('.goto-home')


window.addEventListener('click' , function(e){
    if(e.target == backToCandidates) window.location.href='../Elections/elections.html'
    else if(e.target == backToSelect) {window.location.href='../Voting/vote.html'}
    else if(e.target == confirmBtn) {window.location.href='../successvote/success.html'}
    else if(e.target == goToHome) window.location.href='../index.html'

})

