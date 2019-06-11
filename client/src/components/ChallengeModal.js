import React, { Component } from 'react';
import  { connect } from 'react-redux';
import { Container } from 'reactstrap';
import { addChallenge} from '../actions/challengeActions';

class ChallengeModal extends Component {
    constructor () {
        super();
        this.state = {
          steamId: '',
          opponentId: '',
          amount:''
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleSubmit = e => {
        e.preventDefault();

        const newChallenge = {
            steamId: this.state.steamId,
            opponentId: this.state.opponentId,
            amount: this.state.amount
        }

        this.props.addChallenge(newChallenge);
        // alert('A name was submitted: ' + this.state.steam_id + this.state.opponent_id + this.state.amount);
        // event.preventDefault();
    }

    handleChange(type) {
        return (event) => {
            this.setState({ [type]: event.target.value })
        }
    }
    render() {
        return (
            <Container>
                <form onSubmit={this.handleSubmit} className='inputForm col-md-4'>
                    
                    <label>Steam id</label>
                    <input type="text" onChange={this.handleChange('steamId')} />
                    
                    <label>Opponents steam id</label>
                    <input type="text" onChange={this.handleChange('opponentId')} />

                    <label>Amount</label>
                    <input type="text" onChange={this.handleChange('amount')} />

                    <input type="submit" className="button" method='POST' value="Challenge" />

                </form>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    challenge: state.challenge
});

export default connect(mapStateToProps, {addChallenge})(ChallengeModal);