/** 객체 리터럴 타입 */
let user: {
	/** Optional Property */
	id?: number;
	name: string;
} = {
	id: 1,
	name: "kim"
}

/** readonly */
let config: {
	readonly apiKey: string;
} = {
	apiKey: "My Api Key"
}