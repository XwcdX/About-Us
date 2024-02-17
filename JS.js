let text = document.getElementById('text');
let btn = document.getElementById('btn');
let header = document.querySelector('header');

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    text.style.marginRight=value * 7 +'px'; 
    text.style.marginTop=value * 1 + 'px';
    btn.style.marginTop=value * 1 +'px';
    header.style.top=value * .5 + 'px';
})
function card1(){
        document.querySelector('.popUpImage1').style.display= 'block';
    }

    function card2(){
            document.querySelector('.popUpImage2').style.display= 'block';
        }
    
    function card3(){
            document.querySelector('.popUpImage3').style.display= 'block';
        }
    function card4(){
        // var sound = new Audio();
        // sound.src = "image/sound-track.mp3"
        // sound.play()
        document.querySelector('.popUpImage4').style.display= 'block';
        }
    function card5(){
            document.querySelector('.popUpImage5').style.display= 'block';
        }


    document.querySelector('.popUpImage1 span').onclick=()=>{
        document.querySelector('.popUpImage1').style.display='none';
    }
    document.querySelector('.popUpImage2 span').onclick=()=>{
        document.querySelector('.popUpImage2').style.display='none';
    }
    document.querySelector('.popUpImage3 span').onclick=()=>{
        document.querySelector('.popUpImage3').style.display='none';
    }
    document.querySelector('.popUpImage4 span').onclick=()=>{
        document.querySelector('.popUpImage4').style.display='none';
    }
    document.querySelector('.popUpImage5 span').onclick=()=>{
        document.querySelector('.popUpImage5').style.display='none';
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry)=>{
            console.log(entry)
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            }else{
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el)=>observer.observe(el))

    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");
    hamburger.addEventListener("click", ()=>{
        hamburger.classList.toggle("active");
        menu.classList.toggle("active");
    })