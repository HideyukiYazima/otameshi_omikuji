// おみくじアプリを作成する
const omikuji = ["大吉", "中吉", "小吉", "凶"];

// ランダムな数値を取得する関数
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

// おみくじの結果を表示する関数
function showResult() {
  const result = omikuji[getRandomNumber(omikuji.length)];
  alert(`今日の運勢は${result}です！`);
}

// 実行
const button = document.getElementById("omikuji-btn");
button.addEventListener("click", showResult);