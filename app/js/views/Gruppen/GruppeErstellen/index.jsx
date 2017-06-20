import React, { Component } from 'react';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class GruppeErstellen extends Component {
  constructor() {
    super();

    this.state = {
      errors: {},
      group: {
        name: '',
        user: JSON.parse(localStorage.getItem('currentUser')).userID,
      },
    };

    this.submitForm = this.submitForm.bind(this);
    this.changeGroup = this.changeGroup.bind(this);
  }

  submitForm(event) {
    event.preventDefault();

    const name = encodeURIComponent(this.state.group.name);

    console.log(name);
  }

  changeGroup(event) {
    const field = event.target.name;
    const group = this.state.group;
    group[field] = event.target.value;

    this.setState({
      group,
    });
  }

  render() {
    return (
      <div>
        <div className='card-container'>
          <h1 className='cardsHeader'>Gruppe erstellen:</h1>
        </div>

        <Card className='container'>
          <form action='/' onSubmit={ this.submitForm }>
            <h2 className='card-heading'>Einloggen</h2>

            <div className='field-line'>
              <TextField
                floatingLabelText='Gruppenname'
                name='name'
                onChange={ this.changeGroup }
                value={ this.state.group.name }
              />
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
