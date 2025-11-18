import { hasRole } from "main/utils/currentUser";
import AccessDeniedPage from "main/pages/Auth/AccessDeniedPage";
import PromptSignInPage from "main/pages/Auth/PromptSignInPage";
import LoadingPage from "main/pages/LoadingPage";
import PropTypes from "prop-types";

export default function ProtectedPage({ component, currentUser, enforceRole }) {
  if (currentUser.initialData) {
    return <LoadingPage />;
  }
  if (hasRole(currentUser, enforceRole)) {
    return <>{component}</>;
  } else if (!currentUser.loggedIn) {
    return <PromptSignInPage />;
  } else {
    return <AccessDeniedPage />;
  }
}

ProtectedPage.propTypes = {
  component: PropTypes.element.isRequired,
  currentUser: PropTypes.shape({
    initialData: PropTypes.bool,
    loggedIn: PropTypes.bool,
    root: PropTypes.shape({
      rolesList: PropTypes.arrayOf(PropTypes.string),
    }),
  }).isRequired,
  enforceRole: PropTypes.string,
};
