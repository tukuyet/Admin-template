
const form = document.querySelector("form")
const one = document.querySelector("#one-medicine")
const two = document.querySelector("#two-medicine")
const three = document.querySelector("#three-medicine")
const four = document.querySelector("#four-medicine")
const fire = document.querySelector("#fire-medicine")
const fires = document.querySelector("#fires-medicine")
const six = document.querySelector("#six-medicine")
const seven = document.querySelector("#seven-medicine")
const eight = document.querySelector("#eight-medicine")
const nine = document.querySelector("#nine-medicine")
const ten = document.querySelector("#ten-medicine")
const tenn = document.querySelector("#tenn-medicine")
const tennn = document.querySelector("#tennn-medicine")
const tennnnn = document.querySelector("#tennnnn-medicine")
const tennnn = document.querySelector("#tennnn-medicine")
const tennnnnn = document.querySelector("#tennnnnn-medicine")
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
fires.addEventListener('change', function () {
    if (fires.value === "") {
        error[5].innerHTML = "Mời bạn nhập vào trường này !!"
        fires.classList.add("error")
    } else {
        error[5].innerHTML = ""
        fires.classList.remove("error")
    }
})
six.addEventListener('change', function () {
    if (six.value === "") {
        error[6].innerHTML = "Mời bạn nhập vào trường này !!"
        six.classList.add("error")
    } else {
        error[6].innerHTML = ""
        six.classList.remove("error")
    }
})
seven.addEventListener('change', function () {
    if (seven.value === "") {
        error[7].innerHTML = "Mời bạn nhập vào trường này !!"
        seven.classList.add("error")
    } else {
        error[7].innerHTML = ""
        seven.classList.remove("error")
    }
})
eight.addEventListener('change', function () {
    if (eight.value === "") {
        error[8].innerHTML = "Mời bạn nhập vào trường này !!"
        eight.classList.add("error")
    } else {
        error[8].innerHTML = ""
        eight.classList.remove("error")
    }
})
nine.addEventListener('change', function () {
    if (nine.value === "") {
        error[9].innerHTML = "Mời bạn nhập vào trường này !!"
        nine.classList.add("error")
    } else {
        error[9].innerHTML = ""
        nine.classList.remove("error")
    }
})
ten.addEventListener('change', function () {
    if (ten.value === "") {
        error[10].innerHTML = "Mời bạn nhập vào trường này !!"
        ten.classList.add("error")
    } else {
        error[10].innerHTML = ""
        ten.classList.remove("error")
    }
})
tenn.addEventListener('change', function () {
    if (tenn.value === "") {
        error[11].innerHTML = "Mời bạn nhập vào trường này !!"
        tenn.classList.add("error")
    } else {
        error[11].innerHTML = ""
        tenn.classList.remove("error")
    }
})
tennn.addEventListener('change', function () {
    if (tennn.value === "") {
        error[12].innerHTML = "Mời bạn nhập vào trường này !!"
        tennn.classList.add("error")
    } else {
        error[12].innerHTML = ""
        tennn.classList.remove("error")
    }
})
tennnn.addEventListener('change', function () {
    if (tennnn.value === "") {
        error[13].innerHTML = "Mời bạn nhập vào trường này !!"
        tennnn.classList.add("error")
    } else {
        error[13].innerHTML = ""
        tennnn.classList.remove("error")
    }
})
tennnnn.addEventListener('change', function () {
    if (tennnnn.value === "") {
        error[14].innerHTML = "Mời bạn nhập vào trường này !!"
        tennnnn.classList.add("error")
    } else {
        error[14].innerHTML = ""
        tennnnn.classList.remove("error")
    }
})
tennnnnn.addEventListener('change', function () {
    if (tennnnnn.value === "") {
        error[15].innerHTML = "Mời bạn nhập vào trường này !!"
        tennnnnn.classList.add("error")
    } else {
        error[15].innerHTML = ""
        tennnnnn.classList.remove("error")
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
    if (fires.value === "") {
        error[5].innerHTML = "Mời bạn nhập vào trường này !!"
        fires.classList.add("error")
    } else {
        error[5].innerHTML = ""
        fires.classList.remove("error")
    }
    if (six.value === "") {
        error[6].innerHTML = "Mời bạn nhập vào trường này !!"
        six.classList.add("error")
    } else {
        error[6].innerHTML = ""
        six.classList.remove("error")
    }
    if (seven.value === "") {
        error[7].innerHTML = "Mời bạn nhập vào trường này !!"
        seven.classList.add("error")
    } else {
        error[7].innerHTML = ""
        seven.classList.remove("error")
    }
    if (eight.value === "") {
        error[8].innerHTML = "Mời bạn nhập vào trường này !!"
        eight.classList.add("error")
    } else {
        error[8].innerHTML = ""
        eight.classList.remove("error")
    }
    if (nine.value === "") {
        error[9].innerHTML = "Mời bạn nhập vào trường này !!"
        nine.classList.add("error")
    } else {
        error[9].innerHTML = ""
        nine.classList.remove("error")
    }
    if (ten.value === "") {
        error[10].innerHTML = "Mời bạn nhập vào trường này !!"
        ten.classList.add("error")
    } else {
        error[10].innerHTML = ""
        ten.classList.remove("error")
    }
    if (tenn.value === "") {
        error[11].innerHTML = "Mời bạn nhập vào trường này !!"
        tenn.classList.add("error")
    } else {
        error[11].innerHTML = ""
        tenn.classList.remove("error")
    }
    if (tennn.value === "") {
        error[12].innerHTML = "Mời bạn nhập vào trường này !!"
        tennn.classList.add("error")
    } else {
        error[12].innerHTML = ""
        tennn.classList.remove("error")
    }
    if (tennnn.value === "") {
        error[13].innerHTML = "Mời bạn nhập vào trường này !!"
        tennnn.classList.add("error")
    } else {
        error[13].innerHTML = ""
        tennnn.classList.remove("error")
    }
    if (tennnnn.value === "") {
        error[14].innerHTML = "Mời bạn nhập vào trường này !!"
        tennnnn.classList.add("error")
    } else {
        error[14].innerHTML = ""
        tennnnn.classList.remove("error")
    }
    if (tennnnnn.value === "") {
        error[15].innerHTML = "Mời bạn nhập vào trường này !!"
        tennnnnn.classList.add("error")
    } else {
        error[15].innerHTML = ""
        tennnnnn.classList.remove("error")
    }

    if (one.value !== "" &&
        two.value !== "" &&
        three.value !== "" &&
        four.value !== "" &&
        fire.value !== "" &&
        fires.value !== "" &&
        six.value !== "" &&
        seven.value !== "" &&
        eight.value !== "" &&
        nine.value !== "" &&
        ten.value !== "" &&
        tenn.value !== "" &&
        tennn.value !== "" &&
        tennnn.value !== "" &&
        tennnnn.value !== "" &&
        tennnnnn.value !== ""
        ) {
        error.forEach((item) => {
            item.innerHTML = ""
        })
        one.classList.remove("error")
        two.classList.remove("error")
        three.classList.remove("error")
        four.classList.remove("error")
        fire.classList.remove("error")
        fires.classList.remove("error")
        six.classList.remove("error")
        seven.classList.remove("error")
        nine.classList.remove("error")
        eight.classList.remove("error")
        ten.classList.remove("error")
        tenn.classList.remove("error")
        tennn.classList.remove("error")
        tennnn.classList.remove("error")
        tennnnn.classList.remove("error")
        tennnnnn.classList.remove("error")

        alert('Thêm sản phẩm thành công');

        one.value = ""
        two.value = ""
        three.value = ""
        four.value = ""
        fire.value = ""
        fires.value = ""
        six.value = ""
        seven.value = ""
        eight.value = ""
        nine.value = ""
        ten.value = ""
        tenn.value = ""
        tennn.value = ""
        tennnn.value = ""
        tennnnn.value = ""
        tennnnnn.value = ""
    }
    return true
})
