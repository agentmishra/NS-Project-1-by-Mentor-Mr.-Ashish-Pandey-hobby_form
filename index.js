let hobby = [];
let serialNumber = 0;
function addHobby() {
    
    if(document.getElementById('hobby-input').value ===''){
        alert("Please input a Hobby");
    }
    else{
        hobby.push(document.getElementById('hobby-input').value);
        document.getElementById('hobby-list').innerHTML ='';
        let i=0;
        while(i<hobby.length){
            serialNumber=i+1;
            document.getElementById('hobby-list').innerHTML += "<li onclick='this.remove(); removeHobby(this.id);' id="+serialNumber+">" + serialNumber +" - "+ hobby[i] +" <span><i class='fa fa-trash-o'></i></li></span>";
            i++;
        }
        document.getElementById('hobby-input').value = '';
        
    }
}

function removeHobby(id) {
    let removeHobbyNumber = id-1;
    hobby.splice(removeHobbyNumber, 1, '');
    
}
