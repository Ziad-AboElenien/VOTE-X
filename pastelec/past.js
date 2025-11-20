const backToCandidates=document.querySelector('#back-election')
const viewResultBtn=document.querySelector('.view-result-btn')
var goToHome=document.querySelector('.goto-home')

window.addEventListener('click' , function(e){
    if(e.target == backToCandidates) window.location.href='../Elections/elections.html'
    else if(e.target == goToHome) window.location.href='../Home/index.html'
    else if(e.target == viewResultBtn) window.location.href='../pastelecresult/pastresult.html'
})
