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
            if(hobby[i]===''){
                i++;
            }
            else{
                serialNumber=i+1;
                document.getElementById('hobby-list').innerHTML += "<li>" + serialNumber +" - "+ hobby[i] +" <span onclick='this.remove(); removeHobby(this.id);' id="+serialNumber+"><i class='fa fa-trash-o'></i></span></li>";
                i++;
            }
        }
        document.getElementById('hobby-input').value = '';
        
    }
}

function removeHobby(id) {
    let removeHobbyNumber = id-1;
    hobby.splice(removeHobbyNumber, 1, '');
    document.getElementById('hobby-list').innerHTML ='';
        let i=0;
        while(i<hobby.length){
            if(hobby[i]===''){
                i++;
            }
            else{
                serialNumber=i+1;
                document.getElementById('hobby-list').innerHTML += "<li>" + serialNumber +" - "+ hobby[i] +" <span onclick='this.remove(); removeHobby(this.id);' id="+serialNumber+"><i class='fa fa-trash-o'></i></span></li>";
                i++;
            }
        }
    
}
