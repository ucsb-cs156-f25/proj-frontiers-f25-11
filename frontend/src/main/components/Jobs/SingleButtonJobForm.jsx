import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

export default function SingleButtonJobForm({ callback, text, testid }) {
  return (
    <Button onClick={callback} data-testid={`${testid}-job-submit`}>
      {text}
    </Button>
  );
}

SingleButtonJobForm.propTypes = {
  callback: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
};
