const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];
const sum = numbers.reduce((initial, current) => initial + current);
console.log('sum:', sum);
const product = numbers.reduce((initial, current) => initial * current);
console.log('product:', product);
const balance = account.reduce((initial, current) => {
  if (current.type === 'deposit') {
    return initial + current.amount;
  } else {
    return initial - current.amount;
  }
}, 0);
console.log('balance:', balance);
const composite = traits.reduce((initial, current) => Object.assign(current, initial));
console.log('composite:', composite);
