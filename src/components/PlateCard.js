import React from "react";
import { connect } from "react-redux";
import { search } from "../actions/plate.js";
import { withRouter } from "react-router-dom";
import { Card, CardDeck } from "react-bootstrap";

const PlateCard = ({ plates, search, history }) => {
  const handleOnsubmit = event => {
    event.preventDefault();

    let data = {
      number: event.currentTarget.attributes[1].textContent,
      state: event.currentTarget.attributes[2].textContent
    };

    search(data).then(res => {
      if (res.error) {
        alert(res.error);
      } else if (res.notice) {
        alert(res.notice);
      } else {
        history.push("/violations");
      }
    });
  };
  return (
    <div className="plates">
      {/* <div className="row"> */}
      <CardDeck>
        {plates.map((tickets, index) => {
          return (
            <Card
              bg="info"
              text="white"
              style={{ width: "16rem" }}
              key={index + 3}
            >
              <Card.Body>
                <Card.Title>Search Plates</Card.Title>

                <p className="column" key={index + 1}>
                  {tickets.number} -- {tickets.state}
                </p>

                {/* <Card.Link href="#">Card Link</Card.Link> */}
                <button
                  className="uneven-end"
                  onClick={handleOnsubmit}
                  number={tickets.number}
                  state={tickets.state}
                >
                  Find Tickets
                </button>
              </Card.Body>
            </Card>
          );
        })}
      </CardDeck>
    </div>
  );
};

export default withRouter(connect(null, { search })(PlateCard));
