import React from 'react';
import { Route } from 'react-router';
import Navigation from '../Navigation/Navigation';
import QuestionsList from '../QuestionsList/QuestionsList';
import Ask from '../Ask/Ask';
class Home extends React.Component {
    render() {
        return (
            <div>
                <Route path={['/', '/ask', '/profile/:id']} >
                    <Navigation logout={this.props.logout} user={this.props.user} />
                </Route>

                <Route exact path='/'>
                    <QuestionsList />
                </Route>

                <Route exact path='/ask'>
                    <Ask roll_number = {this.props.user.roll_number} />
                </Route>

            </div >
        );
    }
}

export default Home;