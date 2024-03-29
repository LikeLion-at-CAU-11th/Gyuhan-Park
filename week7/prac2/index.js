const container = document.getElementById("container");

let count = -1;

async function getData() {
  const randomInt = Math.ceil(Math.random() * 10);
  const url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/galleryList1?numOfRows=5&pageNo=${randomInt}&MobileOS=ETC&MobileApp=test&arrange=A&_type=json&serviceKey=ZEnjcLBj3UuvsSmoZ%2B1Amy287ylL91JMOg73x245do%2FchAcWg8uPc6GZ5UfnXXWlx8raptabc4ywn345eadaGQ%3D%3D`;
  count += 1;

  const fetchData = await fetch(url);
  const toJson = await fetchData.json();

  const items = await toJson.response.body.items.item;
  console.log(items);
  items.map((data, i) => {
    const link = document.createElement("div");
    link.id = "list";

    const image = document.createElement("img");
    image.src = data.galWebImageUrl;

    const text = document.createElement("span");
    text.innerText = `
    ${i + 1 * count * 5}번째 사진
    제목 : ${data.galTitle}
    장소 : ${data.galPhotographyLocation}`;

    const button = document.createElement("button");
    button.innerText = "더보기";

    link.appendChild(image);
    link.appendChild(text);
    link.appendChild(button);

    container.append(link);
  });
}
