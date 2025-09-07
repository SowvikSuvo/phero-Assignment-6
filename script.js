// load Spinner //
const manageSpinner = (status) => {
  if (status == true) {
    document.getElementById("spinner").classList.remove("hidden");
    document.getElementById("all-categories").classList.add("hidden");
  } else {
    document.getElementById("all-categories").classList.remove("hidden");
    document.getElementById("spinner").classList.add("hidden");
  }
};

// categories bar //
const allCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((req) => req.json())
    .then((data) => {
      const datas = data.categories;
      datas.forEach((element) => {
        const allCategories = document.getElementById("all-categories");
        allCategories.innerHTML += `
        <li id="${element.id}" class="h-[35px] add-hover-effect hover:bg-[#15803d] hover:text-white flex items-center p-2 cursor-pointer rounded-lg">${element.category_name}</li>`;
      });
    });
};
allCategories();

// loadModal //
