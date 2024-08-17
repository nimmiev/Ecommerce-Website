fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => {

        let allproducts = json.map((p) => {
            p.price = p.price-5
            return p
        })

        // let allproducts = json.filter((p) => {
        //        return p.price < 50
        //     })
        // let allproducts = json
        console.log(allproducts)

        let productlist = document.getElementById('product-list')

        for (let i = 0; i < allproducts.length - 1; i++) {
            let productElement = document.createElement("div")
            productElement.classList.add("col-12")
            productElement.classList.add("col-sm-6")
            productElement.classList.add("col-md-4")
            productElement.classList.add("col-lg-4")
            productElement.classList.add("col-xl-3")
            productElement.classList.add("col-xxl-3")

            productElement.innerHTML = `<div class="col-m-6">
                                            <div class="card">
                                                <img src="${allproducts[i].image}" class="card-img-top" alt="...">
                                                <div class="card-body">
                                                    <h5 class="card-title" id="title" data-toggle="tooltip" data-placement="top">${allproducts[i].title}</h5>
                                                    <p class="text-success">$ ${allproducts[i].price}</p>
                                                    <p class="card-text">${allproducts[i].description}</p>
                                                    <a href="/productDetails.html" class="btn btn-warning">View Product</a>
                                                    <a href="#" class="btn btn-primary">Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
`

            productlist.appendChild(productElement)
        }
    })
