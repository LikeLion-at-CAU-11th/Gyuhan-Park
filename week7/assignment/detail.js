const url = new URL(window.location.href);

const container = document.getElementById("container");

const dataContainer = document.createElement("div");
dataContainer.id = "list";

// URLSearchParams 객체
const urlParams = url.searchParams;
const year = urlParams.get("year");
const month = urlParams.get("month");
const day = urlParams.get("day");
const photographer = urlParams.get("photographer");
const keyword = urlParams.get("keyword");
const imgUrl = urlParams.get("imgUrl");

const image = document.createElement("img");
image.src = imgUrl;

dataContainer.appendChild(image);
[year, month, day].forEach((data) => {
  dataContainer.innerHTML += data + ".";
});
dataContainer.innerHTML += "<br/>";

[photographer, keyword].forEach((data) => {
  dataContainer.innerHTML += data + "<br/>";
});

container.appendChild(dataContainer);