import minimist from 'minimist';
const argv = minimist(process.argv.slice(2));
// get args from cli
// set year
const year = argv.y || new Date().getFullYear();
const month = argv.m || new Date().getMonth() + 1;
// set month
// set format date
// set format week
// set first date
// set last date
// set first Saturday
// print calendar
//
