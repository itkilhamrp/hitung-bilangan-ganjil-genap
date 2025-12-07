function cekAngka() {
  let angka = document.getElementById("angka").value;

  if (angka === "") {
    document.getElementById("hasil").innerHTML = "Harap Masukkan Angka";
    return;
  }

  if (angka % 2 === 0) {
    document.getElementById("hasil").innerHTML = angka + " adalah bilangan Genap.";
  } else {
    document.getElementById("hasil").innerHTML = angka + " adalah bilangan Ganjil.";
  }
}
