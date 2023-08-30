const historyHTML = `
<section class="history-image">
    <nav class="history-nav">
        <img class="history-logo main-link" src="images/Logo2.png" />
        <div class="history-nav-links">
            <p class="history-link">01. HISTORY </p>
            <p class="team-link">02. TEAM </p>
        </div>
    </nav>

    <div class="history-content">
        <img src="images/Group 11.png" class="history-title">
        <p class="history-text">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.</p>
    </div>

    <div class="history-carousel">
    
        <div class="history-items">

            <div class="items-group1">
                <img src="images/Group10.png" class="history-item" />
                <img src="images/Group8.png" class="history-item" />
            </div>

            <div class="items-group2">
                <img src="images/Group10.png" class="history-item" />
                <img src="images/Group8.png" class="history-item" />
            </div>

        </div>

        <div class="history-ellipses">
            <div id="ellipse1" class="ellipse1 ellipse-filled"></div>
            <div id="ellipse2" class="ellipse2"></div>
            <div id="ellipse3" class="ellipse3"></div>
        </div>

    <div>
</section>`

main.addEventListener('click', function(event) {
    if (event.target.classList.contains('ellipse1')) {
        document.getElementById("ellipse1").classList.add('ellipse-filled');
        document.getElementById("ellipse2").classList.remove('ellipse-filled');
        document.getElementById("ellipse3").classList.remove('ellipse-filled');
    }
    
    if (event.target.classList.contains('ellipse2')) {
        document.getElementById("ellipse1").classList.remove('ellipse-filled');
        document.getElementById("ellipse2").classList.add('ellipse-filled');
        document.getElementById("ellipse3").classList.remove('ellipse-filled');
    }
    
    if (event.target.classList.contains('ellipse3')) {
        document.getElementById("ellipse1").classList.remove('ellipse-filled');
        document.getElementById("ellipse2").classList.remove('ellipse-filled');
        document.getElementById("ellipse3").classList.add('ellipse-filled');
    }
});

export {historyHTML}