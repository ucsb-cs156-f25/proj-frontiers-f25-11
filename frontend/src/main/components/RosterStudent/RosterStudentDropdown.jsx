import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

export default function RosterStudentDropdown({ rosterStudents, register }) {
  return (
    <Form.Control
      as="select"
      data-testid="RosterStudentDropdown"
      id="rosterStudentId"
      {...register("rosterStudentId", {
        required: "Please select a student",
      })}
    >
      <option value="">Select a student.</option>
      {rosterStudents.map((student) => (
        <option key={student.id} value={student.id}>
          {student.firstName} {student.lastName}
        </option>
      ))}
    </Form.Control>
  );
}

RosterStudentDropdown.propTypes = {
  rosterStudents: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    }),
  ).isRequired,
  register: PropTypes.func.isRequired,
};
