/** 타입 추론 */
let a = 10;

let b = "hello";

let c = {
	id: 1,
	name: "kim",
	profile: {
		nickname: "bobby"
	}
}

let { id, name, profile} = c;

const func = (message = "hello") => {
	return "Hello"
}

let d;

d = 10;
d.toFixed();

const num = 10;

let arr = [1, "hello"]