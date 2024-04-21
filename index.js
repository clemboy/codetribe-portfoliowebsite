// Define an object
var myObject = {
    Name: "Clement",
    Surname: "Motloutsi",
    Gender: "Male",
    Location: "Pretoria",
    Phone_Number: +27792599573,
    Email: "clementtshepo3@gmail.com",
    Experience: "Cloud and Cybersecurity-trainee",
    Education: "Postgraduate Diploma in Project Management",
    Tertiary_Institution: "Tshwane University of Technology",
    Certification: "AWS Developer Associate",
  };

  
  // Get the div where you want to print the object
  var objectContainer = document.getElementById("objectContainer");
  
  // Create a string to hold the HTML content
  var htmlContent = "<p></p>";
  
  // Iterate over the object's properties and append them to the HTML content
  for (var key in myObject) {
    if (myObject.hasOwnProperty(key)) {
      htmlContent += "<h4>" + key + ": " + myObject[key] + "</h4>";
    }
     // Insert a line break after each property-value pair
  htmlContent += "<br>";
  }
  
  // Set the HTML content of the container div
  objectContainer.innerHTML = htmlContent;
  
  
