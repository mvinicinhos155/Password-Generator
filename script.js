const inputEl = document.querySelector("#password")
const UpperCaseCheckEl = document.querySelector("#uppercase-check")
const nuberChack = document.querySelector("#Number-check")
const symbolCheck = document.querySelector("#symbol-check")
const securityindicatorbar = document.querySelector("#security-indicator-bar")


let passwordLenghtEl = 16

function generatePassword() {


    let chars = "abcdefghijklmnopqrstuvwxyz"

    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numberChars = "123456789"
    const symbolChars = "!?@#$()[]"
    
    if(UpperCaseCheckEl.checked) {
        chars += upperCaseChars  
    } 
    
    if(nuberChack.checked) {
        chars += numberChars
      } 

      if(symbolCheck.checked) {
        chars += symbolChars 
      } 
    
    let password = ""

    for (let i = 0; i < passwordLenghtEl; i++) {
        const passwordrandom = Math.floor(Math.random() * chars.length)
        password += chars.substring(passwordrandom, passwordrandom + 1)
        }   


    
    inputEl.value = password  
    
    calculelateQuality()
    calculateFontSize()
}

    function calculelateQuality() {
        const percent = Math.round(
            (passwordLenghtEl / 64) * 25 +
             (UpperCaseCheckEl.checked ? 15 : 0) +
              (nuberChack.checked ? 25 : 0) +
               (symbolCheck.checked ? 35 : 0)
        )


        securityindicatorbar.style.width = `${percent}%`

        if (percent > 69){
            securityindicatorbar.classList.remove("critical")
            securityindicatorbar.classList.remove("warning")
            securityindicatorbar.classList.add("safe")
        } else if (percent > 50) {
            securityindicatorbar.classList.remove("critical")
            securityindicatorbar.classList.add("warning")
            securityindicatorbar.classList.remove("safe")
        }else {
             securityindicatorbar.classList.add("critical")
            securityindicatorbar.classList.remove("warning")
            securityindicatorbar.classList.remove("safe")  
        }
    
        if (percent >= 100) {
            securityindicatorbar.classList.add("completed")
        } else {
            securityindicatorbar.classList.remove("completed")
        }
    } 
    
    function calculateFontSize() {
        if (passwordLenghtEl > 45) {
            inputEl.classList.remove("font-sm")
            inputEl.classList.remove("font-xs")
            inputEl.classList.add("font-xxs")
        }else if (passwordLenghtEl > 32) {
            inputEl.classList.remove("font-sm")
            inputEl.classList.add("font-xs")
            inputEl.classList.remove("font-xxs")
        }else if (passwordLenghtEl > 22) {
            inputEl.classList.add("font-sm")
            inputEl.classList.remove("font-xs")
            inputEl.classList.remove("font-xxs")
        }else {
            inputEl.classList.remove("font-sm")
            inputEl.classList.remove("font-xs")
            inputEl.classList.remove("font-xxs")
        }
    }
function copy() {
    navigator.clipboard.writeText(inputEl.value)
}

const passwordLenght = document.querySelector("#password-lenght")
passwordLenght.addEventListener("input", function () {
    passwordLenghtEl = passwordLenght.value
    document.querySelector("#passaword-length-text").innerText = passwordLenghtEl
    generatePassword()
})
UpperCaseCheckEl.addEventListener("click", generatePassword)
nuberChack.addEventListener("click", generatePassword)
symbolCheck.addEventListener("click", generatePassword)

document.querySelector("#button").addEventListener("click", copy)
document.querySelector("#copy").addEventListener("click", copy)
document.querySelector("#renew").addEventListener("click", generatePassword)

generatePassword()