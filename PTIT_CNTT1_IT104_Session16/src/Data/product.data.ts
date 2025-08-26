// product.data.ts

export interface ProductI {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export const products: ProductI[] = [
  {
    id: 1,
    name: "Điện thoại Samsung Galaxy S21",
    image: "https://hoanghamobile.com/Uploads/2021/01/15/a2.png",
    price: 20000000,
    quantity: 1,
  },
  {
    id: 2,
    name: "Điện thoại Iphone14 Promax",
    image:
      "https://images.prestigeonline.com/wp-content/uploads/sites/6/2022/10/05004752/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-space-black-220907-geo-768x1075.jpg",
    price: 20500000,
    quantity: 1,
  },
  {
    id: 3,
    name: "SamSung Galaxy S23 Ultra",
    image:
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-s23-ulatra_1__1.png",
    price: 22000000,
    quantity: 1,
  },
  {
    id: 4,
    name: "Sony WH-1000XM5",
    image:
      "https://www.sony.com.vn/image/6145c1d32e6ac8e63a46c912dc33c5bb?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
    price: 8000000,
    quantity: 1,
  },
  {
    id: 5,
    name: "Apple MacBook Air M2",
    image:
      "https://cdn2.fptshop.com.vn/unsafe/macbook_air_13_m2_midnight_1_35053fbcf9.png",
    price: 40000000,
    quantity: 1,
  },
  {
    id: 6,
    name: "Logitech MX Master 3",
    image:
      "https://nvs.tn-cdn.net/2023/02/chuot-logitech-mx-master-3s-for-mac.jpg",
    price: 2500000,
    quantity: 1,
  },
  {
    id: 7,
    name: "iPad Pro 11 inch",
    image:
      "https://cdn2.cellphones.com.vn/x/media/catalog/product/i/p/ipad-pro-11-2021-1_13.jpg",
    price: 20000000,
    quantity: 1,
  },
  {
    id: 8,
    name: "Samsung Galaxy Tab S8",
    image:
      "https://cdn2.cellphones.com.vn/x/media/catalog/product/t/a/tab_s8_2_2_2_3.jpg",
    price: 18000000,
    quantity: 1,
  },
  {
    id: 9,
    name: "Nintendo Switch OLED",
    image:
      "https://www.droidshop.vn/wp-content/uploads/2022/12/May-Nintendo-Switch-Oled-kem-qua-tang.jpg",
    price: 10000000,
    quantity: 1,
  },
  {
    id: 10,
    name: "Canon EOS R6",
    image:
      "https://product.hstatic.net/1000234350/product/20240109_akvp4u7s0j_fb05d21fa2fe4564bda1c86f20d06293_1024x1024.jpeg",
    price: 60000000,
    quantity: 1,
  },
];
