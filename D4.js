/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

const area = function(l1,l2){
    console.log("L'area risulta:" + (l1*l2))

}
area(20,10)

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum = function(n1,n2){
    let sum = n1 + n2
    
    if(sum === n1 + n2)
        return sum * 3
}

console.log("Il valore è",crazySum(10,10))


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function(n3,n4){
let absolute = Math.abs(n3-n4)
if(absolute>19)
    return absolute*3
}


console.log("risultato",crazyDiff(39,19))
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function(n){
if(n >20 && n <=100){
    return true
}else(n === 400) 
    return true


}

console.log("il risultato è",boundary(50))
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = function(){
    let prima = "EPICODE"
    let seconda = "EPICODE"
prima = seconda
if(seconda=== prima){
    return prima
}
}
console.log("stringa",epify())
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function(){
let add1 = check3and7 % 3
let add2 = check3and7 % 3
     
if(add1 = 0){
    return (3)
}else
 return (7)
}



console.log("multiplo di",check3and7(14))
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const reverseString = function(){
let name = ("EPICODE")
name.reverse[6,5,4,3,2,1,0]
reverseString = name

}
console.log("il nome è",reverseString())
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const cutString = function(str){
    let cat = "miao"
    let cat1 = cat.pop();
    let cat2 = cat1.shift()
}
cutString()
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

const giveMeRandom = function(n){
      
     let array = []
     
    array = math.floor(math.random() * 10) 
    giveMeRandom = array
}
console.log(giveMeRandom())