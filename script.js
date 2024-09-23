window.onload=()=>{
    let tag = document.querySelector(".StartList");
    tag.innerHTML="";
    let taskKeys = Object.keys(localStorage).sort();

    // Loop through the sorted keys and display the tasks in order
    taskKeys.forEach(key => {
        let taskContent = localStorage.getItem(key);
        if (taskContent) {
            tag.innerHTML += `<li data-id="${key}">
                <p>${taskContent}</p>
                <div class="Edits">
                    <div class="button Ebutton">Edit</div>
                    <div class="button Dbutton">Delete</div>
                </div>
            </li>`;
        }
    })
}


console.log(document.querySelector(".Ibutton"));
document.querySelector(".Ibutton").addEventListener("click", save);

document.querySelector(".StartList").addEventListener("click",e=>{
    if(e.target.classList.contains("Dbutton"))
    {
        deleteI(e);
    }
    if(e.target.classList.contains("Ebutton"))
    {
        Edit(e);
    }
})


function save() {
    let content = input.value.trim();
    // console.log(content);
    if (input.value == "") {
        return;
    }

    let tag = document.querySelector(".StartList");
    // console.log(tag)
    input.value = "";
    let uniqueKey=Date.now();
    localStorage.setItem(uniqueKey,content);

    tag.innerHTML += `<li data-id="${uniqueKey}">
        <p>${content}</p>
        <div class="Edits">
        <div class="button Ebutton">Edit</div>
        <div class="button Dbutton">Delete</div>
        </div>
        </li>`

}

function deleteI(e) {
    console.log("clicked");
    // console.log(e.target.closest("li"));
    let listItem = e.target.closest("li");
    let key = listItem.getAttribute("data-id");

    localStorage.removeItem(key);

    e.target.closest("li").remove();

}

function Edit(e) {

    let listItem = e.target.closest("li");
    let key = listItem.getAttribute("data-id");
    
    // Access the <p> element within that <li>
    let taskParagraph = listItem.querySelector("p");
    
    // Now you can edit the text of the <p>
    let newText = prompt("Edit your task:", taskParagraph.textContent);
    if (newText !== null) {
        taskParagraph.textContent = newText; // Update the <p> text
    }    
    localStorage.setItem(key,newText);

}

