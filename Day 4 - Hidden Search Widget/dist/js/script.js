const searchIcon = document.querySelector("#search-icon");
const container = document.querySelector(".container");
const searchBox = document.querySelector(".search-box");
searchIcon.addEventListener("click", () => {
	container.classList.toggle("active");
	searchBox.focus();
});
