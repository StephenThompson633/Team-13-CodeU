
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
  document.title = parameterUsername + ' - Profile';
}

/** Fetches profile elements and add them to the page. */
function fetchProfile() {
  const url = '/profile?user=' + parameterUsername;
  fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((profile) => {
        const profileContainer = document.getElementById('profile-container');
        if (profile == null) {
          profileContainer.innerHTML = '<p>This user has no profile yet.</p>';
        } else {
          profileContainer.innerHTML = '';
        }
        const profileDiv = buildProfileDiv(profile);
        profileContainer.appendChild(profileDiv);
      }
}

/**
 * Builds an element that displays the message.
 * @param {Profile} profile
 * @return {Element}
 */
function buildProfileDiv(profile) {

  const headerDiv = document.createElement('div');
  headerDiv.classList.add('profile-header');
  headerDiv.appendChild(document.createTextNode(
      profile.user);

  const bodyDiv = document.createElement('div');
  bodyDiv.classList.add('profile-body');
  bodyDiv.innerHTML = profile.name;
  bodyDiv.innerHTML = profile.handle;


  const profileDiv = document.createElement('div');
  profileDiv.classList.add('profile-div');
  profileDiv.appendChild(headerDiv);
  profileDiv.appendChild(bodyDiv);

  return profileDiv;
}

/** Fetches data and populates the UI of the page. */
function buildUI() {
  setPageTitle();
  fetchProfile();
}
