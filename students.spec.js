let congraz = require("./students.js");

test("Smoke test", () => {
  expect(congraz()).toStrictEqual([
    { date: "2022-10-11", name: "Ivan", score: 35 },
    { date: "2022-10-01", name: "Marina", score: 25 },
    { date: "2022-10-01", name: "Varvara", score: 0 },
  ]);
});
