import { getBooks } from '../api/bookData';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import { emptyBooks, showBooks } from '../pages/books';

const startApp = () => {
  domBuilder();
  domEvents();
  formEvents();
  navBar();
  logoutButton();
  navigationEvents();

  getBooks().then((array) => {
    if (array.length) {
      showBooks(array);
    } else {
      emptyBooks();
    }
  });
};

export default startApp;
