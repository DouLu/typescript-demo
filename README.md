# typescript-demo
learn typescript

- 📺视频教程：
https://www.jspang.com/detailed?id=63
- 📚文档书籍
https://jkchao.github.io/typescript-book-chinese/typings/overview.html

20200415-20200418 完成技术胖的文章 跟着练习

1. 基础类型 对象类型
2. 类型注解 \<name>:\<type> 类型推断 每个变量/对象的类型都是固定，ts无法推断出类型的一定加上类型注解 
3. 函数参数注解 对象参数注解 \<obj>:\<obj:type> 对对象参数一一注解
4. 数组类型 \<name>:\<type>[] 、 \<name>:(\<type1> | \<type2>)[]、 \<name>:objType[]
5. 类型别名 type alias，关键字 type
6. 元组 数组加强版，对数组元素位置做注解
7. 接口 interface，关键字 interface 【⚠️接口必须是对象，类型别名可以直接是类型】
    ```
    interface Obj = {};
    type Tname = string;
    interface Girl {
      name:string; // 必填值
      age?:number; // 可选值
      [propname: string]: any; // 任意值
      say():string;
    }
    ```
8. 接口与类 implements
9. 接口间继承 extends
10. 类的继承 类的重写 super关键字
11. 类的访问类型： private【只能类内部使用】 protected【只能类内部以及继承的子类中使用】 public
12. 类的getter、setter属性, 静态修饰符 static【不需要new出实例，直接使用类名调用方法】, readonly属性


1. tsc --init [生成tsconfig.json]
2. include（files）指定要编译文件，exclude排除要编译的文件
3. 联合类型 string｜number
  - ---》类型保护：
    1. 类型断言 as ：(e as TouchEvent)
      ```
      interface Waiter {
        anjiao: boolean;
        say: () => {};
      }

      interface Teacher {
        anjiao: boolean;
        skill: () => {};
      }

      function judgeWho(animal: Waiter | Teacher) {
        if (animal.anjiao) {
          (animal as Teacher).skill();
        }else{
          (animal as Waiter).say();
        }
      }
      ```
    2. 类型保护：in 语法：判断是否存在
      ```
      function judgeWhoTwo(animal: Waiter | Teacher) {
        if ("skill" in animal) {
          animal.skill();
        } else {
          animal.say();
        }
      }
      ```
    3. 类型保护：typeof
      ```
      function add(first: string | number, second: string | number) {
        if (typeof first === "string" || typeof second === "string") {
          return `${first}${second}`;
        }
        return first + second;
      }
      ```
    4. 类型保护：instanceof
      ```
      class NumberObj {
       count: number;
      }

      function addObj(first: object | NumberObj, second: object | NumberObj) {
        if (first instanceof NumberObj && second instanceof NumberObj) {
          return first.count + second.count;
        }
        return 0;
      }
      ```
4. 枚举 Enum --- 枚举通过下标反查
```
enum Status {
  PASS,
  FAIL=2,
  PENDING
}
console.log(Status.PASS,Status[2]); // 0 FAIL
```
5. 函数 泛型<>：泛型：[generic - 通用、泛指的意思],泛型就是泛指的类型。
【泛型也是支持类型推断的】
```
function join<JSPang>(first: JSPang, second: JSPang) {
  return `${first}${second}`;
}
console.log(join<string>("jspang", ".com"));
console.log(join<number>(1, 2));
```
  - Array<泛型>
  - \<T\>表示泛型
  - 多个泛型
    ```
    function join<T, P>(first: T, second: P) {
      return `${first}${second}`;
    }
    join < number, string > (1, "2");
    ```
  - 泛型的继承
    ```
    interface Girl {
      name: string;
    }
    class SelectGirl<T extends Girl> {
      constructor(private girls: T[]) {}
      getGirl(index: number): string {
        return this.girls[index].name;
      }
    }
    // const selectGirl = new SelectGirl(["大脚", "刘英", "晓红"]);
    // const selectGirl = new SelectGirl<string>(["大脚", "刘英", "晓红"]);
    const selectGirl = new SelectGirl([
      { name: "大脚" },
      { name: "刘英" },
      { name: "晓红" },
    ]);
    console.log(selectGirl.getGirl(1));
    ```
  - 泛型的约束（继承里加上类型范围）
    ```
    class SelectGirl<T extends number | string> {
      //.....
    }
    ```
