import { getBooks } from '../api/bookData';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import { emptyBooks, showBooks } from '../pages/books';

const startApp = (user) => {
  domBuilder();
  navBar();
  domEvents(user);
  formEvents(user);
  navigationEvents(user);
  logoutButton();

  getBooks(user.uid).then((array) => {
    if (array.length) {
      showBooks(array);
    } else {
      emptyBooks();
    }
  });
};

export default startApp;
