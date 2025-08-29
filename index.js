// heart-functionality
let heartCount = parseInt(document.getElementById("heart-count").innerText);
const heartBtns = document.querySelectorAll(".heart-icon");
for (const heartBtn of heartBtns) {
    heartBtn.addEventListener("click", function () {
        heartCount += 1;
        document.getElementById("heart-count").innerText = heartCount;
    });
}


// copy-functionality
let countCopy = parseInt(document.getElementById("count-copy").innerText);
const copyTexts = document.querySelectorAll(".copy-number");
const copyBtns = document.querySelectorAll(".copy-button");
let textToCopy = "";

for (let i = 0; i < copyBtns.length; i++) {
    copyBtns[i].addEventListener("click", function () {
        textToCopy = copyTexts[i].innerText;
        navigator.clipboard.writeText(textToCopy);
        countCopy += 1;
        alert("Number Copied");
        document.getElementById("count-copy").innerText = countCopy;
    });
}


// coin + call + history functionality
let avarageCoin = parseInt(document.getElementById("available-coin").innerText);
const callBtns = document.querySelectorAll(".call-button");
const addToHistory = document.querySelectorAll(".add-to-history");
let historyDetails = document.getElementById("history-details");
let singleHistory = "";

for (let i = 0; i < callBtns.length; i++) {
    callBtns[i].addEventListener("click", function () {
        singleHistory = addToHistory[i].innerText;
        textToCopy = copyTexts[i].innerText;

        if (avarageCoin < 20) {
            alert("You Need 20 Coin For a Single Call");
            return;
        }
        else {
            avarageCoin -= 20;
            document.getElementById("available-coin").innerText = avarageCoin;
            const addToAlert = `${singleHistory} \n Calling: ${textToCopy}`;
            alert(addToAlert);

            let history = document.createElement("div");
            history.classList.add("flex", "justify-between", "items-center", "gap-4", "p-2", "mt-2", "shadow-md");
            history.innerHTML = `
            <div>
                <h1 class="text-[18px] font-bold">${singleHistory}</h1>
                <h2 class="text-[18px] text-gray-500">${textToCopy}</h2>
            </div>
            <h2 class="text-[16px] text-gray-400">${new Date().toLocaleTimeString()}</h2>
        `;
            historyDetails.appendChild(history);
        }
    });
}


// clear-button
document.getElementById("clear-button").addEventListener("click", function () {
    historyDetails.innerText = "";
});
