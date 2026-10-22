import { findAllOrders, findOrderById } from "./orders-db.js";

export async function loadOrders() {
  const orders = await findAllOrders();
  return orders;
}

export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Alexandria" && order.status === "cancelled"
  );
}
export function summarize(orders) {
  return orders.reduce(
    (highest, order) => (order.price > highest ? order.price : highest),
    0
  );
}
export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.student}: ${order.item} x${order.quantity}`;
  } catch {
    return `No order with id ${id}`;
  }
}
export function toJsonLines(orders) {
  const selectedOrders = orders.map((order) => ({
    student: order.student,
    item: order.item,
  }));

  return JSON.stringify(selectedOrders);
}