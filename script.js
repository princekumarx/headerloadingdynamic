let header = document.querySelector('header');


window.addEventListener('load',()=>{
     fetch('/headerloadingdynamic/header.html').then(res => res.text()).then((html)=>{
         header.innerHTML = html;
     })
})
