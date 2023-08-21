let total = 0;
let selectedIndex = 1;

function handleClick(target) {
    const selectedProduct = document.getElementById("ordered-list");
  
    const productName = target.querySelector("h4").innerText.trim();
  
    const li = document.createElement("li");

    li.innerText = `${selectedIndex}. ${productName}`;
    selectedProduct.appendChild(li);
    selectedIndex++;


    
    const price = target.querySelector("h1").innerText.split(" ")[0]; 

    total = parseInt(total) + parseInt(price); 
    document.getElementById("total-Price").innerText = total + " TK"; 


    const applyButton = document.getElementById("apply-Discount");
   

    if (total >= 200) {
        applyButton.disabled = false;
    }    
    makePurchase.disabled = false;
    
  }










 