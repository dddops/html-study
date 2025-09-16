const product_data = [
  {
    category: "상의",
    brand: "Supreme",
    product: "슈프림 박스로고 후드티",
    price: "390,000",
  },
  {
    category: "하의",
    brand: "DIESEL",
    product: "디젤 트랙 팬츠",
    price: "188,000",
  },
  {
    category: "신발",
    brand: "Nike",
    product: "에어포스 1",
    price: "137,000",
  },
  {
    category: "패션잡화",
    brand: "Music&Goods",
    product: "빵빵이 키링",
    price: "29,000",
  },
];

// 제품 테이블에 데이터를 렌더링하는 함수
function renderProducts(products) {
  const product_data_Table = document.getElementById("product_data_Table");

  // 기존 테이블 내용 초기화
  product_data_Table.innerHTML = "";

  // 제품 데이터를 테이블에 추가
  products.forEach((item) => {
    const row = product_data_Table.insertRow();
    row.insertCell(0).innerHTML = item.category;
    row.insertCell(1).innerHTML = item.brand;
    row.insertCell(2).innerHTML = item.product;
    row.insertCell(3).innerHTML = item.price;
  });
}

// 카테고리별 필터링 함수
function filterByCategory(selectedCategory) {
  if (selectedCategory === "" || selectedCategory === "카테고리") {
    // 모든 제품 표시
    renderProducts(product_data);
  } else {
    // 선택된 카테고리에 맞는 제품만 필터링
    const filteredProducts = product_data.filter(
      (product) => product.category === selectedCategory
    );
    renderProducts(filteredProducts);
  }
}

// 검색 기능 함수
function searchProducts(searchTerm) {
  if (searchTerm === "") {
    // 검색어가 없으면 모든 제품 표시
    renderProducts(product_data);
  } else {
    // 제품명에서 검색어를 포함하는 제품만 필터링 (대소문자 구분 없음)
    const filteredProducts = product_data.filter((product) =>
      product.product.toLowerCase().includes(searchTerm.toLowerCase())
    );
    renderProducts(filteredProducts);
  }
}

// 카테고리와 검색어를 동시에 적용하는 함수
function applyFilters() {
  const categorySelect = document.getElementById("inlineFormSelectPref");
  const searchInput = document.querySelector('input[name="search"]');

  const selectedCategory = categorySelect.value;
  const searchTerm = searchInput.value;

  let filteredProducts = product_data;

  // 카테고리 필터 적용
  if (selectedCategory !== "" && selectedCategory !== "카테고리") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === selectedCategory
    );
  }

  // 검색어 필터 적용
  if (searchTerm !== "") {
    filteredProducts = filteredProducts.filter((product) =>
      product.product.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  renderProducts(filteredProducts);
}

// 페이지 로드 시 초기화
document.addEventListener("DOMContentLoaded", function () {
  // 초기 데이터 로딩 (모든 제품 표시)
  renderProducts(product_data);

  // 카테고리 셀렉트 요소에 이벤트 리스너 추가
  const categorySelect = document.getElementById("inlineFormSelectPref");
  categorySelect.addEventListener("change", function () {
    applyFilters(); // 통합 필터 함수 사용
  });

  // 검색 입력창에 이벤트 리스너 추가
  const searchInput = document.querySelector('input[name="search"]');

  // 조회 버튼 클릭 시 검색
  const searchForm = document.querySelector("form");
  searchForm.addEventListener("submit", function (e) {
    e.preventDefault(); // 폼 제출 기본 동작 방지
    applyFilters(); // 통합 필터 함수 사용
  });
});
// 회원가입 버튼
const signUp = document.getElementById("sign_up");
signUp.addEventListener("click", function () {
  window.location.href = "sign_up.html";
});
const darkModeSwitch = document.getElementById("darkModeSwitch");
darkModeSwitch.addEventListener("change", function () {
  document.body.classList.toggle("dark-mode", this.checked);
});

function updateDateTime() {
  const now = new Date();
  const formatted = now.toLocaleString();
  document.getElementById("datetime").textContent = "현재 시간: " + formatted;
}
setInterval(updateDateTime, 1000);
updateDateTime(); // 초기 호출
