const formCount = document.getElementById("form-count");
const formShow = document.getElementById("form-show");
const olElm = document.getElementById("shows-list");
const formFeedback = document.getElementById("userFeedback");
const pElm = document.getElementById("paragrFeed");
const notValid = document.getElementById("notValid");
const showTitle = document.getElementById("showTitle");
const showName = document.getElementsByClassName("showName");
let shows = [];
let feedBack = [];

let count = 0;

formCount.addEventListener("submit", (event) => {
    event.preventDefault();
    const stringCount = formCount.querySelector("#showCount").value;
    count = parseInt(stringCount) || 0;
    // (!) means if not that. just like === 0 


    if (!count) {
        const invalid = notValid;
        invalid.textContent = ("NOT A VALID NUMBER!" + " " + "\n Enter a value between 1 to 5");
        return;
    }
    if (count > 5) {
        const invalid = notValid;
        invalid.textContent = ("NOT A VALID NUMBER!" + " " + "\n Enter a value between 1 to 5");
        return;
    }

    formCount.classList.add("hideMe");
    formShow.classList.remove("hideMe");
});

formShow.addEventListener("submit", (e) => {
    e.preventDefault();
    let userInput = formShow.querySelector("#showName");
    const value = userInput.value.trim();

    if (!value) {
        return;
    };
    shows.push(value);
    userInput.value = "";
    checkCount()
});

const checkCount = () => {
    if (count === shows.length) {
        formCount.classList.add("hideMe");
        formShow.classList.add("hideMe");
        formFeedback.classList.remove("hideMe");
        printtoDom();
    } else {
        return;
    };

};

const printtoDom = () => {
    for (let i = 0; i < shows.length; i++) {
        const li = document.createElement("li");
        li.textContent = shows[i];
        olElm.appendChild(li);
    };
};

formFeedback.addEventListener("submit", (eventTwo) => {
    eventTwo.preventDefault();
    let userFeedback = formFeedback.querySelector("#feedInput");
    const feedValue = userFeedback.value.trim();
    // (!) means if not that. just like === 0 
    if (!feedValue) {
        return;
    }

    feedBack.push(feedValue);
    userFeedback.value = "";
    feedBacktoDom();
});

const feedBacktoDom = () => {
    const li = document.createElement("li");
    li.textContent = feedBack;
    pElm.appendChild(li);
    formFeedback.classList.add("hideMe");
    return
};