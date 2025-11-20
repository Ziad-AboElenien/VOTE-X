const backToCandidates=document.querySelector('#back-election')
const conToVer=document.querySelector('.continue-btn')
var goToHome=document.querySelector('.goto-home')


window.addEventListener('click' , function(e){
    if(e.target == backToCandidates) window.location.href='../Elections/elections.html'
    else if(e.target == conToVer) window.location.href='../Verifyvote/verifyvote.html'
    else if(e.target == goToHome) window.location.href='../Home/index.html'

})

var selected ;
function selectOne(a)
{
    if(selected)
    {
        selected.classList.remove('active')
        selected.querySelector('.selec-state').classList.add('d-none')
    }
    
    selected=a
    selected.classList.toggle('active')
    selected.querySelector('.selec-state').classList.toggle('d-none')
    conToVer.classList.add('bg-primary')
    conToVer.classList.remove('bg-secondary-subtle')
}
