import Component from "../Component/Component.js";

class PageCounter extends Component {
  public pageCounter: number;
  constructor(parentElement: Element, pageCounter: number) {
    super(parentElement, "span", "page-counter");
    console.log(pageCounter);
    this.pageCounter = pageCounter;
  }

  render(): void {
    super.render();

    this.element.innerHTML = `
      <span>${this.pageCounter * 10}/1281</span>
      `;
  }
}

export default PageCounter;
