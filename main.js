
// Captura email na no input, salva no localStorage, redireciona pra página de confirmação
const capturaEmail = () => {
    let input = document.querySelector("#email").value

    localStorage.setItem('email', JSON.stringify(input))

    window.location.href = 'thanks.html'

}

// Resgata valor salvo no locaStorage e insere no span
const paginaSucesso = () => {
   
    span = document.querySelector('#span')

    span.innerHTML = `
        <span>
            ${localStorage.getItem('email').replace(/["]/g, '')} 
        </span>
    `    
}

paginaSucesso()

