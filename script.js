    let local = localStorage.getItem("items");


    window.onload = () => {
        //side navbar
    const open = document.querySelector(".openbtn");
    const close = document.querySelector(".closebtn");
    local = JSON.parse(local);
    if(local.length > 0 ){
    document.getElementById("icon-count").innerText = local.length
    console.log(local.length)
    }else{
        document.getElementById("icon-count").style.display = "none";
    }

    const [highest, lowest] = [document.querySelector("#highest"), document.querySelector("#lowest") ];
    const [high, low] = [document.querySelector(".high"), document.querySelector(".low")];

    open.addEventListener("click", ()=>{ 
        if (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth < 768 ) {
            document.getElementById("mySidenav").style.width = "100%";
        }else{
            document.getElementById("mySidenav").style.width = "20%";
        };
    });
    close.addEventListener("click", ()=>{ document.getElementById("mySidenav").style.width = "0";});
    
    high.style.color = "#ff7c00"
    
    filter(highest, lowest, high, low);
    };


    function filter (highest, lowest, high, low){
        low.addEventListener("click", function() {
            lowest.style.display = "block";
            highest.style.display = "none";
            this.style.color = "#ff7c00";
            high.style.color = "black";
        })
        high.addEventListener("click", function() {
            lowest.style.display = "none";
            highest.style.display = "block";
            this.style.color = "#ff7c00";
            low.style.color = "black"
        });
        
    }
    
    //add to cart button
    //get button element
    
   

  
    
    