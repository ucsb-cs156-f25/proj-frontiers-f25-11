import { getSortCaret } from "main/components/Common/SortCaretUtils";
import PropTypes from "prop-types";

export default function SortCaret({ header, testId = "testid" }) {
  return (
    <span data-testid={`${testId}-header-${header.column.id}-sort-carets`}>
      {getSortCaret(header)}
    </span>
  );
}

SortCaret.propTypes = {
  header: PropTypes.shape({
    column: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  testId: PropTypes.string,
};
