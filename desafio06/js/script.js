


function adicionar(add) {
    let input = document.getElementById("tarefas")
    let res = document.getElementById("list")
    input = localStorage.setItem("valores", input.value)

    let task = localStorage.getItem("valores")

    return res.innerHTML = task

}
