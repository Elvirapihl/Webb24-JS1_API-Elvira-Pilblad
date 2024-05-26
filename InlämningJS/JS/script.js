// Funktion som hämtar data från API:t
function myFetch() {
    // Använder fetch för att hämta data från randomuser.me
    fetch("https://randomuser.me/api/")
        .then(res => res.json()) // Konverterar svaret till JSON
        .then(data => {
            let user = data.results[0]; // Extraherar användarinformation från det hämtade datat
            displayUserData(user); // Anropar funktionen för att visa användardata
            console.log(data); // Loggar det hämtade datat till konsolen
        })
        .catch(error => console.error('Error fetching user:', error)); // Hanterar eventuella fel vid hämtning
}

// Funktion som visar användardata i DOM:en
function displayUserData(user) {
    let userInfoMain = document.getElementById('användarinfo'); // Hämtar elementet där användarinformationen ska visas

    userInfoMain.innerHTML = ''; // Rensar tidigare innehåll

    // Extraherar relevant användarinformation
    let userPicture = user.picture.large;
    let userGender = user.gender;
    let userfNamn = user.name.first;
    let userlNamn = user.name.last;
    let userPhone = user.phone;
    let userEmail = user.email;
    
    

    // Skapar ett element för användarens bild
    let pictureElement = document.createElement('img');
    pictureElement.src = userPicture;

    // Skapar ett element för användarens kön
    let genElement = document.createElement('main');
    genElement.textContent = `Kön: \r\n`;
    genElement.textContent += `${userGender}`;

    // Skapar ett element för användarens förnamn
    let forNamnElement = document.createElement('main');
    forNamnElement.textContent = `Förnamn: \r\n`;
    forNamnElement.textContent += `${userfNamn}`;

    // Skapar ett element för användarens efternamn
    let efterNamnElement = document.createElement('main');
    efterNamnElement.textContent = `Efternamn: \r\n`;
    efterNamnElement.textContent += `${userlNamn}`;

    // Skapar ett element för användarens telefonnummer
    let telefonElement = document.createElement('main');
    telefonElement.textContent = `Telefonnummer: \r\n`;
    telefonElement.textContent += `${userPhone}`;

    // Skapar ett element för användarens mejladress
    let mejlElement = document.createElement('main');
    mejlElement.textContent = `Mejladress: \r\n`;
    mejlElement.textContent += `${userEmail}`;

    // Lägger till alla skapade element i userInfoMain
    userInfoMain.appendChild(pictureElement);
    userInfoMain.appendChild(genElement);
    userInfoMain.appendChild(forNamnElement);
    userInfoMain.appendChild(efterNamnElement);
    userInfoMain.appendChild(telefonElement);
    userInfoMain.appendChild(mejlElement);
    
    
}
