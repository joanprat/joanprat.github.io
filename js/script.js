function toggleSkills(toggleOption){
    var container = document.getElementById("skills-container");
    var toggle = document.getElementById("toggle-skills");
    var selector = document.getElementById("selector");
    if(toggleOption == 2){
        selector.classList = 'circle button-swap-right';
        toggle.addEventListener('click', function (onclick) { return toggleSkills(1); });
        container.innerHTML = `
        <p>As a SysAdmin</p>
        <div class="d-flex flex-row">
            <img src="./img/tech/windows.png">
            <img src="./img/tech/linux.png">
        </div>
        <div class="d-flex flex-row">
            <img src="./img/tech/cisco.png">
        </div>
        <div class="d-flex flex-row">
            <img src="./img/tech/apache.png">
            <img src="./img/tech/nginx.png">
        </div>
        `;
    }else{
        selector.classList = 'circle button-swap-left';
        toggle.addEventListener('click', function (onclick) { return toggleSkills(2); });
        container.innerHTML = `
        <p>As a developer</p>
        <div class="d-flex flex-row">
            <img src="./img/tech/html5.png">
            <img src="./img/tech/css3.png">
            <img src="./img/tech/javascript.png">
        </div>
        <div class="d-flex flex-row">
            <img src="./img/tech/bootstrap.png">
            <img src="./img/tech/php.png">
            <img src="./img/tech/java.png">
        </div>
        <div class="d-flex flex-row">
            <img src="./img/tech/cplusplus.png">
        </div>
        </div>
        `;
    }
}
function toggleNavMobile(){
    var nav = document.getElementById("navbar-mobile");
    nav.style.display = nav.style.display == 'none' ? 'initial' : 'none';
}