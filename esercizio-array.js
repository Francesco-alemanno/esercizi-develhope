// In questo esercizio dato un array di studenti:
// Utilizza forEach per stampare i nomi degli studenti.
// Utilizza find per trovare uno studente con un voto superiore a 90.
// Utilizza reduce per calcolare la media dei voti degli studenti.
// Utilizza map per creare un nuovo array contenente i nomi degli studenti in maiuscolo.
// Utilizza filter per trovare gli studenti con voti superiori a 85.

const studenti = [
    { nome: "Alice", voto: 95 },
    { nome: "Bob", voto: 88 },
    { nome: "Carol", voto: 76 },
    { nome: "David", voto: 92 },
    { nome: "Eve", voto: 84 },
  ];
  
  console.log(studenti.forEach((x) => x.nome +x. voto))
  console.log(studenti.find(x=>x.voto>=90))
  console.log(studenti.reduce((acc,cur) => acc+cur.voto,0) /studenti.length)
  console.log(studenti.map(x=> x.nome.toUpperCase()))
  console.log(studenti.filter(x=> x.voto>=85))