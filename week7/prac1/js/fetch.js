const url = "./data/data.json";
const container = document.getElementById("container");

function fetchData() {
  container.replaceChildren();

  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      res.map((data) => {
        const list = document.createElement("div");
        list.innerText = `이름 : ${data.name} / 응애 난 ${data.state} / 좋아하는 과일 : ${data.fruit}`;
        container.appendChild(list);
      });
    })
    .catch((err) => (container.innerText = "에러에러에러"));
}
