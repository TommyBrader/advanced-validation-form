//Making sure input is positive integer
document.querySelector('#number-input-min').min = 1
document.querySelector('#number-input-max').min = 1

//FizzBuzz Functions
function fizzBuzz(val) {
  if (val % 3 === 0 && val % 5 === 0) {
    return 'FizzBuzz'
  }
  else if (val % 3 === 0) {
    return 'Fizz'
  }
  else if (val % 5 === 0) {
    return 'Buzz'
  }
  else {
    return val
  }
}

function fizzBuzzCounter(val1, val2) {
  let list = []
  for (let i=val1; i<=val2; i++) {
    list.push(fizzBuzz(i));
  }
  return list
}

//Producing Result
const submitForm = document.querySelector('#number-input form')
submitForm.addEventListener('submit', function(event) {
  event.preventDefault()
  const inputMin = document.querySelector('#number-input input[name = "min-value"]').value
  const inputMax = document.querySelector('#number-input input[name = "max-value"]').value
  const numMin = parseInt(inputMin, 10)
  const numMax = parseInt(inputMax, 10)
  console.log('Min Value:', numMin)
  console.log('Max Value:', numMax)
  if (numMin > numMax) {
    alert('Minimum is larger than maximum so a result could not be found')
    // I could still output with the numbers entered the wrong way round, as seen below, but I decided to keep it like this for readability sake
    // document.querySelector('#number-input p#result span').textContent = fizzBuzzCounter(inputMax, inputMin).join(', ')
    document.querySelector('#number-input p#result span').textContent = ''
  } 
  else if (Number.isNaN(numMin) || Number.isNaN(numMax)) {
    alert('Value left blank so a result could not be found')
    document.querySelector('#number-input p#result span').textContent = ''
  }
  else {document.querySelector('#number-input p#result span').textContent = fizzBuzzCounter(numMin, numMax).join(', ')}
})