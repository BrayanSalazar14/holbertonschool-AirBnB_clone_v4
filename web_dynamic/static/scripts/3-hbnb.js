document.addEventListener('DOMContentLoaded', (event) => {
    const places = document.querySelector('.places');
    
    fetch('http://127.0.0.1:5001/api/v1/places_search/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
    })
    .then(response => response.json())
    .then(data => {
        data.forEach(place => {
            const article = document.createElement('article');
            
            const title = document.createElement('div');
            title.className = 'title_box';
            
            const headingTitle = document.createElement('h2');
            headingTitle.innerHTML = place.name;
            
            const price = document.createElement('div');
            price.classList.add('price_by_night');
            price.textContent = `$${place.price_by_night}`;
            
            title.appendChild(headingTitle);
            title.appendChild(price);
            article.appendChild(title);
            
            const information = document.createElement('div');
            information.classList.add('information');
            
            const maxGuest = document.createElement('div');
            maxGuest.classList.add('max_guest');
            maxGuest.textContent = `${place.max_guest} Guests`;
            
            const numberRooms = document.createElement('div');
            numberRooms.classList.add('number_rooms');
            numberRooms.textContent = `${place.number_rooms} Rooms`;
            
            const numberBathrooms = document.createElement('div');
            numberBathrooms.classList.add('number_bathrooms');
            numberBathrooms.textContent = `${place.number_bathrooms} Bathrooms`;
            
            information.appendChild(maxGuest);
            information.appendChild(numberRooms);
            information.appendChild(numberBathrooms);
            article.appendChild(information);
            
            fetch(`http://127.0.0.1:5001/api/v1/users/${place.user_id}`)
            .then(response => response.json())
            .then(userData => {
                const user = document.createElement('div');
                user.classList.add('user');
                
                const owner = document.createElement('b');
                owner.textContent = 'Owner: ';
                
                const name = document.createTextNode(userData.first_name);
                
                user.appendChild(owner);
                user.appendChild(name);
                
                const description = document.createElement('div');
                description.classList.add('description');
                description.innerHTML = place.description;
                
                user.appendChild(description);
                article.appendChild(user);
                
                places.appendChild(article);
            });
        });
    });
});
