import domBuilder from '../javascripts/components/domBuilder';
import navigation from '../javascripts/components/navigation';
import navigationEvents from '../javascripts/events/navigationEvents';
import groupsWithUsers from '../javascripts/helpers/complete';
import homePage from './home';

const startApp = () => {
  domBuilder();
  navigation();
  navigationEvents();
  groupsWithUsers().then((data) => homePage(data));
};

export default startApp;
