// creating hero

const $btn = document.getElementById("btn-kick");
const character = {
  name: "Pickachu",
  defaultHP: 100,
  damageHP: 90,
  elHP: document.getElementById("health-character")
};

const enemy = {
  name: "Charmander",
  defaultHP: 100,
  damageHP: 100,
    
};

$btn.addEventListener("click", function() {
  console.log("Kick");
});

function init() {
  console.log("Start game!");
  renderHPLife(character);
  renderProgressbarHP(enemy);
}

// show current lifepoints

function renderHPLife(person) {
  person.elHP.innerText = person.damageHP + " / " + person.defaultHP;
}

function renderProgressbarHP(person) {
  person.elProgressbar.style.width = person.damageHP + "%";
}

function renderHP(person) {
  renderHPLife(person);
  renderProgressbarHP(person);
}

// supa kika

function changeHP(count, person) {
  if (person.damageHP<count) {
      person.damageHP=0;
      alert('Poor '+ person.name + ' lost!');
      $btn.disabled=true;
  }else{
      person.damageHP-=count;
  }
}

$btn.addEventListener("click", function() {
  console.log("kick");
  changeHP(20, character);
  changeHP(20, enemy);
});

$btn.addEventListener("click", function() {
  console.log("kick");
  changeHP(random(20), character);
  changeHP(random(20), enemy);
});

function random(num) {
  return Math.ceil(Math.random() * num);
}

init();
