{
    
    /**
     * 추상화는 불필요한 세부 사항을 숨기고, 중요한 부분만을 드러내는 과정
     * 이를 통해 복잡성을 줄이고, 사용자가 객체의 내부 구현을 몰라도 사용 가능 하도록 함
     * 추상화 방법 1. private 키워드를 통해서 사용자가 외부에서 접근 하지 못하도록 변경
     * 추상화 방법 2. interface를 implements 하여 interface내의 함수에만 접근하도록 제어
     * 
     * 아래 코드에서는 grindCoffeeBeans, preheat, extract를 private 키워드를 사용하여
     * 사용자가 접근하지 못하도록 하여, 복잡성을 줄임
    */
    type CoffeeCup = {
        shots: number;
        hasMils: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    class CoffeeMachine implements CoffeeMaker{
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
                hasMils: false
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
    }

    const maker = new CoffeeMachine(32);
}