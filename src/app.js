// Installeer en importeer Axios;
import axios from "axios";

// Neem de documentatie van de REST Countries API goed door. Welk endpoint heb je nodig om informatie over alle landen op te halen?
// https://restcountries.com/v2/all

// Schrijf een asynchrone functie die, met behulp van Axios, een GET-request maakt naar het juiste endpoint.
// Log de response in de console en bestudeer de data goed: hoe is het opgebouwd?
const URI = "https://restcountries.com/";
const ENDPOINT = "v2/all";

const unorderedList = document.getElementById("landList");

async function fetchAllCountryInfo(){
    try {
        const result = await axios.get(URI + ENDPOINT);
        console.log(result.data);


// Probeer eens om de naam van het allereerste land te loggen in de console, welk pad moet je hiervoor volgen?
        result.data.map((info) => {


// referentie ul-tag
            const listItem = document.createElement("li");
            listItem.setAttribute("class", "land");
            listItem.textContent = info.name;
            unorderedList.appendChild(listItem);
        });


    } catch (err){
        const errorMessage = document.getElementById("error-message");


// Welke error message is van toepassing
        if (err.result.status === 404){
            errorMessage.textContent = "Page Not Found | 404";
        }
        if (err.result.status === 500){
            errorMessage.textContent = "Internal SErver Error | 500";
        }
    }
}

fetchAllCountryInfo();



