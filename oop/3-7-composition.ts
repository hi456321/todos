{
    
    /**
     * Composition(조합)
     * 상속의 문제점의 대안으로 Composition 사용
     * 상속의 문제점
     * 1. 상속의 깊이가 깊어질 수록 복잡도가 상승한다.
     * 2. ts에서는 2개 이상의 부모 클래스를 상속 받을 수 없다.
     * 
     * 조합은 객체가 다른 객체를 포함하거나 다른 객체의 기능을 활용하는 방식입니다.
     * 즉, "has-a" 관계를 사용하는 방식으로, 자신의 기능을 다른 객체와 결합하여 구현하는 방법입니다.
     * 
     * 조합은 "내가 할 수 있는 기능을 다른 객체에 위임"하는 방식입니다.
     * 객체 간에 기능을 재사용할 수 있으며, 클래스들이 서로 느슨하게 결합되기 때문에 
     * 유연성과 확장성이 뛰어납니다.
     * 
     * => (결론) 각각 필요한 기능들을 클래스로 빼서, 필요한 곳에서 가져다 쓰면 됨
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

    class AddSugerForCoffee {
        private addSugar(): void {
            console.log('adding sugar for coffee...')
        }
        makeMilk(cup: CoffeeCup): CoffeeCup{
            return {
                ...cup,
                hasSugar: true
            }
        }
    }

    class AddMilkForCoffee {
        private addMilk(): void {
            console.log('adding sugar for coffee...')
        }
        makeMilk(cup: CoffeeCup): CoffeeCup{
            return {
                ...cup,
                hasMilk: true
            }
        }
    }

    // CoffeeCup에 sugar 추가
    class SweetLatteCoffeeMaker extends CaffeLatteMachine {
        constructor(private beans: number, private milk: AddMilkForCoffee, private sugar: AddSugerForCoffee){
            super(beans);
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return this.milk.makeMilk(this.sugar.makeMilk(coffee))
        }
    }

}