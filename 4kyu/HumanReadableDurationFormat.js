function formatDuration (seconds) {
    let time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
        result = [];
  
    if (seconds === 0) return 'now';
    
    for (var key in time) {
      if (seconds >= time[key]) {
        var val = Math.floor(seconds/time[key]);
        if (val>1) {
           result.push(val+= ' ' + key + 's')
        }
        else{
          result.push(val+= ' ' + key)
          
        }
        seconds = seconds % time[key];
      }
    }
   
    return result.length > 1 ? result.join(', ').replace(/,([^,]*)$/,' and'+'$1') : result[0]
  }