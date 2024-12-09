{
    /**
     * Intersection Types: AND
     * AND절과 같기 때문에 다양한 타입들을 하나로 묶어서 선언할 때 사용
     */

   type Student = {
    name: string;
    score: number;
   }

   type Worker = {
    empolyeeId: number;
    work: () => void;
   }

   function interWorker(person: Student & Worker): void{
    console.log(person.name, person.score, person.work);
   }
   interWorker({name: 'bong', score: 1, work: ()=> {}, empolyeeId: 1}})
}