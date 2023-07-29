import AppComponent from "./AppComponent";

describe("Given an AppComponent class", () => {
  describe("when it receives div elemen ", () => {
    test("Then it should return", () => {
      const container = document.createElement("div");

      const app = new AppComponent(container);
      app.render();

      expect(app).toBeInstanceOf(AppComponent);
    });
  });
});
