let latitude = 0;
let longitude = 0;

const btn = document.querySelector(".text__container button")

btn.addEventListener("click", () => {
    const textValue = document.querySelector(".text__container textarea").value
    
    const a = (position) => {
        longitude = position.coords.longitude;
        latitude = position.coords.latitude;
        let date = new Date()
        let currentDate = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        const postItem = `<div class="postItem"><p>${textValue}</p><p>[${longitude}, ${latitude}]<p>${currentDate}</p></p></div>`
        const post = document.querySelector(".post__container")
        post.insertAdjacentHTML("afterbegin", postItem)
      };
    const b = (error) => {
        const position = prompt("укажите геолокацию")
        let date = new Date()
        let currentDate = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        const postItem = `<div class="postItem"><p>${textValue}</p><p>[${position}]<p>${currentDate}</p></p></div>`
        const post = document.querySelector(".post__container")
        post.insertAdjacentHTML("afterbegin", postItem)
      };
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(a, b);
      }
})