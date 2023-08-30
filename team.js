import {scheduleHTML1, scheduleHTML2} from "./schedules.js"

let mountain = "images/photo-1414449381078-c7768b8f19b8.png"
let schedule = scheduleHTML1

const teamHTML = `
<section class="climb-image">
        <header class="climb-header">
            <div class="climb-title">
                <img class="climb-logo" src="images/Group 12.png"></img>
                <p class="climb-text">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.</p>
            </div>
            <nav class="climb-nav">
                <p class="mountain1-link">MOUNTAIN 1</p>
                <p class="mountain2-link">MOUNTAIN 2</p>
            </nav>
        </header>

        <section class="climb-content">
            <img src=${mountain} class="climb-bg" />

            <div class="climb-schedule">
                ${schedule}
            </div>
            
            <footer class="climb-footer">
                <div class="footer-logo">
                    <img src="images/Vector Smart Object.png" class="footer-img main-link" />
                    <img src="images/LOSANGELES MOUNTAINS.png" class="footer-title main-link" />
                </div>
                <p class="footer-copyright">COPYRIGHT 2016.<span class="avoid-wrap">ALL RIGHTS RESERVED.</span> </p>
            </footer>
        </section>

</section>`

main.addEventListener('click', function(event) {
    if 
    (event.target.classList.contains('mountain1-link')) {
        mountain = "images/photo-1414449381078-c7768b8f19b8.png";
        schedule = scheduleHTML1
    }
    else if 
    (event.target.classList.contains('mountain2-link')) {
        mountain = "images/photo-1417021423914-070979c8eb34.png";
        schedule = scheduleHTML2
    }
    updatePage();
});

function updatePage() {
    const mountainImage = document.querySelector('.climb-bg');
    const scheduleHTML = document.querySelector('.climb-schedule');
    mountainImage.src = mountain;
    scheduleHTML.innerHTML = schedule;
}

export {teamHTML}