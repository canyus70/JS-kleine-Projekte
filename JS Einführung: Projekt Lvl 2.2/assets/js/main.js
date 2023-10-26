function trinkgeldrechner(){
    const rechnungValue = Number(document.getElementById("rechnungId").value);
    const anzahlperson = Number(document.getElementById("anzahlpersonId").value);
    const dropDown= Number(document.getElementById("dropDownId").value);

    let tringeldProzent;

    if (dropDown==="Schlechter Service"){
        tringeldProzent = 2;
    } else if (dropDown=== "Mittlerer Service"){
        tringeldProzent= 10;
    } else if (dropDown=== "Super Service"){
        tringeldProzent= 20;
    } 

    const trinkGeld =Number((rechnungValue * tringeldProzent)/100);
    const gesamtBetrag= Number(rechnungValue + trinkGeld);
    const betragProPerson = Number(gesamtBetrag/ anzahlperson);

    const endErgbnis = document.getElementById("result");
    endErgbnis.innerHTML = `<p>Trinkgeld: ${trinkGeld.toFixed(2)} €</p>
    <p>Gesamtbetrag: ${gesamtBetrag.toFixed(2)} €</p>
    <p>Betrag pro Person: ${betragProPerson.toFixed(2)} €</p>`;
}