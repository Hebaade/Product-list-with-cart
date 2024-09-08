
let pros = [
  {
    img: "images/image-baklava-desktop.jpg",
    name: "Waffle with Berries",
    price: "6.5",
    category: "Waffles",
    quantity:"",
  },
  {
    img: "images/image-brownie-desktop.jpg",
    name: "Brownie with Berries",
    price: "8",
    category: "Brownie",
    quantity:"",
  },
  {
    img: "images/image-cake-desktop.jpg",
    name: "Cake with Berries",
    price: "10.5",
    category: "Cake",
    quantity:"",
  },
  {
    img: "images/image-creme-brulee-desktop.jpg",
    name: "Creme Brulee with Berries",
    price: "11",
    category: "Creme",
    quantity:"",
  },
  {
    img: "images/image-tiramisu-desktop.jpg",
    name: "Tramisu with Berries",
    price: "17",
    category: "Tramisu",
    quantity:"",
  },
  {
    img: "images/image-waffle-desktop.jpg",
    name: "waffle with straberries",
    price: "19",
    category: "Waffle",
    quantity:"",
  },
  {
    img: "images/image-panna-cotta-desktop.jpg",
    name: "Panna Cotta",
    price: "25",
    category: "Ice cream",
    quantity:"",
  },
  {
    img: "images/image-macaron-desktop.jpg",
    name: "Macaron",
    price: "30",
    category: "Cookies",
    quantity:"",
  },
  {
    img: "images/image-meringue-desktop.jpg",
    name: "Meringue",
    price: "35",
    category: "Cake",
    quantity:"",
  },
];

let products=document.querySelector(".products")
function displayProducts(){
    let bag=``
    for (let i = 0; i < pros.length; i++) {
bag+=`  <div class="item">
                <div class="img-cont">
                    <img src=${pros[i].img} alt="img">
                    <div class="cart-btn">
                        <button class="add" onClick="addToCart(${i})"><i class="fa-solid fa-cart-shopping text-danger mx-1"></i>Add To Cart</button>
                        <div class="updateQ d-none" id="updateQ">
                            <button class="min" onClick="minQ(${i})">-</button>
                            <span class="number"></span>
                            <button class="plus" onClick="plusQ(${i})">+</button>
                        </div>
                    </div>
                </div>
                <div class="info">
                    <span class="opacity-50 small">${pros[i].category}</span>
<h5>${pros[i].name}</h5>
<p class="text-danger fw-bold">$${pros[i].price}</p>
                </div>
            </div>`
    }
    products.innerHTML=bag
}
displayProducts()

let addBtn=document.querySelectorAll(".add");
let updateBtns=document.querySelectorAll(".updateQ")
let minBtn=document.querySelectorAll(".min")
let plusBtn=document.querySelectorAll(".plus")
let qty=document.querySelectorAll(".number")
let total=document.getElementById("total")
let cartLength=document.getElementById("cartLength")
let cartItems=[]
function addToCart(i) {
  addBtn[i].classList.add("d-none")
  updateBtns[i].classList.remove("d-none")
  qty[i].innerText=1
  pros[i].quantity=qty[i].innerText
  cartItems.push(pros[i]);
  cartLength.innerHTML=`<h2 class="text-danger" id="cartLength"> Your Cart(${cartItems.length})</h2>`
  displayCart()
}
function minQ(i){
    qty[i].innerText=Number(qty[i].innerText)-1
    if(Number(qty[i].innerText)<1) {
        addBtn[i].classList.remove("d-none")
        updateBtns[i].classList.add("d-none")
    }
    pros[i].quantity=Number(qty[i].innerText)
cartItems[i]=pros[i]
cartLength.innerHTML=`<h2 class="text-danger" id="cartLength"> Your Cart(${cartItems.length})</h2>`
displayCart()
}
function plusQ(i){
    qty[i].innerText=Number(qty[i].innerText) + 1
    pros[i].quantity=Number(qty[i].innerText)
    cartItems[i]=pros[i]

    cartLength.innerHTML=`<h2 class="text-danger" id="cartLength"> Your Cart(${cartItems.length})</h2>`
    displayCart()
}

let cart =document.getElementById("cart")
function displayCart() {
  let bag=``
  let totalP=0
  if(cartItems.length>0){
for(let i=0;i<cartItems.length;i++){
  totalP +=(Number(cartItems[i].price) * Number(cartItems[i].quantity))
  bag+=`
  <div class="my-4 d-flex justify-content-between align-items-center w-90">
  <div >
  <h6>${cartItems[i].name}</h6>
  <span class="text-danger fw-bold">${cartItems[i].quantity} x</span><span class="mx-3 fw-bold">$${cartItems[i].price}</span>
  </div>
  <i class="fa-regular fa-circle-xmark fs-5" onClick="deleteItem(${i})"></i>
    </div>
  `
}
cart.innerHTML=bag
  }
  else{
cart.innerHTML=`<div class="text-center" id="emtypCart">
                    <img src="images/illustration-empty-cart.svg" alt="img">
                    <p class="fw-bold">Your Order Will Be Added Here</p>
                </div>`
  }
  total.innerText="$"+totalP
  document.getElementById("totall").innerText="$"+totalP
}
displayCart()
function deleteItem(i){
  cartItems.splice(i,1)
  displayCart()
 addBtn[i].classList.remove("d-none")
 updateBtns[i].classList.add("d-none")
  cartLength.innerHTML=`<h2 class="text-danger" id="cartLength"> Your Cart(${cartItems.length})</h2>`
}
let order =document.getElementById("order")
function checkOrder(){
  let bag=``
  for (let i = 0; i < cartItems.length; i++) {
    bag+=`
    <div class="orderItem d-flex align-items-center m-3 justify-content-start ">
    <div>

        <img src=${cartItems[i].img} alt="img" style="width: 50px; height: 50px;">
    </div>
    <div class="m-2">
            <span class="fw-bold fs-4">${cartItems[i].name}</span>
            <p class="fw-bold small my-2"><span class="text-danger ">${cartItems[i].quantity}x</span><span class="mx-3">$${cartItems[i].price}</span> </p>
        </div>
    </div>
    `
  }
  order.innerHTML=bag
}
document.getElementById("conOrder").addEventListener("click",()=> {
  checkOrder()
  document.querySelector(".confirmOrder").classList.remove("d-none")
})
document.getElementById("newOrder").addEventListener("click",()=> {
  cartItems=[]
  displayCart()
  displayProducts()
  cartLength.innerHTML=`<h2 class="text-danger" id="cartLength"> Your Cart(${cartItems.length})</h2>`
  document.querySelector(".confirmOrder").classList.add("d-none")
}
)