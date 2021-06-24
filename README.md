# typescript-demo
learn typescript

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
