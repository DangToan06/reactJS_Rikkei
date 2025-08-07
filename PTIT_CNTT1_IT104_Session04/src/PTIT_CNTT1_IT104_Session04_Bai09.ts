interface Product9 {
  readonly id9: string;
  name: string;
  price: number;
}
interface OrderItem {
  product: Product9;
  quantity: number;
  note?: string;
}

interface Order {
  orderId: string;
  customerName: string;
  items: OrderItem[];
  deliveryAddress: string;
  isPaid: boolean;
}

interface Invoice {
  invoiceId: string;
  orders: Order[];
  createdAt: Date;
}

const invoiceData: Invoice = {
  invoiceId: "INV001",
  orders: [
    {
      orderId: "ORD001",
      customerName: "Nguyễn Văn A",
      items: [
        {
          product: { id9: "P001", name: "Áo sơ mi", price: 500000 },
          quantity: 2,
        },
        {
          product: { id9: "P002", name: "Quần jean", price: 400000 },
          quantity: 1,
        },
      ],
      deliveryAddress: "Đà Nẵng",
      isPaid: true,
    },
    {
      orderId: "ORD002",
      customerName: "Trần Thị B",
      items: [
        {
          product: { id9: "P003", name: "Váy họa", price: 700000 },
          quantity: 1,
          note: "size M",
        },
      ],
      deliveryAddress: "Hồ Chí Minh",
      isPaid: false,
    },
  ],
  createdAt: new Date("2024-05-14"),
};

const calculateInvoiceTotal = (invoice: Invoice): number => {
  const { orders } = invoice;
  let total = 0;
  orders.forEach((order) => {
    let totalPrice = 0;
    totalPrice = order.items.reduce(
      (sum, item) => sum + item.quantity * item.product.price,
      0
    );
    total += totalPrice;
  });
  return total;
};

export const Total = (order: Order): number => {
  let totalPrice = 0;
  totalPrice = order.items.reduce(
    (sum, item) => sum + item.quantity * item.product.price,
    0
  );
  return totalPrice;
};

const getUnpaidOrders = (invoice: Invoice): Order[] => {
  const unpaid: Order[] = [];
  const { orders } = invoice;
  for (const order of orders) {
    if (!order.isPaid) {
      unpaid.push(order);
    }
  }
  return unpaid;
};

const printInvoice = (invoice: Invoice): void => {
  console.log(`
        HOA DON: ${invoice.invoiceId} - Ngay tao: ${invoice.createdAt}
        -----------------------------
        `);
  const { orders } = invoice;
  for (let i = 0; i < orders.length; i++) {
    console.log(`
        DON HANG: ${orders[i].orderId} - ${orders[i].customerName}
        `);
    for (let j = 0; j < orders[i].items.length; j++) {
      console.log(`
        - ${orders[i].items[j].product.name} * ${
        orders[i].items[j].quantity
      } -> ${orders[i].items[j].product.price.toLocaleString("vi-VN")}
        `);
    }

    let totalValue = Total(invoice.orders[i]);
    console.log(`        Tong don: ${totalValue}`);
    if (invoice.orders[i].isPaid) {
      console.log(`        Trang thai: DA THANH TOAN`);
    } else {
      console.log(`        Trang thai: CHUA THANH TOAN`);
    }
  }
  console.log(
    `        Tong don hang la: ${calculateInvoiceTotal(invoice).toLocaleString(
      "vi-VN"
    )}`
  );
};

console.log(getUnpaidOrders(invoiceData));

printInvoice(invoiceData);
