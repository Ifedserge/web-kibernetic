import MainPage from './components/views/main-page/mainPage';

export default class App {
  init():void {
    const mainPage = new MainPage();
    mainPage.render();
  }
}
