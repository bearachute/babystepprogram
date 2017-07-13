function createDog(name, ability) {
	return { type: "animal", name, ability };
}
let a = createDog("wolf", "bark");
console.log(JSON.stringify(a));

function foo() {
	return "firstname";
}
let obj = {
	foo: "bar",
	[ "prop_" + foo() ]: 42
}
console.log(JSON.stringify(obj));