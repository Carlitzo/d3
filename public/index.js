import { renderSvg } from "./renderingFunctions/renderSvg/renderSvg.js";
import { renderCities } from "./renderingFunctions/renderCities/renderCities.js";
import { setEvents } from "./staticEvents/setEvents.js";
import { addExpenseButtonEvent } from "./staticEvents/addExpenseInputButton.js";

renderSvg("upperMap");
renderCities();
setEvents();
addExpenseButtonEvent();