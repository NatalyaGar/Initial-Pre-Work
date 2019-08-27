// I learned write concise object literal declarations using simple fields
const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
   const createPerson = (name, age, gender) => ({name, age, gender});
   return createPerson()
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
