const hobbyInput = document.getElementById('hobby-input');
const hobbyList = document.getElementById('hobby-list');
const hobby = [];


function addHobby() {
    if(hobbyInput.value ===''){
        alert("Please input a Hobby");
    }
    else{
        hobby.push(hobbyInput.value);
        displayLi();
        clearInput();
    }
}

function removeHobby(elem) {
    let removeHobbyNumber = elem.parentNode.id-1;
    hobby.splice(removeHobbyNumber, 1, '');
    displayLi();
}

function displayLi() {
    let serialNumber = 0;
    hobbyList.innerHTML ='';
    let i=0;
    while(i<hobby.length){
        if(hobby[i]===''){
            i++;
        }
        else{
            serialNumber=i+1;
            hobbyList.innerHTML += "<li id=li"+serialNumber+"><p  id=pLabel"+serialNumber+">" + serialNumber +"<label> - "+ hobby[i] +" <button onclick='myToggle("+serialNumber+")'><i class='fa fa-pencil-square-o'> </i></button> <button onclick='removeHobby(this)'><i class='fa fa-trash-o'></i></button></p><p  id=pInput"+serialNumber+" style='display:none;'>" + serialNumber +" - <input type='text' placeholder='Enter the Edited Value' value="+hobby[i]+" id=input"+serialNumber+"> <button onclick='editThis("+serialNumber+")'><i class='fa fa-check'> </i></button> <button onclick='myToggle("+serialNumber+")'><i class='fa fa-close'></i></button></li>";
            i++;
        }
    }
}

function editThis(liId) {
    let inputId='input'+liId;
    let id=liId-1;
    let edited = document.getElementById(inputId)
    if(edited.value ===''){
        alert("Please input a Hobby");
    }
    else{
        hobby[id] = edited.value;
        displayLi();
    }
}

function myToggle(id) {
    let labelId='pLabel'+id;
    let inputId='pInput'+id;
    let x = document.getElementById(labelId);
    let y = document.getElementById(inputId);
    if (x.style.display === "none" && y.style.display === "block") {
      x.style.display = "block";
       y.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "block";
    } 
  }

function clearInput() {
    hobbyInput.value = '';
}
