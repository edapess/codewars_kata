function disemvowel(str) {
    let vowels = "aeiouAEIOU"
    let withoutVowel = ""
    for (let i = 0; i < str.length; i++) {
      if(vowels.includes(str[i]))continue;
        withoutVowel += str[i]
      
      
    }
    return withoutVowel
  }