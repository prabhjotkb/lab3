let email= [
    {
        pic: "https://robohash.org/suntdoloresrepellendus.bmp?size=50x50&set=set1",
        name: "Cleopatra Owtram",
        subject: "visualize real-time web services",
        body: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
      }, 
      {
        pic: "https://robohash.org/istenostrumratione.bmp?size=50x50&set=set1",
        name: "Janella Mendel",
        subject: "utilize collaborative channels",
        body: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
      }
    ];


  fetch('https://my.api.mockaroo.com/email.json?key=9020dfd0&qty=2')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    email=myJson;
    render();
  });

  function render()
  {
  const htmlSnippet = email.map(email=>`
  <div id="list" class="pure-u-1">
        <div class="email-item email-item-selected pure-g">
            <div class="pure-u">
                <img width="64" height="64" alt="Tilo Mitra&#x27;s avatar" class="email-avatar" src="${email.pic}">
            </div>

            <div class="pure-u-3-4">
                <h5 class="email-name">${email.name}</h5>
                <h4 class="email-subject">${email.subject}</h4>
                <p class="email-desc">
                    ${email.body}
                </p>
            </div>
        </div>
        </div>
  `).join("");

  const main=document.querySelector("#main");
  main.innerHTML=htmlSnippet;
}