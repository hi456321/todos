{
    /**
     * Enum
     * 상수의 집합으로 관련이 있는 상수들을 묶을 때 사용한다. (열거형이다..) 
     * JavaScript에서는 Enum이 없다.
     * => TypeScript에만 있는 데이터 타입임..
     * 
     * TypeScript에서는 Enum을 가능하면 사용 지양함
     * 
     */

    // enum에서는 첫문자만 대문자로 작성한다.
    enum DAYS {
        Monday,
        Tuesday,
        Wendseday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
    console.log(DAYS.Monday);
    console.log(DAYS.Sunday);
    const day = DAYS.Thursday;

    let tempDay = DAYS.Tuesday;
    // tempDay = 20; Error 발생
    console.log(tempDay)
}