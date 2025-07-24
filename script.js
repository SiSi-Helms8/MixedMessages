//stores all the quotes in an array
const quotePicker = ['If you can’t be kind, at least be vague.','Whatever you do, always give 100 percent, unless you’re donating blood.', 'If you don’t have wrinkles, you haven’t laughed enough.', 'When in doubt, look intelligent.', 'People often say that motivation doesn’t last. Neither does bathing— that’s why it’s recommended daily.', 'Persist like a postage stamp; stick to one thing until you reach your destination.', 'Innocent by nature. Naughty by choice.', 'This too shall pass. It might pass like a kidney stone, but it will pass.', 'If it was meant to be controlled, it would have come with a remote.', 'It’s better to be absolutely ridiculous than absolutely boring!'];

const petNames = ['Darling', 'Buttercup', 'Sweet Cheeks', 'Little One', 'Cutie Patootie', 'Sweetie', 'Bro', 'Little Angel', 'Sugar Plum', 'Babe']

const closingGoodbye = [';)', 'You got this!', 'Keep on keeping on!', "Don't worry, be happy!", 'Keep your mind right.', 'Stick to your guns!', 'Always be in the moment', 'Do not forget to be strong', 'Live life to the fullest!', ':)']

//generates random number
const generateRandomNumber = () => {
  let randomNumber = Math.floor(Math.random() * quotePicker.length);
  return randomNumber;
}

//utilizes randomNumber to select a quote in the array
const randomQuote = () => {
  let indexOne = generateRandomNumber();
  let quoteOfTheDay = quotePicker[indexOne];
  let indexTwo = generateRandomNumber();
  let nameOfTheDay = petNames[indexTwo];
  let indexThree = generateRandomNumber();
  let goodbyeOfTheDay = closingGoodbye[indexThree];
  return console.log(`Your quote of the day ${nameOfTheDay}, is: "${quoteOfTheDay}" Don't forget, ${goodbyeOfTheDay}`);
}

console.log(randomQuote());
