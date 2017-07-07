var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

class App extends React.Component {
  render() {
    return (
      <h1>Say hello to my little friend!</h1>
    )
  }
}

module.exports = App;
