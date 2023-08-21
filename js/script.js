let total = 0;
let selectedIndex = 1;

function handleClick(target) {
    const selectedProduct = document.getElementById("ordered-list");
  
    const productName = target.querySelector("h4").innerText.trim();
  
    const li = document.createElement("li");

    li.innerText = `${selectedIndex}. ${productName}`;
    selectedProduct.appendChild(li);
    selectedIndex++;


    // console.log(target.querySelector("h1").innerText.split(" "))

    // const price = target.parentNode.childNodes[5].innerText.split(" ")[1]; 
    const price = target.querySelector("h1").innerText.split(" ")[0]; 

    total = parseInt(total) + parseInt(price); 
    document.getElementById("total-Price").innerText = total + " TK"; 


    const applyButton = document.getElementById("apply-Discount");
    applyButton.disabled = total >= 200 ? false : true;
    
  }










 