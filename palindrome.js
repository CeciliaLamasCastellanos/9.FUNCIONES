function palindrome(string){
    var stringreversed=string.split("").reverse().join("")
    return stringreversed===string? "es palindromo" : "no es palindromo"
}
console.log(palindrome("cara de bola"))
console.log(palindrome("oso"))
