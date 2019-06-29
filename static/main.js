const name = document.querySelector('#account-name');
const button = document.querySelector('#create-account');

async function devourSouls() {
  const response = await fetch(`/add/${name.value}`);
  
  if (response.ok) {
    alert(`Your soul is our puppet, ${name.value} 😈`);
  }
  else {
    alert(`You live to see sunlight another day, ${name.value} 👿`);
  }
}

button.addEventListener('click', devourSouls);