{
    type CofeeCup = {
        shots: number;
        hasMils: boolean;
    }

    class CoffeeMaker {
        // 멤버변수
        /**
         * static 키워드를 사용하면 class 레벨이기 때문에 인스턴스를
         * 생성 할 때 마다 변수를 생성하지 않음. 즉 모슨 인스턴스가 같이 사용함
         * class level 변수는 클래스명.변수명으로 사용
         */
        static BEANS_GRAMM_PER_SHOT: number = 7; // class level
        coffeeBeansGram: number = 0; // object level
    
        // 인스턴스 생성시 가장 처음 호출되는 함수
        constructor(coffeeBeansGram: number) {
            this.coffeeBeansGram = coffeeBeansGram
        }

        // static으로 함수 생성시 class level이기 때문에
        // 인스턴스를 생성하지 않고 클래스 레벨에서 바로 호출 가능
        static makeMachine(cofeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(cofeeBeans);
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
    console.log(maker)
    const maker2 = new CoffeeMaker(16);
    console.log(maker2)
    const maker3 = CoffeeMaker.makeMachine(24);
    console.log(maker3)
    console.log(CoffeeMaker.BEANS_GRAMM_PER_SHOT);

    // 비슷한 예로 Math.PI도 Math 클래스 내부의 PI함수를 static으로 선언하여
    // 인스턴스를 생성하지 않고 클래스 레벨에서 바로 호출 가능 
}