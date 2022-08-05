//Post method

//PreventDefault to prevent the page from reloading
function sendData(event) {
  event.preventDefault();

  //We define all our variables and take them from our DOM.
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  //Fetch to the API
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      Accept: "text/plain, application/json, */*",
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      phone: phone,
      message: message,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });

  //Display the "Done sentence" and reset the input values
  document.querySelector("#form-done").style.display = "block";
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("message").value = "";
}

//Listener to the button to triger all the function
document.querySelector("#form-5").addEventListener("click", sendData);
