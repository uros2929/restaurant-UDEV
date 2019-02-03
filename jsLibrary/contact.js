let findUsDiv=document.getElementById('findUs'),
    openingHours=document.getElementById('openingHours'),
    googleMap=document.getElementById('googleMap');

    addAnimationOnScroll();
function addAnimationOnClick(){
    googleMap.style.animation="slideInMap 1s linear"
    setInterval(()=>{
        findUsDiv.style.animation="";
        openingHours.style.animation="";
        googleMap.style.animation="";
    },3000)
}
function addAnimationOnScroll(){
    window.addEventListener('scroll',()=>{
        if ( window.scrollY>=2301) {
            googleMap.style.animation="scaleInMap 1s both";
            googleMap.style.opacity="1";
        }
        if ( window.scrollY<=2300) {
            googleMap.style.animation="scaleOutMap 1s both";
            googleMap.style.opacity="0";
        }
        if (window.innerWidth <= 420) {
            googleMap.style.animation="";
            googleMap.style.opacity="1";
        }
    })
}
