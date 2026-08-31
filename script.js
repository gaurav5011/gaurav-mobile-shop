const menuBtn=document.querySelector('.menu-btn');
const nav=document.getElementById('navMenu');
if(menuBtn){menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));}
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.querySelectorAll('.enquire').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const item=btn.dataset.item;
    const msg=encodeURIComponent(`Namaste Gaurav Mobile Shop, mujhe ${item} ki jankari chahiye.`);
    window.open(`https://wa.me/917860558284?text=${msg}`,'_blank');
  });
});
document.getElementById('year').textContent=new Date().getFullYear();
