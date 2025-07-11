import { renderSvg } from "./../renderingFunctions/renderSvg/renderSvg.js";
import { renderCities } from "./../renderingFunctions/renderCities/renderCities.js";
import { setEvents } from "./../staticEvents/setEvents.js";
import { addExpenseButtonEvent } from "./../staticEvents/addExpenseInputButton.js";
import { renderTopButtons } from "./../renderingFunctions/renderTopButtons/renderTopButtons.js";
import { renderBars } from "./../renderingFunctions/renderBars/renderBars.js";
import { updateBars } from "./../renderingFunctions/renderBars/renderBars.js";
import { renderHeatmap } from "./../renderingFunctions/renderHeatmap/renderHeatmap.js";
import { renderBottomButtons } from "../renderingFunctions/renderBottomButtons/renderBottomButtons.js";
import { addClickEventsToPaths } from "../staticEvents/clickedCity.js";

export function initialize () {

    renderSvg();
    renderCities("citiesContainerTop");
    renderCities("citiesContainerBottom");
    renderTopButtons("ethnicityButtonsContainer");
    renderTopButtons("genderButtonsContainer");
    renderTopButtons("yearButtonsContainer");
    renderBars();
    setEvents();
    addExpenseButtonEvent();
    updateBars();
    renderHeatmap();

    setTimeout(() => {
        addClickEventsToPaths();
    }, 250);

    renderBottomButtons("bottomEthnicityButtonsContainer");
    renderBottomButtons("bottomGenderButtonsContainer");

}