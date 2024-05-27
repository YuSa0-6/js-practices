import minimist from 'minimist';
const argv = minimist(process.argv.slice(2));
const year = argv.y || new Date().getFullYear();
const month = argv.m || new Date().getMonth() + 1;

console.log(`      ${month}月${year}`);
console.log('日 月 火 水 木 金 土');
// set first date
const firstDay = new Date(year, month, 1).getDate();
// set last date
const getLastDay = (year, month) => {
  return new Date(year, month, 0).getDate();
}
const lastDay = getLastDay(year, month);
// set first Saturday
firstSaturdayNumber = 
// print calendar
//
