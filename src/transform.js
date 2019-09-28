function groupAdultsByAgeRange(array) {
  let vijftigPlus = array.filter(person => {
    return person.age >= 51;
  });
  let veertigPlus = array.filter(person => {
    return person.age >= 41 && person.age <= 50;
  });
  let dertigPlus = array.filter(person => {
    return person.age >= 31 && person.age <= 40;
  });
  let twintigPlus = array.filter(person => {
    return person.age >= 21 && person.age <= 30;
  });
  let tiener = array.filter(person => {
    return person.age >= 18 && person.age <= 20;
  });
  let doelgroepen = [tiener, twintigPlus, dertigPlus, veertigPlus, vijftigPlus];
  doelgroepen = doelgroepen.filter(doelgroep => {
    return doelgroep.length > 0;
  });

  let result = {};
  if (doelgroepen.length > 0) {
    doelgroepen.reduce((previous, current) => {
      if (tiener[0] && current[0].age === tiener[0].age) {
        result["20 and younger"] = current;
        return result;
      }
      if (twintigPlus[0] && current[0].age === twintigPlus[0].age) {
        result["21-30"] = current;
        return result;
      }
      if (dertigPlus[0] && current[0].age === dertigPlus[0].age) {
        result["31-40"] = current;
        return result;
      }
      if (veertigPlus[0] && current[0].age === veertigPlus[0].age) {
        result["41-50"] = current;
        return result;
      }
      if (vijftigPlus[0] && current[0].age === vijftigPlus[0].age) {
        result["51 and older"] = current;
        return result;
      }
    }, 0);
    //console.log(result);
    return result;
  } else {
    return result;
  }
}

module.exports = { groupAdultsByAgeRange };
