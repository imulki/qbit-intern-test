//////////////////////////
// CASE 1 : Tukang Buah //
//////////////////////////

// Type declaration and array in problem
/*
class IFruit = {
    fruitId: number,
    fruitName: string,
    fruitType: 'IMPORT' | 'LOCAL',
    stock: number
};
*/

const fruits = [
    {
        fruitId: 1,
        fruitName: 'Apel',
        fruitType: 'IMPORT',
        stock: 10
    },
    {
        fruitId: 2,
        fruitName: 'Kurma',
        fruitType: 'IMPORT',
        stock: 20
    },
    {
        fruitId: 3,
        fruitName: 'apel',
        fruitType: 'IMPORT',
        stock: 50
    },
    {
        fruitId: 4,
        fruitName: 'Manggis',
        fruitType: 'LOCAL',
        stock: 100
    },
    {
        fruitId: 5,
        fruitName: 'Jeruk Bali',
        fruitType: 'LOCAL',
        stock: 10
    },
    {
        fruitId: 5,
        fruitName: 'KURMA',
        fruitType: 'IMPORT',
        stock: 20
    },
    {
        fruitId: 5,
        fruitName: 'Salak',
        fruitType: 'LOCAL',
        stock: 150
    }
]


/////////////////////////////////
// FUNCTIONS FOR THE QUESTIONS //
/////////////////////////////////

// Function 0: processFruitData
// Input: Array of IFruit
// Output: Object with number of container needed and the containers with stock of every fruit available
// Asumption: fruit name is not case-sensitive
// Fungsi ini digunakan untuk menjawab soal 1-4

function processFruitData(fruitArr) {

    let output = {
        containerNeeded: 0,
        containerForLocal: {
            content: [],
            fruitSum: 0
        },
        containerForImport: {
            content: [],
            fruitSum: 0
        }
    }

    for (let fruit of fruitArr) {
        const fruitNameLC = fruit.fruitName.toLowerCase();
        if (fruit.fruitType=="LOCAL") {
            if (!output.containerForLocal.content.includes(fruitNameLC)) {
                output.containerForLocal.content.push(fruitNameLC);
            }
            output.containerForLocal.fruitSum += fruit.stock;
        }
        else {
            if (!output.containerForImport.content.includes(fruitNameLC)) {
                output.containerForImport.content.push(fruitNameLC);
            }
            output.containerForImport.fruitSum += fruit.stock;
        }
    }

    if (output.containerForLocal.fruitSum > 0) output.containerNeeded += 1
    if (output.containerForImport.fruitSum > 0) output.containerNeeded += 1

    return output
}


//////////////////////////////////
// QUESTION-ANSWERING FUNCTIONS //
//////////////////////////////////

function answerQuestion() {
    const prcsdData = processFruitData(fruits)

    // SOAL 1
    console.log("SOAL 1 \nBuah apa saja yang dimiliki Andi?");
    console.log(prcsdData.containerForLocal.content.toString()+prcsdData.containerForImport.content.toString(),"\n");

    // SOAL 2
    console.log("SOAL 2 \nJumlah wadah yang dibutuhkan dan buah yang ada pada setiap wadah?")
    console.log("Jumlah wadah: ", prcsdData.containerNeeded);
    if (prcsdData.containerForLocal.fruitSum > 0) {
        console.log("Isi wadah buah Lokal: ", prcsdData.containerForLocal.content.toString())
    }
    if (prcsdData.containerForImport.fruitSum > 0) {
        console.log("Isi wadah buah Import: ", prcsdData.containerForImport.content.toString())
    }
    console.log();

    // SOAL 3
    console.log("SOAL 3 \nTotal stock buah pada setiap wadah?")
    if (prcsdData.containerForLocal.fruitSum > 0) {
        console.log("Pada wadah buah Lokal:", prcsdData.containerForLocal.fruitSum," buah");
    }
    if (prcsdData.containerForImport.fruitSum > 0) {
        console.log("Pada wadah buah Import:", prcsdData.containerForImport.fruitSum," buah");
    }

    // SOAL 4
    console.log("SOAL 4 \nKomentar terkait kasus tersebut");
    console.log(
        "Pada kasus tersebut, terdapat ketidakkonsistenan dalam penamaan buah.",
        "Terdapat nama buah yang ditulis dengan huruf kapital semua, dengan huruf kapital di awalnya saja, dan ada pula yang ditulis dengan huruf kecil semua.",
        "Apabila tidak ada penetapan format dalam penulisan nama tersebut, hal tersebut akan memberatkan developer dan aplikasi dalam menggunakan data tersebut.",
        "Masalah tersebut dapat berupa kebutuhan aplikasi untuk melakukan standarisasi nama (misalnya dengan mengubahnya menjadi huruf kecil semua).",
        "Masalah terbesar akan timbul apabila data tersebut akan dimasukkan ke dalam database.",
        "Apabila tidak dilakukan standarisasi nama, maka pencarian buah dengan nama tertentu akan menjadi sulit."
    )
}

answerQuestion()