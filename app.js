class School {
    constructor(name, numberOfStudents, level){
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
  
    get name() {
      return this._name;
    }
  
    get level() {
      return this._level;
    }
  
    get numberOfStudents() {
      return this._numberOfStudents;
    }
  
    set numberOfStudents(newNumberOfStudents) {
      if(!isNaN(newNumberOfStudents)){
      this._numberOfStudents = newNumberOfStudents;
      } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.')
      }
    }
  
    quickFacts(){
      console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
    }
  
    static pickSubstituteTeacher(substituteTeachers){
      return substituteTeachers[Math.floor(Math.random() * (substituteTeachers.length))];
    }
  
  }
  
  class PrimarySchool extends School{
    constructor(pickupPolicy, ...args){
      super(...args)
      this._level = 'primary'
      this._pickupPolicy = pickupPolicy;
    }
  
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }
  class MiddleSchool extends School{
    constructor(sportsTeam, ...args) {
      super(...args);
      this._level = 'Middle';
      this._sportsTeam = sportsTeam;
    }
  
    
  }
  class HighSchool extends School{
   constructor(sportsTeam, ...args) {
      super(...args);
      this._level = 'Middle';
      this._sportsTeam = sportsTeam;
    }
  
    get sportsTeam() {
      return this._sportsTeam;
    }
  }
  
  let lorraineHansbury = new PrimarySchool('Students must be picked up by a parent, guardian, or a family member over the age of 13.', 'Lorraine Hansbury', 514);
  
  lorraineHansbury.quickFacts();
  
  console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));
  
  let alSmith = new HighSchool(['Baseball', 'Basketball', 'Volleyball', 'Track and Field'], 'Al E. Smith', 415)
  
  console.log(alSmith.sportsTeam)
  
  