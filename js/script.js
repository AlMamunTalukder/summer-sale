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
    
    const makePurchaseButton = document.getElementById("makePurchase");
    makePurchaseButton.disabled = false;
  }

  function applyDiscount() {
    const couponCode = document.getElementById("discountCode").value;
    const discountAmount = couponCode === "SELL200" ? total * 0.2 : 0;

    document.getElementById("discountAmount").innerText = discountAmount.toFixed(2) + " TK";

    const finalPrice = total - discountAmount;
    document.getElementById("final-Price").innerText = finalPrice.toFixed(2) + " TK";
  }


  function goHome() {
    document.getElementById("discountCode").value = "";
    document.getElementById("ordered-list").innerHTML = "";
    document.getElementById("total-Price").innerText = "0";
    document.getElementById("discountAmount").innerText = "0";
    document.getElementById("final-Price").innerText = "0";

   
}