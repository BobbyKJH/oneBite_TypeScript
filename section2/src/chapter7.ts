const fc1 = (): string => {
	return "hello"
}

const fc2 = (): void => {
	console.log("hello")
}

const fc3 = (): never => {
	while (true) {}
}