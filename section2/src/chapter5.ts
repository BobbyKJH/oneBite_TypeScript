// enum type
// 여러가지 값들에 각각의 이름을 부여해 열거해두고 사용하는 타입

enum Role {
	ADMIN = 0,
	USER = 1,
	GUEST = 2
}

enum Language {
	korea = "ko",
	english = "en"
}

const user1 = {
	name: "admin",
	role : Role.ADMIN,
	language : Language.korea
}

const user2 = {
	name: "admin",
	role : Role.USER,
	language : Language.english
}

const user3 = {
	name: "admin",
	role : Role.GUEST
}

console.log(user1, user2, user3)