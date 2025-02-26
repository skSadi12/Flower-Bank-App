let CurrentBalance = document.querySelector("#CurrentBalance")
let addInput = document.querySelector("#addInput")
let addBtn  = document.querySelector("#addBtn")
let withdrawInput = document.querySelector("#withdrawInput")
let withdrawBtn = document.querySelector("#withdrawBtn")
let TransactionBtn = document.querySelector("#TransactionBtn")
let TransactionUl = document.querySelector("#TransactionUl")

let balance = 0;
let transactionHistory = [];

function updateUI(transaction) {
    CurrentBalance.textContent = `${balance} taka`;
    transactionHistory.push(transaction);
}


addBtn.addEventListener("click", () => {
    let amount = parseFloat(addInput.value);
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount");
      return;
    }
    balance += amount;
    updateUI(`Added ${amount} taka`);
    addInput.value = "";
  });


withdrawBtn.addEventListener("click", () => {
    let amount = parseFloat(withdrawInput.value);
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount");
      return;
    }
    if (amount > balance) {
      alert("Insufficient balance");
      return;
    }
    balance -= amount;
    updateUI(`Withdrew ${amount} taka`);
    withdrawInput.value = "";
});



