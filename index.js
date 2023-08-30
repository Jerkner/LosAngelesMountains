const main = document.getElementById('main')
import { mainHTML } from "./main.js"
import { historyHTML } from "./history.js"
import {teamHTML} from "./team.js"

main.addEventListener('click', function(event) {
    if (event.target.classList.contains('main-link')) {
        mainTab();
    } else if (event.target.classList.contains('history-link')) {
        historyTab();
    } else if (event.target.classList.contains('team-link')) {
        teamTab();
    }
});

// Tabs

function mainTab() {
    main.innerHTML = mainHTML
}

function historyTab() {
    main.innerHTML = historyHTML
}

function teamTab() {
    main.innerHTML = teamHTML
}

mainTab()