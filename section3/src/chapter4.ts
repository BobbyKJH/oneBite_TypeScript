/** 대수 타입 */

/** 합집합 타입 - Union 타입 */
let a: string | number;
a = 1;
a = "Hello";

let arr : (number | string | boolean)[] = [1, "Hello", true];

type Dog = {
	name: string;
	color: string;
}

type Person = {
	name: string;
	language: string;
}

type Union1 = Dog | Person

let union1: Union1 = {
	name: "",
	color: ""
}

let union2: Union1 = {
	name: "",
	language: "",
}

let union3: Union1 = {
	name:"",
	color:"",
	language:""
}

// let union4: Union1 = {
// 	name:"",
// }

/** Intersection Type */
let variable: number & string;

type Intersection = Dog & Person
let intersection1: Intersection = {
	name: "",
	color: "",
	language: ""
}