// Initialize wallet data
let walletBalance = 0;
let withdrawnBalance = 0;

// Set the user's login date (this should be set dynamically from your backend)
const userLoginDate = new Date(); // Replace with actual user login date from the database
document.getElementById("loginDate").innerText = userLoginDate.toLocaleDateString();

// References
const withdrawHistoryContainer = document.getElementById("withdrawHistory");
const soldProductsContainer = document.getElementById("soldProducts");

// Update the wallet amounts in the UI
function updateWalletDisplay() {
    document.getElementById("walletAmount").innerText = `₹${walletBalance.toFixed(2)}`;
    document.getElementById("withdrawnAmount").innerText = `₹${withdrawnBalance.toFixed(2)}`;
}

// Add a sold product to the earnings section
function addSoldProduct(productName, amount) {
    walletBalance += amount;

    const productEntry = document.createElement("div");
    productEntry.classList.add("earnings-item");
    productEntry.innerHTML = `
        <p>${productName}</p>
        <span>₹${amount}</span>
    `;

    if (soldProductsContainer.innerHTML.includes("No sales yet.")) {
        soldProductsContainer.innerHTML = "";
    }

    soldProductsContainer.appendChild(productEntry);
    updateWalletDisplay();
}

// Add a withdrawal to the history
function addWithdrawalToHistory(amount, status) {
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleString();

    const historyEntry = document.createElement("div");
    historyEntry.classList.add("history-item");
    historyEntry.innerHTML = `
        <p>₹${amount} - ${formattedTime}</p>
        <span class="${status === 'Success' ? 'success' : 'failed'}">${status}</span>
    `;

    if (withdrawHistoryContainer.innerHTML.includes("No withdrawals yet.")) {
        withdrawHistoryContainer.innerHTML = "";
    }

    withdrawHistoryContainer.appendChild(historyEntry);
}

// Handle withdrawal input and button
document.getElementById("withdrawBtn").addEventListener("click", () => {
    const withdrawInput = document.getElementById("withdrawInput").value;
    const withdrawAmount = parseFloat(withdrawInput);

    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        alert("Please enter a valid amount to withdraw.");
        return;
    }

    if (withdrawAmount > walletBalance) {
        alert("You cannot withdraw more than your wallet balance.");
        addWithdrawalToHistory(withdrawAmount, "Failed");
        return;
    }

    walletBalance -= withdrawAmount;
    withdrawnBalance += withdrawAmount;
    updateWalletDisplay();
    addWithdrawalToHistory(withdrawAmount, "Success");
    alert(`₹${withdrawAmount} has been withdrawn!`);

    // Clear the input field
    document.getElementById("withdrawInput").value = "";
});

// Initialize wallet display
updateWalletDisplay();

// Example: Simulate sales (Replace this with real sales data)
setTimeout(() => addSoldProduct("Product A", 150), 2000);
setTimeout(() => addSoldProduct("Product B", 300), 5000);
