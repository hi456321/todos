{
    
    /**
     * 캡슐화: 캡슐화는 객체의 속성과 메서드를 하나로 묶고, 외부에서 직접 접근하지 못하도록 숨기는 개념
     * public, private, protected 키워드를 통해 공개/비공개 레벨을 설정
     * 
     * 클래스에서의 Getter와 Setter는 객체의 속성에 접근하거나 속성의 값을 변경할 때 사용되는 메서드입니다. 
     * 이들은 **캡슐화(encapsulation)**의 일환으로, 객체의 내부 상태를 직접적으로 접근하는 대신, 
     * 특정한 메서드를 통해서만 값을 읽거나 변경할 수 있도록 제어합니다.
     * 
     */
    type CofeeCup = {
        shots: number;
        hasMils: boolean;
    }

    // public: 외부에서도 사용가능
    // private: 외부에서는 절대 사용 불가능
    // protected: 외부에서는 사용 불가능 하나, 이 클래스를 상속 받은 자식 클래스에서는 사용 가능함
    class CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
        private coffeeBeansGram: number = 0; // object level
    
        // 인스턴스 생성시 가장 처음 호출되는 함수
        constructor(coffeeBeansGram: number) {
            this.coffeeBeansGram = coffeeBeansGram
        }

        static makeMachine(cofeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(cofeeBeans);
        }

        fillCoffeeBeans(beansGram: number) {
            if(beansGram < 0){
                throw new Error('value for beans should be greater than 0')
            }
            this.coffeeBeansGram = beansGram
        }

        makeCoffe(shots: number): CofeeCup {
            if(this.coffeeBeansGram < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT){
                throw new Error('no have cofeeBeans!!!')
            }
            this.coffeeBeansGram -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                shots,
                hasMils: false
            }
        }
    }

    const maker = new CoffeeMaker(32);
    console.log(maker);
    maker.fillCoffeeBeans(14)
    console.log(maker);

    class User {
        private internalAge: number;
        // fullName: string;
        get fullName(): string {
            return  `${this.firstName} ${this.lastName}`;
        }
        // Getter를 사용하면 호출 할 때마다 계산을 함
        get age(): number {
            return this.internalAge;
        }
        // Setter를 사용하면 private한 변수도 업데이트 가능함
        set age(age: number){
            this.internalAge = age
        }
        constructor(private firstName: string, private lastName: string){
            this.firstName = firstName;
            this.lastName = lastName;
            // this.fullName = `${firstName} ${lastName}`
        }
    }

    const user = new User('choe', 'bongjin');
    console.log(user.fullName);
    user.age = 23
    console.log(user.age);
    user.age = 32
    console.log(user.age);
}