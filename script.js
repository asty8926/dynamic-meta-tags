let meta1 = document.createElement("meta")
meta1.setAttribute("property", "twitter:title")
meta1.setAttribute("content", "Testing")

let meta2 = document.createElement("meta")
meta2.setAttribute("name", "twitter:card")
meta2.setAttribute("content", "app")

let meta3 = document.createElement("meta")
meta3.setAttribute("name", "twitter:description")
meta3.setAttribute("content", "Test Description")


document.head.appendChild(meta1)
document.head.appendChild(meta2)
document.head.appendChild(meta3)