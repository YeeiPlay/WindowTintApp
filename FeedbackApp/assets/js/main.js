const formCount = document.getElementById("form-count");
const formShow = document.getElementById("form-show");
const olElm = document.getElementById("shows-list");

let shows = [];

let count = 0;

formCount.addEventListener("submit", (event) => {
    event.preventDefault();
    const stringCount = formCount.querySelector("#showCount").value;
    count = parseInt(stringCount) || 0;            
// (!) means if not that. just like === 0 
    if (!count) {
        return;
    }

    formCount.classList.add("hideMe");
    formShow.classList.remove("hideMe")
})

formShow.addEventListener("submit", (e)=> {
    e.preventDefault();
    let userInput = formShow.querySelector("#showName");
    const value = userInput.value.trim();
    
    if (!value) {
        return;
    };

    shows.push(value);
    userInput.value = ""; 
    checkCount();
});

const checkCount = ()=> {
    if (count === shows.length){
        formShow.classList.add("hideMe")
        printtoDom();
    }  else {
        return;
    };
};

const printtoDom = () =>{
 for (let i = 0; i < shows.length; i++){
    const li = document.createElement("li");
    li.textContent = shows[i];
    olElm.appendChild(li);

 }
}