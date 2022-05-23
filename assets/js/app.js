// alert('ok');

var cl = console.log;

// Map() >> when we have to apply same functionality on given array's element.
// map method returns a new array.



let ages = [25,12,30,55,64,10,50,44,35];

let companies = [
	{ name: "Company One", category: "Finance", start: 1981 , end: 2003},
	{ name: "Company Two", category: "Retail", start: 1992 , end: 2008},
	{ name: "Company Three", category: "Auto", start: 1999 , end: 2007},
	{ name: "Company Four", category: "Retail", start: 1989 , end: 2010},
	{ name: "Company Five", category: "Technology", start: 2009 , end: 2014},
	{ name: "Company Six", category: "Finance", start: 1987 , end: 2010},
	{ name: "Company Seven", category: "Auto", start: 1986 , end: 1996},
	{ name: "Company Eight", category: "Technology", start: 2011 , end: 2016},
	{ name: "Company Nine", category: "Retail", start: 1981 , end: 1989},
];

// ages 

let newages = [];

// ages.forEach(function (age){
	// newages.push(age * 2);
// });
// cl(newages);

// ages.forEach(age => newages.push(age * 2));
// cl(newages);

let doubleages = ages.map((age) => {
	return (age * 2);
});
cl(doubleages);

// sqrt 

let sqrtofages = [];

// ages.forEach(function (age) {
	// sqrtofages.push(Math.sqrt(age));
// });
// cl(sqrtofages);

// ages.forEach((age) => sqrtofages.push(Math.sqrt(age)));
// cl(sqrtofages);

// let sqrtOfages = ages.map(age => {
	// return (Math.sqrt(age));
// });
// cl(sqrtOfages);

let sqrtOfages = ages.map((age) => Math.sqrt(age));
cl(sqrtOfages);

// compName 

let compNames = [];

// companies.forEach(function (comp) {
	// cl(comp);
	
	// compNames.push(comp.name);
// });
// cl(compNames);

// companies.forEach(comp => compNames.push(comp.name));
// cl(compNames);

let newcompNames = companies.map(comp => comp.name);
cl(newcompNames);

// ['1981-2003','1999-2007',1989-2010'];

let compDuration = [];

// companies.forEach(function (comp){
	// compDuration.push(`${comp.start}-${comp.end}`);
// });
// cl(compDuration);

// companies.forEach(comp => {
	// compDuration.push(`${comp.start}-${comp.end}`);
// });
// cl(compDuration);

// let newcompDuration = companies.map(comp => {
	// return (`${comp.start}-${comp.end}`);
// });
// cl(newcompDuration);

let newcompDuration = companies.map(comp => (`${comp.start}-${comp.end}`));
cl(newcompDuration);

// [{compname : "Company One", duration : 22}, {compname : "Company Two", duration : 16}];

let companyName = [];

// companies.forEach(function (comp){
	// let obj = {
		// compName : comp.name,
		// duration : comp.end-comp.start
	// }
	// cl(obj);
	// companyName.push(obj);
// });
// cl(companyName);

// companies.forEach(comp => {
	// companyName.push({
		// compName : comp.name,
		// duration : comp.end-comp.start,
	// });
// });
// cl(companyName);

// let compNameDuration = companies.map(comp => {
	// return {
		// compName : comp.name,
		// duration : comp.end-comp.start,
	// }
// });
// cl(compNameDuration);

let compNameDuration = companies.map(comp => ({compName : comp.name, duration : (comp.end-comp.start)}));
cl(compNameDuration);

// [{compName : "Company One", category : "retail"}];

let compCategory = [];

// companies.forEach(function (comp) {
	// let object = {
		// compName : comp.name,
		// category : comp.category
	// };
	// cl(object);
// });

// companies.forEach(comp => {
	// compCategory.push({
		// compName : comp.name,
		// category : comp.category
	// });
// });
// cl(compCategory);

// let newcompCategory = companies.map(comp => {
	// return {
		// compName : comp.name,
		// category : comp.category
	// }
// });
// cl(newcompCategory);

let newcompCategory = companies.map(comp => ({compName : comp.name, category : comp.category}));
cl(newcompCategory);

// [{compName : "Company One", years : '1981-2003'}];

let compYears = [];

// companies.forEach(function (comp){
	// compYears.push({
		// compName : comp.name,
		// years : `${comp.start}-${comp.end}`
	// });
// });
// cl(compYears);

// companies.forEach(comp => {
	// compYears.push({
		// compName : comp.name,
		// years : `${comp.start}-${comp.end}`
	// });
// });
// cl(compYears);

// let newcompYears = companies.map(comp => {
	// return {
		// compName : comp.name,
		// years : `${comp.start}-${comp.end}`
	// }
// });
// cl(newcompYears);

let newcompYears = companies.map(comp => ({compName : comp.name, years : `${comp.start}-${comp.end}`}));
cl(newcompYears);



const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];
	

	
// 1)  Give us an array of the inventors first and last names // "Albert Einstein"


let inventorsName = [];

// inventors.forEach(function (inventor) {
	// inventorsName.push(`${inventor.first}${inventor.last}`);
// });	
// cl(inventorsName);

// inventors.forEach(inventor => {
	// inventorsName.push(`${inventor.first}${inventor.last}`);
// });
// cl(inventorsName);

// let newinventorsName = inventors.map(inventor => {
	// return `${inventor.first}${inventor.last}`;
// });
// cl(newinventorsName);

let newinventorsName = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
cl(newinventorsName);



// 2) [{name : "Albert Einstein" , age : 58}]

let inventorsage = [];

// inventors.forEach(function (inventor){
	// inventorsage.push({
		// inventorsName : `${inventor.first}${inventor.last}`,
		// age : inventor.passed-inventor.year
	// });
// });
// cl(inventorsage);

// inventors.forEach(inventor => {
	// inventorsage.push({
		// inventorsName : `${inventor.first}${inventor.last}`,
		// age : inventor.passed-inventor.year
	// });
// });
// cl(inventorsage);

// let newinventorsAge = inventors.map(inventor => {
	// return {
		// inventorsName : `${inventor.first} ${inventor.last}`,
		// age : inventor.passed-inventor.year
	// };
// });
// cl(newinventorsAge);

let newinventorsAge = inventors.map(inventor => ({inventorsName : `${inventor.first} ${inventor.last}`, age : inventor.passed-inventor.year}));

cl(newinventorsAge);