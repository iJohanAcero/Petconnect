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
