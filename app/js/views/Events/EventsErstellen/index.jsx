import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import { browserHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


export default class EventErstellen extends Component {
  constructor() {
    super();

    this.state = {
      error: '',
      eventState: {
        name: '',
        desc: '',
        groups: []
      },
      allGroups: [],
    };

    this.submitForm = this.submitForm.bind(this);
    this.changeInput = this.changeInput.bind(this);
  }

  componentDidMount() {
    //Get all groups and push into names
    const req = new XMLHttpRequest();
    req.open('GET', '/api/group', true);
    req.responseType = 'json';

    req.onload = () => {
      if (req.status >= 200 && req.status < 400) {
        // Success!
        const res = req.response;
        this.setState({
          allGroups: res,
        });
      } else {
        // We reached our target server, but it returned an error
      }
    };

    req.onerror = () => {
      // There was a connection error of some sort
    };

    req.send();
  }

  submitForm(event) {
    event.preventDefault();
    // HTTP Message:
    const eventName = encodeURIComponent(this.state.eventState.name);
    const eventDesc = encodeURIComponent(this.state.eventState.desc);
    const groupsSelected = this.state.eventState.groups;
    const userID = JSON.parse(localStorage.getItem('currentUser')).userID;
    const httpMessage = 'name=' + eventName + '&gId=' + groupsSelected + '&description=' + eventDesc;

    // AJAX-Request
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/api/event');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // ERFOLG:

        // Entferne alle Fehler aus dem State
        this.setState({
          // errors: {},
        });

        // Weiterleiten
        browserHistory.push('/');
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

  changeInput(event) {
    const field = event.target.name;
    const eventState = this.state.eventState;
    eventState[field] = event.target.value;

    this.setState({
      eventState,
    });
  }

  changeSelectField = (event, index, values) => {
    var eventState = this.state.eventState;
    eventState.groups = values;

    this.setState({
      eventState: eventState
    });
  }

  menuItems(values) {
    return this.state.allGroups.map((group) => (
      <MenuItem
        key={group._id}
        insetChildren={true}
        checked={values && values.indexOf(group._id) > -1}
        value={group._id}
        primaryText={group.name}
      />
    ));
  }

  render() {
    const values = this.state.eventState.groups;

    return (
      <div>
        <Card className='container form-container'>
          <form action='/' onSubmit={ this.submitForm }>
            <h2 className='card-heading'>Event erstellen</h2>

            { this.state.error && <p className='error-message'>{this.state.error}</p>}

            <div className='field-line'>
              <TextField
                floatingLabelText='Name'
                name='name'
                onChange={ this.changeInput }
                value={ this.state.eventState.name }
              />
              <TextField
                hintText='Beschreibung'
                name='desc'
                onChange={ this.changeInput }
                value={ this.state.eventState.desc }
                multiLine
              />
              <SelectField
                multiple={ true }
                hintText="Zugehörige Gruppen"
                value={values}
                onChange={this.changeSelectField}
                selectedMenuItemStyle={ { color: 'rgb(10, 128, 252)' } }
                style={ { textAlign: 'left' } }
              >
                {this.menuItems(values)}
              </SelectField>
            </div>

            <div className='button-line'>
              <RaisedButton type='submit' label='Erstellen' primary />
            </div>
          </form>
        </Card>

      </div>
    );
  }
}
