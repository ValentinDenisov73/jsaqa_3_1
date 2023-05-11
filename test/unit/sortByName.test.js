const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
  it("Some books names not should be sorted", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города"
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
      "Гарри Поттер"
    ]);
  });
});
