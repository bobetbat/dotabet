import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';



import { getChallenges, deleteChallenge } from '../actions/challengeActions';




class UserDataInput extends React.Component {

    
  componentDidMount(){
    this.props.getChallenges();
  }



  onDeleteClick = id => {
    this.props.deleteChallenge(id);
  };

  render() {
    const { challenges } = this.props.challenge
    return (
      <Container className='col-md-6'>
        {/* <ListGroup>
          <Container className="row label">        getChallenges
              <label>Steam id</label>
              <label>opponentId id</label>        
              <label>amount</label>
            </Container>
          <TransitionGroup className='challenges-list'>
            {challenges.map(({ _id, steamId, opponentId, amount}) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem className="all-challeges">                 
                  <div>{steamId}</div>
                  <div>{opponentId}</div>
                  <div>{amount}</div>
                  <Button className="remove-btn" color="danger" size="sm" onClick={this.onDeleteClick.bind(this, _id)}> &times; </Button>
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>           */}
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left">Steam id</TableCell>
                <TableCell align="left">opponentId id</TableCell>
                <TableCell align="left">amount</TableCell>
                <TableCell align="left">delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {challenges.map(({ _id, steamId, opponentId, amount}) => (
                <TableRow key={_id} timeout={500}>
                  <TableCell align="left">{steamId}</TableCell>
                  <TableCell align="left">{opponentId}</TableCell>
                  <TableCell align="left">{amount}</TableCell>
                  <TableCell>
                    <IconButton onClick={this.onDeleteClick.bind(this, _id)} align="right" aria-label="Delete">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Container>
    );
  }
}

UserDataInput.propTypes = {
  getChallenges: PropTypes.func.isRequired,
  challange: PropTypes.object.isRequired
}

const mapStateToProp = (state) => ({
  challenge: state.challenge
})

export default connect(mapStateToProp, { getChallenges, deleteChallenge })(UserDataInput);