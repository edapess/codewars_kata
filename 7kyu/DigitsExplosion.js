function explode(s) {
    function replacer(match, p1, p2, p3, offset, string) {
        return match.repeat(match)
      }
    return s.replace(/\d/g,replacer)

}