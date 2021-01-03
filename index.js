function myFunction(){
    const btn = document.getElementById('btn');
    if (localStorage.getItem('btn')==="me has hecho click"){
        btn.textContent="no me has hecho click";
        btn.style.background="green";
        btn.style.color="white";
        localStorage.setItem('btn',btn.textContent);
    } else {
        btn.textContent="me has hecho click";
        btn.style.color="white";
        btn.style.background="red";
        localStorage.setItem('btn',btn.textContent);
    }
    
}