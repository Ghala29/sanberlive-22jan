const response = {
    testing : 1234,
    aset : {
        rumah : "andara",
        reksadana : "bibit",
        kendaraan : [("avanza","mio")]
    }
}

function print kendaraan(data){
    for(let i=o; i<data.aset.kendaraan.length;i++ ){
        let asetKendaraan = data.aset.kendaraan[i]
        console.log("kendaraan ke " + i + " adalah : " + aset kendaraan)
    }
}

printKendaraan(response)
console.log(response.aset.reksadana)