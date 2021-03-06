// Consider a sequence u where u is defined as follows:
//
// The number u(0) = 1 is the first one in u.
// For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
// There are no other numbers in u.
// Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]
//
// 1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...
//
// Task:
//
// Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered (with <) sequence u.
//
// Example:
//
// dbl_linear(10) should return 22
//
// Note:
//
// Focus attention on efficiency

function dblLinear(n) {
  let tmp = n
  let dict = {}
  let dups = 0

  if (n === 0) return 1

  let seq = [1]
  let index = 0

  let maxCount = 0

  while (n) {
    // let x = seq[index]

    // console.log('x: ', x)

    let y, z
    let set = []
    console.log('set BEFORE: ', set);

    //  FOR ALL NEW VALUES (determined by 'max')
    let max = Math.pow(2, maxCount)
    console.log('max: ', max)

    for (let i = 0; i < max; i++) {
      let x = seq[index]
      let yDup = false
      let zDup = false
      y = 2 * x + 1
      z = 3 * x + 1

      console.log('x in loop: ', x)
      if (x === undefined) console.log('index: ', index)
      // console.log('y in loop: ', y)
      // console.log('z in loop: ', z)
      else {
        if (!dict[y]) set.push(y), dict[y] = 1
        else yDup = true, console.log('DUPLICATE: ', y), dups++
        if (!dict[z]) set.push(z), dict[z] = 1
        else zDup = true, console.log('DUPLICATE: ', z), dups++

        // if (zDup && yDup) max++, console.log('DOUBLE DUPLICATE')
        index++  //  Increment index until max for all new values of previous set
      }

    }


    console.log('set: ', set);

    seq = seq.concat(set).sort((a, b) => a-b)
    console.log('seq SORT: ', seq, 'seq.length: ', seq.length);

    if (seq[tmp]) {
      console.log('dups: ', dups);
      return seq[tmp-dups]
    }

    maxCount++
    n--
  }

  console.log('seq[tmp]: ', seq[tmp]);

  return seq[tmp]
}

let n = 4 // ??
let n0 = 0   //  1
let n1 = 10   //  22
let n2 = 20   //  57
let n3 = 30   //  91
let n4 = 50   //  175
let n5 = 100  //  447

// console.log(dblLinear(n0))
// console.log(dblLinear(n))
// console.log(dblLinear(n1))
// console.log(dblLinear(n2))
// console.log(dblLinear(n3))
// console.log(dblLinear(n4))
console.log(dblLinear(n5))
