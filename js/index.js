let Tips = document.querySelectorAll(".tip-btn")
let NpersonError = document.querySelector(".zero-error")
let PeopleField = document.getElementById("num-people")
restBTN = document.querySelector(".rest-btn")

restBTN.addEventListener("click", () => {
  document.getElementById("TipForPerson").innerText = "0.00"
  document.getElementById("TotalForPerson").innerText = "0.00"
  restBTN.style.cssText = "opacity: 0.2;"
  Tips.forEach(tip => {
    if (tip.classList.contains("active")) {
      tip.classList.remove("active")
    }
  })
})

PeopleField.addEventListener("focus", () => {
  PeopleField.addEventListener("keyup", () => {
    if (PeopleField.value === "" || PeopleField.value === "0") {
      PeopleField.style.cssText = "border: 1px solid hsl(0, 100%, 56%);"
      NpersonError.style.cssText = "opacity: 1;"
      restBTN.style.cssText = "opacity: 0.2;"
    } else {
      NpersonError.style.cssText = ""
      PeopleField.style.cssText = ""
      restBTN.style.cssText = "opacity: 1;"
    }
  })
})

function CustomCalcTip() {
  let Bill = parseInt(document.getElementById("bill").value)
  let Nperson = parseInt(document.getElementById("num-people").value)
  let tip = parseInt(document.getElementById("custom").value) / 100
  let TipNperson = Bill * tip / Nperson
  let BillNperson = Bill / Nperson
  let TotalNperson = TipNperson + BillNperson
  document.getElementById("TipForPerson").innerText = TipNperson.toFixed(2)
  document.getElementById("TotalForPerson").innerText = TotalNperson.toFixed(2)
}

function CalcTip() {
  let Bill = parseInt(document.getElementById("bill").value)
  let Nperson = parseInt(document.getElementById("num-people").value)
  for (let i = 0; i < Tips.length; i++) {
    Tips[i].addEventListener("click", (e) => {
      if (Tips[i].id === "custom") {
        CustomCalcTip()
      }
      Tips.forEach(t => {
        if (t.classList.contains("active")) {
          t.classList.remove("active")
        }
      })
      e.target.classList.add("active")
      let tip = parseInt(e.target.value) / 100
      let TipNperson = Bill * tip / Nperson
      let BillNperson = Bill / Nperson
      let TotalNperson = TipNperson + BillNperson
      document.getElementById("TipForPerson").innerText = TipNperson.toFixed(2)
      document.getElementById("TotalForPerson").innerText = TotalNperson.toFixed(2)
    })
  }
}

Tips.forEach(t => {
  t.addEventListener("click", () => {
    CalcTip()
  })
})