/** 객체 타입간의 호환성 */
type Animal = {
	name: string;
	color: string;
}

type Dog = {
	name: string;
	color: string;
	breed: string;
}

let animal: Animal = {
	name: "기린",
	color: "yellow"
}

let dog: Dog = {
	name: "진도",
	color: "brown",
	breed: "진돗개"
}

type Book = {
	name:string;
	price: number;
}

type ProgrammingBook = {
	name: string;
	price: number;
	skill: string;
}

let book: Book;

let programmingBook: ProgrammingBook = {
	name:"한 입 크기로 잘러먹는 리액트",
	price: 33000,
	skill: "react"
}

/** 초과 프로퍼티 검사 */
let book2: Book = {
	name:"한 입 크기로 잘러먹는 리액트",
	price: 33000,
	// skill: "react"
}

let book3: Book = programmingBook;