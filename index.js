
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


function myforeach(){
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

function myMap(){
    const milista = document.getElementById('milista');
    let array2 = ['1', '2', '3'];

    const fragment = document.createDocumentFragment();
    const template = document.querySelector('#template-lista').content;

    array2.map((e)=>{
        template.querySelector('span').textContent=e;
        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
    });

    milista.appendChild(fragment);
}

async function usoFetch(){
    const datax = await fetch('data1.json')
                        .then(datax => datax.json());
    console.log(datax);

}

function usoMap(){
    //recorre los elementos, los multiplica y finalmente filtra por los >5
    let arr = [1, 2, 3,4,5];
    let arr2 = arr.map(n => n*2).filter(n=> n>5);
    console.log(arr);
    console.log(arr2);
}

function usoMapotro(){
    var orders = [ { "name" : "chain", "description" : "necklace chain", "status": "shipped"} , {"name": "pen", "description" : "ball pen", "status": "shipped"}, {"name": "book", "description" : "travel diary", "status": "delivered"},{"name": "brush", "description" : "paint brush", "status": "delivered"}];
    console.log(orders); 
    var orderInfo = orders.map( function(order) {
    if( order.status === "delivered"){
        var info = { "orderName": order.name,
                    "orderDesc": order.description
                    }
        return info;
    }
    });
    console.log(orderInfo);
}

function usoMapobjeto() {
    let persons = [
        {firstname : "Lucas", lastname: "Reyes"},
        {firstname : "María", lastname: "Torres"},
        {firstname : "Juan", lastname: "Sánchez"}
      ];
    
    document.getElementById("spanfullname").innerHTML = 
    persons.map(function getFullName(item) {
        let fullname = [item.firstname,item.lastname].join(" ");
        return fullname;
      });

}


//Uso de map() en json para obtener lo buscado
async function readJSON(){
    const data = await fetch('data1.json')
                        .then(data => data.json());
    console.log(data);
    
    let data2 = data.map(function getScore(item){
        let theScore = item.score;
        return theScore;
    });
    
    console.log(data2);
}
