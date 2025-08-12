class MenuItem {
  constructor(public id: number, public name: string, public price: number) {}
}

class Table {
  constructor(
    public id: number,
    public capacity: number,
    public available: boolean = true
  ) {}
}

class Reservation {
  constructor(
    public id: number,
    public customerName: string,
    public tableId: number
  ) {}
}

class Order {
  constructor(
    public id: number,
    public tableId: number,
    public items: MenuItem[] = []
  ) {}

  getTotal(): number {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }
}

class Restaurant {
  constructor(
    public menu: MenuItem[] = [],
    public tables: Table[] = [],
    public reservations: Reservation[] = [],
    public orders: Order[] = []
  ) {}

  addMenuItem(item: MenuItem): void {
    this.menu.push(item);
  }

  addTable(table: Table): void {
    this.tables.push(table);
  }

  makeReservation(customerName: string, tableId: number): void {
    const table = this.tables.find((t) => t.id === tableId);

    if (!table) {
      console.log("Không tìm thấy bàn.");
      return;
    }

    if (!table.available) {
      console.log("Bàn đã được đặt.");
      return;
    }

    const newReservation = new Reservation(
      this.reservations.length + 1,
      customerName,
      tableId
    );
    this.reservations.push(newReservation);
    table.available = false;
    console.log(`Đặt bàn thành công cho ${customerName} tại bàn ${tableId}`);
  }

  placeOrder(tableId: number, items: MenuItem[]): void {
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

  generateBill(tableId: number): void {
    const tableOrders = this.orders.filter((o) => o.tableId === tableId);
    if (tableOrders.length === 0) {
      console.log("Không có đơn hàng để thanh toán.");
      return;
    }

    const total = tableOrders.reduce((sum, o) => sum + o.getTotal(), 0);
    console.log(`Hóa đơn bàn ${tableId}: ${total} VND`);

    const table = this.tables.find((t) => t.id === tableId);
    if (table) table.available = true;

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
