
fetch("https://fakestoreapi.com/products").then((data)=>{
    return data.json();
}).then((productarray)=>{
   let tablee="";
    productarray.map((singleproduct)=>{
        tablee+=` <tr>
        <td>${singleproduct.id}</td>
        <td>${singleproduct.title}</td>
        <td>${singleproduct.price}</td>
        <td>${singleproduct.category}</td>
        <td><img src="${singleproduct.image}"></td>
    </tr>`;
    });
    document.getElementById("pass").innerHTML=tablee;
});
