import AnimaNumeros from './anima-numeros';

export default function fetchAnimals(url, target) {
  const numerosGrid = document.querySelector(target);
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  function fillAnimal(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function animaNumbers() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  async function createAnimals() {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      animaisJSON.forEach((animal) => fillAnimal(animal));
      animaNumbers();
    } catch (erro) {
      console.log(erro);
    }
  }

  return createAnimals();
}
