const studentsData = require("./students-data.json");

let groupNumbrer = 0;

let congraz = function () {
  const result = [];

  for (let group of studentsData) {
    groupNumbrer++;
    score = 0;
    date = Date.now;

    group.forEach((value) => {
      if (value.score >= score) {
        score = value.score;
      }
      if (value.score == score && value.date <= date) {
        date = value.date;
      }
    });

    group.forEach((value) => {
      if (value.score == score && value.date == date) {
        console.log(
          `Поздравляем ${value.name} с ${value.score} очками из группы №${groupNumbrer}`
        );
        result.push(value);
      }
    });
  }
  return result;
};

congraz();

module.exports = congraz;
