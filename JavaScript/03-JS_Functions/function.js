// call and apply methods

const airIndia = {
  airline: 'airIndia',
  iataId: 'AI',
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataId}${flightNum}`,
    )
    this.booking.push({ flight: `${this.iataId}${flightNum}`, name })
  },
}

airIndia.book('342', 'shubham')

const eurowings = {
  airline: 'Eurowings',
  iataId: 'EW',
  booking: [],
}

const book = airIndia.book

book.call(eurowings, 23, 'nikki')

// closure examples

let f

const g = function() {
  const a = 23
  return function() {
    console.log(a * 2)
  }
}

g()
f() // 46

// example 2
const bookPassenger = function(n, wait) {
  const perGroup = n / 3

  setTimeout(() => {
    console.log(`We are now boarding all ${n} passenger`)
    console.log(`There are three group, each with ${perGroup} passenger`)
  }, wait * 1000)

  console.log(`will start boarding in ${wait} seconds`)
}
