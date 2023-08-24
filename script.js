document.getElementById('hitungButton').addEventListener('click', function() {
    const nama = document.getElementById('nama').value;
    const matkul = document.getElementById('matkul').value;
    const gradeValue = document.getElementById('grade').value;
    
    if (nama === "" || matkul === "") {
        alert("Nama Mahasiswa dan Mata Kuliah harus diisi!");
        return;
    }
    
    let grade, nilaiRataRata;
    
    switch (gradeValue) {
        case "4":
            grade = "A";
            nilaiRataRata = 4;
            break;
        case "3":
            grade = "B";
            nilaiRataRata = 3;
            break;
        case "2":
            grade = "C";
            nilaiRataRata = 2;
            break;
        case "1":
            grade = "D";
            nilaiRataRata = 1;
            break;
        case "0":
            grade = "E";
            nilaiRataRata = 0;
            break;
        default:
            grade = "-";
            nilaiRataRata = 0;
            break;
    }
    
    const hasilBody = document.getElementById('hasilBody');
    const newRow = hasilBody.insertRow();
    newRow.innerHTML = `
        <td>${nama}</td>
        <td>${matkul}</td>
        <td>${grade}</td>
        <td>${nilaiRataRata}</td>
    `;
});
