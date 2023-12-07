class Triangle {

    hitungLuas(baseId, heightId) {

        document.getElementById("triangle-area-button").addEventListener("click", (event) => {

            event.preventDefault();

            let hasil;

            let base = document.getElementById(baseId).value;
            let height = document.getElementById(heightId).value;

            base = Number(base);
            height = Number(height);


            if (base !== 0 && height !== 0) {
                hasil = (base * height) / 2;
            } else {

                if (base === 0) {
                    alert(`Nilai Alas tidak valid!`)
                } else if (height === 0) {
                    alert(`Nilai Tinggi tidak valid!`)
                }
            }

            alert(`Luas segitiga ${hasil} cm²`)
        });
    }

    hitungKeliling(id1, id2, id3) {

        document.getElementById("triangle-perimeter-button").addEventListener("click", (event) => {
            event.preventDefault();

            let sisi1 = document.getElementById(id1).value;
            let sisi2 = document.getElementById(id2).value;
            let sisi3 = document.getElementById(id3).value;

            sisi1 = Number(sisi1);
            sisi2 = Number(sisi2);
            sisi3 = Number(sisi3);

            let hasil

            if (sisi1 !== 0 && sisi2 !== 0 && sisi3 !== 0) {
                hasil = sisi1 + sisi2 + sisi3;

            } else {
                if (sisi1 === 0) {
                    outputK.textContent = "Nilai Sisi ke-1 tidak valid!";
                } else if (sisi2 === 0) {
                    outputK.textContent = "Nilai Sisi ke-2 tidak valid!";
                } else if (sisi3 === 0) {
                    outputK.textContent = "Nilai Sisi ke-3 tidak valid!";
                }
            }

            alert(`Keliling segitiga ${hasil} cm`)
        });

    }

    resetPerimeter(id) {
        document.getElementById(id).addEventListener("click", (event) => {
            event.preventDefault();

            document.getElementById("input-S1").value = "";
            document.getElementById("input-S2").value = "";
            document.getElementById("input-S3").value = "";
        })
    }

    resetArea(id) {
        document.getElementById(id).addEventListener("click", (event) => {
            event.preventDefault();

            document.getElementById("input-heights").value = "";
            document.getElementById("input-base").value = "";
        })
    }
}

const action = new Triangle();
action.hitungLuas("input-base", "input-heights");
action.hitungKeliling("input-S1", "input-S2", "input-S3");
action.resetPerimeter("button-perimeter-reset")
action.resetArea("button-area-reset")


document.addEventListener('DOMContentLoaded', function () {

    const tabs = document.querySelectorAll('.navigation a');
    tabs.forEach(tab => {
        tab.addEventListener('click', switchTab);
    });


    tabs[0].click();
});

function switchTab(event) {
    event.preventDefault();

    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.style.display = 'none';
    });


    const tabs = document.querySelectorAll('.navigation a');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    const clickedTab = event.target;
    clickedTab.classList.add('active');

    const tabId = clickedTab.getAttribute('href').substring(1);
    const activeTabContent = document.getElementById(tabId);
    activeTabContent.style.display = 'block';

    if (tabId === 'luas') {
        action.hitungLuas("input-base", "input-heights");
    } else if (tabId === 'keliling') {
        action.hitungKeliling("input-S1", "input-S2", "input-S3");
    }
}