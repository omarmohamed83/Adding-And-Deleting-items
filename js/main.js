var productName= document.getElementById("pn")
var productPrice= document.getElementById("pp")
var productCategory= document.getElementById("pc")
var productDescription= document.getElementById("pd")

var allProducts = []
if(localStorage.getItem("allProducts")!= null){
    allProducts=JSON.parse(localStorage.getItem('allProducts'))
    displayAllProduct()
}



function addNewProduct(){
    if(document.getElementById('addButton').innerHTML =='ADD'){
        var product = {
            name: productName.value,
            price:productPrice.value,
            category:productCategory.value,
            desc:productDescription.value,
        }
        allProducts.push(product)

    localStorage.setItem('allProducts' , JSON.stringify(allProducts))

    displayAllProduct()
    clearFrom()

    }

    else{

    }

   

   
}

function displayAllProduct (){
    var cartoona = ''
    for (var i = 0 ; i<allProducts.length ; i++){
        cartoona+=` <tr>
    <td>${i+1}</td>
    <td>${allProducts[i].name}</td>
    <td>${allProducts[i].price}</td>
    <td>${allProducts[i].category}</td>
    <td>${allProducts[i].desc}</td>
   
    <td><button class="btn btn-danger" onclick='deleteElement(${i})'>delete</button></td>






</tr>`}

document.getElementById("tableData").innerHTML= cartoona


}

function clearFrom(){
    productName.value='';
    productPrice.value='';
   
    productCategory.value='';
    productDescription.value='';

}

function deleteElement(index){
    allProducts.splice(index,1)
    localStorage.setItem('allProducts',JSON.stringify(allProducts))
    displayAllProduct()
}


function searchElement(){
    var cartona = ''
    var term = document.getElementById("searchInput").value;
  for  (var i = 0 ; i<allProducts.length ; i++){
    if(allProducts[i].name.toLowerCase().includes(term.toLowerCase())){
    
        cartona +=` <tr>
    <td>${i+1}</td>
    <td>${allProducts[i].name}</td>
    <td>${allProducts[i].price}</td>
    <td>${allProducts[i].category}</td>
    <td>${allProducts[i].desc}</td>
    <td><button class="btn btn-warning">update</button></td>
    <td><button class="btn btn-danger" onclick='deleteElement(${i})'>delete</button></td>
    </tr>`

    

    
    }
  
    document.getElementById('tableData').innerHTML=cartona
    
  }

  


}







 



  







