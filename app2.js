async function getProduct(id){
    const response = await fetch("https://fakestoreapi.com/products/" + id);
    const product = await response.json();
    return product;
}

async function main(){
    let productId = localStorage.getItem('selectedProductId'); 
    let product = await getProduct(productId); 
    console.log(product); 

    let Container_liste = document.getElementById("listeP");
    

    let productDiv = document.createElement("div");
    let productDivUp = document.createElement("div");
    let productCategory = document.createElement("p");
    let productImgCategory = document.createElement("img");
    let productImgPull = document.createElement("img");


    let productDivDown = document.createElement("div");
    let productTitre = document.createElement("p");
    let productImgStar = document.createElement("img");
    let productPrice = document.createElement("span");
    let productDescription = document.createElement("p");
    
  
   
   

  
   
    let titleWords = product.title.split(" "); 
    let firstFiveWords = titleWords.slice(0, 2); 
    productTitre.textContent = firstFiveWords.join(" "); 
    productCategory.textContent = product.category;
    productPrice.textContent = `$ ${product.price}`;
    productImgPull.src = product.image;
    productImgCategory.src = "https://res.cloudinary.com/dtrvdcebd/image/upload/v1708266044/Clothy/giywnwhsomoybyi9vgxj.png";
    productImgStar.src = "https://res.cloudinary.com/dtrvdcebd/image/upload/v1708266043/Clothy/uhlym2mrhob6aoklzd0h.png";
    productDescription.textContent = product.description;    


    productImgCategory.classList.add("productImgCategory");
    productDiv.classList.add("productDiv");
    productDivUp.classList.add("productDivUp");
    productImgPull.classList.add("productImgPull");
    productTitre.classList.add("productTitre");
    productDivDown.classList.add("productDivDown");
    productCategory.classList.add("productCategory");
    productDescription.classList.add("productDescription");
    productPrice.classList.add("productPrice");
    productImgStar.classList.add("productImgStar");



    
    Container_liste.appendChild(productDiv);
    productDiv.appendChild(productDivUp);
    productDiv.appendChild(productDivDown);
    productDivUp.appendChild(productCategory);
    productDivUp.appendChild(productImgCategory);
    productDivUp.appendChild(productImgPull);

    productDivDown.appendChild(productTitre);
    productDivDown.appendChild(productPrice);
    productDivDown.appendChild(productImgStar);
    productDivDown.appendChild(productDescription);



    document.body.appendChild(Container_liste);
}

main()
