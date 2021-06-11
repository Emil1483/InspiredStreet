document.addEventListener('DOMContentLoaded', ()=>{

    let featuredProducts = document.querySelector('.featured-products')
    for(let i=0;i<4;i++){

        let dynamicDiv = document.createElement('div');

        dynamicDiv.classList.add('col-4');

        let dynamicHtml= `
        <a href="product-details.html"><img src="${data[i].img}"></a>
        <h4><a href="product-details.html">${data[i].name}</a></h4>
        <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-o"></i>
        </div>
        <p>$ ${data[i].price}</p>
        `;
        dynamicDiv.innerHTML=dynamicHtml;
        
        featuredProducts.appendChild(dynamicDiv);
    }


    //For Latest Products..

    let latestProducts = document.querySelector('.latest-products')
    for(let i=4;i<data.length;i++){
        
        let dynamicDiv = document.createElement('div');
        dynamicDiv.classList.add('col-4');
        let dynamicHtml=`
        <a href="product-details.html"><img src="${data[i].img}"></a>
        <h4><a href="product-details.html">${data[i].name}</a></h4>
        <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-o"></i>
        </div>
        <p>$ ${data[i].price}</p>
        `;
        dynamicDiv.innerHTML=dynamicHtml;
        latestProducts.appendChild(dynamicDiv);
    }
    
})