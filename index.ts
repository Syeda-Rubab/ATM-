import inquirer from "inquirer"

let myBalance = 10000 // Dollar

let myPin = 6410
let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "enter your pin",
            type: "number"
        }
    ]
);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!!")

    let operationAns = await inquirer.prompt(
        [
            {
               name: "operation",
               message: "please select option",
               type: "list",
               choices: ["withdraw", "check balance"]
        
            }
        ]
    );
    console.log(operationAns);

    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "enter your amount",
                    types: "number",
                }
            ]
        );
        // =, -=, +=
        myBalance -= amountAns.amount;
        console.log("Your remaining balance is: " + myBalance)
    }else if (operationAns.operation ==="check balance"){
        console.log("your balace is:"+ myBalance)
    }
}

else {
    console.log("Incorrect pin number")
}