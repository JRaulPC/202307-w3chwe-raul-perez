import AppComponent from "./components/AppComponent/AppComponent.js";

const appContainer = document.querySelector(".app-container")!;

const appComponent = new AppComponent(appContainer)!;

appComponent.render();
