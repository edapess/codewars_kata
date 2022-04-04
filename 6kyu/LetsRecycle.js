// input = [
//   {"type": "rotten apples", "material": "organic"},
//   {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
//   {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
//   {"type": "amazon box", "material": "paper"},
//   {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
// ]

// let output = [
//   ["wine bottle", "amazon box", "beer bottle"],
//   ["wine bottle", "beer bottle"],
//   ["rotten apples", "out of date yogurt"],
//   ["out of date yogurt"]
// ]

function recycle(array) {
  let output = [
    [],
    [],
    [],
    []
  ]
  array.map((obj) => {
    if (obj.material === "paper" || obj.secondMaterial === "paper") {
      output[0].push(obj.type)
    }
    if (obj.material === "glass" || obj.secondMaterial === "glass") {
      output[1].push(obj.type)
    }
    if (obj.material === "organic" || obj.secondMaterial === "organic") {
      output[2].push(obj.type)
    }
    if (obj.material === "plastic" || obj.secondMaterial === "plastic") {
      output[3].push(obj.type)
    }
  })
  return output
}

console.log('====================================');
console.log(recycle([{
    "type": "rotten apples",
    "material": "organic"
  },
  {
    "type": "out of date yogurt",
    "material": "organic",
    "secondMaterial": "plastic"
  },
  {
    "type": "wine bottle",
    "material": "glass",
    "secondMaterial": "paper"
  },
  {
    "type": "amazon box",
    "material": "paper"
  },
  {
    "type": "beer bottle",
    "material": "glass",
    "secondMaterial": "paper"
  }
]));
console.log('====================================');