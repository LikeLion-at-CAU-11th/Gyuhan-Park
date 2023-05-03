const container2 = document.getElementById("container");

function filterData() {
  container2.replaceChildren();
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      res
        .filter((data) => data.state === "아기사자")
        .map((data) => {
          const list = document.createElement("div");
          list.innerText = `이름 : ${data.name} / 응애 난 ${data.state} / 좋아하는 과일 : ${data.fruit}`;
          container.appendChild(list);
        });
    })
    .catch((err) => (container.innerText = "에러에러에러"));
}
