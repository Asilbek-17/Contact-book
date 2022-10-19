const elForm = document.querySelector(".js-form");
const elNameInp = document.querySelector(".user-name");
const elDataInp = document.querySelector(".data-inp");
const elNumberInp = document.querySelector(".user-num");
const elList = document.querySelector(".contact-list");


elForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    
    const newNameValue = elNameInp.value;
    const newDataValue = elDataInp.value;
    const newNumberValue = elNumberInp.value;

    const newObject = {
        name: newNameValue, 
        relationship: newDataValue, 
        telnumber: newNumberValue
    };
    
    const newArr = [];
    
    newArr.push(newObject);
    elForm.reset();
    
    newArr.forEach(function(value) {
        const newItem = document.createElement("li");
        const newTitle = document.createElement("h3");
        const newText = document.createElement("p");
        const newLink = document.createElement("a");
        const newBtn = document.createElement("button");
        
        newItem.classList.add("contact-item");
        newTitle.classList.add("contact-title");
        newText.classList.add("contact-text");
        newLink.classList.add("contact-link")
        newBtn.classList.add("contact-btn")
        
        newTitle.textContent = value.name;
        
        newText.textContent = value.relationship;
        
        newLink.textContent = value.telnumber;
        newLink.href = "tel:" + value.telnumber;
        
        newBtn.textContent = "Remove";
        newBtn.type = "submit";
        
        newItem.appendChild(newTitle);
        newItem.appendChild(newText);
        newItem.appendChild(newLink);
        newItem.appendChild(newBtn);
        
        elList.appendChild(newItem);
        
        for (var i = 0; i < 1; i++) {
            newBtn.addEventListener('click', () => {
                newItem.style.display = "none"
            })
        }
    });
});