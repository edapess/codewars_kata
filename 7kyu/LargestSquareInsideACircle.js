function areaLargestSquare(r) {
    let diameter = 2 *r
    let side = diameter / Math.sqrt(2)
    return Math.round(side*side)
    
  }