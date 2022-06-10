const writeCards = (names) => {
  return names.map(name => `Thank you, ${name}, for the wonderful surprise gift!`);
}

const countDown = (number) => {
  for (let i = number; i >= 0; i--) {
      console.log(i)
  }
} 