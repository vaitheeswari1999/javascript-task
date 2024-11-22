
function myFunction() {
  var text1 = document.getElementById("Name");
  var text2 = document.getElementById("Email");
  var text3 = document.getElementById("Password");
  var error = false;

  if (text1.value == "") {
    document.getElementById("one").innerHTML = "*required";
    text1.style.border = "2px solid red";
    error = true;
  } else {
    text1.style.border = "2px solid green";
    document.getElementById("one").innerHTML = "";
  }

  if (text2.value == "") {
    document.getElementById("two").innerHTML = "*required";

    text2.style.border = "2px solid red";
    error = true;
  }
    else if (!text2.value.includes("@")) {
      document.getElementById("two").innerHTML = "*required";

      text2.style.border = "2px solid red";
      error = true;
    } else if (!text2.value.includes(".")) {
      document.getElementById("two").innerHTML = "*required";

      text2.style.border = "2px solid red";
      error = true;
    } else {
      text2.style.border = "2px solid green";
      document.getElementById("two").innerHTML = "";
    }

  if (text3.value == "") {
    document.getElementById("three").innerHTML = "*required";
    text3.style.border = "2px solid red";
    error = true;
  } else if (text3.value.length < 6) {
    document.getElementById("three").innerHTML ="*password should be in morethan 6 characters";
    text3.style.border = "2px solid red";
    error = true;
  } else {
    text3.style.border = "2px solid green";
    document.getElementById("three").innerHTML = "";
  }

  if (error) {
    return;
  }

  var person = {
    personName: text1.value,
    personEmail: text2.value,
    personPassword: text3.value,
  };
  console.log(person);
  var personList = JSON.parse(localStorage.getItem("person"));

  console.log("personList..." + personList);

  if (personList == null) {
    personList = [];
  }
  personList.push(person);
  localStorage.setItem("person", JSON.stringify(personList));

 
  //  box.style.display = "block";
  
  
  
  displayPersons();
  resetpersons();
}
  
  function displayPersons() {
    var personList = JSON.parse(localStorage.getItem("person"));
    if (personList == null) {
      return;
    }
    var tableRows = "";
    for (let i = 0; i < personList.length; i++) {
      var personObj = personList[i];
       var box = document.getElementById("list");
      if (personList.value > 0) {
        box.style.display = "none";
      } else {
        box.style.display = "block";
      }
        var currentRow =
          "<tr><td>" +
          personObj.personName +
          "</td><td>" +
          personObj.personEmail +
          "</td><td>" +
          personObj.personPassword +
          "</td><td>" +
          '<button onclick = "editPerson(' +
          i +
          ')" style=" background: transparent; border: hidden;color: blue;" ><i class="fas fa-pen"></i></button>' +
          '<button onclick = "deletePerson(' +
          i +
          ')" style=" background: transparent; border: hidden;color:red" ><i class="fas fa-trash"></i></button>' +
          "</td></tr>";
        tableRows += currentRow;
      
    }

    document.getElementById("answer").innerHTML = tableRows;
  
  }

function editPerson(i) {
  const personList = JSON.parse(localStorage.getItem("person"));
  if (personList == null) {
    return;
  }
  const person = personList[i];
  
  document.getElementById("Name").value = person.personName;
  document.getElementById("Email").value = person.personEmail;
  document.getElementById("Password").value = person.personPassword;

  personList.splice(i, 1);
  localStorage.setItem("person", JSON.stringify(personList));
  // displayPersons();
  console.log(i);
}
function resetpersons(){
  document.getElementById("Name").value = "";
  document.getElementById("Email").value = "";
  document.getElementById("Password").value = "";
}
function deletePerson(i) {
  var del = confirm(("Are you sure delete?"));
  let personList = JSON.parse(localStorage.getItem("person"));
  if (personList == null) {
    return;
  }
  if(i==0){
     var box = document.getElementById("list");
    box.style.display="none";
  }
  personList.splice(i, 1); 
  localStorage.setItem("person", JSON.stringify(personList));
  displayPersons();
}
window.onload = displayPersons;
