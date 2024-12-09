{
    // Array
    const fruits: string[] = ['apple', 'banana'];
    const scores: Array<number> = [1, 2, 3, 4, 5];

    function printArray(fruits: readonly string[]){
        fruits.forEach((fruit)=> {
            console.log(fruit)
        })
    }

    // Tuple => 다른 타입의 데이터를 배열에 선언 가능
    // Tuple는 가독성이 떨어짐(index) Tuple대신 interface, type alias, class 사용권장
    let student: [string, number];
    student = ['name', 123];
    student[0] // name
    student[1] // 123

}