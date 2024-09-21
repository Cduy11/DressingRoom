import { thuDo } from "./ChoseItem.js";

export const renderListItem = (data) => {
  let listTab = document.getElementById("pills-tab");
  let listContent = "";

  data.navPills.forEach((item) => {
    listContent += `
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="${item.tabName}" data-bs-toggle="pill" data-bs-target="#${item.tabName}" type="button" role="tab" aria-controls="${item.tabName}" aria-selected="false" data-type="${item.type}">
          ${item.showName}
        </button>
      </li>
    `;
  });

  listTab.innerHTML = listContent;

  // Thêm sự kiện click cho các nút tab
  const listTabButtons = document.querySelectorAll(".nav-link");
  listTabButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const selectedType = e.target.getAttribute("data-type");
      renderItem(data, selectedType);
    });
  });

  renderItem(data, data.navPills[0].type);
};

const renderItem = (data, type) => {
  const listItem = document.getElementById("itemList");

  let itemContent = "";
  const newData = type
    ? data.tabPanes.filter((i) => i.type === type)
    : data.tabPanes.filter((i) => i.type === data.navPills[0].type);

  newData.forEach((item) => {
    itemContent += `
        <div class="col-6 col-lg-4">
          <div class="card">
            <img src="${item.imgSrc_jpg}" class="card-img-top" alt="${item.name}">
            <div class="card-body text-center">
              <h5 class="card-title">${item.name}</h5>
              <button class="btnClick" data-type="${item.type}" data-img="${item.imgSrc_png}" type="button">Thử Đồ</button>
            </div>
          </div>
        </div>
      `;
  });

  listItem.innerHTML = itemContent;

  // Thêm sự kiện click cho các nút "Thử Đồ"
  const listBtn = document.querySelectorAll(".btnClick");
  listBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const img = e.target.getAttribute("data-img");
      const type = e.target.getAttribute("data-type");
      thuDo(img, type);
    });
  });
};
