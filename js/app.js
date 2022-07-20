const searchField = document.querySelector("#search");
const imgAnchors = document.querySelectorAll(".gallery a");

window.addEventListener('load', function() {
  baguetteBox.run('.gallery');
});

searchField.addEventListener('input', () => {
    SearchImages();
});

/*
This function is called from the search input. it chercks the text input by the user against the data-captions in the image gallery.
if the search term is found in the data caption then the image visibility is turned on, if its not then its turned off
*/
function SearchImages() {
  const userSearch = searchField.value.trim();
	for (let i = 0; i < imgAnchors.length; i++) {
		if (imgAnchors[i].getAttribute('data-caption') !== null){
			if (!imgAnchors[i].getAttribute('data-caption').toUpperCase().includes(userSearch.toUpperCase())){
        TurnImageOff(imgAnchors[i]);
      }
      else {
        TurnImageOn(imgAnchors[i]);
      }
		}
	}
}

function TurnImageOff(element){
  element.style.display = "none";
}

function TurnImageOn(element){
  element.style.display = "inline-block";
}