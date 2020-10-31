import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col, Card, CardGroup, CardDeck, onSubmit, handleSubmit, Button } from 'react-bootstrap';
import "./styles.css";

// import nextLevel from "../../public/images/nextlevel-icon.svg";
// import rearrange from "../../public/images/rearrange-icon.svg";
// import save from "../../public/images/save-icon.svg";
// import trash from "../../public/images/trash-icon.svg";
// import union from "../../public/images/union-icon.svg";
// import branch from "../../public/images/newbranch-icon.svg"

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
    const iconContainer = { boxShadow: '2px 2px 5px #BEBEBE', padding: '8px', borderRadius: '100%', margin: '0 20px' };
    const icon = { height: '36px', margin: '5px' };
    const smallIcon = { height: '20px', margin: '5px' };

    return (
      <form onSubmit={this.handleSubmit} style={{ display: 'flex', alignItems: 'flex-end' }}>
        <div style={iconContainer}>
          <a
            // type="button"
            onClick={this.handleAddCards}
            className="small"
          >
            <img src="../../public/images/union-icon.svg" style={icon}></img>
          </a>
        </div>

        <div
        // style={{ width: '100%', boxShadow: '1px 1px 10px #d3d3d3', borderRadius:'8px' }}
        >
          <div>
            {this.state.Flashcard.map((Cards, idx) => (
              <div className="Cards" style={{ display: 'flex', justifyContent: 'space-evenly', padding: '30px', margin: '0 10px', boxShadow: '1px 1px 10px #d3d3d3', borderRadius: '8px' }}>

                <input
                  type="text"
                  placeholder={`Term #${idx + 1}`}
                  value={Cards.name}
                  onChange={this.handleCardsNameChange(idx)}
                  style={{ marginRight: '20px', minWidth: '250px', }}
                />

                <input
                  type="text"
                  placeholder={`Definition #${idx + 1}`}
                  value={Cards.name}
                  onChange={this.handleCardsNameChange(idx)}
                  style={{ minWidth: '300px' }}
                />

                {/* <div>
                  <p>#</p>
                </div> */}
                <div>
                  <div style={{ textAlign: 'center', marginBottom: '10px', paddingRight:'10px' }}>
                    <img src="../../public/images/placeholder.png" style={{ width: '55px' }}></img>
                  </div>

                  <div style={{ display:'flex', textAlign: 'center' }}>
                    <div style={{textAlign:'center'}}>
                      <Button variant="link" >
                        <img src="../../public/images/rearrange-icon.svg" style={smallIcon} />
                      </Button>
                    </div>

                    <div style={{textAlign:'center'}}>
                      <Button variant="link" >
                        <img src="../../public/images/trash-icon.svg" style={smallIcon} onClick={this.handleRemoveCards(idx)} />
                      </Button>
                    </div>

                    <div style={{textAlign:'center'}}>
                      <Button variant="link" >
                        <img src="../../public/images/newbranch-icon.svg" style={smallIcon} />
                      </Button>
                    </div>


                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>

        <div style={iconContainer}>
          <a
            // type="button"
            // onClick={this.handleAddCards}
            className="small"
          >
            <img src="../../public/images/save-icon.svg" style={icon}></img>
          </a>
        </div>
      </form>
    );
  }
}

export { Card_Form }