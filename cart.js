window.onload = () => {
    let item = localStorage.getItem('items');
    item = JSON.parse(item);
    console.log(item);
    
    console.log(item)
    const cart = document.getElementsByClassName("cart")[0];
    const totalElement = document.getElementById("total");
    
    let Totalprice = 0;

    if (item.length !== 0) {
          for(let i = 0; i < item.length; i++){
    const cartItem = document.createElement("div");
    const innerHTML = `<div class="jumbotron cart-items">
                        <img src="${item[i].img}" alt="product1" class="col-xs-4">
                        <p><span id="name"><b>${item[i].productName}</b></span></p> <br>
                        <span class="price">${item[i].price}</span><br>
                        <hr>
                        <i id="remove" class="fa fa-trash-o" style="color: #ff7c00; font-size: 30px;"></i>
                        <select name="quantity" class="quantity form-control pull-right" value="1">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>                        </div>`;
    cart.append(cartItem)
    cartItem.innerHTML = innerHTML;
    let price = parseFloat(item[i].price.substring(1));
    Totalprice += price
    const quantityInput = document.getElementsByClassName("quantity")
     quantityInput[i].addEventListener('change', function (event) {
         if(event){
            updateCartPrice() 
         }
        })
    } 
    }else{
        cart.innerHTML = `Cart is empty!!!
        <a href="index.html">Continue Shopping<a>`;
    }
     
    
    totalElement.innerText = `N${Totalprice}`
    console.log(Totalprice)
    //remove item from cart
 const remove = document.getElementsByClassName("fa-trash-o")
 for(x of remove)
 x.addEventListener('click', function (event) {
     if(confirm('Are U sure u want to Remove Item?') === true){
        btn = event.target
        const div = btn.parentElement
        let img = div.getElementsByClassName("col-xs-4")[0].src;
        item.findIndex((obj, i)=> {
            if(obj.img === img){
                item.splice(i,1);
                return true;
            }
        });
        localStorage.setItem("items", JSON.stringify(item))
        div.remove();
        updateCartPrice();
        displayAlertDanger();
     }
 });
const displayAlertDanger = () => {
    let alert = document.querySelector(".alert-danger");
        alert.style.display = "inline"
        setTimeout(()=> {
            alert.style.display = "none"
        }, 2000)
}
 //update total price when quantity is changed

 //updateCartTotalPrice 
 const updateCartPrice = () => {
     let total = 0;
     const cart_container = document.getElementsByClassName("cart")[0]
     const cartRows = cart_container.getElementsByClassName("cart-items");
     for(let c; c < cartRows; c++){
         const quantityElement = cartRows[c].getElementsByClassName("pull-right")[0];
         const quantity = quantityElement.value;
        //  total += ( * quantity)
         console.log(item[c].price)
     }
      totalElement.innerHTML = `N ${total}`
 }      
}




    
 