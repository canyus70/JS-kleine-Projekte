function horoskop(){
    const input = document.getElementById("inputId").value.toLowerCase();
    console.log(input);

    const sternzeichen ={
        jan: {name:"Aquaris: Breaking the rules is not always a bad thing—especially if the rules limit your creativity.", img:"jan.png"},

        feb: {name:"Pisces: Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great...", img:"feb.png"},

        mar: {name:"Aries: Today your patience might be tested when one or more of your projects gets put on hold by someone… ", img:"mar.png"},

        apr:{name: "Taures: Your intense energy makes you a great candidate for a leadership position right now, so if you are…", img:"apr.png"},

        may:{ name:"Gemini: If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…", img:"may.png"},

        jun:{name: "Cancer: Too many different elements in your life are overlapping with each other right now—and it's your…", img:"jun.png"},

        jul: {name:"Leo: The issues you'll be dealing with today are very complicated ones—you will have to navigate your…", img:"jul.png"},

        aug:{ name:"Virgo: You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…", img:"aug.png"},

        sep:{name: "Libra: Pick a cultural event that's coming up and get some tickets for it today.", img:"sep.png"},

        oct: {name:"Scorpio: Someone will challenge a belief that you've held for a very long time today—and they will say an…", img:"oct.png"},

        nov:{ name:"Sagittarius: Someone in your life needs to step up and take on more responsibility—and you need to tell them to....", img:"nov.png"},

        dez: {name:"Capricorn: Breaking the rules is not always a bad thing—especially if the rules limit your creativity.", img:"dec.png"}
    }

    const zeigeErgebnis= document.getElementById("zeigeErgebnisId");
    const horosBild = document.getElementById("horosBildId")

    if (sternzeichen[input]) {
        const { name, img} = sternzeichen[input];
        zeigeErgebnis.innerText = `Dein Sternzeichen ist ${sternzeichen[input]}.`;
        horosBild.src = `JS kleine Projekte/JS Einführung: Project Lvl 1.1/assets/img/${img}`;
    } else {
        zeigeErgebnis.innerText = "Bitte gebe einen gültgen Monat ein."
    }

}