
const captura = () => {
    let input = document.querySelector('#email').value
    let span = document.querySelector('#span')

   document.querySelector('#email').value = ''  

   window.location.href = 'thanks.html'

//    span.innerHTML = `
//         <span>${input}</span>
//     `
}


const ok = () => {
    window.location.href='index.html'
}