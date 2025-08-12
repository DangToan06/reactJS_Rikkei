"use strict";
class MenuItem {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class Table {
    constructor(id, capacity, available = true) {
        this.id = id;
        this.capacity = capacity;
        this.available = available;
    }
}
class Reservation {
    constructor(id, customerName, tableId) {
        this.id = id;
        this.customerName = customerName;
        this.tableId = tableId;
    }
}
class Order {
    constructor(id, tableId, items = []) {
        this.id = id;
        this.tableId = tableId;
        this.items = items;
    }
    getTotal() {
        return this.items.reduce((sum, item) => sum + item.price, 0);
    }
}
class Restaurant {
    constructor(menu = [], tables = [], reservations = [], orders = []) {
        this.menu = menu;
        this.tables = tables;
        this.reservations = reservations;
        this.orders = orders;
    }
    addMenuItem(item) {
        this.menu.push(item);
    }
    addTable(table) {
        this.tables.push(table);
    }
    makeReservation(customerName, tableId) {
        const table = this.tables.find((t) => t.id === tableId);
        if (!table) {
            console.log("Không tìm thấy bàn.");
            return;
        }
        if (!table.available) {
            console.log("Bàn đã được đặt.");
            return;
        }
        const newReservation = new Reservation(this.reservations.length + 1, customerName, tableId);
        this.reservations.push(newReservation);
        table.available = false;
        console.log(`Đặt bàn thành công cho ${customerName} tại bàn ${tableId}`);
    }
    placeOrder(tableId, items) {
        const table = this.tables.find((t) => t.id === tableId);
        if (!table || table.available) {
            console.log("Bàn chưa được đặt hoặc không tồn tại.");
            return;
        }
        let order = this.orders.find((o) => o.tableId === tableId);
        if (!order) {
            order = new Order(this.orders.length + 1, tableId, []);
            this.orders.push(order);
        }
        order.items.push(...items);
        console.log(`Đặt ${items.length} món thành công cho bàn ${tableId}`);
    }
    generateBill(tableId) {
        const tableOrders = this.orders.filter((o) => o.tableId === tableId);
        if (tableOrders.length === 0) {
            console.log("Không có đơn hàng để thanh toán.");
            return;
        }
        const total = tableOrders.reduce((sum, o) => sum + o.getTotal(), 0);
        console.log(`Hóa đơn bàn ${tableId}: ${total} VND`);
        const table = this.tables.find((t) => t.id === tableId);
        if (table)
            table.available = true;
        this.orders = this.orders.filter((o) => o.tableId !== tableId);
        this.reservations = this.reservations.filter((r) => r.tableId !== tableId);
    }
}
const restaurant = new Restaurant();
restaurant.addMenuItem(new MenuItem(1, "Phở bò", 50000));
restaurant.addMenuItem(new MenuItem(2, "Cơm gà", 60000));
restaurant.addMenuItem(new MenuItem(3, "Bún chả", 45000));
restaurant.addTable(new Table(1, 4));
restaurant.addTable(new Table(2, 2));
restaurant.makeReservation("Nguyễn Văn A", 1);
restaurant.placeOrder(1, [restaurant.menu[0], restaurant.menu[1]]);
restaurant.placeOrder(1, [restaurant.menu[2]]);
restaurant.generateBill(1);
restaurant.makeReservation("Trần Thị B", 1);
