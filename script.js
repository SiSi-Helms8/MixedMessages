//stores all the quotes in an array
const quotePicker = ['If you can’t be kind, at least be vague.','Whatever you do, always give 100 percent, unless you’re donating blood.', 'If you don’t have wrinkles, you haven’t laughed enough.', 'When in doubt, look intelligent.', 'People often say that motivation doesn’t last. Neither does bathing— that’s why it’s recommended daily.', 'Persist like a postage stamp; stick to one thing until you reach your destination.', 'Innocent by nature. Naughty by choice.', 'This too shall pass. It might pass like a kidney stone, but it will pass.', 'If it was meant to be controlled, it would have come with a remote.', 'It’s better to be absolutely ridiculous than absolutely boring!'];

//generates random number
const generateRandomNumber = () => {
  let randomNumber = Math.floor(Math.random() * quotePicker.length);
  return randomNumber;
}

//utilizes randomNumber to select a quote in the array
const randomQuote = () => {
  let index = generateRandomNumber();
  let quoteOfTheDay = quotePicker[index];
  return quoteOfTheDay;
}
