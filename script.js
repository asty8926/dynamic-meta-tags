let twitterTitle = document.createElement("meta")
twitterTitle.setAttribute("property", "twitter:title")
twitterTitle.setAttribute("content", "Twitter Title")

let twitterCard = document.createElement("meta")
twitterCard.setAttribute("name", "twitter:card")
twitterCard.setAttribute("content", "app")

let twitterDesc = document.createElement("meta")
twitterDesc.setAttribute("name", "twitter:description")
twitterDesc.setAttribute("content", "Twitter Description")

let ogTitle = document.createElement("meta")
ogTitle.setAttribute("property", "og:title")
ogTitle.setAttribute("content", "OG Title")

let ogDesc = document.createElement("meta")
ogDesc.setAttribute("property", "og:description")
ogDesc.setAttribute("content", "OG Description")


document.head.appendChild(twitterTitle)
document.head.appendChild(twitterCard)
document.head.appendChild(twitterDesc)
document.head.appendChild(ogTitle)
document.head.appendChild(ogDesc)
