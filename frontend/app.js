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
          window.location.href = 'upload.html'; // Redirect to upload page
        } else {
            window.location.href = 'download.html';
        }
      });
    }
  
    // Fetch files for the download page
    const fileList = document.getElementById('fileList');
    if (fileList) {
      fetch('http://localhost:3000/files')
        .then(response => response.json())
        .then(files => {
          files.forEach(file => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="http://localhost:3000/download/${file}" target="_blank">${file}</a>`;
            fileList.appendChild(listItem);
          });
        })
        .catch(error => console.error('Error fetching files:', error));
    }
  });
  