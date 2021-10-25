import React from 'react';
import { Route } from 'react-router';
import Navigation from '../Navigation/Navigation';
import QuestionsList from '../QuestionsList/QuestionsList';
import AnswersList from '../AnswersList/AnswersList';
import Ask from '../Ask/Ask';
import Profile from '../Profile/Profile';
class Home extends React.Component {
    render() {
        return (
            <div>
                <Route>
                    <Navigation logout={this.props.logout} roll_number={this.props.roll_number} />
                </Route>

                <Route path='/profile/'>
                    <Profile user={this.props.roll_number} />
                </Route>

                <Route path='/answers/'>
                    <AnswersList />
                </Route>
                <Route exact path='/'>
                    <QuestionsList />
                </Route>

                <Route exact path='/ask'>
                    <Ask roll_number={this.props.roll_number} />
                </Route>

            </div >
        );
    }
}

export default Home;