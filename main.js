const myNodelist = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
  addDeleteAndEditButtons(myNodelist[i]);
}

const addDeleteAndEditButtons = (li) => {
  const deleteSpan = document.createElement("SPAN");
  deleteSpan.className = "delete";
  const icon = document.createElement("I");
  icon.className = "fa-solid fa-trash-can";
  deleteSpan.appendChild(icon);
  li.appendChild(deleteSpan);

  const editSpan = document.createElement("SPAN");
  editSpan.className = "edit";
  const editIcon = document.createElement("I");
  editIcon.className = "fa-solid fa-pen";
  editSpan.appendChild(editIcon);
  li.appendChild(editSpan);

  deleteSpan.onclick = function () {
    const div = this.parentElement;
    div.style.display = "none";
  };

  editSpan.onclick = function () {
    const div = this.parentElement;
    const currentText = div.firstChild.nodeValue;

    // Create an input field for editing
    const input = document.createElement("input");
    input.type = "text";
    input.value = currentText;
    input.className = "edit-input";

    // Replace the text node with the input field
    div.replaceChild(input, div.firstChild);

    // Handle the blur and Enter key events to save the new value
    input.onblur = () => {
      saveEdit(div, input.value);
    };
    input.onkeydown = (e) => {
      if (e.key === "Enter") {
        saveEdit(div, input.value);
      }
    };

    input.focus();
  };
};

const saveEdit = (div, newValue) => {
  if (newValue.trim() !== "") {
    const newText = document.createTextNode(newValue);
    div.replaceChild(newText, div.firstChild);
  } else {
    alert("You must write something!");
  }
};

const list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

const newElement = () => {
  const li = document.createElement("li");
  const inputValue = document.getElementById("myInput").value;
  const text = document.createTextNode(inputValue);
  li.appendChild(text);

  if (inputValue === "") {
    const inputBar = document.getElementById("myDIV")
  
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
    document.getElementById("myInput").value = "";

    addDeleteAndEditButtons(li);
  }
};
document.getElementById("myInput").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    newElement();
  }
});
