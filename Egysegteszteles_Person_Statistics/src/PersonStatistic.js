export class PersonStatistic{
   constructor(people=[]){
      this.people = people;
   }

   getAverageAge(){
      let eletkor = 0
      for(let index= 0; index<this.people.length;index++){
         let emberek = Array[index]
         eletkor += emberek.age
      }
      return parseFloat(atlag = eletkor/this.people.length)
   }

   getNumberOfStudents(){
      let diakokszama = 0
      for(let index= 0; index<this.people.length;index++){
         let emberek = Array[index]
         if(emberek.isStudent = true){
            diakokszama++
         }
      }
      return diakokszama.length
   }

   getPersonWithHighestScore(){

   }

   gatAverageScoreOfStudents(){

   }

   getOldestStudent(){

   }

   isanyoneFailing(){

   }

}