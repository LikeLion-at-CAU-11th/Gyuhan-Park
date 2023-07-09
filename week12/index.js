import axios from "axios";

const config = {
    url: "https://apis.data.go.kr/B551011/PhotoGalleryService1/galleryList1?serviceKey=qAzPL9saU4atfm%2F%2FrfNHZY5LkVfxDUDSr3BR%2Bm9OSbUXV3EBJRSx%2Fb6FQi3bAopM7mwKbWJLcqAM5UjAYbQQLw%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&_type=json",
    method: "GET",
};

const getPhotos = async () => {
    const result = await axios(config);
    console.log(result.data.response.body.items.item[0]);
};

getPhotos();

const getPhotos2 = async () => {
    const result = await axios(config);
    console.log(result.data.response.body.items.item[1]);
};

getPhotos2();
