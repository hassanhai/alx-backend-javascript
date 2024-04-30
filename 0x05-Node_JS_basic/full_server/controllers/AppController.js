/**
 * Contains the miscellaneous route handlers.
 * @author Haihal Hassan <https://github.com/Haihal>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
