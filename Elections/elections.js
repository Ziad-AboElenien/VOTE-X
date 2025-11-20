var goToHome=document.querySelector('.goto-home')
const voteNowBtn=document.querySelector('.vote-now-btn')
const viewCandidatesBtn=document.querySelector('.view-candidates-btn')
const viewCandiadteBtn=document.querySelector('.view-upcoming-candidates-btn')
const pastViewCandidate=document.querySelector('.past-view-candidate-btn')
const pastViewResult=document.querySelector('.past-view-results-btn')






window.addEventListener('click' , function(e){
    if(e.target == goToHome)
    {
        window.location.href='../Home/index.html'
    }
    else if(e.target == voteNowBtn) this.window.location.href='../Voting/vote.html'
    else if(e.target == viewCandidatesBtn) this.window.location.href='../Voting/vote.html'
    else if(e.target == viewCandiadteBtn) window.location.href='../upcoming/upcoming.html'
    else if(e.target == pastViewCandidate) window.location.href='../pastelec/past.html'
    else if(e.target == pastViewResult) window.location.href='../pastelecresult/pastresult.html'
})