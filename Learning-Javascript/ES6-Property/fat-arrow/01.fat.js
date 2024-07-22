/*var hobby = {
  person: "Rana",
  hobby: ["playing", "eating", "travelling", "singing", "danceing"],
  printhobby: function () {
    this.hobby.forEach((r) => {
      console.log(`${this.person} is also like ${r}`);
    });
  },
};
hobby.printhobby();
*/
//practice season

var person = {
  name: "rana",
  experiance: ["HTML", "CSS", "Javascript", "React", "Nodejs", "expressjs"],
  printexperiance: function () {
    this.experiance.forEach((ex) => {
      console.log(`${this.name} also do the ${ex}`);
    });
  },
};
person.printexperiance();
