let products=fetch("https://fakestoreapi.com/products");

products.then((data)=>{
    console.log(data);
    return data.json()
}).
then((productdata)=>{
    // console.log(productdata);
    let cards=document.getElementById("cards")
    
    productdata.map((values)=>{
        cards.innerHTML+=
        `
        <div class="card">
            <h3>${values.title}</h3>
            <img src=${values.image} alt="">
            <p>${values.description}</p>
            <p class="price">Price: ${values.price}</p>
        </div>
        `
    })
}).
catch((err)=>{
    console.log(err);
})