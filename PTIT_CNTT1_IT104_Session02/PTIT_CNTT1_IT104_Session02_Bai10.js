const details = [];

const getOrderSummaryProduce = (products) => {
  const details = products.map((product) => {
    const { name, price, discount, quantity, bulkDiscount = {} } = product;

    let finalPrice = price * (1 - discount);

    if (bulkDiscount.minQuantity && quantity >= bulkDiscount.minQuantity) {
      finalPrice *= 1 - bulkDiscount.extraDiscount;
    }
    finalPrice = Math.round(finalPrice);
    const subtotal = finalPrice * quantity;

    return { name, finalPrice, quantity, subtotal };
  });
  const totalBeforeDiscount = products.reduce(
    (sum, { price, quantity }) => sum + price * quantity,
    0
  );

  const totalAfterDiscount = details.reduce(
    (sum, item) => sum + item.subtotal,
    0
  );

  return {
    totalBeforeDiscount,
    totalAfterDiscount,
    details,
  };
};

const products = [
  { name: "A", price: 100, discount: 0.1, quantity: 2 },
  {
    name: "B",
    price: 200,
    discount: 0.2,
    quantity: 1,
    bulkDiscount: { minQuantity: 2, extraDiscount: 0.05 },
  },
  {
    name: "C",
    price: 300,
    discount: 0,
    quantity: 3,
    bulkDiscount: { minQuantity: 3, extraDiscount: 0.1 },
  },
];

console.log(getOrderSummaryProduce(products));
