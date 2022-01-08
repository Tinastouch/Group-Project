var formEl = document.querySelector(".pill-left")
formEl.addEventListener("submit", submitSearch);
var imageEl = document.querySelector(".pill-right")

async function getPicture() {
  deepai.setApiKey('ebe92e48-62e8-4f68-821c-d538ebd17713');
  var userInput = document.getElementById("user-input").value;
  var resp = await deepai.callStandardApi("text2img", {
    text: userInput,
  });
  console.log(resp.output_url);

  function displayImg() {
    var img = document.createElement("img");
    img.src = resp.output_url;
    imageEl.append(img);
    console.log(img)

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    // var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    img.onclick = function () {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    }



  }

  displayImg();
}

function submitSearch(event) {
  event.preventDefault();
  var userInput = document.getElementById("user-input").value;
  // check if inputs are empty (validate)
  if (userInput === "") {
    alert("You didn't enter anything ");
    return false;
  }
  else
    console.log(userInput);
  getPicture(userInput);
  getQuote(userInput);
}















































































































































































































































































































































































































































































// Stevedevelop branch section

/* var formEl = document.querySelector(".pill-left")
formEl.addEventListener("submit", submitSearch, );
 */

async function getQuote() {

  // Fetch a random quote from the Quotable API
  var userInput = document.getElementById("user-input").value;
  const response = await fetch("https://api.quotable.io/search/quotes?query=" + userInput);
  const data = await response.json();
  console.log(data.results[0].content);
  var i = data.results.length;
  var index = Math.floor(Math.random() * i);
  document.getElementById("image_placeholder").textContent = data.results[index].content;
  //console.log(Math.random(i-1))
   /* document.getElementById("text_placeholder").textContent = data.results[index].content; */
}


/* function submitSearch (event) {
  event.preventDefault();
  var userInput = document.getElementById("user-input").value;
  // check if inputs are empty (validate)
if (userInput === "") {
  alert("You didn't enter anything ");
  return false;
}
else

  console.log(userInput)
  getPicture(userInput)
  getQuote(userInput)
}
*/