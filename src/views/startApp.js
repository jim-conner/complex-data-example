import domBuilder from '../javascripts/components/domBuilder';
import navigation from '../javascripts/components/navigation';
import navigationEvents from '../javascripts/events/navigationEvents';

const startApp = () => {
  domBuilder();
  navigation();
  navigationEvents();
};

export default startApp;
