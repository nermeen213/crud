
var productNameInput =document.getElementById("productName");
var productpriceInput =document.getElementById("productprice");
var productCategoryInput =document.getElementById("productCategory");
var productdescribationInput =document.getElementById("productdescribation");
var searchInput=document.getElementById("searchInput");
var updateBtn=document.getElementById("updatebtn");
var addBtn=document.getElementById("addbtn");
var indexProduct=0
var patternmessage= document.getElementById("pattern");

var productcontainer =[

]
if (localStorage.getItem("products")!=null){
    productcontainer=JSON.parse(localStorage.getItem("products"));
    displayData()
}








function addProduct(){
    



        var products ={
            name:productNameInput.value,
            price:productpriceInput.value,
            category:productCategoryInput.value,
            describation:productdescribationInput.value,
    
    
    
        }
    
        // document.getElementById("data").innerHTML=productName+productPrice+productCategory+productdescribation
    
    
        productcontainer.push(products)
        localStorage.setItem("products",JSON.stringify(productcontainer));
        
        
        console.log(productcontainer);
        displayData()
        clear()
    

    
    
   



   
    

    


}




function displayData(){
    box="";
    for(var i =0 ; i<productcontainer.length ;i++){
        box+=`
        <tr>
        <td> ${productcontainer[i].name}  </td>
        <td>  ${productcontainer[i].price} </td>
        <td>  ${productcontainer[i].category}  </td>
        <td>  ${productcontainer[i].describation}   </td>
        <td>
        <button class="btn btn-outline-warning btn-sm" onclick="setitem(${i})">update</button>
        <button class="btn btn-outline-danger btn-sm" onclick="deleteProduct(  ${i}   )">Delete</button>
        </td>
        </tr>
        `
    }
    document.getElementById("databox").innerHTML=box ;
}





function deleteProduct(elementNumber){
    productcontainer.splice(elementNumber,1);
    console.log(productcontainer);
    localStorage.setItem("products",JSON.stringify(productcontainer));
    displayData()


}



function search(){
    var term = searchInput.value.toLowerCase();
    box="";
    for(var i =0 ; i<productcontainer.length ;i++){
        if(productcontainer[i].name.toLowerCase().includes( term )){
            box+=`
            <tr>
            <td> ${productcontainer[i].name}  </td>
            <td>  ${productcontainer[i].price} </td>
            <td>  ${productcontainer[i].category}  </td>
            <td>  ${productcontainer[i].describation}   </td>
            <td>
            <button class="btn btn-outline-warning btn-sm">update</button>
            <button class="btn btn-outline-danger btn-sm" onclick="deleteProduct(  ${i}   )">Delete</button>
            </td>
            </tr>
            `


        }
       
    }
    document.getElementById("databox").innerHTML=box ;

   


}















function searchData(){

    var term =searchInput.value.toLowerCase();
    box="";

    for(var i =0 ; i<productcontainer.length ;i++){

        if(productcontainer[i].name.toLowerCase().includes(  term  )){
            box+=`
            <tr>
            <td> ${productcontainer[i].name}  </td>
            <td>  ${productcontainer[i].price} </td>
            <td>  ${productcontainer[i].category}  </td>
            <td>  ${productcontainer[i].describation}   </td>
            <td>
            <button class="btn btn-outline-warning btn-sm">update</button>
            <button class="btn btn-outline-danger btn-sm" onclick="deleteProduct(  ${i}   )">Delete</button>
            </td>
            </tr>
            `

        }
       
    }
    document.getElementById("databox").innerHTML=box ;

    
  
}







function clear(){

    productNameInput.value="";
    productpriceInput.value="";
    productCategoryInput.value="";
    productdescribationInput.value="";


}


function setitem(index) {
    indexProduct=index;
    var currentProduct = productcontainer[index];
   productNameInput.value=currentProduct.name ;
   productpriceInput.value=currentProduct.price;
   productCategoryInput.value=currentProduct.category;
   productdescribationInput.value=currentProduct.describation;
   updateBtn.classList.remove("d-none")
   addBtn.classList.add("d-none")




}

function updateProduct(){
    var products ={
        name:productNameInput.value,
        price:productpriceInput.value,
        category:productCategoryInput.value,
        describation:productdescribationInput.value,



    }
    productcontainer.splice(indexProduct,1,products)
    localStorage.setItem("products",JSON.stringify(productcontainer));
    displayData()
    updateBtn.classList.add("d-none")
    addBtn.classList.remove("d-none")
    
   


}




let nameInputTouched =false;
let priceInputTouched =false;
let categoryInputTouched =false;
let describationInputTouched =false;

productNameInput.addEventListener('focus',()=>{
    nameInputTouched=true;
})
productpriceInput.addEventListener('focus',()=>{
    priceInputTouched=true ;
})
productCategoryInput.addEventListener('focus',()=>{
    categoryInputTouched=true;
})
productdescribationInput.addEventListener('focus',()=>{
    describationInputTouched=true;
})





function validationCurd(){
  if(nameInputTouched){
    if(!nameValidation()){
        document.getElementById('namepattern').classList.remove('d-none')
        productNameInput.classList.remove('is-valid')
        productNameInput.classList.add('is-invalid')
      }else{
         document.getElementById('namepattern').classList.add('d-none')
       productNameInput.classList.add('is-valid')
        productNameInput.classList.remove('is-invalid')
      }
  }
  if(priceInputTouched){
    if(!priceValidation()){
        document.getElementById('pricepattern').classList.remove('d-none')
        productpriceInput.classList.remove('is-valid')
        productpriceInput.classList.add('is-invalid')
    
      }else{
        document.getElementById('pricepattern').classList.add('d-none')

        productpriceInput.classList.add('is-valid')
        productpriceInput.classList.remove('is-invalid')
      }
  }
  if(categoryInputTouched){
    if(!categoryValidation()){
        document.getElementById('categorypattern').classList.remove('d-none')
        productCategoryInput.classList.remove('is-valid')
        productCategoryInput.classList.add('is-invalid')
      }else{
        document.getElementById('categorypattern').classList.add('d-none')
        productCategoryInput.classList.add('is-valid')
        productCategoryInput.classList.remove('is-invalid')
      }
  }

  if(describationInputTouched){
    if(!describationValidation()){
        document.getElementById('describationpattern').classList.remove('d-none')
        productdescribationInput.classList.remove('is-valid')
        productdescribationInput.classList.add('is-invalid')
       
      }else{
        document.getElementById('describationpattern').classList.add('d-none')
        productdescribationInput.classList.add('is-valid')
        productdescribationInput.classList.remove('is-invalid')
      }
  }
 
  







    if(
        nameValidation()&&
        priceValidation()&&
        categoryValidation()&&
        describationValidation()
    ){
        document.getElementById('addbtn').removeAttribute('disabled')

    }else{
        document.getElementById('addbtn').setAttribute('disabled',true)
    }

}



function nameValidation(){
    return(/^[a-zA-Z]{3,50}$/.test(document.getElementById('productName').value))
    
}



function priceValidation(){
    return(/^[0-9]{1,10}$/.test(document.getElementById('productprice').value))

}
function categoryValidation(){
    
    return(/^[a-zA-Z]{3,50}$/.test(document.getElementById('productCategory').value))

}
function describationValidation(){
    return(/^[a-zA-Z0-9_.-]*$/.test(document.getElementById('productdescribation').value))

    
}














// function regexNAME(){
//     var regexNAME = /^[a-z][A-Z]{2,10}$/
//     var text = productNameInput.value;
//     if(regexNAME.test(text)==true){
//         productNameInput.classList.add("is-valid")
//         productNameInput.classList.remove("is-invalid")
//         patternmessage.classList.add("d-none")

//         return regexNAME ;

//     }
//     else{
//         productNameInput.classList.add("is-invalid")
//         productNameInput.classList.remove("is-valid")
//         patternmessage.classList.remove("d-none")
//     }
    
// }









































// ( productcontainer[i].name.tolowercase().includes(  term  ).tolowercase()==true)
// local storge  5:10 mg
// localStorage.setItem("username", "ahmed");
// localStorage.setItem("userage", "70")

// var x = localStorage.getItem("username")
// localStorage.clear();
// localStorage.removeItem("username");
// sessionStorage.setItem("userage","20");
// var x = localStorage.getItem("hamada")
// console.log(x);



// var x = 10  , y =3 , t=8 ;
// console.log(x+y);




// var arr =[6,7,8,3,5]
// console.log(arr.splice(1,1));



