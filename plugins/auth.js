export default function ({ $auth }) {
    if (!$auth.loggedIn) {
      return false;
    }
  
    const username = $auth.user.username
  }