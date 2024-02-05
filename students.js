const studentsData = require("./students-data.json");

let groupNumbrer = 0;

for (let group of studentsData) {
  groupNumbrer++;
  score = 0;
  group.forEach((value) => {
    if (value.score > score) {
      score = value.score;
    }
  });

  group.forEach((value) => {
    if (value.score == score) {
      console.log(
        `Поздравляем ${value.name} с ${value.score} очками из группы №${groupNumbrer}`
      );
    }
  });
}
