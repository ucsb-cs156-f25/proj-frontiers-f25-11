import { Button, Navbar } from "react-bootstrap";
import { Link } from "react-router";
import HelpMenu from "main/components/Nav/HelpMenu";
import PropTypes from "prop-types";

export default function GoogleLogin({ currentUser, handleLogin, doLogout }) {
  return (
    <>
      {currentUser && currentUser.loggedIn ? (
        <>
          <Navbar.Text className="me-3" as={Link} to="/profile">
            Welcome, {currentUser.root.user.email}
          </Navbar.Text>
          <HelpMenu />
          <Button onClick={doLogout}>Log Out</Button>
        </>
      ) : (
        <>
          <HelpMenu />
          <Button onClick={handleLogin}>Log In</Button>
        </>
      )}
    </>
  );
}

GoogleLogin.propTypes = {
  currentUser: PropTypes.shape({
    loggedIn: PropTypes.bool,
    root: PropTypes.shape({
      user: PropTypes.shape({
        email: PropTypes.string,
      }),
    }),
  }),
  handleLogin: PropTypes.func.isRequired,
  doLogout: PropTypes.func.isRequired,
};
