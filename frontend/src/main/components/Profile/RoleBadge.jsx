import { Badge } from "react-bootstrap";
import PropTypes from "prop-types";

export default function RoleBadge({ role, currentUser }) {
  const roles = currentUser.root.roles.map((o) => o.authority);

  const lcrole = role.replace("ROLE_", "").toLowerCase();
  return roles.includes(role) ? (
    <Badge className="bg-primary" data-testid={`role-badge-${lcrole}`}>
      {lcrole}
    </Badge>
  ) : (
    <span data-testid={`role-missing-${lcrole}`}></span>
  );
}

RoleBadge.propTypes = {
  role: PropTypes.string.isRequired,
  currentUser: PropTypes.shape({
    root: PropTypes.shape({
      roles: PropTypes.arrayOf(
        PropTypes.shape({
          authority: PropTypes.string,
        }),
      ),
    }),
  }).isRequired,
};
