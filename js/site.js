
function getValue() {
    let userString = document.getElementById("userString").value;
    let userStringLower = userString.toLowerCase();
    let userStringLowNo = userStringLower.replace(/[^a-zA-Z ]/g, "");
    let userStringClean = userStringLowNo.replace(/\s+/g, "");

    let revString = reverseString(userStringClean);
    displayOutput(revString, userStringClean, userString);

}

function reverseString(userStringClean) {

    let revString = [];

    for (let index = userStringClean.length - 1; index >= 0; index--) {
        revString += userStringClean[index];
    }

    return revString;
}

function displayOutput(revString, userStringClean, userString) {

    if (revString == userStringClean) {
        document.getElementById("msg").innerHTML = `Success! ${userString} is a Palindrome!`
    } else {
        document.getElementById("msg").innerHTML = `Oh no! ${userString} is NOT a Palindrome.`
    }

    document.getElementById("alert").classList.remove("invisible");
}

