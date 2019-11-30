const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    //   when we click, display that particular tab by grabbing the element via the tab target attribute we added before
    const target = document.querySelector(tab.dataset.tabTarget);

    tabContents.forEach(content => {
      content.classList.remove("active");
    });

    target.classList.add("active");
  });
});
