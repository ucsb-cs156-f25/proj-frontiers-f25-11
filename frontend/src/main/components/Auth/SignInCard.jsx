import { Button, Card } from "react-bootstrap";
import PropTypes from "prop-types";

export default function SignInCard({
  url,
  Icon,
  title,
  description,
  testid = "default",
  onClick,
}) {
  //Eslint alias to so that it knows Icon is used
  const IconComponent = Icon;
  return (
    <Card style={{ width: "18rem" }} data-testid={`SignInCard-base-${testid}`}>
      <Card.Body
        className={"text-center"}
        data-testid={`SignInCard-header-${testid}`}
      >
        <IconComponent />
      </Card.Body>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Footer
          className={"text-center"}
          data-testid={`SignInCard-footer-${testid}`}
        >
          <Button onClick={onClick} href={url}>
            Log In
          </Button>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}

SignInCard.propTypes = {
  url: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  testid: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
