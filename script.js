var cart = 0;
document.getElementById("cartcount").textContent = "Cart: "+ cart;
document.getElementById("button1").addEventListener("click", function () {
    cart = cart + 1;
    document.getElementById("cartcount").textContent="Number of items in the cart:"+ cart;
});
document.getElementById("button2").addEventListener("click", function(){
    if(cart == 0){
        alert("Your cart is empty. Please add items to your cart before buying.");
    }else {
        alert("Your order has been placed. Thank you for shopping with us!");
        cart=0;
        document.getElementById("cartcount").textContent="Number of items in the cart:"+ cart;
    }
});
