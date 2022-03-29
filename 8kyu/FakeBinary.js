function fakeBin(x) {
    let bin = []
    for (let i = 0; i <x.length; i++) {
      +x.charAt(i) < 5 ? bin.push("0") : bin.push("1")
    }
    return bin.join("")
}