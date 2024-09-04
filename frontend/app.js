const backendUrl = 'https://file-sharing-app-seven-tau.vercel.app'; // Make sure this is your correct backend URL

document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');
  
  if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      const validEmail = 'admin@example.com';
      const validPassword = 'password123';

      if (email === validEmail && password === validPassword) {
        window.location.href = 'upload.html'; // Redirect to the upload page
      } else {
        window.location.href = 'download.html'; // Redirect to the download page if credentials are incorrect
      }
    });
  }

  // Fetch files for the download page
  const fileList = document.getElementById('fileList');
  if (fileList) {
    fetch(`${backendUrl}/files`)  // Corrected string interpolation
      .then(response => response.json())
      .then(files => {
        files.forEach(file => {
          const listItem = document.createElement('li');
          listItem.innerHTML = `<a href="${backendUrl}/download/${file}" target="_blank">${file}</a>`; // Ensure the correct backend URL is used
          fileList.appendChild(listItem);
        });
      })
      .catch(error => console.error('Error fetching files:', error));
  }
});
