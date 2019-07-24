 // nav menu btn toggle
 const menuBtn = document.querySelector('.menu-btn');
 const closeBtn = document.querySelector('.close-btn');
 const nav = document.querySelector('.nav-menu');
 const lists = document.querySelector('.nav-links');
 

 menuBtn.addEventListener('click', () => {
     nav.classList.add('open');
     lists.classList.add('open-event');
     menuBtn.style.visibility = 'hidden';
     closeBtn.style.visibility = 'visible';
 });

 closeBtn.addEventListener('click', () => {
    nav.classList.remove('open');
    lists.classList.remove('open-event');
    menuBtn.style.visibility = 'visible';
    closeBtn.style.visibility = 'hidden';
});


 const panels = document.querySelectorAll('.panel');
 const panelsArr = Array.from(panels);

 panelsArr.forEach(panel => panel.addEventListener('click', getCurrentName))

 function getCurrentName(element) {
     if(this) {
         
         panelsArr.forEach(panel => panel.classList.toggle('inactive'));

         this.classList.toggle('inactive');
         this.classList.toggle('active');
     }

 }


 /*
 // panel open
 const panels = document.querySelectorAll('.panel');
 const panelsArr = Array.from(panels);
 
 panelsArr.forEach(panel => panel.addEventListener('click',getCurrentName))

 function getCurrentName(element) { 
     const panel1 = document.querySelector('.panel1');
     const panel2 = document.querySelector('.panel2');
     const panel3 = document.querySelector('.panel3');
     const panel4 = document.querySelector('.panel4');
 
     console.log(this);
     if(this) {

         this.classList.toggle('active');

         if(this === panel1) {
         
         panel2.classList.toggle('inactive');
         panel3.classList.toggle('inactive');
         panel4.classList.toggle('inactive');    
         } else if (this === panel2) {
         panel1.classList.toggle('inactive');
         panel3.classList.toggle('inactive');
         panel4.classList.toggle('inactive'); 
         
         } else if (this === panel3) {
         panel1.classList.toggle('inactive');
         panel2.classList.toggle('inactive');
         panel4.classList.toggle('inactive'); 
         
         } else if (this === panel4) {
         panel1.classList.toggle('inactive');
         panel2.classList.toggle('inactive');
         panel3.classList.toggle('inactive'); 
         }

     }
     
 }

*/ 

 /*

 panels.forEach(panel => panel.addEventListener('click', wideOpen));

 function wideOpen(panel) {
     
     if (panel === document.activeElement) {
         panel.classList.toggle('active');
     } else {
         panel.classList.toggle('no-active');
     }

 }
 */