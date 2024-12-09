{
    /**
     * Type Aliases
     * 사용자가 직접 타입을 지정 가능하다.
     */
    type Text = string;
    const name: Text = 'bong'
    const address: Text = 'seoul'
    
    type Num = number;
    
    type Student = {
        name: string;
        age: number;
    };

    const student: Student = {
        name: 'bong',
        age: 30,
    }

    /**
     * String Literal Types
     */
    type Name = 'name';
    let bongName: Name;
    bongName = 'name'
    // bongName = 'temp' 이거 안됨

    type Boal = true;
}