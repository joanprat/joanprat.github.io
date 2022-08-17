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
            <img src="./img/tech/html5.png" alt="HTML5 Skill">
            <img src="./img/tech/css3.png" alt="CSS3 Skill">
            <img src="./img/tech/javascript.png" alt="JS Skill">
        </div>
        <div class="d-flex flex-row">
            <img src="./img/tech/bootstrap.png" alt="Bootstrap 5 Skill">
            <img src="./img/tech/php.png" alt="Php Skill">
            <img src="./img/tech/java.png" alt="Java Skill">
        </div>
        <div class="d-flex flex-row">
            <img src="./img/tech/cplusplus.png" alt="C++ Skill">
            <img src="./img/tech/code-igniter.png" alt="CI Skill">
            <img src="./img/tech/react.png" alt="React Skill">
        </div>
        `;
    }
}
function toggleNavMobile(){
    var nav = document.getElementById("navbar-mobile");
    nav.style.display = nav.style.display == 'none' ? 'initial' : 'none';
}