console.log("A:");
const anggota_kelas = ["budi", "sita", "ayu", "rena", "omen"];
let mengumpulkan_tugas = ["rena", "omen"];
const _ = require("lodash");
let belum_kumpul = _.filter(
    anggota_kelas, (v) => !_.includes(mengumpulkan_tugas, v)
);

console.log(belum_kumpul);
console.log();

console.log("B:");
let kelompok = [];
for(let i=0; i<anggota_kelas.length; i=i+2){
    kelompok.push(_.slice(anggota_kelas,i,i+2));
}
console.log(kelompok);