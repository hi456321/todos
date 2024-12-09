{
    type CofeeCup = {
        shots: number;
        hasMils: boolean;
    }

    const BEANS_GRAMM_PER_SHOT: number = 7; 
    let coffeeBeansGram: number = 0;

    function makeCoffe(shots: number): CofeeCup {
        if(coffeeBeansGram < shots * BEANS_GRAMM_PER_SHOT){
            throw new Error('no have cofeeBeans!!!')
        }
        coffeeBeansGram -= shots * BEANS_GRAMM_PER_SHOT;
        return {
            shots,
            hasMils: false
        }
    }

    coffeeBeansGram += 3 * BEANS_GRAMM_PER_SHOT;
    const coffee = makeCoffe(2);
    console.log(coffee);
}