let usersWord = "";
// let evenVar = document.getElementById("evenList");
// let oddVar = document.getElementById("oddList");

function updateWord(element) {
    usersWord = element.value;

    console.log(usersWord)
  }

function handleSubmit() {
    let evenVar = document.getElementById("evenList");
    let oddVar = document.getElementById("oddList");
    let newListItem = document.createElement('li');
    newListItem.innerText = usersWord;

    if(usersWord.length%2===0){
        evenVar.appendChild(newListItem);
        document.getElementById("even-odd-form").reset();
        usersWord = "";
        return false;
    } else {
        oddVar.appendChild(newListItem);
        document.getElementById("even-odd-form").reset();
        usersWord = "";
        return false;
    }    


}


