
// Setup
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
  };
  
  function checkObj(checkProp) {
    // Your Code Here
    
    var hasProp = myObj.hasOwnProperty(checkProp); 
   if(hasProp)
     {
        return myObj[checkProp];
      } else if (hasProp !== true)
      {
        return "Not Found";
      } else
      {
     return "Change Me!";
  }
    
   
  }
  
  // Test your code by modifying these values
  checkObj("gift");
  