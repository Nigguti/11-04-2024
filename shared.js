function Contador() {
    if(localStorage.getItem('conte')) {

        var conte = JSON.parse(localStorage.getItem('conte'));

        conte.count++

        conte.lastVisit = new Date().toLocaleDateString('pt-Br', {
          dia: "numeric",
          mes: "numeric",
          ano: "numeric",
          hora: "numeric",
          minuto: "numeric"  
        });

        localStorage.setItem('conte', JSON.stringify(conte));    
    } else {
        var conte = {
            count: 1,
            lastVisit: new Date().toLocaleDateString('pt-BR', {
                dia: "numeric",
                mes: "numeric",
                ano: "numeric",
                hora: "numeric",
                minuto: "numeric" 
            })
        };
    }
    localStorage.setItem('conte', JSON.stringify(conte));
}

function exibirFooter() {
    
    var conte = JSON.parse(localStorage.getItem('conte'));
    
    var paragrafo = document.createElement('p');
    paragrafo.textContent = `Esta página foi visitada ${conte.count} vezes. A última visita foi: ${conte.lastVisit}`;
   
    var footer = document.querySelector('footer');
    footer.appendChild(paragrafo);
}

Contador();

exibirFooter();