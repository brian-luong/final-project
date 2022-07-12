import React from 'react';
import Home from './pages/home';
import { parseRoute } from './lib';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {

    window.addEventListener('hashchange', () => {
      const newHash = parseRoute(window.location.hash);
      this.setState({ route: newHash });
    });

  }

  render() {
    return <Home />;
  }
}
