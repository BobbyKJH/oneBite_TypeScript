/** Unknown Type */
const unknown = () => {
	let a: unknown = 1;
	let b: unknown = "string";
	let c: unknown = true;
	let d: unknown = null;
	let e: unknown = undefined;
	
	let unknownVar: unknown;
}

/** Never Type */
const NeverExam = () => {
	const neverFc = () : never => {
		while (true){}
	}

	let num: number = neverFc();
	let srt: string = neverFc();
	let boolean: boolean = neverFc();
}

/** Void Type */
const VoidExam = () => {
	const voidFunc = (): void =>{
		console.log("Hello")
	}

	let voidVar: void = undefined;
}

/** Any Type */
const anyExam = () => {
	let unknownVar: unknown;
	let anyVar: any;
	let undefinedVar: undefined;
	let neverVar: never;

	anyVar = unknownVar;
	undefinedVar = anyVar;
	/** any 타입은 모든 타입에 가능하지만 never타입에는 유일하게 불가능 하다. */
	// anyVar = neverVar;
}