"use strict";
const listProduct = [
    {
        id: "sp001",
        name: "Ao so mi",
        price: 300000,
        category: {
            id: "c1",
            name: "Quan ao",
        },
        discount: 60000,
    },
    {
        id: "sp002",
        name: "Quan au",
        price: 100000,
        category: {
            id: "c1",
            name: "Quan ao",
        },
    },
    {
        id: "sp003",
        name: "Ca vat",
        price: 250000,
        category: {
            id: "c1",
            name: "Quan ao",
        },
        discount: 30000,
    },
];
const getFinalPrice = (product) => {
    if (product.discount) {
        return product.price - product.discount;
    }
    return product.price;
};
const printProductInfo = (product) => {
    let price = getFinalPrice(product);
    console.log(`
    Ten: ${product.name}
    Gia goc: ${product.price.toLocaleString("vi-VN")} VND
    Gia sau giam: ${price.toLocaleString("vi-VN")} VND
    Danh muc: ${product.category.name}
    `);
};
for (const productI of listProduct) {
    printProductInfo(productI);
}
