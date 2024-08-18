function processAccounts(accounts, values) {
  console.log("+---------------------");

  let totalDebit = 0;
  let totalKredit = 0;

  // Membuat objek untuk menyimpan debit dan kredit per akun
  // {
  // '111' : { debit: 200000, kredit: 0 }
  // '201' : { debit: 0, kredit: 50000 }
  // '211' : { debit: 0, kredit: 15000 }
  // }
  const accountData = {};

  // Iterasi melalui akun dan nilai untuk menghitung debit dan kredit
  for (let i = 0; i < accounts.length; i++) {
    let account = accounts[i]; // 111
    let value = values[i]; // 2000000

    // Menginisialisasi objek akun jika belum ada
    if (!accountData[account]) {
      accountData[account] = { debit: 0, kredit: 0 };
    }

    // Menetapkan nilai kredit dan debit
    if (i === 0) {
      accountData[account].debit += value;
      totalDebit += value;
    } else {
      accountData[account].kredit += value;
      totalKredit += value;
    }
  }

  // Menampilkan hasil
  console.log("# akun # Debit # Kredit");
  for (const account in accountData) {
    const { debit, kredit } = accountData[account];
    console.log(`# ${account} # ${debit} # ${kredit}`);
  }

  const isBalance = totalDebit === totalKredit;
  console.log(
    `# Total # ${totalDebit} # ${totalKredit} (${
      isBalance ? "Balance" : "Not Balance"
    })`
  );
  console.log("");
}

processAccounts([111, 211, 201], [200000, 50000, 150000]);

processAccounts([111, 201], [100000, 120000]);
