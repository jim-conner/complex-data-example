import domBuilder from '../javascripts/components/domBuilder';
import navigation from '../javascripts/components/navigation';
import navigationEvents from '../javascripts/events/navigationEvents';
import homePage from './home';

const startApp = () => {
  domBuilder();
  navigation();
  navigationEvents();
  homePage();
};

export default startApp;
