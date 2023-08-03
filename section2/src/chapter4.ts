/** 타입 별칭 */
type User = {
	id: number;
	name: string;
	nickname: string;
	birth: string;
	bio: string;
	location: string;
}



/** 인덱스 시그니처 */
type CountryCodes = {
	[key: string]: string;
}

let countryCodes: CountryCodes = {
	Korea: "ko",
	UnitedState: "us",
	UnitedKingdom: "uk"
}

type CountryNumber = {
	[key: string]: number;
	Korea: number; // -> 인덱스 시그니처 와 다르기 때문에 에러 발생
}

let CountryNumber: CountryNumber = {
	Korea: 410,
}