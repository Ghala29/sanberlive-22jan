//Fungsi jenis 1 
function namaFungsi1(){
console.log("Hello World! 1");
}

//Fungsi jenis 2 
var namaFungsi2 = function(){
console.log("Hello World! 2");
}

//Fungsi jenis 3 
var namaFungsi3 = () => {
console.log("Hello World! 3");
}
// atau seperti ini (jika isi fungsi hanya satu baris):
var namaFungsi4 = () => console.log("Hello World!");

//Fungsi jenis 4 
var namaFungsi = new Function('console.log("Hello World!");');

//namaFungsi1()
//namaFungsi2()
//namaFungsi3()
//namaFungsi4()

function fungsibagi(a,b){
let c = a/b
console.log("Hasil bagi and dan b adalah " + c)
}
//fungsibagi(2,4)

function bagi(a,b){
let hasilBagi = a / b;
return hasilBagi; 
}

let hasilBagi = bagi(2,5)
console.log(hasilBagi)