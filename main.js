let email = []
let span = document.querySelector('#span')


const captura = () => {
    let input = document.querySelector('#email').value
    console.log(input)

    email.push(input)

    document.querySelector('#email').value = ''  

    window.location.href = 'thanks.html'
}


const enviarEmail = () => {
    
    span.innerHTML = `
        <span>${email}</span>
    `
}


const ok = () => {
    window.location.href='index.html'
}

enviarEmail()