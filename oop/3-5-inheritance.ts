{
    
    /**
     * 상속
     * 클래스 생성시 중복되는 코드를 줄이기 위해 클래스 생성시
     * 공통적으로 사용되는 다른 클래스를 상속 받는다.
     * extends 키워드를 통해 클래스를 상속 받는다.
     * interface는 implements를 사용!
    */
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
        private coffeeBeansGram: number = 0; // object level
    
        // 인스턴스 생성시 가장 처음 호출되는 함수
        constructor(coffeeBeansGram: number) {
            this.coffeeBeansGram = coffeeBeansGram
        }

        private grindCoffeeBeans(shots: number){
            if(this.coffeeBeansGram < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT){
                throw new Error('no have cofeeBeans!!!')
            }
            this.coffeeBeansGram -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        }

        private preheat(): void {
            console.log('heating up....');
        }

        private extract(shots: number): CoffeeCup {
            console.log(`Pulling ${shots} shots....`)
            return {
                shots,
                hasMilk: false
            }

        }

        fillCoffeeBeans(coffeeBeansGram: number): void {
            this.coffeeBeansGram = coffeeBeansGram;
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindCoffeeBeans(shots);
            this.preheat();
            return this.extract(shots)
        }

        clean(){
            console.log('cleaning the machine!')
        }
    }

    class CaffeLatteMachine extends CoffeeMachine{
        /**
         * 자식 클래스에서 부모 클래스의 함수를 덮어 씌우는 걸 오버라이팅 이라고 함
         */
        // 
        // 자식클래스에서 constructor 선언시 super를 호출해야함
        constructor(beans: number, serialNumber: string) {
            super(beans);
        }
        private steamMilk(): void {
            console.log('Steaming some milk...')
        }
        makeCoffee(shots: number): CoffeeCup {
            // 자식 클래스에서 부모 클래스의 함수에 접근 할 때
            // super 키워드를 사용함
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return {
                ...coffee,
                hasMilk: true,
            }
        }
    }

    const machine = new CoffeeMachine(23);
    const latteMachine = new CaffeLatteMachine(23);
    const latte = latteMachine.makeCoffee(1);
    console.log(latte)
}