// ＜＜＜＜＜＜＜＜＜＜あしらいのため追加＞＞＞＞＞＞＞＞＞＞＞

const grid = document.getElementById("gridBackground");

const images = [
  "images/azukibk01.png",
  "images/azukibk02.png",
  "images/azukibk03.png",
  "images/transparent.png",
  "images/azukibk04.png",
  "images/azukibk05.png",
  "images/IMG_4666.png",
  "images/transparent.png",
];

// ランダム表示。更新するたびに変わります。グリッド配置に無理やり透明のPNGをいれてランダムっぽくしてます。
// mainとかぶるのでgridの番号を11からはじめています。
// また、色はグレーのものを使用していますが水色に変更しても良いかと思います（カンプは水色）。

const cols = Math.ceil(window.innerWidth / 100);
const rows = Math.ceil(window.innerHeight / 100);
const totalCells = cols * rows;

for (let i = 0; i < totalCells; i++) {
  const cell = document.createElement("div");
  cell.className = "grid-item";

  const img = document.createElement("img");
  const index = Math.floor(Math.random() * images.length);
  img.src = images[index];

  // ランダム回転（見た目のバリエーション）
  img.style.setProperty("--rotation", `${Math.floor(Math.random() * 360)}deg`);

  // アニメーションのタイミングを少しずらす（自然な感じに）
  img.style.animationDelay = `${Math.random() * 4}s`;

  cell.appendChild(img);
  grid.appendChild(cell);
}

//＜＜＜＜＜ ＜＜＜あしらいのため追加ここまで＞＞＞＞＞＞＞＞＞＞

// スライダー
const swiper = new Swiper(".swiper_azuki", {
  loop: true, // ループ
  speed: 1500, // 少しゆっくり(デフォルトは300)
  effect: "fade", // フェード
  autoplay: {
    // 自動再生
    delay: 1000, // 2秒後に次のスライド
    disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
  },
  // ページネーション
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // 前後の矢印
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ***ここからハンバーガーメニュー***
const drawerButton = document.getElementById("drawerButton");
const drawerMenu = document.querySelector("header nav ul");

function openDrawer() {
  drawerMenu.classList.toggle("open");
  drawerButton.classList.toggle("reDesign");
}

drawerButton.addEventListener("click", openDrawer);
// ***ここまでハンバーガーメニュー***

////////// loadingの部分　//////////
// ローディング画面の要素を取得
const loadingScreen = document.querySelector(".loading-screen");

// ページの読み込みが完了したら実行される関数
window.addEventListener("load", function () {
  // ローディング画面を非表示にする
  loadingScreen.classList.add("active");
});
