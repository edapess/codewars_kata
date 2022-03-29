function unluckyDays(year){
    let unluckDay = 0;
   for (x = 0; x < 12; x++) {
     unluckDay += new Date(year, x, 13).getDay() === 5 ? 1 : 0;
   }
   return unluckDay;
 }