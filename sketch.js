let button1, button2;
let sprite1, sprite2;
let sprite1Index = 0, sprite2Index = 0;
let sprite1Timer = 0, sprite2Timer = 0;
let showSprite1 = true, showSprite2 = false; // 預設第一個小圖顯示，第二個小圖隱藏
let iframe; // 用於嵌入 iframe 的變數

function preload() {
  // 載入圖片精靈
  sprite1 = loadImage('all_1.png'); // all_1.png 包含 4 張小圖片，每張 68x50
  sprite2 = loadImage('all_2.png'); // all_2.png 包含 6 張小圖片，每張 87x60
}

function setup() {
  createCanvas(800, 600);

  // 建立第一個按鈕
  button1 = createButton('教科網站');
  button1.position(50, 50);
  button1.size(100, 50);
  button1.style('font-size', '20px');
  button1.mouseOver(() => {
    showSprite1 = true;
    showSprite2 = false; // 切換顯示第一個圖片精靈
  });
  button1.mousePressed(() => {
    createIframe('https://cccccc317.github.io/202503171/'); // 按下按鈕顯示對應的 iframe
  });

  // 建立第二個按鈕
  button2 = createButton('測驗卷');
  button2.position(280, 50);
  button2.size(100, 50);
  button2.style('font-size', '20px');
  button2.mouseOver(() => {
    showSprite2 = true;
    showSprite1 = false; // 切換顯示第二個圖片精靈
  });
  button2.mousePressed(() => {
    createIframe('https://cccccc317.github.io/20250310/'); // 按下按鈕顯示對應的 iframe
  });
}

function draw() {
  background(255);

  // 顯示第一個圖片精靈動畫
  if (showSprite1) {
    sprite1Timer++;
    if (sprite1Timer % 10 === 0) { // 控制動畫速度
      sprite1Index = (sprite1Index + 1) % 4; // 4 張小圖片
    }
    let sx = sprite1Index * 68; // 每張圖片的寬度為 68
    image(sprite1, 50, 150, 68, 50, sx, 0, 68, 50); // 顯示圖片
  }

  // 顯示第二個圖片精靈動畫
  if (showSprite2) {
    sprite2Timer++;
    if (sprite2Timer % 10 === 0) { // 控制動畫速度
      sprite2Index = (sprite2Index + 1) % 6; // 6 張小圖片
    }
    let sx = sprite2Index * 87; // 每張圖片的寬度為 87
    image(sprite2, 50, 150, 87, 60, sx, 0, 87, 60); // 顯示圖片
  }
}

// 建立 iframe 的函數
function createIframe(url) {
  // 如果已經有 iframe，先移除
  if (iframe) {
    iframe.remove();
  }

  // 計算 iframe 的寬和高
  let iframeWidth = windowWidth * 0.8;
  let iframeHeight = windowHeight * 0.6;

  // 建立新的 iframe
  iframe = createElement('iframe');
  iframe.attribute('src', url);
  iframe.position((windowWidth - iframeWidth) / 2, (windowHeight - iframeHeight) / 2); // 顯示在視窗中間
  iframe.size(iframeWidth, iframeHeight);
  iframe.style('border', 'none'); // 移除邊框
}