{
    /**
     * Type Assertions
     * 1. as 키워드를 통해 캐스팅
     * 2. <string>변수 와 같이 캐스팅
     * 가능하면 Assertions은 지양.. return값이 확신되더라도
     * 예기치 못한 에러 발생 가능성이 있음.. 주의필요
     */
    function jsStrFunc(): any {
        return 'hello'
    }
    const result = jsStrFunc();
    // 아래 2개는 똑같음
    console.log((result as string).length);
    console.log(<string>result.length);
    
    // !도 비슷한 맥락임
}