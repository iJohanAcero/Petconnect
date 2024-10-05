
//================ SCROLL DE MASCOTAS RECOMENDADAS ===========================
const scroller = document.querySelectorAll(".scroll");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) { /* Le decimos que se use solo cuando el usuario no tenga desactivada las animaciones */
    addAnimation();
}

function addAnimation() {
    scroller.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
        
        const scrolleranimated = scroller.querySelector(".recomendados");
        const scrollercontent = Array.from(scrolleranimated.children);

        scrollercontent.forEach((item) => {
            const duplicateItem = item.cloneNode(true);

            // Asegurarse de copiar el fondo del CSS (background image)
            const backgroundStyle = window.getComputedStyle(item).getPropertyValue('background');
            if (backgroundStyle) {
                duplicateItem.style.background = backgroundStyle; // Copiar el background
            }

            duplicateItem.setAttribute("aria-hidden", true);
            scrolleranimated.appendChild(duplicateItem);
        });
    });
}


//================= SIDEBAR =================================

const MenuItem = document.querySelectorAll('.menu-item');


//---------------FUNCION PARA VERIFICAR EL ESTADO ACTIVO O NO DEL POPUP
const mascotasPopup = document.querySelector('.mascotas-popup');

//------------ FUNCION DE GUARDIANES
const guardianesBox = document.querySelector('#guardianes-box'); //FUNCION PARA EL COLOR DE LA CAJA
const guardianesBoxColor = document.querySelector('.guardianes');  //PARA SELECCIONAR LA CLASE DEL COLOR DE LA CAJA
const guardianBuscar = document.querySelectorAll('.guardianes');

//--------- REMOVER LA CLASE ACTIVO DE TODOS LOS ITEMS DEL MENU
const cambiarActivo = () => {
    MenuItem.forEach(item => {
        item.classList.remove('activo');
    })
}

MenuItem.forEach(item =>{
    item.addEventListener('click', () => {
        cambiarActivo(); //Añadimos la funcion de camibar el activo para que no queden todos activos
        item.classList.add('activo');

        // AÑADIMOS LA FUNCIONALIDAD DE DESPLEGAR EL POPUP DE MASCOTAS CUANDO SE LE DE CLIK

        if(item.id === 'popup-mascotas'){ // FUNCION DEL DISPLAY BLOCK O NONE DEPENDIENDO EL ESTADO DEL POPUP
            if (mascotasPopup.style.display === 'block') {
                mascotasPopup.style.display = 'none';
            } else {
                mascotasPopup.style.display = 'block';
            } 
        } else {
            mascotasPopup.style.display = 'none';
        }
    })
})


// ======= CAJA DE GUARDIANES =================

guardianesBox.addEventListener('click', () => {
    guardianesBoxColor.style.boxShadow = '0 0 1rem var(--color-primary)'; //PARA QUE CAMBIE DE COLOR CON EL CLICK AL CLOR PRIMARIO

    setTimeout(() => {
        guardianesBoxColor.style.boxShadow = 'none';
    }, 2000);
})