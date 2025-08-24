// Function to toggle the Justin Bieber photo on and off
let justinPhotoVisible = false;
function showJustinPhoto() {
    const existingImg = document.getElementById('justin-photo');
    if (existingImg) {
        existingImg.remove();
        justinPhotoVisible = false;
    } else {
        var img = document.createElement('img');
        img.id = 'justin-photo';
        img.src = 'images/justin.webp'; // Make sure this image exists in your images folder
        img.alt = 'Justin Bieber';
        img.style.maxWidth = '300px';
        img.style.display = 'block';
        img.style.margin = '20px auto';
        document.body.appendChild(img);
        justinPhotoVisible = true;
    }
}

// Function to toggle adrian.jpeg photo on and off
let adrianPhotoVisible = false;
function showAdrianPhoto() {
    const existingImg = document.getElementById('adrian-photo');
    if (existingImg) {
        existingImg.remove();
        adrianPhotoVisible = false;
    } else {
        var img = document.createElement('img');
        img.id = 'adrian-photo';
        img.src = 'images/adrian.jpeg'; // Make sure this image exists in your images folder
        img.alt = 'Adrian';
        img.style.maxWidth = '300px';
        img.style.display = 'block';
        img.style.margin = '20px auto';
        document.body.appendChild(img);
        adrianPhotoVisible = true;
    }
}
