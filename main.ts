import inquirer from "inquirer"

let accountBalance:number = 70000
let pinNumber:number = 1234

console.log("Welcome to ABC Bank ATM!"); 
let pinEnter = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "Enter your account pin",
            type: "number"
        }
    ])
if (pinEnter.pin == pinNumber){
    let atmQuestions = await inquirer.prompt(
        [   {
                name:"accountType",
                message: "Select your account type",
                type: "list",
                choices:[
                    "Savings account",
                    "Current account",
                    "Default"
                ]
            },{
            name: "transMethod",
            message: "Select your transaction method",
            type: "list",
            choices:[
                "Cash withdrawl",
                "Fast cash"
                ]
            }
        ]);
if (atmQuestions.transMethod == "Cash withdrawl")
    {
        let cashWithdrawl = await inquirer.prompt(
            [
                {
                    name: "withdrawl",
                message: "Enter your amount",
                type: "number"
                }
            ]
        );
if (accountBalance >= cashWithdrawl.withdrawl)
    {
        accountBalance -= cashWithdrawl.withdrawl
        console.log(`Your remaining account balance is ${accountBalance}`)
        console.log("Thank you for using!")
    }
else {
    console.log("Insufficient balance")
    }
}
else {
    let fastCashAmount = await inquirer.prompt([
        {
            name: "fastCash",
            message: "Select the amount you want to withdraw",
            type: "list",
            choices:[
                "500",
                "1000",
                "3000",
                "5000"
            ]
        }
    ])
if (accountBalance >= fastCashAmount.fastCash){
    accountBalance -= fastCashAmount.fastCash
    console.log(`Your remaining account balance is ${accountBalance}`)
    console.log("Thank ypu for using!")
}
else {
    console.log("Insufficient balance")
    }
}}
else {
console.log("Incorrect pin")
};
