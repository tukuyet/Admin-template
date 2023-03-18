// ins


const form = document.querySelector("form")
const one = document.querySelector("#one-ins")
const two = document.querySelector("#two-ins")
const three = document.querySelector("#three-ins")
const four = document.querySelector("#four-ins")
const fire = document.querySelector("#five-ins")
const six = document.querySelector("#six-ins")
const seven = document.querySelector("#seven-ins")
const eight = document.querySelector("#eight-ins")
const nine = document.querySelector("#nine-ins")
const ten = document.querySelector("#ten-ins")
const tenn = document.querySelector("#tenn-ins")
const error = document.querySelectorAll(".text-error")


one.addEventListener('change', function () {
    console.log(1)
    if (one.value === "") {
        error[0].innerHTML = "Mời bạn nhập vào trường này !!"
        one.classList.add("error")
    } else {
        error[0].innerHTML = ""
        one.classList.remove("error")
    }
})
two.addEventListener('change', function () {
    if (two.value === "") {
        error[1].innerHTML = "Mời bạn nhập vào trường này !!"
        two.classList.add("error")
    } else {
        error[1].innerHTML = ""
        two.classList.remove("error")
    }
})
three.addEventListener('change', function () {
    if (three.value === "") {
        error[2].innerHTML = "Mời bạn nhập vào trường này !!"
        three.classList.add("error")
    } else {
        error[2].innerHTML = ""
        three.classList.remove("error")
    }
})
four.addEventListener('change', function () {
    if (four.value === "") {
        error[3].innerHTML = "Mời bạn nhập vào trường này !!"
        four.classList.add("error")
    } else {
        error[3].innerHTML = ""
        four.classList.remove("error")
    }
})
fire.addEventListener('change', function () {
    if (fire.value === "") {
        error[4].innerHTML = "Mời bạn nhập vào trường này !!"
        fire.classList.add("error")
    } else {
        error[4].innerHTML = ""
        fire.classList.remove("error")
    }
})
six.addEventListener('change', function () {
    if (six.value === "") {
        error[5].innerHTML = "Mời bạn nhập vào trường này !!"
        six.classList.add("error")
    } else {
        error[5].innerHTML = ""
        six.classList.remove("error")
    }
})
seven.addEventListener('change', function () {
    if (seven.value === "") {
        error[6].innerHTML = "Mời bạn nhập vào trường này !!"
        seven.classList.add("error")
    } else {
        error[6].innerHTML = ""
        seven.classList.remove("error")
    }
})
eight.addEventListener('change', function () {
    if (eight.value === "") {
        error[7].innerHTML = "Mời bạn nhập vào trường này !!"
        eight.classList.add("error")
    } else {
        error[7].innerHTML = ""
        eight.classList.remove("error")
    }
})
nine.addEventListener('change', function () {
    if (nine.value === "") {
        error[8].innerHTML = "Mời bạn nhập vào trường này !!"
        nine.classList.add("error")
    } else {
        error[8].innerHTML = ""
        nine.classList.remove("error")
    }
})
ten.addEventListener('change', function () {
    if (ten.value === "") {
        error[9].innerHTML = "Mời bạn nhập vào trường này !!"
        ten.classList.add("error")
    } else {
        error[9].innerHTML = ""
        ten.classList.remove("error")
    }
})
tenn.addEventListener('change', function () {
    if (tenn.value === "") {
        error[10].innerHTML = "Mời bạn nhập vào trường này !!"
        tenn.classList.add("error")
    } else {
        error[10].innerHTML = ""
        tenn.classList.remove("error")
    }
})

form.addEventListener("submit", function (e) {
    e.preventDefault()
    if (one.value === "") {
        error[0].innerHTML = "Mời bạn nhập vào trường này !!"
        one.classList.add("error")
    } else {
        error[0].innerHTML = ""
        one.classList.remove("error")
    }
    if (two.value === "") {
        error[1].innerHTML = "Mời bạn nhập vào trường này !!"
        two.classList.add("error")
    } else {
        error[1].innerHTML = ""
        two.classList.remove("error")
    }
    if (three.value === "") {
        error[2].innerHTML = "Mời bạn nhập vào trường này !!"
        three.classList.add("error")
    } else {
        error[2].innerHTML = ""
        three.classList.remove("error")
    }
    if (four.value === "") {
        error[3].innerHTML = "Mời bạn nhập vào trường này !!"
        four.classList.add("error")
    } else {
        error[3].innerHTML = ""
        four.classList.remove("error")
    }
    if (fire.value === "") {
        error[4].innerHTML = "Mời bạn nhập vào trường này !!"
        fire.classList.add("error")
    } else {
        error[4].innerHTML = ""
        fire.classList.remove("error")
    }
    if (six.value === "") {
        error[5].innerHTML = "Mời bạn nhập vào trường này !!"
        six.classList.add("error")
    } else {
        error[5].innerHTML = ""
        six.classList.remove("error")
    }
    if (seven.value === "") {
        error[6].innerHTML = "Mời bạn nhập vào trường này !!"
        seven.classList.add("error")
    } else {
        error[6].innerHTML = ""
        seven.classList.remove("error")
    }
    if (eight.value === "") {
        error[7].innerHTML = "Mời bạn nhập vào trường này !!"
        eight.classList.add("error")
    } else {
        error[7].innerHTML = ""
        eight.classList.remove("error")
    }
    if (nine.value === "") {
        error[8].innerHTML = "Mời bạn nhập vào trường này !!"
        nine.classList.add("error")
    } else {
        error[8].innerHTML = ""
        nine.classList.remove("error")
    }
    if (ten.value === "") {
        error[9].innerHTML = "Mời bạn nhập vào trường này !!"
        ten.classList.add("error")
    } else {
        error[9].innerHTML = ""
        ten.classList.remove("error")
    }
    if (tenn.value === "") {
        error[10].innerHTML = "Mời bạn nhập vào trường này !!"
        tenn.classList.add("error")
    } else {
        error[10].innerHTML = ""
        tenn.classList.remove("error")
    }

    if (one.value !== "" &&
        two.value !== "" &&
        three.value !== "" &&
        four.value !== "" &&
        fire.value !== "" &&
        six.value !== "" &&
        seven.value !== "" &&
        eight.value !== "" &&
        nine.value !== "" &&
        ten.value !== "" &&
        tenn.value !== ""
        ) {
        error.forEach((item) => {
            item.innerHTML = ""
        })
        one.classList.remove("error")
        two.classList.remove("error")
        three.classList.remove("error")
        four.classList.remove("error")
        fire.classList.remove("error")
        six.classList.remove("error")
        seven.classList.remove("error")
        nine.classList.remove("error")
        eight.classList.remove("error")
        ten.classList.remove("error")
        tenn.classList.remove("error")

        alert('Thêm sản phẩm thành công');

        one.value = ""
        two.value = ""
        three.value = ""
        four.value = ""
        fire.value = ""
        six.value = ""
        seven.value = ""
        eight.value = ""
        nine.value = ""
        ten.value = ""
        tenn.value = ""
    }
    return true
})