{
    /**
     * TypeScript type
     */

    // number
    const num:number = 0;

    // string
    const str:string = 'hello'

    // boolean
    const boal:boolean = false;

    // undefined
    // 보통 유니온하여 옵셔널로 사용함
    let name: undefined;
    let age: number | undefined;
    age = undefined;
    age = 1;
    function find(name:string): number | undefined {
        return undefined;
    }

    // null
    // 보통 유니온하여 옵셔널로 사용함
    let person: null;
    let person2: string | null;
    
    // unknown
    // unknown은 가능하면 쓰지 말 것
    let notSure: unknown = 0;
    notSure = 'hello'
    notSure = true;

    // any
    // any도 가능하면 쓰지 말 것
    let anything: any = 0;
    anything = 'hello';

    // void
    function print(): void {
        console.log('hello');
    }

    // never
    // function에서 return값이 없을 때 사용
    function throwError(message: string): never{
        throw new Error(message)
    };

    // object
    // object에는 객체뿐만이 아닌 배열도 들어 갈 수 있기 때문에
    // 명확하게 하는 것이 좋다..
    let obj:object;

    obj = {
        name: 'bong'
    }

    // 배열도 에러 안남.
    obj = [1,2,3,4,5]

}