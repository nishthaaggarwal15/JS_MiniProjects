var arr = [];

function addtocart1(){

    let item1 = document.getElementById("cont1")
    let imge1 = document.getElementById("img1")

    var localitem1 = document.createElement("p")
localitem1.innerText = item1.innerText;

var localimage1 = document.createElement("img")
localimage1.src = imge1.src

var obj1 = {}

obj1.name = localitem1.innerText;
obj1.image  = localimage1.src

arr.push(obj1 )

localStorage.setItem("items" , JSON.stringify(arr))


}

function addtocart2(){


    let item2 = document.getElementById("cont2")
    let imge2 = document.getElementById("img2")

    var localitem2= document.createElement("p")
localitem2.innerText = item2.innerText;

var localimage2 = document.createElement("img")
localimage2.src = imge2.src

var obj2 = {}

obj2.name = localitem2.innerText;
obj2.image  = localimage2.src

arr.push(obj2 )

localStorage.setItem("items" , JSON.stringify(arr))

}


function addtocart3(){

let item3 = document.getElementById("cont3")
let imge3 = document.getElementById("img3")

var localitem3= document.createElement("p")
localitem3.innerText = item3.innerText;

var localimage3 = document.createElement("img")
localimage3.src = imge3.src

var obj3 = {}

obj3.name = localitem3.innerText;
obj3.image  = localimage3.src

arr.push(obj3 )

localStorage.setItem("items" , JSON.stringify(arr))

}

