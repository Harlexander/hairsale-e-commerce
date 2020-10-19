var firebaseConfig = {
    apiKey: "AIzaSyBHHlHErHFRq-Sv82V2ZQryY9M9KPSCWk0",
    authDomain: "nenyehairs.firebaseapp.com",
    databaseURL: "https://nenyehairs.firebaseio.com",
    projectId: "nenyehairs",
    storageBucket: "nenyehairs.appspot.com",
    messagingSenderId: "89472471231",
    appId: "1:89472471231:web:b4ee233efb55d66486360a",
    measurementId: "G-QJSYPEKETF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const db = firebase.firestore();

  db.collection("highestPrices").get().then((snapshot) => {
      highestProducts(snapshot.docs);
  })
  const highest = document.querySelector("#highest")
  const highestProducts = (data) => {
    for(element of data){
        const data = element.data();
        let html = document.createElement("div")
        const inner = `<div class="container col-md-3 col-sm-6 items">
        <img src="${data.img_url}" alt="product1" class="img-responsive">
            <div class="col-xs-7 item-details">
                <span class="item-name">${data.productName}</span>
                <span class="item-price">N${data.price}</span>
            </div>
            <div class="col-xs-5">
                <button class="btn add-to-cart pull-right">Add To Cart</button>
            </div>
    </div>`;
    highest.append(html)
    html.innerHTML = inner;
    console.log(data)
    };
    addtocart()
}

  db.collection("lowestPrice").get().then((snapshot)=> {
    lowestProduct(snapshot.docs);
  })
  const lowest = document.querySelector("#lowest")
  const lowestProduct = (data) => {
    for(element of data){
        const data = element.data();
        let html = document.createElement("div")
        const inner = `<div class="container col-md-3 col-sm-6 items">
        <img src="${data.img_url}" alt="product1" class="img-responsive">
            <div class="col-xs-7 item-details">
                <span class="item-name">${data.productName}</span>
                <span class="item-price">N${data.price}</span>
            </div>
            <div class="col-xs-5">
            <button class="btn add-to-cart pull-right">Add To Cart</button>
        </div>
    </div>`;
    lowest.append(html)
    html.innerHTML = inner;
    console.log(data)
    };
   addtocart();
}
const addtocart = () => {
     let clicked = 0;
    let itemDetails = [];
    const addToCart = document.getElementsByClassName("add-to-cart");
    for(buttons of addToCart){
        buttons.addEventListener('click', function(event){
            const button = event.target;
            const item = button.parentElement.parentElement
            const details = {
                 productName : item.getElementsByClassName("item-name")[0].innerHTML,
                 price : item.getElementsByClassName("item-price")[0].innerHTML,
                 img : item.getElementsByTagName("img")[0].src,
            }
            itemDetails.push(details)
            
            displayAlert();
            //load number of items on the cart list
            cartCount(button);
            //this function pass product details to the sessional storage
            setItems(itemDetails);
            //to avoid multiple clicks of an item
            this.disabled = true;
            console.log("helooo")
        })
    };
    const cartCount = (button) => {
        const countContainer = document.getElementById("icon-count");
        if (button) {
            countContainer.style.display = "inline"
            clicked++
        countContainer.innerText = clicked
        }
    }
    const displayAlert = () => {
        let alert = document.querySelector(".alert");
        alert.style.display = "inline"
        setTimeout(()=> {
            alert.style.display = "none"
        }, 3000)
    };
    const setItems = (detail) => {
        let local = localStorage
        local.getItem("items"); 
        console.log(local);
        local.setItem("items", JSON.stringify(detail))
    }
}