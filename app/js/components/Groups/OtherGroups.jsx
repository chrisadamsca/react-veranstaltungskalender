import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

class OtherGroups extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  enterGroup(gId) {
    // HTTP Message:
    const httpMessage = 'gId=' + gId;

    // AJAX-Request
    const xhr = new XMLHttpRequest();
    xhr.open('put', '/api/user/' + JSON.parse(localStorage.getItem('currentUser')).userID);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // ERFOLG:

        // Entferne alle Fehler aus dem State
        this.setState({
          // errors: {},
        });
      } else {
        // FEHLER:

        // Setze den Fehler im State
        this.setState({
          error: 'Es ist etwas schiefgelaufen :(',
        });
      }
    });
    xhr.send(httpMessage);
  }

  render() {
    return (
      <div className='groups'>
        {this.props.groups.map(group => (
          <Card key={ group._id } className='card'>
            <CardTitle title={ group.name } />
            <CardText>{ group.description }</CardText>
            <IconButton onTouchTap={ () => this.enterGroup(group._id) } >
              <FontIcon className='material-icons'>add_box</FontIcon>
            </IconButton>
          </Card>
        ))}
      </div>
    );
  }
}

export default OtherGroups
