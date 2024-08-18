function solution(harga) {
  // 1. Hitung total harga
  let totalHarga = 0;

  for (let i = 0; i < harga.length; i++) {
    totalHarga += harga[i];
  }

  // 2. Pengecekan diskon dan bonus
  let diskon = 0;
  let bonus = null;

  if (totalHarga > 400000) {
    diskon = totalHarga * 0.1;
    bonus = "Ransel";
  } else if (totalHarga > 200000) {
    diskon = totalHarga * 0.07;
    bonus = "Payung";
  } else if (totalHarga > 70000) {
    diskon = totalHarga * 0.05;
    bonus = "Topi";
  }

  const hargaAkhir = totalHarga - diskon;

  console.log(`Total harga: ${totalHarga}`);
  console.log(`Diskon: ${diskon}`);
  console.log(`Bonus: ${bonus}`);
  console.log(`Harga Akhir: ${hargaAkhir}`);
}

solution([2000, 50000, 100000]);
