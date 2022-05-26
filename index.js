document.addEventListener("DOMContentLoaded", () => {
  const sun = document.querySelector("#sun")
  console.log(sun)
  sun.addEventListener("click", () => {
    // clicking the sun
    if (sun.classList.contains("day")) {
      sun.classList.remove("day")
      sun.classList.add("night")
      world.classList.remove("world-day")
      world.classList.add("world-night")
      window1.classList.remove("window-day")
      window1.classList.add("window-night")
      window2.classList.remove("window-day")
      window2.classList.add("window-night")
      star1.classList.remove("star-day")
      star1.classList.add("star-night")
      star2.classList.remove("star-day")
      star2.classList.add("star-night")
      star3.classList.remove("star-day")
      star3.classList.add("star-night")
      // clicking the moon
    } else if (sun.classList.contains("night")) {
      sun.classList.remove("night")
      sun.classList.add("day")
      world.classList.remove("world-night")
      world.classList.add("world-day")
      window1.classList.remove("window-night")
      window1.classList.add("window-day")
      window2.classList.remove("window-night")
      window2.classList.add("window-day")
      star1.classList.remove("star-night")
      star1.classList.add("star-day")
      star2.classList.remove("star-night")
      star2.classList.add("star-day")
      star3.classList.remove("star-night")
      star3.classList.add("star-day")
    }
  })

  const door = document.querySelector("#door")
  door.addEventListener("click", () => {
    if (door.classList.contains("door-open")) {
      door.classList.remove("door-open")
      door.classList.add("door-closed")
    } else if (door.classList.contains("door-closed")) {
      door.classList.remove("door-closed")
      door.classList.add("door-open")
    }
  })
})
