const palindromes = function (maybePal) {
    const alphanumeric = "abcdefghijklmnopqrstuvwxyz0123456789"
    const toBeChecked = maybePal
        .toLowerCase()
        .split("")
        .filter((chara) => alphanumeric.includes(chara))
        .join("");
    let myArray = [...toBeChecked]
    newString = myArray.reverse().join("")
    if (newString === toBeChecked) {
        return true;
    } else {
        return false;
    }
}; 

// Do not edit below this line
module.exports = palindromes;
