function getTatooineResidents() {
  const superagent = require("superagent");

  return superagent
    .get("https://swapi.co/api/planets/1/") // make request
    .then(res => {  
      return res.body.residents;
    });
}

module.exports = { getTatooineResidents };
