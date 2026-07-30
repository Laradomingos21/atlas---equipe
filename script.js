// ===================================================
// TELA DE CARREGAMENTO (LOADER)
// Quando a página termina de carregar tudo (imagens, fontes etc.),
// esperamos 1,9 segundo e depois escondemos a tela preta com "Atlas".
// ===================================================
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('done');
  }, 1900);
});

// ===================================================
// ANIMAÇÃO "APARECER AO ROLAR" (scroll reveal)
// Pega todos os elementos com a classe "reveal" (que começam invisíveis)
// e fica observando: quando 15% do elemento entra na tela,
// adiciona a classe "in", que o CSS usa para mostrá-lo suavemente.
// Depois de aparecer uma vez, para de observar (não repete).
// ===================================================
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('in');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
reveals.forEach(el => obs.observe(el));

// ===================================================
// EFEITO DE PROFUNDIDADE (PARALLAX) NA BOLHA DE LUZ DO HERO
// Conforme o mouse se move pela tela, a bolha de luz de fundo
// se desloca um pouquinho na direção contrária, criando
// sensação de profundidade.
// ===================================================
const glow = document.querySelector('.hero-glow');
window.addEventListener('mousemove', (e) => {
  if(!glow) return; // se não existir esse elemento na página, não faz nada
  const x = (e.clientX / window.innerWidth - 0.5) * 30;
  const y = (e.clientY / window.innerHeight - 0.5) * 30;
  glow.style.transform = `translate(${x}px, ${y}px)`;
});

// ===================================================
// ROTAÇÃO SUTIL DE UM "NÓ" (ELEMENTO COM ID "atlasKnot")
// Se existir um elemento com esse id na página, ele gira devagar
// conforme a pessoa rola a tela para baixo.
// Obs: esse elemento não aparece no HTML atual, então esse trecho
// fica "adormecido" até que ele seja adicionado em algum lugar.
// ===================================================
const knot = document.getElementById('atlasKnot');
window.addEventListener('scroll', () => {
  if(!knot) return;
  const scrolled = window.scrollY;
  const rotate = (scrolled * 0.02) % 360;
  knot.style.transformOrigin = '200px 240px';
  knot.style.transform = `rotate(${rotate * 0.3}deg)`;
});

// ===================================================
// BOTÃO DE MENU MOBILE (versão simples/provisória)
// Ao clicar no botão "Menu" (que só aparece no celular),
// o código passa por todos os links do menu e rola a tela
// até o último deles. É um comportamento bem básico —
// ainda não abre/fecha um menu de verdade.
// ===================================================
document.querySelector('.menu-toggle')?.addEventListener('click', () => {
  document.querySelectorAll('.nav-links a').forEach((a) => {
    a.scrollIntoView();
  });
});
