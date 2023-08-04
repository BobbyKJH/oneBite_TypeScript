let anyVar: any = 10;

anyVar = "hello"

anyVar = true

anyVar = {}

anyVar = () => {}

let num: number = 1;
num = anyVar;

// Unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

if(typeof unknownVar === "string") {
	unknownVar.toUpperCase();
}