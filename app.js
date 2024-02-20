async function getProducts(){

    const responsePromise= fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
    return responsePromise;
}

async function main(){
    let products = await getProducts();
    let Container_liste = document.getElementById("listeP");

    for(i=0; i<12; i++){

        let product = products[i];
        
     
        

        let productDiv = document.createElement("div");
        let productCategory = document.createElement("p");
        let productImgPull = document.createElement("img");
        let productImgCategory = document.createElement("img");
        let productImgPanier = document.createElement("img");
        let productImgStar = document.createElement("img");
        let productTitre = document.createElement("p");
        let productPrice = document.createElement("span");
        let productDivUp = document.createElement("div");
        let productDivDown = document.createElement("div");

        productDiv.addEventListener("click", function(){
            redirectFunction(product.id);
        });

       
        let titleWords = product.title.split(" "); 
        let firstFiveWords = titleWords.slice(0, 2); 
        productTitre.textContent = firstFiveWords.join(" "); 
        productCategory.textContent = product.category;
        productPrice.textContent = `$ ${product.price}`;
        productImgPull.src = product.image;
        productImgCategory.src = "https://res.cloudinary.com/dtrvdcebd/image/upload/v1708266044/Clothy/giywnwhsomoybyi9vgxj.png";
        productImgPanier.src = "https://res.cloudinary.com/dtrvdcebd/image/upload/v1708266043/Clothy/q1pbhfwzuy1u8xqq6cbd.png";
        productImgStar.src = "https://res.cloudinary.com/dtrvdcebd/image/upload/v1708266043/Clothy/uhlym2mrhob6aoklzd0h.png";


        productImgCategory.classList.add("productImgCategory");
        productDiv.classList.add("productDiv");
        productDivUp.classList.add("productDivUp");
        productImgPull.classList.add("productImgPull");
        productTitre.classList.add("productTitre");
        productDivDown.classList.add("productDivDown");
        productCategory.classList.add("productCategory");
        productImgPanier.classList.add("productImgPanier");
        productPrice.classList.add("productPrice");
        productImgStar.classList.add("productImgStar");



        
        Container_liste.appendChild(productDiv);
        productDiv.appendChild(productDivUp);
        productDiv.appendChild(productImgPull);
        productDiv.appendChild(productTitre);
        productDiv.appendChild(productDivDown);
        productDivUp.appendChild(productCategory);
        productDivUp.appendChild(productImgCategory);
        productDivUp.appendChild(productImgPanier);
        productDivDown.appendChild(productPrice);
        productDivDown.appendChild(productImgStar);


        document.body.appendChild(Container_liste);

        
        

    }

    function redirectFunction(productId){
        localStorage.setItem('selectedProductId', productId);
        window.location.replace("index2.html");
    }


}

main()


