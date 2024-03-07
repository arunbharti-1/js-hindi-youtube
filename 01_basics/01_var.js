const accountId = 35
let accountEmail = "arun@gmail.com"
var accountPassword = "12345"
accountCity = "Gorakhpur"
let accountState
//accountId = 30 cannot be re assigned
accountEmail = "A@gmail.com"
accountPassword = '54321'
accountCity = "Jaipur"

/* prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])