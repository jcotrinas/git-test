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

/* 
1) localStorage guarda incluso cuando se cierran las pestañas del navegador, incluso cuando se reinicia la máquina.
2) es accesible siempre en cuando se tenga el mismo origen: a) mismo protocolo, b) mismo dominio, c) mismo puerto. La URL puede ser diferente.
c) métodos localStorage y sessionStorage: setItem(key, value) getItem(key), removeItem(key), clear() <borra todo>.
3) sessionStorage sobrevive a la actualización de la página (pero no al cierre de pestaña)
*/

function getNombre(){
    const btn2 = document.querySelector('#btn2');
    sessionStorage.user = JSON.stringify({name: "Juan"});
    // luego podemos recuperar
    let user = JSON.parse( sessionStorage.user );
    alert( user.name ); // Juan
}

function arrayforEach(){
    const btn3= document.querySelector('#btn3');
    //para recorrer un array
    const array1 = ['Hola', 'y adiós'];
    array1.forEach(e => alert(e));
}

function mapforEach(){
    const milista = document.getElementById('milista');
    let array1 = ['Uno', 'Dos', 'Tres'];

    const fragment = document.createDocumentFragment();
    const template = document.querySelector('#template-lista').content;

    array1.forEach((e) => {
        template.querySelector('span').textContent=e;
        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
    });

    milista.appendChild(fragment);
    
}