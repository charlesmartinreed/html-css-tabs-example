const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    //   when we click, display that particular tab by grabbing the element via the tab target attribute we added before
    const target = document.querySelector(tab.dataset.tabTarget);

    // clear out the old tabs
    tabContents.forEach(content => {
      content.classList.remove("active");
    });

    tabs.forEach(tab => {
      tab.classList.remove("active");
    });

    // add active to the new target/tag
    tab.classList.add("active");
    target.classList.add("active");
  });
});
