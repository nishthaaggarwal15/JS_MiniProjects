function addtocart(){

    var x =  document.getElementById("head")
    var y = document.getElementById("img2")
  
    var tr = document.createElement("tr")
  
    var td1 = document.createElement("td")
    td1.innerText = x.innerText
  
    var td2 = document.createElement("img")
    td2.src = y.src
  
    tr.append(td1 , td2)
  
    document.querySelector("body").append(tr)
  
  
  
  }
  function addtocart1(){
  
  var x =  document.getElementById("head1")
  var y = document.getElementById("img3")
  
  var tr = document.createElement("tr")
  
  var td1 = document.createElement("td")
  td1.innerText = x.innerText
  
  var td2 = document.createElement("img")
  td2.src = y.src
  
  tr.append(td1 , td2)
  
  document.querySelector("body").append(tr)
  
  
  
  }