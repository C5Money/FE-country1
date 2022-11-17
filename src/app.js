// Installeer en importeer Axios;
import axios from "axios";

// Neem de documentatie van de REST Countries API goed door. Welk endpoint heb je nodig om informatie over alle landen op te halen?
// https://restcountries.com/v2/all

// Schrijf een asynchrone functie die, met behulp van Axios, een GET-request maakt naar het juiste endpoint.
// Log de response in de console en bestudeer de data goed: hoe is het opgebouwd?
const URI = "https://restcountries.com/v2/";
const ENDPOINT = "all";

const unorderedList = document.getElementById("landList");

async function fetchAllCountryInfo(){
    try {
        const result = await axios.get(URI + ENDPOINT);


// Probeer eens om de naam van het allereerste land te loggen in de console, welk pad moet je hiervoor volgen?
        console.log(result.data[0].name);


// Door de data mappen
        result.data.map((land) => {


// referentie ul-tag
        const listItemName = document.createElement("li");
        listItemName.setAttribute("class", "land");
        listItemName.textContent = `${land.name}` ;
        unorderedList.appendChild(listItemName);

        const listItemPop = document.createElement("li");
        listItemPop.setAttribute("class", "land1");
        listItemPop.textContent = `Has a population of ${land.population} people` ;
        unorderedList.appendChild(listItemPop);

        const listItemFlag = document.createElement("img");
        listItemFlag.setAttribute("src", `${land.flag}`);
        listItemFlag.setAttribute("alt", `Flag of ${land.name}`);
        listItemFlag.setAttribute("class", "flag");
        unorderedList.appendChild(listItemFlag);


// Gekleurde landennamen
//         const landNaam = document.getElementById("li");
//         landNaam.setAttribute("class", "naamkleuren");
//         switch (land.region) {
//             case "Asia":
//                 landNaam.setAttribute("class", "asia");
//                 break;
//             case "Africa":
//                 landNaam.setAttribute("class", "africa");
//                 break;
//             case "Americas":
//                 landNaam.setAttribute("class", "americas");
//                 break;
//             case "Europe":
//                 landNaam.setAttribute("class", "europe");
//                 break;
//             case "Oceania":
//                 landNaam.setAttribute("class", "oceania");
//                 break;
//             default:
//                 console.log("Found no positive outcome");
//         }


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


