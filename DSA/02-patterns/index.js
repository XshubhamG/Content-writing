// 1. square shape
function square(n) {
  let str = ''
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      str += '* '
    }
    str += '\n'
  }
  return str
}
console.log('Square Shape:')
console.log(square(5))

// 2. triangle shape
function triangle(n) {
  let str = ''
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str += '* '
    }
    str += '\n'
  }
  return str
}
console.log('Triangle Shape:')
console.log(triangle(5))

// 3. number triangle
function numTriangle(n) {
  let str = ''
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str += `${j} `
    }
    str += '\n'
  }
  return str
}
console.log('Number Triangle:')
console.log(numTriangle(5))

// 4. number triangle 2
function numTriangle2(n) {
  let str = ''
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str += `${i} `
    }
    str += '\n'
  }
  return str
}
console.log('Number Triangle 2:')
console.log(numTriangle2(5))

// 5. reverse star triangle
function reverseTriangle(n) {
  let str = ''
  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      str += '* '
    }
    str += '\n'
  }
  return str
}
console.log('Reverse Star Triangle:')
console.log(reverseTriangle(5))

// 6. reverse number triangle
function reverseNumTri(n) {
  let str = ''
  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      str += `${j} `
    }
    str += '\n'
  }
  return str
}
console.log('Reverse Number Triangle:')
console.log(reverseNumTri(5))

// 7. equilateral triangle
function equiTri(n) {
  let str = ''
  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n - 1; j++) {
      str += '   '
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
      str += ' * '
    }

    for (let j = i; j <= n - 1; j++) {
      str += '   '
    }
    str += '\n'
  }
  return str
}
console.log('Equilateral Triangle:')
console.log(equiTri(5))

// 8. reverse equilateral triangle
function revEquiTri(n) {
  let str = ''
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= i; j++) {
      str += '   '
    }

    for (let j = 1; j <= 2 * (n - i) - 1; j++) {
      str += ' * '
    }

    for (let j = 1; j <= i; j++) {
      str += '   '
    }
    str += '\n'
  }
  return str
}
console.log('Reverse Equilateral Triangle:')
console.log(revEquiTri(5))

// 9. binary triangle
function binaryTriangle(n) {
  let str = ''
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if (i % 2 == 0) {
        str += j % 2 == 0 ? '1 ' : '0 '
      } else {
        str += j % 2 !== 0 ? '1 ' : '0 '
      }
    }
    str += '\n'
  }

  return str
}

console.log('Binary Triangle:')
console.log(binaryTriangle(5))
