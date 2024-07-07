document.addEventListener("DOMContentLoaded", () => {
    const menuItems = [
        { id: 1, name: "Burger", price: 5.99 },
        { id: 2, name: "Pizza", price: 8.99 },
        { id: 3, name: "Pasta", price: 7.99 },
        { id: 4, name: "Salad", price: 4.99 },
        { id: 5, name: "Fries", price: 2.99 },
        { id: 6, name: "Chicken Wings", price: 6.99 },
        { id: 7, name: "Garlic Bread", price: 3.49 },
        { id: 8, name: "Coke", price: 1.99 },
        { id: 9, name: "Lemonade", price: 2.49 },
        { id: 10, name: "Iced Tea", price: 2.29 }
    ];
    const menuList = document.getElementById("menu-items");
    const orderList = document.getElementById("order-items");
    const totalAmountElement = document.getElementById("total-amount");
    let totalAmount = 0;

    function updateTotalAmount() {
        totalAmountElement.textContent = totalAmount.toFixed(2);
    }

    menuItems.forEach(item => {
        const li = document.createElement("li");
        li.className = "menu-item";
        li.innerHTML = `<span>${item.name} - $${item.price.toFixed(2)}</span>`;
        const button = document.createElement("button");
        button.innerHTML = '<i class="fas fa-plus"></i> Add to Order';
        button.onclick = () => {
            const orderItem = document.createElement("li");
            orderItem.className = "order-item";
            orderItem.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
            orderList.appendChild(orderItem);
            totalAmount += item.price;
            updateTotalAmount();
        };
        li.appendChild(button);
        menuList.appendChild(li);
    });

    let timer = 0;
    const timerElement = document.getElementById("timer");

    function updateTimer() {
        timer++;
        const minutes = Math.floor(timer / 60).toString().padStart(2, '0');
        const seconds = (timer % 60).toString().padStart(2, '0');
        timerElement.textContent = `${minutes}:${seconds}`;
    }

    setInterval(updateTimer, 1000);

    const reviewForm = document.getElementById("review-form");
    const reviewList = document.getElementById("review-list");

    reviewForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const reviewerName = document.getElementById("reviewer-name").value;
        const reviewText = document.getElementById("review-text").value;

        const li = document.createElement("li");
        li.innerHTML = `<strong>${reviewerName}</strong>: ${reviewText}`;
        reviewList.appendChild(li);

        reviewForm.reset();
    });
});
