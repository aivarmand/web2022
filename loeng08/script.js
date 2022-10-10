let nuppElement = document.getElementById('nupp')
let nimiElement = document.getElementById('nimi')
let hinnangElement = document.getElementById('hinnang')
let piltElemet = document.getElementById('pilt')

nuppElement.addEventListener('click', hindaNime);

function hindaNime() {
   let nimePikkus = nimiElement.value.length;
   hinnangElement.style.display = 'inline';
   piltElemet.style.display = 'none';

    if (nimePikkus == 0) {
        hinnangElement.style.display = 'none';
    } else if (nimePikkus < 6) {
        hinnangElement.innerHTML = "Küll sul on ilus lühike nimi!";
        piltElemet.style.display = 'inline';
    } else {
        hinnangElement.innerHTML = "Küll sul on suurepärane pikk nimi!";
    }
}