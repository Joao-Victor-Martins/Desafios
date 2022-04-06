

function adicionar(add) {
    let input = document.getElementById("tarefas")
    let res = document.getElementById("list")
    input = localStorage.setItem("valores", input.value)

    let task = localStorage.getItem("valores")

    return add = res.innerHTML = task

}

function reload() {
    localStorage.getItem()
}