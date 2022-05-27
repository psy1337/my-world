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
      sun.classList.remove("sun-rise")
      sun.classList.add("sun-fall")
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
      sun.classList.remove("sun-fall")
      sun.classList.add("sun-rise")
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
  const apple3 = document.querySelector("#apple3")
  apple3.addEventListener("click", () => {
    apple3.classList.add("apple3-fall")
  })
  const apple2 = document.querySelector("#apple2")
  apple2.addEventListener("click", () => {
    apple2.classList.add("apple2-fall")
  })
  const apple1 = document.querySelector("#apple1")
  apple1.addEventListener("click", () => {
    apple1.classList.add("apple1-fall")
  })
})
