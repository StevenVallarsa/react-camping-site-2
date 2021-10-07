import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

class CampsiteInfo extends React.Component {
  renderCampsite(campsite) {
    console.log(campsite);
    return (
      <div className="col-md-5 m1">
        <Card>
          <CardImg top src={campsite.image} alt={campsite.name} />
          <CardBody>
            <CardTitle>{campsite.name}</CardTitle>
            <CardText>{campsite.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  renderComments(comments) {
    if (comments) {
      return (
        <div className="col-md-5 m-1">
          <h4>Comments</h4>
          {comments.map(comment => {
            return (
              <p>
                {comment.text}
                <br />
                {comment.author}{" "}
                {new Intl.DateTimeFormat("en-US", { year: "numeric", month: "short", day: "2-digit" }).format(
                  new Date(Date.parse(comment.date))
                )}
              </p>
            );
          })}
        </div>
      );
    }
    return <div />;
  }

  render() {
    if (this.props.campsite) {
      return (
        <div className="container">
          <div className="row">
            {this.renderCampsite(this.props.campsite)}
            {this.renderComments(this.props.campsite.comments)}
          </div>
        </div>
      );
    }
    return <div />;
  }
}

export default CampsiteInfo;
