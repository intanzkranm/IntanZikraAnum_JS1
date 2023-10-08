//IF
let rasaMakanan = "pedas";

if (rasaMakanan === "pedas") {
  console.log("Mie Aceh ini sangat " + rasaMakanan);
} else if (rasaMakanan === "manis") {
  console.log("Ice cream ini terlalu " + rasaMakanan);
} else if (rasaMakanan === "asam") {
  console.log("Mangga ini masih hijau makanya " + rasaMakanan);
} else {
  console.log("Ada berbagai macam makanan, kita harus mencoba semuanya");
}
//AKHIR IF
console.log("--------------------------------------------------");

//NESTED IF
let jenisKendaraan = "mobil";
let lamaParkir = 4;
let hargaParkir;

if (jenisKendaraan === "mobil") {
  if (lamaParkir <= 2) {
    hargaParkir = 10000;
  } else {
    hargaParkir = 10000 + (lamaParkir - 2) * 3000;
  }
} else if (jenisKendaraan === "motor") {
  if (lamaParkir <= 2) {
    hargaParkir = 5000;
  } else {
    hargaParkir = 5000 + (lamaParkir - 2) * 2000;
  }
} else {
  hargaParkir = 0;
}

console.log("Jenis kendaraan: " + jenisKendaraan);
console.log("Lama parkir: " + lamaParkir + " jam");
console.log("Harga parkir: Rp " + hargaParkir);
//AKHIR NESTED IF
console.log("--------------------------------------------------");

//SWITCH CASE
let ukuranKaki = "23";

let sizeSepatu;

switch (ukuranKaki) {
  case "21.5":
    sizeSepatu = "35.5";
    break;
  case "22":
    sizeSepatu = "36";
    break;
  case "22.5":
    sizeSepatu = "36.7";
    break;
  case "23":
    sizeSepatu = "37.3";
    break;
  case "23.5":
    sizeSepatu = "38";
    break;
  case "24":
    sizeSepatu = "38.7";
    break;
  case "24.5":
    sizeSepatu = "39.3";
    break;
  case "25":
    sizeSepatu = "40";
    break;
  case "25.5":
    sizeSepatu = "40.7";
    break;
  case "26":
    sizeSepatu = "41.3";
    break;
  case "26.5":
    sizeSepatu = "42";
    break;
  case "27":
    sizeSepatu = "42.7";
    break;
  case "27.5":
    sizeSepatu = "43.3";
    break;
  case "28":
    sizeSepatu = "44";
    break;
  case "28.5":
    sizeSepatu = "44.7";
    break;
  case "29":
    sizeSepatu = "45.3";
    break;
  case "29.5":
    sizeSepatu = "46";
    break;
  case "30":
    sizeSepatu = "46.7";
    break;
  default:
    sizeSepatu = "Size sepatu tidak ada";
}

console.log("Ukuran kaki: " + ukuranKaki + " cm");
console.log("Size sepatu: " + sizeSepatu);
//AKHIR SWITCH CASE
console.log("--------------------------------------------------");

//FOR STATEMENT
let bunga = ["Anggrek", "Melati", "Mawar", "Tulip"];

console.log("Detail kata bunga:");

for (var i = 0; i < bunga.length; i++) {
  console.log("Nama Bunga: " + bunga[i]);
  console.log("Panjang Nama bunga: " + bunga[i].length + " karakter");
  console.log("Huruf Pertama: " + bunga[i][0]);
  console.log("**********************************");
}
//AKHIR FOR STATEMENT
console.log("--------------------------------------------------");

//WHILE
let planet = ["Matahari", "Merkurius", "Venus", "Bumi", "Mars", "Jupiter", "Saturnus", "Uranus", "Neptunus", "end"];

let j = 0;

console.log("Planet Tata Surya:");

while (i < planet.length && planet[j] !== "end") {
  console.log(planet[j]);
  j++;
}

//AKHIR WHILE
console.log("--------------------------------------------------");

//DO WHILE
let namaBrand = ["Samsung", "Apple", "Oppo", "Poco", "etc.", "Asus", "Huawei"];

let indeks = 0;
console.log("Nama brand HP:");

do {
  var brand = namaBrand[indeks];
  console.log(brand);
  indeks++;
} while (brand !== "etc.");
//AKHIR  DO WHILE
console.log("--------------------------------------------------");

//FUNCTION
function konversiCelsiusToKelvin(suhuCelsius) {
  var suhuKelvin = suhuCelsius + 273.15;
  return suhuKelvin;
}

var suhuCelsius = 25;
var suhuKelvin = konversiCelsiusToKelvin(suhuCelsius);

console.log("Koversi suhu Celcius ke suhu Kelvin:");
console.log(suhuCelsius + " derajat Celsius sama dengan " + suhuKelvin + " derajat Kelvin.");
//AKHIR FUNCTION
