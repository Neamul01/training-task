export const allOrders = [
  { id: 1, customer: "John Doe", deliveryType: "Regular", total: 100 },
  { id: 2, customer: "Jane Smith", deliveryType: "Express", total: 150 },
  { id: 3, customer: "Michael Johnson", deliveryType: "Regular", total: 80 },
  { id: 4, customer: "Emily Brown", deliveryType: "Express", total: 120 },
  { id: 5, customer: "David Wilson", deliveryType: "Regular", total: 90 },
  { id: 6, customer: "Sarah Davis", deliveryType: "Express", total: 110 },
  { id: 7, customer: "Daniel Taylor", deliveryType: "Regular", total: 70 },
  { id: 8, customer: "Olivia Anderson", deliveryType: "Express", total: 130 },
  { id: 9, customer: "James Moore", deliveryType: "Regular", total: 85 },
  { id: 10, customer: "Sophia Clark", deliveryType: "Express", total: 140 },
  { id: 11, customer: "Joseph Lee", deliveryType: "Regular", total: 75 },
  { id: 12, customer: "Ava Martinez", deliveryType: "Express", total: 115 },
  { id: 13, customer: "Matthew Hall", deliveryType: "Regular", total: 95 },
  { id: 14, customer: "Emma Young", deliveryType: "Express", total: 125 },
  { id: 15, customer: "Andrew Scott", deliveryType: "Regular", total: 65 },
  { id: 16, customer: "Isabella King", deliveryType: "Express", total: 135 },
  { id: 17, customer: "William Green", deliveryType: "Regular", total: 105 },
  { id: 18, customer: "Mia Adams", deliveryType: "Express", total: 145 },
  { id: 19, customer: "Benjamin Hill", deliveryType: "Regular", total: 78 },
  { id: 20, customer: "Chloe Baker", deliveryType: "Express", total: 95 },
];

export const regularOrders = allOrders.slice(0, 10);
export const expressOrders = allOrders.slice(10, 20);
