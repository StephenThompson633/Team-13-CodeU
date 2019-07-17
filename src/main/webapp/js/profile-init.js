
// Get ?user=XYZ parameter value
const urlParams = new URLSearchParams(window.location.search);
const parameterUsername = urlParams.get('user');

// URL must include ?user=XYZ parameter. If not, redirect to homepage.
if (!parameterUsername) {
  window.location.replace('/landingpage.html');
}

/** Sets the page title based on the URL parameter username. */
function setPageTitle() {
  document.getElementById('page-title').innerText = parameterUsername;
  document.title = parameterUsername + ' - Profile, Edit';
}

/**
 * Shows the message form if the user is logged in and viewing their own page.
 */
function showProfileFormIfViewingSelf() {
  fetch('/login-status')
      .then((response) => {
        return response.json();
      })
      .then((loginStatus) => {
        if (loginStatus.isLoggedIn &&
            loginStatus.username == parameterUsername) {
          const profileForm = document.getElementById('profile-form');
          profileForm.classList.remove('hidden');
        }
      });
}

function buildUI() {
  showProfileFormIfViewingSelf();
}
