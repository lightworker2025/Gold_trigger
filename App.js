async function checkPrice() {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "⏳ در حال دریافت قیمت...";

  try {
    const response = await fetch("https://api.tgju.org/v1/quote/all");
    const data = await response.json();
    const goldPrice = parseInt(data.gold_18.p);

    const threshold = 3000000;
    let message = `💰 قیمت فعلی طلا: ${goldPrice.toLocaleString()} تومان<br>`;

    if (goldPrice > threshold) {
      message += "🚨 هشدار! قیمت طلا بالاست. زمان فروش؟";
    } else {
      message += "✅ قیمت مناسب برای خرید.";
    }

    resultDiv.innerHTML = message;
  } catch (error) {
    resultDiv.innerHTML = "❌ خطا در دریافت قیمت.";
  }
}
