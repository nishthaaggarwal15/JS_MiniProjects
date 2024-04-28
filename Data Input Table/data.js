document.querySelector("form").addEventListener("submit" , myfunction)

function myfunction(e){
    e.preventDefault()
    var name = document.querySelector("#name").value
    console.log(name)

    var age = document.querySelector("#age").value
    console.log(age)

    var education = document.querySelector("#education").value
    console.log(education)


    var tr = document.createElement("tr")

    var td1 = document.createElement("td")
    td1.innerText = name

    var td2 = document.createElement("td")
    td2.innerText = age

    var td3 = document.createElement("td")
    td3.innerText = education

    tr.append(td1 , td2 , td3)

    document.querySelector("tbody").append(tr)


}