// null,undefinde,symbol,boolean，void
const fullname: string = 'doulu';
// 对象类型 数组类型 类类型 函数类型
interface XiaoJieJie {
	uname: string;
	age: number;
}

const xiaohong: XiaoJieJie = {
	uname: '小红',
	age: 18
};

const xiaoJieJie: {
	name: string;
	age: number;
} = {
	name: '大脚',
	age: 18
};
console.log(xiaoJieJie.name, xiaohong.uname);
const xiaoJieJies: string[] = ['num1', 'num2'];
console.log('xiaoJieJies: ', xiaoJieJies);

class Person {}
const dajiao: Person = new Person();

const fnPeron: (name: string) => string = (name: string) => {
	return 'p1' + name;
};
console.log('fnPeron: ', fnPeron('test'),fnPeron);
