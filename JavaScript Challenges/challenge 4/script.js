let fiveNumbers = [1, 2, 3, 4, 5];
let personalInfo = {

name: "fatima karout",
    age: 26,
    height: 150,
    location: "beiruth",
    nationality: "lebanese"
  }; 
  console.log(fiveNumbers);
  console.log(personalInfo);


  let additionalInfo = {
    occupation: "manger",
    hobby: "watching movies",
    education: "Busniss mangment"
  };
  
  let fullInfo = { ...personalInfo, ...additionalInfo };
  
  console.log(fullInfo);  
 


  let [firstNum, secondNum, thirdNum] = fiveNumbers;

console.log(firstNum, secondNum, thirdNum); 
  


let perin = {
    name: "fatima karout",
    age: 26,
    contactInfo: {
      email: "fatimakarout1717.com",
      phone: "03423897"
    }
  };
  
  let { contactInfo: { email, phone } } = perin;
  
  console.log(email, phone);





