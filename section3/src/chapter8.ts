/** 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입
 * */

type Admin = {
	tag: "Admin";
	name: string;
	kickCount: number;

}

type Member = {
	tag: "Member";
	name: string;
	point: number;
}

type Guest = {
	tag: "Guest";
	name: string;
	visitCount: number;
}

type User = Admin | Member | Guest;

/**
 * Admin: {name}님 현재까지 kickCount명 강퇴
 * Member: {name}님 현재까지 point 모았습니다
 * Guest: {name}님 현재까지 visitCount번 방문
 * */
const Login = (user: User) => {
	switch (user.tag) {
		case "Admin": {
			console.log(`${user.name}님 ${user.kickCount}번 강퇴`)
			break;
		}
		case "Member": {
			console.log(`${user.name}님 ${user.point}번 강퇴`)
			break
		}
		case "Guest": {
			console.log(`${user.name}님 ${user.visitCount}번 방문`)
			break
		}
	}
}

/** 비동기 객체 */
type LoadingTask = {
	state: "LOADING"
}

type FailedTask = {
	state: "FAILED",
	error: {
		message: string;
	}
}

type SuccessTask = {
	state: "SUCCESS";
	response: {
		data: string;
	}
}

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

const processResult = (task: AsyncTask) =>{
	switch (task.state){
		case "LOADING": {
			console.log("로딩중");
			break;
		}
		case "FAILED": {
			console.log(`에러: ${task.error.message}`);
			break;
		}
		case "SUCCESS": {
			console.log(`데이터: ${task.response.data}`);
			break;
		}
	}
}

const loading: AsyncTask = {
	state: "LOADING"
}

const failed: AsyncTask = {
	state: "FAILED",
	error: {
		message: "오류 발생"
	}
}

const success: AsyncTask = {
	state: "SUCCESS",
	response: {
		data: "데이터"
	}
}