const products = [
{
    id:1,
    name:"Tai nghe Gaming",
    price:"500.000 VND",
    img:"https://picsum.photos/200?1"
},
{
    id:2,
    name:"Bàn phím cơ",
    price:"1.200.000 VND",
    img:"https://picsum.photos/200?2"
},
{
    id:3,
    name:"Chuột Gaming",
    price:"700.000 VND",
    img:"https://picsum.photos/200?3"
},
{
    id:4,
    name:"Màn hình 24 inch",
    price:"3.500.000 VND",
    img:"https://picsum.photos/200?4"
}
];

const productList = document.getElementById("productList");
const modal = document.getElementById("productModal");

function renderProducts(){

products.forEach(product =>{

const div = document.createElement("div");
div.className = "product";

div.innerHTML = `
<img src="${product.img}">
<h3>${product.name}</h3>
<p>${product.price}</p>
<button onclick="showDetail(${product.id})">Xem chi tiết</button>
`;

productList.appendChild(div);

})

}

renderProducts();

function showDetail(id){

const product = products.find(p=>p.id === id);

document.getElementById("modalImg").src = product.img;
document.getElementById("modalName").innerText = product.name;
document.getElementById("modalPrice").innerText = product.price;

modal.style.display = "block";

}

document.getElementById("closeModal").onclick = function(){

modal.style.display = "none";

}

function addToCart(){
alert("Đã thêm sản phẩm vào giỏ hàng");
}