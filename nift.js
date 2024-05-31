//Creating an array named as employeedetails that is going to store the details of employee working on the company for more than 6 months
const employeedetail = [];
//a function that contains different values like id name department & experience as basic details that will pass as an argument in the function mintNFT
function mintNFT(_id,_name,_department,_experience) {
  const EmployeeNFTobject = {
    id:_id,
    name:_name,
    department:_department,
    experience:_experience,
  };
  //by the help of push function we can add numerous object inside array
  employeedetail.push(EmployeeNFTobject);
}
//a way to print values in javascript
console.log("Details of the employe working for xyz company for more than 6 months" );
// function listNFTs is going to provide detail of employee by iterating through "for" loop in the array named as employeedetails
function listNFTs() {
  for (let i = 0; i < employeedetail.length; i++) {
    console.log("\nNo." +(i + 1));
    console.log("ID:" +(employeedetail[i].id));
    console.log("Name:" +(employeedetail[i].name));
    console.log("Department:" +(employeedetail[i].department));
    console.log("Experience:" +(employeedetail[i].experience));
    } 
}
//a function that will give detail of total number of employee's working in the company
function getTotalSupply() {
  console.log("\nTotal number of employe in the company = "+employeedetail.length);
}
//way to get the detail of employee using id only
function getNFTByid(id) {
  for (let i = 0; i <employeedetail.length; i++) {
    //use of conditional if statement
    if (employeedetail[i].id === id) {
      console.log("\nNFT for id "+id);
      console.log("ID:" +(employeedetail[i].id));
      console.log("Name:" +(employeedetail[i].name));
      console.log("Department:" +(employeedetail[i].department));
      console.log("Experience:" +(employeedetail[i].experience));
      return;
    }
  }
  console.log("\nNo NFT was found for the given id requesting you to please check once again");
}
//way to get the detail of employee using id only
function getNFTByname(name) {
  for (let i = 0; i < employeedetail.length; i++) {
    if (employeedetail[i].name === name) {
        console.log("\nNFT of name "+name);
        console.log("ID:" +(employeedetail[i].id));
        console.log("Name:" +(employeedetail[i].name));
        console.log("Department:" +(employeedetail[i].department));
        console.log("Experience:" +(employeedetail[i].experience));
    }
  }
}
//calling the function mintNFT thricee from line 70 to 72 by using different arguments.
mintNFT("1001", "Deepu", "CEO", "1 yrs");
mintNFT("1072","Vikash", "Financial advisior", "5 yrs");
mintNFT("1027","Kundan", "Software developer", "3 yrs");
//calling listNFTs to get the detail of employee
listNFTs();
//getting the details of total numbers of employee
getTotalSupply();
//calling the function using id and name
getNFTByid("1128");
console.log("\nProviding the details of employe by using name only")
getNFTByname("Kundan");