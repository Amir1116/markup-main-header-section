//===============================html elements
const documentBody = document.body;

//=========================functions =====================
function removeModalContainer(){
    const modalRemove = document.querySelector('.modal-licence');
    if(modalRemove){
        modalRemove.remove();
    } 
}

function displayNone(el){
    el.style.display = 'none';
}

//==========================modal show map========

const locationBlock = document.querySelector('.header__location-block');
locationBlock.addEventListener('click',()=>{
    removeModalContainer();
    console.log('map');
    const mapModal = document.createElement('div');
    mapModal.classList.add('modal-licence');
    mapModal.innerHTML = `<div class="google-map-container">
                            <iframe class="active-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1271.7688528468577!2d30.489146166234885!3d50.39381589637643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c8dab3f4759d%3A0x67dced8fbfa28384!2z0YPQuy4g0JLQsNGB0LjQu9GM0LrQvtCy0YHQutCw0Y8sIDMwLCDQmtC40LXQsiwg0KPQutGA0LDQuNC90LAsIDAyMDAw!5e0!3m2!1sru!2sru!4v1622566330235!5m2!1sru!2sru"  loading="lazy"></iframe>
                        </div>    
    `
    mapModal.addEventListener('click',(e)=>{
        displayNone(e.target);
    })
    documentBody.appendChild(mapModal);
    
}
)
//==========================================
//========================================close menu
const closeBtn = document.querySelector('.menu-close-icon-img');
const menu = document.querySelector('.header-navigation-block')
closeBtn.addEventListener('click',()=>{
    menu.classList.add('close-menu');
})
const showMenuBtn = document.querySelector('.menu-show-icon-img');
console.log(showMenuBtn);
showMenuBtn.addEventListener('click',()=>{
    console.log('show menu')
    menu.classList.remove('close-menu');
})


//=============================================
//========================================= active link
const mainNavLinks = document.querySelectorAll('.main-navigation-block__link');
//event activate link
mainNavLinks.forEach((link,idx,arr)=>{    
    link.addEventListener('click',(e)=>{
        arr.forEach((item)=>{
            item.classList.remove('active-link');
        })
        // console.log(e)
        e.target.classList.add('active-link')
    })
});
//=================================================

//=============================================slider
const imagesSrc = [
    `./assets/img/licence/licence-1.jpg`,
    `./assets/img/licence/licence-2.jpg`,
    `./assets/img/licence/licence-3.jpg`,
    `./assets/img/licence/licence-4.jpg`,
    `./assets/img/licence/licence-5.jpg`,
    `./assets/img/licence/licence-6.jpg`,
]
const sliderImagesItem = document.querySelectorAll('.slider-item');
const slide1 = document.getElementById('slide1');
const slide2 = document.getElementById('slide2');
const slide3 = document.getElementById('slide3');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

const sliderMove = () =>{
    let count1 = 0;   
    let count2 = 1;   
    let count3 = 2;   
    slide1.src = imagesSrc[count1];
    slide2.src = imagesSrc[count2];
    slide3.src = imagesSrc[count3];  
    prevBtn.addEventListener('click',()=>{      
        prevSlide();     
    });
    nextBtn.addEventListener('click',()=>{
        nextSlide();
    })
    function prevSlide(){
        count1-=1;       
        count2-=1;       
        count3-=1;       
        if(count1<0){
            count1=imagesSrc.length-1;           
            count2=imagesSrc.length-2;
            count3=imagesSrc.length-3;
        }
        if(count2<0){
            count1=imagesSrc.length-1;           
            count2=imagesSrc.length-2;
            count3=imagesSrc.length-3;
            
        }
        if(count3<0){
            count1=imagesSrc.length-3;           
            count2=imagesSrc.length-2;
            count3=imagesSrc.length-1;
        }    
        slide1.src = imagesSrc[count1];
        slide2.src = imagesSrc[count2];
        slide3.src = imagesSrc[count3];  
    }
    function nextSlide(){
        count1+=1;       
        count2+=1;       
        count3+=1;       
        if(count1>imagesSrc.length-1){
            count1=0;           
            count2=1;
            count3=2;
        }
        if(count2>imagesSrc.length-1){
            count1=imagesSrc.length-1;           
            count2=0;
            count3=1;            
        }
        if(count3>imagesSrc.length-1){
            count1=2;           
            count2=1;
            count3=0;
        }    
        slide1.src = imagesSrc[count1];
        slide2.src = imagesSrc[count2];
        slide3.src = imagesSrc[count3]; 
      
    }
}
sliderMove();
//=============================================

//=================event licence-modal

sliderImagesItem.forEach((item)=>{
    item.addEventListener('click',(e)=>{ 
        removeModalContainer();
        // const modalRemove = document.querySelector('.modal-licence');
        // if(modalRemove){
        //    removeEl(modalRemove);
        // }        
            const imgSrc = e.target.getAttribute('src');                   
            const modalDiv = document.createElement('div');
            modalDiv.classList.add('modal-licence');
            modalDiv.innerHTML = `<img class="modal-image" src="${imgSrc}" alt="licence" />`       
            documentBody.appendChild(modalDiv);
            const modalLicence = document.querySelector('.modal-licence');            
            modalLicence.addEventListener('click',(e)=>{             
               displayNone(e.target);
            })     
              
    })
});
