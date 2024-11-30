
const $ = (el) => document.querySelector(el)

const imgBorder = $(".imgb")

imgBorder.addEventListener("click", () => {
    if (imgBorder.style.border == ""){
    imgBorder.style.border = "2px solid red"
    } else {
        imgBorder.style.border = ""
    }
})

let verificar = $("#verificar")

let resultado = $("#resultado")

verificar.addEventListener("click", () => {
    let sticker1 = Number($("#sticker1").value)
    let sticker2 = Number($("#sticker2").value)
    let sticker3 = Number($("#sticker3").value)

    let total = sticker1 + sticker2 + sticker3

    if (total < 10) {
        resultado.innerText = `Total de stickers: ${total}. Te faltan elegir ${10 - total} mas`
    } else if (total == 10) {
        resultado.innerText = `Total de stickers: ${total}. Haz completado la compra`
    } else if (total > 10) {
        resultado.innerText = `Total de stickers: ${total}. Tienes ${total - 10} demas`
    }
})


let ingresar = $("#ingresar")

let messagePassword = $("#messagePassword")

ingresar.addEventListener("click", () => {
    let digit1 = $("#digit1").value
    let digit2 = $("#digit2").value
    let digit3 = $("#digit3").value

    let password = digit1 + digit2 + digit3

    if (password == 911){
        messagePassword.innerText = `Password 1 correcto`
    } else if (password == 714){
        messagePassword.innerText = `Password 2 correcto`
    } else {
        messagePassword.innerText = `Password incorrecto`
    }
})
