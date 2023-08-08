/** 타입 단언 */

type Person = {
	name: string;
	age: number;
}

let person = {} as Person
person.name = "Kim";
person.age = 28;

type Dog = {
	name: string;
	color: string;
}

let dog = {
	name: "멍멍이",
	color: "brown",
	breed:"진도"
} as Dog;

/** 타입 단언의 규칙
 * A as B
 * A가 B의 슈퍼타입 또는 서브 타입 이어야 한다.
 * */

let num = 10 as never;
let num1 = 10 as unknown;

// let num3 = 10 as string; => 서브타입이 아니다.

/** const 단언 */
let num4 = 10 as const

let cat = {
	name: "고양이",
	color: "white"
} as const;

/** Non Null 단언 */
type Post = {
	title: string;
	author?: string;
}

let post: Post = {
	title: "title",
	author: "Kim"
}

const len: number = post.author!.length;