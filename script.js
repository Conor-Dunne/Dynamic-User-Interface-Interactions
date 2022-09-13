
const dropdownBtn = document.querySelector(".dropdown");
const menu = document.querySelector(".dropdown-list");


function showDropdownMenu () {
    menu.classList.add("visible");
}

function hideDropDownMenu () {
    menu.classList.remove("visible");
}




dropdownBtn.addEventListener("mouseover", showDropdownMenu);
dropdownBtn.addEventListener("mouseleave", hideDropDownMenu )







