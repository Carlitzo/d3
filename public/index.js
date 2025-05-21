import { renderSvg } from "./renderingFunctions/renderSvg/renderSvg.js";
import { renderCities } from "./renderingFunctions/renderCities/renderCities.js";
import { setEvents } from "./staticEvents/setEvents.js";
import { addExpenseButtonEvent } from "./staticEvents/addExpenseInputButton.js";
import { renderTopButtons } from "./renderingFunctions/renderTopButtons/renderTopButtons.js";
import { renderBars } from "./renderingFunctions/renderBars/renderBars.js";

renderSvg("upperMap");
renderCities("citiesContainerTop");
renderCities("citiesContainerBottom");
renderTopButtons("ethnicityButtonsContainer");
renderTopButtons("genderButtonsContainer");
renderTopButtons("yearButtonsContainer");
renderBars();
setEvents();
addExpenseButtonEvent();