let count: number;
count = 2;

let n = '123';

function total(one: number, two: number): number {
	return one + two;
}
const num = total(1, 2);

function sayHi(): void {
	console.log('sayHi');
	// return false;
}

function total1({ one, two }: { one: number; two: number }): number {
	return one + two;
}
const num1 = total1({ one: 2, two: 2 });
console.log(num1);

function a({ a }: { a: string }) {
	console.log('a:', a);
}
a({ a: 'as' });

let arr: { name: string; age: number }[] = [];
arr = [
	{ name: 's1', age: 2 },
	{ name: 's2', age: 2 },
	{ name: 's3', age: 2 }
];

type person = { name: string; age: number };

const arr1: person[] = [{ name: 's1', age: 2 }];

class Xiaojiejie {
	constructor(private _age: number) {}
	get age() {
		return this._age;
	}
	set age(age: number) {
		this._age = age;
	}
	static say(): string {
		return 'hello -';
	}
}
const x1 = new Xiaojiejie(18);
console.log('x1 age:', x1.age);
x1.age = 10;
console.log('x1 age:', x1.age);

console.log('say:', Xiaojiejie.say());
