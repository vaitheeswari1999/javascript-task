
var userId=null
function myFunction() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var number = document.getElementById("number").value;
  var date = document.getElementById("date").value;
  var religion = document.getElementById("religion").value;
valid=true;
  if (username == "") {
    document.getElementById("nameError").innerHTML = "required";
    valid=false;
  } 
  if (email == "") {
    document.getElementById("emailError").innerHTML = "required";
    valid = false;
  }
  if (number == "") {
    document.getElementById("numberError").innerHTML = "required";
    valid = false;
  }
  if (date == "") {
    document.getElementById("dateError").innerHTML = "required";
    valid = false;
  } 
  if (religion == "") {
    document.getElementById("religionError").innerHTML = "required";
    valid = false;
  } 
  if(valid){
  var stud = {
    username: username,
    email: email,
    phoneNumber: number,
    birthDate: date,
    religion: religion,
  };
  console.log(stud);
  if(userId){
  fetch("https://6718b3117fc4c5ff8f4aa3da.mockapi.io/api/person/details/" +userId, {
    method: "PUT",
    headers: {
      "content-type": "application/JSON",
    },
    body: JSON.stringify(stud),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
    document.getElementById("button").innerHTML = "Submit";
}
else{fetch("https://6718b3117fc4c5ff8f4aa3da.mockapi.io/api/person/details", {
  method: "POST",
  headers: {
    "content-type": "application/JSON",
  },
  body: JSON.stringify(stud),
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
}
  fetch("https://6718b3117fc4c5ff8f4aa3da.mockapi.io/api/person/details", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
      
  displayStudent();
}
}
function displayStudent() {
  fetch("https://6718b3117fc4c5ff8f4aa3da.mockapi.io/api/person/details")
    .then((response) => response.json())
    .then((details) => {
      let tableRows = "";
      for (let i = 0; i < details.length; i++) {
        

        tableRows +=
          "<tr><td>" +
          details[i].username +
          "</td><td>" +
          details[i].email +
          "</td><td>" +
          details[i].phoneNumber +
          "</td><td>" +
          '<button data-toggle="tooltip" data-placement="top" title="Edit" onclick="editPerson(' +
          details[i].id +
          ')" style="background: transparent; border: hidden; color: blue;">' +
          '<i class="fas fa-pen"></i></button>' +
          '<button class="btn btn-danger mx-1" onclick="deletePerson(' +
          details[i].id +
          ')" style="background: transparent; border: hidden; color: red;">' +
          '<i class="fas fa-trash"></i></button></td></tr>';
      }
      document.getElementById("answer").innerHTML = tableRows;
    })
    .catch((error) => console.log(error));
  
}

 function editPerson(id) {
  userId=id;
   console.log(id);
   
   fetch(
     "https://6718b3117fc4c5ff8f4aa3da.mockapi.io/api/person/details/" + id,
     {
       method: "GET",
     }
   )
     .then((res) => res.json())
     .then((stud) => {
       document.getElementById("username").value = stud.username;
       document.getElementById("email").value = stud.email;
       document.getElementById("number").value = stud.phoneNumber;
       document.getElementById("date").value = stud.birthDate;
       document.getElementById("religion").value = stud.religion;
        document.getElementById("button").innerHTML = "Update";
     })
     .catch((error) => console.log(error));
   
 }
 
 function deletePerson(id) {
fetch("https://6718b3117fc4c5ff8f4aa3da.mockapi.io/api/person/details/" + id,{
        method: "DELETE",
      })
        .then((res) =>{
          if(res.ok) return res.json()
 })
        .then((data) =>{
           console.log(data);          
          displayStudent();
        })
         
        .catch((error) => console.log(error));
 }
window.onload = function () {
  displayStudent();
};

