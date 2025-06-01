// getting the elements :
let title = document.getElementById("title")
let price = document.getElementById("price")
let taxes = document.getElementById("taxes")
let ads = document.getElementById("ads")
let discount = document.getElementById("discount")
let total = document.getElementById("total")
let count = document.getElementById("count")
let category = document.getElementById("category")
let create = document.getElementById("create")
let mood = "create";
let tmp;

//---------------------------------------------------------------------------------------

function gettotal(){
    if(price.value != "")
    {
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML = result;
        total.style.background = "green"
    }
    else{
        total.innerHTML = ""
        total.style.background = "rgb(194, 108, 4)";
    }
}

//---------------------------------------------------------------------------------------

 let dataProduct;
 if(localStorage.Product != null){
    dataProduct = JSON.parse(localStorage.Product) ;
 }else{
    dataProduct = [];
 }

create.onclick = function(){

    let newProduct = {
        title:title.value.toLowerCase(),
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value.toLowerCase()
    }
    if(title.value != "" && price.value != "" && category.value != "")
    {
        if(mood === "create")
        {
            if(newProduct.count > 1){
            for(let i = 0 ; i < newProduct.count ; i++)
                {
                    dataProduct.push(newProduct);
                }
            }
            else
            {
                dataProduct.push(newProduct);
            }
        }
    else{
        dataProduct[tmp] = newProduct;
        mood = "create";
        create.innerHTML = "Create";
        count.style.display = "block";
    }

    clearData();
}
    
    
    localStorage.setItem("Product" , JSON.stringify(dataProduct))
    showData();
}

//---------------------------------------------------------------------------------------

function clearData(){
    title.value = "" ;
    price.value = "" ;
    taxes.value = "" ;
    ads.value = "" ;
    discount.value = "";
    total.innerHTML = '';
    count.value = "" ;
    category.value = "";

}

//---------------------------------------------------------------------------------------

function showData(){
    gettotal();
    let table = '';
    for(let i = 0 ; i < dataProduct.length ; i++)
    {
        table += `<tr>
                        <td>${i}</td>
                        <td>${dataProduct[i].title}</td>
                        <td>${dataProduct[i].price}</td>
                        <td>${dataProduct[i].taxes}</td>
                        <td>${dataProduct[i].ads}</td>
                        <td>${dataProduct[i].discount}</td>
                        <td>${dataProduct[i].total}</td>
                        <td>${dataProduct[i].category}</td>
                        <td><button onclick="updateData(${i})" id="update">update</button></td>
                        <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
                    </tr> `
    }
    document.getElementById("tbody").innerHTML = table;
   
    let btndeleteAll = document.getElementById("deleteAll");
    if(dataProduct.length > 0){
        btndeleteAll.innerHTML = `<button onclick = "DeleteAll()" >Delete All(${dataProduct.length})</button>`;
    }
    else
    {
        btndeleteAll.innerHTML =''
    }
}
showData(); // for showing the data

//---------------------------------------------------------------------------------------

function deleteData(i){
    dataProduct.splice(i , 1)
    localStorage.Product = JSON.stringify(dataProduct)
    showData();
}

//---------------------------------------------------------------------------------------

function DeleteAll(){
    localStorage.clear();
    dataProduct.splice(0);
    showData();
}

//---------------------------------------------------------------------------------------

function updateData(i){
    title.value = dataProduct[i].title;
    price.value = dataProduct[i].price;
    taxes.value = dataProduct[i].taxes;
    ads.value = dataProduct[i].ads;
    discount.value = dataProduct[i].discount;
    category.value = dataProduct[i].category;
    gettotal();
    count.style.display = "none";
    create.innerHTML = "UPDATE";
    mood = "UPDATE";
    tmp = i;
    window.scroll({top:0 , behavior:"smooth",})
}

//---------------------------------------------------------------------------------------

let searchMood = 'title';

function getsearchMood(id)
{
    let search = document.getElementById("search")
    if( id == "searchTitle"){
        searchMood = 'title';
    }else{
        searchMood = 'category';
    }
    search.placeholder = "Search By " + searchMood;
    search.focus();
    search.value = "";
    showData();
    

}

function searchData(value)
{
    let table = '';
    if(searchMood == "title")
    {
        for(let i = 0 ; i <dataProduct.length ; i++)
        {
            if(dataProduct[i].title.includes(value.toLowerCase()))
            {
                table += `<tr>
                        <td>${i}</td>
                        <td>${dataProduct[i].title}</td>
                        <td>${dataProduct[i].price}</td>
                        <td>${dataProduct[i].taxes}</td>
                        <td>${dataProduct[i].ads}</td>
                        <td>${dataProduct[i].discount}</td>
                        <td>${dataProduct[i].total}</td>
                        <td>${dataProduct[i].category}</td>
                        <td><button onclick="updateData(${i})" id="update">update</button></td>
                        <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
                         </tr> `
            }
        }
    }
    else
    {
        for(let i = 0 ; i <dataProduct.length ; i++)
        {
            if(dataProduct[i].category.includes(value.toLowerCase()))
            {
                table += `<tr>
                        <td>${i}</td>
                        <td>${dataProduct[i].title}</td>
                        <td>${dataProduct[i].price}</td>
                        <td>${dataProduct[i].taxes}</td>
                        <td>${dataProduct[i].ads}</td>
                        <td>${dataProduct[i].discount}</td>
                        <td>${dataProduct[i].total}</td>
                        <td>${dataProduct[i].category}</td>
                        <td><button onclick="updateData(${i})" id="update">update</button></td>
                        <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
                         </tr> `
            }
        }
    }

    document.getElementById("tbody").innerHTML = table;
}

//________________________________________________________________________________________________
//------------------------------------------END OF Project----------------------------------------
//________________________________________________________________________________________________