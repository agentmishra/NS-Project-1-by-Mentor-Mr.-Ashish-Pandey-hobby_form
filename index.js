function addHobby() {
    
    if(document.getElementById('hobby-input').value ===''){
        alert("Please input a Hobby");
    }
    else{
        document.getElementById('hobby-list').innerHTML += "<li>" + document.getElementById('hobby-input').value +"</li>";
        document.getElementById('hobby-input').value = ''
        
    }
  }