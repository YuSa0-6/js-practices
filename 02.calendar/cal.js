import minimist from "minimist";

const argv = minimist(process.argv.slice(2));
const today = new Date();
const year = argv.y ?? today.getFullYear();
const month = argv.m ?? today.getMonth() + 1;

console.log(`      ${month}月${year}`);
console.log("日 月 火 水 木 金 土");
const firstDay = new Date(`${month} ${1} ${year}`).getDate();
const lastDay = new Date(year, month, 0).getDate();
const firstWeekDay = new Date(`${month} ${1} ${year}`).getDay();
process.stdout.write("   ".repeat(firstWeekDay));
function formatDate(date) {
  return date.length === 1 ? ` ${date}` : date;
}

for (let day = firstDay; day <= lastDay; day++) {
  const weekDay = new Date(`${month} ${day} ${year}`).getDay();
  const date = formatDate(day.toString());
  if (weekDay === 6) {
    process.stdout.write(`${date}\n`);
  } else {
    process.stdout.write(`${date} `);
  }
}
console.log("\n");
