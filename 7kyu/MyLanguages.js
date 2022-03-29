function myLanguages(results) {
    return Object.keys(results).filter(el=>results[el]>=60).sort((x,y)=>results[y]-results[x])
}