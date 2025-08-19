import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });

class Customer {
  private static nextId = 1;
  constructor(
    public name: string,
    public email: string,
    public shippingAddress: string,
    public id: number = Customer.nextId++
  ) {}

  public getDetails(): string {
    return `ID: ${this.id} || Name: ${this.name} || Email: ${this.email} || Shipping Address: ${this.shippingAddress}`;
  }
}

abstract class Product {
  private static nextId = 1;
  constructor(
    public name: string,
    public price: number,
    public stock: number,
    public id: number = Product.nextId++
  ) {}

  sell(quantity: number): void {
    if (quantity <= 0) {
      console.log("Invalid quantity");
      return;
    }
    if (this.stock >= quantity) {
      this.stock -= quantity;
    } else {
      console.log("Sales exceed inventory");
    }
  }

  restock(quantity: number): void {
    if (quantity > 0) this.stock += quantity;
  }

  abstract getProductInfo(): string;
  abstract getShippingCost(distance: number): number;
  abstract getCategory(): string;
}

class ElectronicsProduct extends Product {
  constructor(
    name: string,
    price: number,
    stock: number,
    public warrantyPeriod: number
  ) {
    super(name, price, stock);
  }

  getProductInfo(): string {
    return `ID: ${this.id} || Name: ${
      this.name
    } || Price: ${this.price.toLocaleString("vi-VN")} || Stock: ${
      this.stock
    } || Warranty: ${this.warrantyPeriod} months`;
  }
  getShippingCost(distance: number): number {
    return 50000;
  }
  getCategory(): string {
    return "Electronics";
  }
}

class ClothingProduct extends Product {
  constructor(
    name: string,
    price: number,
    stock: number,
    public size: string,
    public color: string
  ) {
    super(name, price, stock);
  }

  getProductInfo(): string {
    return `ID: ${this.id} || Name: ${
      this.name
    } || Price: ${this.price.toLocaleString("vi-VN")} || Stock: ${
      this.stock
    } || Size: ${this.size} || Color: ${this.color}`;
  }
  getShippingCost(distance: number): number {
    return 25000;
  }
  getCategory(): string {
    return "Clothing";
  }
}

class Order {
  private static nextId = 1;
  public totalAmount: number;

  constructor(
    public customer: Customer,
    public products: { product: Product; quantity: number }[],
    public orderId: number = Order.nextId++
  ) {
    this.totalAmount = this.products.reduce(
      (sum, tmp) => sum + tmp.product.price * tmp.quantity,
      0
    );
  }

  getDetail(): string {
    return `
---------- Order ${this.orderId} ----------
Customer: ${this.customer.getDetails()}
Products:
${this.products
  .map(
    (e) =>
      `${e.product.getProductInfo()} x ${e.quantity} = ${(
        e.product.price * e.quantity
      ).toLocaleString("vi-VN")}`
  )
  .join("\n")}
Total amount: ${this.totalAmount.toLocaleString("vi-VN")}`;
  }
}

class Store {
  constructor(
    public products: Product[] = [],
    public customers: Customer[] = [],
    public orders: Order[] = []
  ) {}

  addProduct(product: Product): void {
    this.products.unshift(product);
  }

  addCustomer(name: string, email: string, address: string): void {
    this.customers.unshift(new Customer(name, email, address));
  }

  createOrder(
    customerId: number,
    productQuantities: { productId: number; quantity: number }[]
  ): Order | null {
    const searchCustomer = this.customers.find((c) => c.id === customerId);
    if (!searchCustomer) {
      console.log("Customer not found");
      return null;
    }

    const orderItems: { product: Product; quantity: number }[] = [];
    for (let { productId, quantity } of productQuantities) {
      const prod = this.products.find((p) => p.id === productId);
      if (prod) {
        prod.sell(quantity);
        orderItems.push({ product: prod, quantity });
      }
    }

    if (orderItems.length === 0) {
      console.log("No products added to order");
      return null;
    }

    const newOrder = new Order(searchCustomer, orderItems);
    this.orders.push(newOrder);
    return newOrder;
  }

  cancelOrder(orderId: number): void {
    const index = this.orders.findIndex((o) => o.orderId === orderId);
    if (index === -1) {
      console.log("Order not found");
      return;
    }

    // Bổ sung sản phẩm
    for (let item of this.orders[index].products) {
      const prod = this.products.find((p) => p.id === item.product.id);
      if (prod) prod.restock(item.quantity);
    }

    this.orders.splice(index, 1);
    console.log(`Order ${orderId} has been canceled`);
  }

  listAvailableProducts(): void {
    const available = this.products.filter((p) => p.stock > 0);
    if (available.length === 0) {
      console.log("No products in stock");
      return;
    }
    available.forEach((p) => console.log(p.getProductInfo()));
  }

  listCustomerOrders(customerId: number): void {
    const custOrders = this.orders.filter((o) => o.customer.id === customerId);
    if (custOrders.length === 0) {
      console.log("No orders found for this customer");
      return;
    }
    custOrders.forEach((o) => console.log(o.getDetail()));
  }

  calculateTotalRevenue(): number {
    return this.orders.reduce((sum, curr) => sum + curr.totalAmount, 0);
  }

  countProductsByCategory(): void {
    const categoryMap = new Map<string, number>();
    this.products.forEach((p) => {
      const category = p.getCategory();
      categoryMap.set(category, (categoryMap.get(category) || 0) + 1);
    });

    console.log("Number of products by category:");
    categoryMap.forEach((count, category) => {
      console.log(`${category}: ${count}`);
    });
  }

  updateProductStock(productId: number, newStock: number): void {
    const prod = this.products.find((p) => p.id === productId);
    if (!prod) {
      console.log(`Product ${productId} not found`);
      return;
    }
    prod.stock = newStock;
    console.log(`Updated stock of product ${productId} to ${newStock}`);
  }

  findEntityById<T extends { id: number }>(
    collection: T[],
    id: number
  ): T | undefined {
    return collection.find((item) => item.id === id);
  }
}

const store = new Store();

function mainMenu() {
  while (true) {
    console.log(`
========= MENU =========
1. Add new customer
2. Add new product
3. Create new order
4. Cancel order
5. Show available products in stock
6. Show orders of a customer
7. Calculate total revenue
8. Count products by category
9. Update product stock
10. Find entity by ID
11. View product details
0. Exit
========================
    `);

    const choice = prompt("Select an option: ");

    switch (choice) {
      case "1":
        addCustomerMenu();
        break;
      case "2":
        addProductMenu();
        break;
      case "3":
        createOrderMenu();
        break;
      case "4":
        cancelOrderMenu();
        break;
      case "5":
        store.listAvailableProducts();
        break;
      case "6":
        listCustomerOrdersMenu();
        break;
      case "7":
        console.log(
          "Total revenue:",
          store.calculateTotalRevenue().toLocaleString("vi-VN")
        );
        break;
      case "8":
        store.countProductsByCategory();
        break;
      case "9":
        updateStockMenu();
        break;
      case "10":
        findByIdMenu();
        break;
      case "11":
        viewProductDetailsMenu();
        break;
      case "0":
        console.log("Exiting program...");
        return;
      default:
        console.log("Invalid option!");
    }
  }
}

function addCustomerMenu() {
  const name = prompt("Enter customer name: ");
  const email = prompt("Enter email: ");
  const address = prompt("Enter address: ");
  store.addCustomer(name, email, address);
  console.log("Customer added successfully!");
}

function addProductMenu() {
  console.log("1. Electronics");
  console.log("2. Clothing");
  const type = prompt("Select product type: ");

  const name = prompt("Product name: ");
  const price = Number(prompt("Price: "));
  const stock = Number(prompt("Stock quantity: "));

  if (type === "1") {
    const warranty = Number(prompt("Warranty period (months): "));
    store.addProduct(new ElectronicsProduct(name, price, stock, warranty));
  } else if (type === "2") {
    const size = prompt("Size: ");
    const color = prompt("Color: ");
    store.addProduct(new ClothingProduct(name, price, stock, size, color));
  } else {
    console.log("Invalid product type!");
  }
}

function createOrderMenu() {
  const customerId = Number(prompt("Enter customer ID: "));
  const productQuantities: { productId: number; quantity: number }[] = [];

  while (true) {
    const productId = Number(prompt("Enter product ID (0 to stop): "));
    if (productId === 0) break;
    const quantity = Number(prompt("Quantity: "));
    productQuantities.push({ productId, quantity });
  }

  const order = store.createOrder(customerId, productQuantities);
  if (order) console.log(order.getDetail());
}

function cancelOrderMenu() {
  const orderId = Number(prompt("Enter order ID to cancel: "));
  store.cancelOrder(orderId);
}

function listCustomerOrdersMenu() {
  const customerId = Number(prompt("Enter customer ID: "));
  store.listCustomerOrders(customerId);
}

function updateStockMenu() {
  const productId = Number(prompt("Enter product ID: "));
  const newStock = Number(prompt("Enter new stock quantity: "));
  store.updateProductStock(productId, newStock);
}

function findByIdMenu() {
  console.log("1. Find customer");
  console.log("2. Find product");
  const choice = prompt("Select: ");
  const id = Number(prompt("Enter ID: "));

  if (choice === "1") {
    const customer = store.findEntityById(store.customers, id);
    console.log(customer ? customer.getDetails() : "Customer not found");
  } else if (choice === "2") {
    const product = store.findEntityById(store.products, id);
    console.log(product ? product.getProductInfo() : "Product not found");
  }
}

function viewProductDetailsMenu() {
  const productId = Number(prompt("Enter product ID: "));
  const product = store.findEntityById(store.products, productId);
  console.log(product ? product.getProductInfo() : "Product not found");
}

mainMenu();
