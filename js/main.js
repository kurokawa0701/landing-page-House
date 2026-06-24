// 需給バランスグラフ（Chart.js）
document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('supplyDemandChart');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['2020年', '2021年', '2022年', '2023年', '2024年'],
      datasets: [
        {
          label: '売却物件数（売主）',
          data: [100, 94, 87, 79, 70],
          backgroundColor: 'rgba(180, 205, 235, 0.9)',
          borderColor: '#1B3A6B',
          borderWidth: 2,
          borderRadius: 6,
          borderSkipped: false,
          order: 2
        },
        {
          label: '購入希望者数（買主）',
          data: [100, 110, 122, 137, 155],
          backgroundColor: 'rgba(232, 98, 26, 0.85)',
          borderColor: '#E8621A',
          borderWidth: 2,
          borderRadius: 6,
          borderSkipped: false,
          order: 1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            font: { size: 12 },
            padding: 14,
            usePointStyle: true,
            pointStyle: 'rectRounded'
          }
        },
        tooltip: {
          callbacks: {
            label: ctx => `${ctx.dataset.label}: ${ctx.parsed.y}（指数）`
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { font: { size: 12 } }
        },
        y: {
          min: 40,
          max: 170,
          grid: { color: 'rgba(0,0,0,0.06)' },
          ticks: {
            font: { size: 11 },
            callback: val => val
          },
          title: {
            display: true,
            text: '指数（2020年 = 100）',
            font: { size: 11 },
            color: '#666'
          }
        }
      }
    }
  });
});

// FAQ アコーディオン
function toggleFaq(el) {
  const item = el.closest('.faq-item');
  item.classList.toggle('open');
}

// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
