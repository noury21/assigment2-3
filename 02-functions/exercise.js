// 02-functions — your work goes in this file.

export function greet(name) {
  return `Hello, ${name}!`;
}

export const double = (n) => {
  return n * 2;
};

export const applyDiscount = (amount, percent) => {
  return amount - (amount * percent) / 100;
};

export const formatPrice = (amount, currency = "EGP") => {
  return `${amount} ${currency}`;
};

export function applyTwice(fn, value) {
  return fn(fn(value));
}