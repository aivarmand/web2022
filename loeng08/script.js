let nuppElement = document.getElementById('nupp')
let nimiElement = document.getElementById('nimi')
let hinnangElement = document.getElementById('hinnang')

nuppElement.addEventListener('click', hindaNime);

function hindaNime() {
   let nimePikkus = nimiElement.value.length;
   hinnangElement.style.display = 'inline';
   console.log(nimePikkus);
    if (nimePikkus == 0) {
        hinnangElement.innerHTML = "";
    } else if (nimePikkus < 6) {
        hinnangElement.innerHTML = "Küll sul on ilus lühuke nimi!";
    } else {
        hinnangElement.innerHTML = "Küll sul on suurepärane pikk nimi!";
    }
}