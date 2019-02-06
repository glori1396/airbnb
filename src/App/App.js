import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header'
import PlacesList from './Places/PlacesList'
import PlacesDetails from './Reservations/PlacesDetails'
import Explore from './Explore/Explore'
import './main.scss';

class App extends Component {


  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path={`${this.props.match.url}/`} render={props => (
              <PlacesList {...props} isHomes={true} isGym={true} match={this.props.match} />
            )} />
            <Route exact path={`${this.props.match.url}/homes`} render={props => (
              <Explore {...props} isHomes={true} isGym={false} match={this.props.match} />
            )} />
            <Route path={`${this.props.match.url}/:idPlace`} component={PlacesDetails} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
