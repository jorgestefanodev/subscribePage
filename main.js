let email = ""


const captura = () => {
        
    let input = document.querySelector('#email').value
    email = input
    
    document.querySelector('#email').value = ''  

    window.location.href = 'thanks.html'
}

console.log(email)

const enviarEmail = () => {
        let span = document.querySelector('#span')

        span.innerHTML = `
        <span>${email}</span>
        `  
    }   


const ok = () => {
    window.location.href='index.html'
}

enviarEmail()