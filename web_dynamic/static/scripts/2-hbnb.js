document.addEventListener('DOMContentLoaded', (event) => {
    const classHeader = document.querySelector('#api_status');
    fetch('http://127.0.0.1:5001/api/v1/status/')
    .then(response => response.json())
    .then(data => {
        if (data.status === 'OK') classHeader.classList.add('available');
        else classHeader.classList.remove('available');
    })
})