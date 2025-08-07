"use strict";
const orderData = {
    order: {
        orderId: "ORD001",
        customerName: "Nguyễn Văn A",
        total: 900000,
        items: [
            {
                product: {
                    id9: "1",
                    name: "Áo sơ mi",
                    price: 500000,
                },
                quantity: 2,
            },
            {
                product: {
                    id9: "2",
                    name: "Quần tây",
                    price: 400000,
                },
                quantity: 1,
            },
        ],
        note: "Giáo sau 18h",
    },
};
function calculateTotal(order) {
    return order.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
}
const printOrder = (order) => {
    console.log(`Đơn hàng: #${order.orderId}`);
    console.log(`Khách hàng: ${order.customerName}`);
    order.items.forEach((item) => {
        console.log(`- ${item.product.name} * ${item.quantity} -> ${item.product.price.toLocaleString("vi-VN")} VND`);
    });
    console.log(`Tổng cộng: ${calculateTotal(order).toLocaleString("vi-VN")} VND`);
    if (order.note)
        console.log(`Ghi chú: ${order.note}`);
};
printOrder(orderData.order);
