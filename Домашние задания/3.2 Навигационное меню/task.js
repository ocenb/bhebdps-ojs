const menuLinks = Array.from(document.querySelectorAll(".menu__link"));

menuLinks.forEach((link) => {
  link.onclick = () => {
    const parentItem = link.closest(".menu__item");
    const subMenu = parentItem.querySelector(".menu_sub");

    if (subMenu) {
      const isActive = subMenu.classList.contains("menu_active");

      const allSubMenus = Array.from(document.querySelectorAll(".menu_sub"));
      allSubMenus.forEach((menu) => menu.classList.remove("menu_active"));

      if (!isActive) {
        subMenu.classList.add("menu_active");
      }

      return false;
    }
  };
});
