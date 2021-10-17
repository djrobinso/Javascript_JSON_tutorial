fetch('info.json')
  .then(function (response) {
    return response.json();
    // The JSON data will arrive here
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
    // If an error occured, you will catch it here
  });

  var mainContainer = document.getElementById("myData");

  function appendData(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
    mainContainer.appendChild(div);
  }
}
