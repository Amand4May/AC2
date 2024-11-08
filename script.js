function cadastrarCard() {
  const tituloCard = document.getElementById('tituloCard').value;
  if (tituloCard === '') return;

  const cardContainer = document.getElementById('cardContainer');

  const card = document.createElement('div');
  card.className = 'col-md-4 mb-4';
  card.innerHTML = `
      <div class="card">
          <img src="https://picsum.photos/300/200?random=${Math.floor(Math.random() * 1000)}" class="card-img-top" alt="Imagem do produto">
          <div class="card-body">
              <h5 class="card-title">${tituloCard}</h5>
              <button class="btn btn-danger" onclick="apagarCard(this)">Apagar</button>
          </div>
      </div>
  `;

  cardContainer.appendChild(card);

  document.getElementById('tituloCard').value = '';
}

function apagarCard(button) {
  const card = button.closest('.col-md-4');
  card.remove();
}

function apagarTodos() {
  const cardContainer = document.getElementById('cardContainer');
  cardContainer.innerHTML = '';
}
