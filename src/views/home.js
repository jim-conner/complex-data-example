import homeComponent from '../javascripts/components/homeComponent';

const homePage = (array) => {
  $('#main-container').html('<h1 class="main-title">Home Page</h1>');
  array.forEach((item) => {
    homeComponent(item);
  });
};

export default homePage;
