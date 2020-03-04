import React, { Component } from 'react';

import { Title } from './styles';

class Main extends Component {
  state = {
    listPersons: [],
    newPerson: '',
  };
  
  handleInputChange = e => {
    this.setState({ newPerson: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      listPersons: [...this.state.listPersons, this.state.newPerson],
      newPerson: '',
    });
  };
 
  render() {
    return (
      <>
        <Title>Lista de pessoas: </Title>
        <ul>
          {this.state.listPersons.map( person => (
            <li>{person}</li>
          ))}
        </ul>

        <br/>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            onChange={this.handleInputChange}
            value={this.state.newPerson}
          />
          <button type='submit'>Salvar</button>
        </form>
      </>
    );
  }
}
  
export default Main;