const decreaseBtn = document.querySelector('#decrease-btn');/* võtab ühe esimestest html selectoritest */
const increaseBtn = document.querySelector('#increase-btn');
const resetBtn = document.querySelector('#reset-btn');
const value = document.querySelector('#value');

let count = 0;

// decreaseBtn.addEventListener('click', () => {
// count--;
// value.textContent = count;
// });/* arrow function */

// increaseBtn.addEventListener('mouseover', () => {
// count++;
// value.textContent = count;
// });

// resetBtn.addEventListener('click', () => {
// count = 0;
// value.textContent = count;
// });



/*SAMA MOODUS AGA ÜHE AddEventListeneriga*/

const allBtns = document.querySelectorAll('.counter-btn');

allBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        const styles = event.currentTarget;


    if(styles.classList.contains('decrease')) {
        count--;
    } 
    else if (styles.classList.contains('increase')) {
        count++;
    }

        else {
            count = 0
    }

    if (count > 0) {
        value.style.color = 'green';
    }
    if (count < 0) {
        value.style.color = 'red';
    }
    if (count === 0) {
        value.style.color = 'black';
    }
    value.textContent = count;
    })
})


/*NAVBAR DROPDOWN*/

const navBtn = document.querySelector(".nav-btn");
const navDropdownMenu = document.querySelector(".nav-dropdown");

navBtn.addEventListener("click", () => {
    if (navDropdownMenu.classList.contains("show-dropdown-menu")){
        navDropdownMenu.classList.remove("show-dropdown-menu")
    } else{
        navDropdownMenu.classList.add("show-dropdown-menu")
    }
})