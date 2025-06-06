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
    slidesPerView: 3, // 一度に表示する枚数
    speed: 6000, // ループの時間
    allowTouchMove: false, // スワイプ無効
    autoplay: {
        //自動再生
        delay: 0, // 途切れなくループ
        disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
    },
});
