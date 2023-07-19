

const capturaEmail = () => {
    let input = document.querySelector("#email").value

    localStorage.setItem('email', JSON.stringify(input))

    window.location.href = 'thanks.html'

    // paginaSucesso()
}


const paginaSucesso = () => {
   
    span = document.querySelector('#span')

    span.innerHTML = `
        <span>
            ${localStorage.getItem('email').replace(/["]/g, '')} 
        </span>
    `    
}

paginaSucesso()

