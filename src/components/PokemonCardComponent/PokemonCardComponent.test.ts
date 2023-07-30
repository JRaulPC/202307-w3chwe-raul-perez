import { type Pokemon } from "../../types";
import PokemonCardComponent from "./PokemonCardComponent";

describe("Given an PokemonCardComponent component", () => {
  describe("when it receives a pokemon called 'bulbasaur' ", () => {
    test("Then it should show 'bulbasaur' inside a heading ", () => {
      const container = document.createElement("div");
      const bulbasaur: Pokemon = {
        id: 1,
        name: "Bulbasaur",
        pictureUrl: "",
      };

      const cardComponent = new PokemonCardComponent(container, bulbasaur);
      cardComponent.render();

      const headingElement = container.querySelector("h2")!;

      expect(headingElement.textContent).toBe(bulbasaur.name);
    });
  });
});
