import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col, Card, CardGroup, CardDeck, onSubmit, handleSubmit, Button } from 'react-bootstrap';


import "./styles.css";

{/* Whenever I try to style the trash can to move it as shown the button functionality no longer works float: 'right' , Also use this.handleNameChange for set name ex: <input
          type="text"
          placeholder="Set Name"
          value={this.state.name}
          onChange={this.handleNameChange}
        />*/ }
class Card_Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      Flashcard: [{ name: "" }]
    };
  }

  handleNameChange = evt => {
    this.setState({ name: evt.target.value });
  };

  handleCardsNameChange = idx => evt => {
    const newFlashcard = this.state.Flashcard.map((Cards, sidx) => {
      if (idx !== sidx) return Cards;
      return { ...Cards, name: evt.target.value };
    });

    this.setState({ Flashcard: newFlashcard });
  };

  handleSubmit = evt => {
    const { name, Flashcard } = this.state;
    alert(`Incorporated: ${name} with ${Flashcard.length} Flashcard`);
  };

  handleAddCards = () => {
    this.setState({
      Flashcard: this.state.Flashcard.concat([{ name: "" }])
    });
  };

  handleRemoveCards = idx => () => {
    this.setState({
      Flashcard: this.state.Flashcard.filter((s, sidx) => idx !== sidx)
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Card>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>
                  {this.state.Flashcard.map((Cards, idx) => (
          <div className="Cards">
            <input
              type="text"
              placeholder={`Term #${idx + 1}`}
              value={Cards.name}
              onChange={this.handleCardsNameChange(idx)}
            />
             <input
              type="text"
              placeholder={`Definition #${idx + 1}`}
              value={Cards.name}
              onChange={this.handleCardsNameChange(idx)}
            />
                  <Button variant="link" style={{float: "right"}}><img src="https://img.icons8.com/windows/32/000000/play.png"/></Button>
                  <Button variant="link" style={{float: "right"}}><img src="https://img.icons8.com/small/16/000000/delete.png" onClick={this.handleRemoveCards(idx)}/></Button>
                  <Button variant="link" style={{float: "right"}}><img src="https://img.icons8.com/small/16/000000/resize-vertical.png"/></Button>
            
                  </div>
        ))}
                  </Card.Text>
                </Card.Body>
        </Card>

        <h4>Flashcard</h4>
        <button
          type="button"
          onClick={this.handleAddCards}
          className="small"
        >
          Add Cards
        </button>
        <button>Incorporate</button>
      </form>
    );
  }
}

export { Card_Form }