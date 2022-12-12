window.onload = () => {
    const payload = localStorage.getItem("payload");
    const payload_parse = JSON.parse(payload)

    const intro = document.getElementById("intro")
    intro.innerText = `${payload_parse.nickname}님 안녕하세요!`


    let navbarRight = document.getElementById("navbar-right")
    let newLi = document.createElement("li")
    newLi.setAttribute("class", 'nav-item')

    let logoutBtn = document.createElement("button")
    logoutBtn.setAttribute("class", "nav-link btn")
    logoutBtn.innerText = "로그아웃"
    logoutBtn.setAttribute("onClick", "handdleLogout()")

    newLi.appendChild(logoutBtn)

    navbarRight.appendChild(newLi)
}


window.onload = async function loadFooddetail(food_id) {
    food = await getFooddetail()
    console.log(food)
}



