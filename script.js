document.body.innerHTML=`
 <div >
  <h1 class="edit1">Makeup API</h1>
   <p class="edit2">Most-loved brands,specially curated for your gorgeous needs,
   One destination for all Style Elements !!!</p>
   </div>
   <div class ="edit3">
   <img src="http://makeup-api.herokuapp.com/assets/brushes-6d2ab84631ecd47ced4fa07c47eb37521eb61c5a525965dafaf308f21338aa44.png" class="edit4" alt="cosmetics"/>  <img src="https://i.pinimg.com/736x/e4/6f/fb/e46ffbe4f06eb86784ce25ccdb8eada1--beauty-ad-l-or%C3%A9al-paris.jpg" class="edit4" alt="lipsticks"/>
   <img src="https://media6.ppl-media.com/tr:h-750,w-750,c-at_max/static/img/product/238831/ny-bae-kohl-black-the-big-apple-of-my-eye-17_5_display_1630922093_0c0d0607.jpg"  class="edit5" alt="eyeliners"/> </div>
   <div>
   <img src="https://victoria.mediaplanet.com/app/uploads/sites/112/2019/10/Female-model-getting-her-makeup-done-by-a-professional-artist.jpg" class="edit6" alt="handling eyeliners"/>
   <img src="https://wallpaperaccess.com/full/1190372.jpg" class="edit7" alt="products"/>
   </div>
  <section class="product-list"></section>`;

   async function getAllProducts() {
  
     const data= await fetch("http://makeup-api.herokuapp.com/api/v1/products.json",
        {method:"GET"}
      );
        
     var products=await data.json();
    
    const productContainer=document.querySelector(".product-list");
     
    products.forEach((product)=>{

      productContainer.innerHTML+=`
        <div class="product-container">
        <brand class="product-brand">${product.brand}</brand>  
        <name class="product-name">${product.name}</name>
        <price class="product-price">${product.price}</price>
        <div>      
         <img class="image-link" src=${product.image_link} alt=${product.name}/>
        <productlink class="product-link" > src=${product.product_link}</productlink>
        <div class="details">
        <description class="product-description">${product.description}</description>
        </div>
       </div>
        </div>
        `;
       });
       console.log(products); 
       }
       getAllProducts();
