// Installeer en importeer Axios;
import axios from "axios";

// Neem de documentatie van de REST Countries API goed door. Welk endpoint heb je nodig om informatie over alle landen op te halen?
// https://restcountries.com/v2/all

// Schrijf een asynchrone functie die, met behulp van Axios, een GET-request maakt naar het juiste endpoint.
// Log de response in de console en bestudeer de data goed: hoe is het opgebouwd?
async function fetchAllCountryInfo(){
    try {
        const result = await axios.get("https://restcountries.com/v2/all");
        console.log(result.data);

// Probeer eens om de naam van het allereerste land te loggen in de console, welk pad moet je hiervoor volgen?
        result.data.map((info) => {
            console.log(info.name);
        });
    } catch (e){
        console.error(e);
    }
}

fetchAllCountryInfo();
