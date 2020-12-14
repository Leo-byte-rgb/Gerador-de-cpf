import geraCPF from './modules/GeraCPF';
import './assets/css/style.css';

    

  const el = document.querySelector('.Button');
  el.addEventListener('click', function(){gerar()});
 
  function gerar(){
    const gera = new geraCPF();
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = `CPF GERADO: ${gera.geraNovoCpf()}`;
  };