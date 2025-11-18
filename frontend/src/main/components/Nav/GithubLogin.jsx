import { Button, Navbar } from "react-bootstrap";
import { Link } from "react-router";
import PropTypes from "prop-types";

export default function GithubLogin({ currentUser, systemInfo }) {
  var githubOauthLogin =
    systemInfo?.githubOauthLogin || "/oauth2/authorization/github";
  if (!currentUser || !currentUser.loggedIn) {
    return <span data-testid="GithubLogin-logged-out" />;
  }
  if (currentUser.root.user.githubLogin) {
    return (
      <>
        <Navbar.Text className="me-3" as={Link} to="/profile">
          Github: {currentUser.root.user.githubLogin}
        </Navbar.Text>
      </>
    );
  }
  return (
    <>
      <Button href={githubOauthLogin}>Connect Github</Button>
    </>
  );
}

GithubLogin.propTypes = {
  currentUser: PropTypes.shape({
    loggedIn: PropTypes.bool,
    root: PropTypes.shape({
      user: PropTypes.shape({
        githubLogin: PropTypes.string,
      }),
    }),
  }),
  systemInfo: PropTypes.shape({
    githubOauthLogin: PropTypes.string,
  }),
};
