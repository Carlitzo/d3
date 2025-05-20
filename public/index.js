import { renderSvg } from "./renderingFunctions/renderSvg/renderSvg.js";
import { renderCities } from "./renderingFunctions/renderCities/renderCities.js";
import { renderTopButtons } from "./renderingFunctions/renderTopButtons/renderTopButtons.js";

renderSvg("upperMap");
renderCities();
renderTopButtons("ethnicityButtonsContainer");
renderTopButtons("genderButtonsContainer");
renderTopButtons("yearButtonsContainer");

function ewr ({gender, ethnicity, year}) {
    year = parseInt(year);''
    gender = getAmountOfGigsBy({gender: gender, year: year});


}