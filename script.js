
const primeiroH1 = document.createElement("h1")

const x = document.querySelector("header")
x.appendChild(primeiroH1)

const textH1 = document.createTextNode('olá, esse é o h1 do header')

primeiroH1.appendChild(textH1)

// main        

const y = document.querySelector("main")
// primeira div do main
const div1 = document.createElement('div')
// primeiro h2 do main
const H2 = document.createElement("h2")
//

const texth2 = document.createTextNode('esse é o h2 do main')
H2.appendChild(texth2)
div1.appendChild(H2)

y.appendChild(div1)
// P da primeira div.
const novo_p = document.createElement("p")
const textoP = document.createTextNode('esse é o primeiro P do h2')

novo_p.appendChild(textoP)
div1.appendChild(novo_p)


// h3 da main</>

const div2 = document.createElement('div')
const h3 = document.createElement("h3")
const textoh3 = document.createTextNode('esse é o h3 do main')

h3.appendChild(textoh3)
div2.appendChild(h3)
y.appendChild(div2)

// P do H3

const P_h3 = document.createElement("p")
const textopH3 = document.createTextNode('esse é o P do h3')

P_h3.appendChild(textopH3)
div2.appendChild(P_h3)
