(function () {

    const images = ["1",
        "2",
        "4",
        "6",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15"
    ]

    const buttons = document.querySelectorAll(".btn")

    const imgContainer = document.querySelector(".img-container")

    let counter = 0

    buttons.forEach(function (button) {
        button.addEventListener("click", function (e) {
            if (button.classList.contains('btn-left')) {
                counter--
                if (counter < 0) {
                    counter = images.length - 1
                }
                imgContainer.style.background = `url('images/${images[counter]}.jpg') center/cover fixed no-repeat`

            }

            if (button.classList.contains('btn-right')) {
                counter++
                if (counter > images.length - 1) {
                    counter = 0
                }
                imgContainer.style.background = `url('images/${images[counter]}.jpg') center/cover fixed no-repeat`
            }
        })
    })




})()