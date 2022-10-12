let uudised = [
    {
        pildiUrl: 'pilt01.jpg',
        pealkiri: 'Tourist hit by train while trying to get into ‘train street’',
        klipp: 'He suffered very minor injuries and left the area before receiving medical treatment. After the accident, the train was brought to a halt causing traffic congestion.',
        viideUudisele: 'uudis01.html',
    },
    {
        pildiUrl: 'pilt02.jpg',
        pealkiri: 'International partners commit to help VN realising net zero emissions',
        klipp: 'The United Nations and development partners, during discussions with Vietnamese ministries and sectors, expressed their willingness to support Việt Nam in achieving the goal of net zero emission and energy transition.',
        viideUudisele: 'uudis02.html',
    },
    {
        pildiUrl: 'pilt03.jpg',
        pealkiri: 'Vietnamese Film Week celebrates national days',
        klipp: 'A series of Vietnamese films will be screened at Vietnamese Film Week nationwide as part of celebrating the 77th August Revolution (August 19) and National Day (September) holidays.',
        viideUudisele: 'uudis03.html',
    }
];

let uudisedElement = document.querySelector('#uudised');
for (let i = 0; i < uudised.length; i++) {
    let uudisElement = document.createElement('div');
    uudisElement.classList = ['uudis'];

    let pildiElement = document.createElement('img');
    pildiElement.src = uudised[i].pildiUrl;
    uudisElement.appendChild(pildiElement);

    let pealkiriElement = document.createElement('h2');
    pealkiriElement = uudised[i].pealkiri;
    uudisElement.appendChild(pealkiriElement);

    uudisedElement.appendChild(uudisElement);
}