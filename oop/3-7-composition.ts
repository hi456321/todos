{
    
    /**
     * 다형성
     * 다형성은 동일한 메서드가 여러 객체에서 다르게 동작하게 만드는 특성입니다. 
     * 주로 상속을 통해 메서드를 오버라이딩하여 구현되며, 
     * 같은 이름의 메서드라도 객체에 따라 다르게 동작합니다.
     * 
     * 아래 코드에서는 makeCoffee가 각 클래스에서 사용되지만 다르게 동작함.
    */
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
        hasSugar?: boolean;
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
        constructor(beans: number, serialNumber?: string) {
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

    // CoffeeCup에 sugar 추가
    class SweetLatteCoffeeMaker extends CaffeLatteMachine {
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return {
                ...coffee,
                hasMilk: true,
                hasSugar: true
            }
        }
    }

    const machines = [
        new CoffeeMachine(16),
        new CaffeLatteMachine(16, '1'),
        new SweetLatteCoffeeMaker(16),
        new CoffeeMachine(16),
        new CaffeLatteMachine(16, '1'),
        new SweetLatteCoffeeMaker(16),
    ]

    machines.forEach((machine)=> {
        console.log('-----------------------------------------')
        console.log(machine.makeCoffee(1));
    })
}