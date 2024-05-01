 let div = document.createElement("div");
div.className = "main_container";
let input = document.createElement("input");
input.className = "input_box"
input.placeholder = "What's on your mind?"
let button = document.createElement("button");
let ulList = document.createElement("ul");
let liList = document.createElement("li");
let paragraph = document.createElement("p");

button.className = "btn";
button.textContent = "Click";

div.appendChild(input);
div.appendChild(button);
document.body.appendChild(div);

button.addEventListener("click", () => {
  if(input.value){
    ulList = document.createElement("ul");
    ulList.className = "ulList";
    let liList = document.createElement("li");
    liList.className = "liList";
    liList.textContent = input.value;
    input.value = "";

    button2 = document.createElement("button");
    button2.className = "btn2";
    button2.textContent = "Remove";
    button2.addEventListener("click", () => {
        liList.remove();
    });
     if(input.value != null){
        paragraph.remove();
    }

    liList.appendChild(button2);
    ulList.appendChild(liList);
    document.body.appendChild(ulList); 
  }else{
        paragraph.className = "wrong_text";
        paragraph.textContent = "You are trying to add empty item";
    document.body.appendChild(paragraph);

  }
}); 
