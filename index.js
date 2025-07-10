function tabs() {
  const tabs = document.querySelectorAll(".nav-item"),
    tabsContent = document.querySelectorAll("section"),
    tabsParent = document.querySelector(".nav");

  function tabsHide() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show");
    });
    tabs.forEach((item) => {
      item.classList.remove("nav-item--active");
    });
  }

  function tabShow(i = 0) {
    tabs[i].classList.add("nav-item--active");
    tabsContent[i].classList.add("show");
    tabsContent[i].classList.remove("hide");
  }

  tabsParent.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("nav-item")) {
      tabs.forEach((item, i) => {
        if (e.target == item) {
          tabsHide();
          tabShow(i);
        }
      });
    }
  });

  tabsHide();

  tabShow();
}

tabs();
