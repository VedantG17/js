const accountId = 144553
let accountEmail = "sampleemail@gmail.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState;

// accountId = 2 //not allowed
accountEmail = "abcd@hmail.com"
accountPassword = "98765"
accountCity = "Delhi"
console.log(accountId);
console.table([accountId,accountEmail,accountCity,accountState])
/*
Prefer not to use var due to issue of block and functional scope
*/
