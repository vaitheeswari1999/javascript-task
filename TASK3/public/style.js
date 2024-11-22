
companyList = [];

function validationFunction() {
  var input1 = document.getElementById("input1");
  var input2 = document.getElementById("input2");
  var input3 = document.getElementById("input3");
  var input4 = document.getElementById("input4");
  var input5 = document.getElementById("input5");
  var input6 = document.getElementById("input6");
  var input7 = document.getElementById("input7");
  var input8 = document.getElementById("input8");
  var input9 = document.getElementById("input9");
  var input10 = document.getElementById("input10");
  var input11 = document.getElementById("input11");
  var error = false;
  if (input1.value == "") {
    document.getElementById("one").innerHTML = "*required";

    error = true;
  }
  if (input2.value == "Choose") {
    document.getElementById("two").innerHTML = "*required";
    error = true;
  }
  if (input3.value == "") {
    document.getElementById("three").innerHTML = "*required";

    error = true;
  }
  if (input4.value == "Choose") {
    document.getElementById("four").innerHTML = "*required";

    error = true;
  }
  if (input5.value == "Choose") {
    document.getElementById("five").innerHTML = "*required";

    error = true;
  }
  if (input6.value == "") {
    document.getElementById("six").innerHTML = "*required";

    error = true;
  }
  if (input7.value == "") {
    document.getElementById("seven").innerHTML = "*required";

    error = true;
  }
  if (input8.value == "Choose") {
    document.getElementById("eight").innerHTML = "*required";

    error = true;
  }
  if (input9.value == "") {
    document.getElementById("nine").innerHTML = "*required";

    error = true;
  }
  if (input10.value == "") {
    document.getElementById("ten").innerHTML = "*required";

    error = true;
  }
  if (input11.value == "") {
    document.getElementById("eleven").innerHTML = "*required";

    error = true;
  }
  if (error) {
    return;
  }
  var company = {
    companyName: input1.value,
    state: input2.value,
    phoneNo1: input3.value,
    companyType: input4.value,
    city: input5.value,
    phoneNo2: input6.value,
    GSTNo: input7.value,
    country: input8.value,
    contactNo: input9.value,
    prefix: input10.value,
    sefix: input11.value,
  };
  console.log(company);

  companyList.push(company);
  displayCompany();
  resetFunction();
}

  function displayCompany() {
    var tableRows = "";
    for (let i = 0; i < companyList.length; i++) {
      var companyObj = companyList[i];
      {
        var currentRow =
          "<tr><td>" +
          companyObj.companyName +
          "</td><td>" +
          companyObj.GSTNo +
          "</td><td>" +
          companyObj.phoneNo1 +
          "</td><td>" +
          '<button class= "btn btn-primary mx-1" onclick = "edit(' +
          i +
          ')">Edit' +
          "</button>" +
          '<button class= "btn btn-danger mx-1 " onclick = "Delete(' +
          i +
          ')">Delete' +
          "</button>" +
          "</td></tr>";
        tableRows += currentRow;
      }
    }
    document.getElementById("answer").innerHTML = tableRows;
    

    
  }

function resetFunction() {
  var input1 = (document.getElementById("input1").value = "");
  var input2 = (document.getElementById("input2").value = "");
  var input3 = (document.getElementById("input3").value = "");
  var input4 = (document.getElementById("input4").value = "");
  var input5 = (document.getElementById("input5").value = "");
  var input6 = (document.getElementById("input6").value = "");
  var input7 = (document.getElementById("input7").value = "");
  var input8 = (document.getElementById("input8").value = "");
  var input9 = (document.getElementById("input9").value = "");
  var input10 = (document.getElementById("input10").value = "");
  var input11 = (document.getElementById("input11").value = "");
}

function edit(i){
  company = companyList[i];

  document.getElementById("input1").value = company.companyName;
  document.getElementById("input2").value = company.state;
  document.getElementById("input3").value = company.phoneNo1;
  document.getElementById("input4").value = company.companyType;
  document.getElementById("input5").value = company.city;
  document.getElementById("input6").value = company.phoneNo2;
  document.getElementById("input7").value = company.GSTNo;
  document.getElementById("input8").value = company.country;
  document.getElementById("input9").value = company.contactNo;
  document.getElementById("input10").value = company.prefix;
 document.getElementById("input11").value = company.sefix;
companyList.splice(i, 1);
}

function Delete(i) {
  console.log("Deleting company at index:", i);
  companyList.splice(i, 1); // Removes 1 item at index 'i'
  displayCompany(); // Refresh the table to reflect changes
}
