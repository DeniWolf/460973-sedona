var searchHotels = document.querySelector(".modal-button");
var popup = document.querySelector(".hotels-form-visible");
var layer = document.querySelector(".search-hotels-form");

searchHotels.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("hotels-form-visible");
  layer.classList.toggle("search-hotels-form");
});
