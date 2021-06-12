document.addEventListener('DOMContentLoaded', () => {
    //! Vi henter dataen fra firebase
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", 'https://ghostbusters-f259b-default-rtdb.firebaseio.com/bokliste.json', false ); // false for synchronous request
    xmlHttp.send( null );
    let data = JSON.parse(xmlHttp.responseText);

    let booksDocument = document.querySelector('#books')
    let keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
        let category = keys[i]
        books = data[category]

        let categoryDiv = document.createElement('div');
        categoryDiv.innerHTML =  `
        <h2 class="title">${category}</h2>
           <div class="row books" id='books'>
            
           </div>
        `;

        for (let j = 0; j < books.length; j++) {
            let book = books[j];

            let bookDiv = document.createElement('div');
            bookDiv.classList.add('col-4');

            bookDiv.innerHTML = `
            <a href="product-details.html"><img src="${book.bilde}"></a>
            <h4><a href="product-details.html">${book.tittel}</a></h4>
            <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>
            </div>
            <p>${book.pris} kr</p>
            `;

            categoryDiv.querySelector('#books').appendChild(bookDiv);
        }

        booksDocument.appendChild(categoryDiv);
    }


    //For Latest Products..

    let latestProducts = document.querySelector('.latest-products')
    for (let i = 4; i < data.length; i++) {

        let dynamicDiv = document.createElement('div');
        dynamicDiv.classList.add('col-4');
        let dynamicHtml = `
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
        dynamicDiv.innerHTML = dynamicHtml;
        latestProducts.appendChild(dynamicDiv);
    }

})