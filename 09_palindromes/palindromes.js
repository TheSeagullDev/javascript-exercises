const palindromes = function (str) {
    let trimmedString = "";
    for(let i = 0; i < str.length; i++)
    {
        if(str.charAt(i).toUpperCase() !== str.charAt(i).toLowerCase() || parseInt(str.charAt(i)))
        {
            trimmedString += str.charAt(i).toLowerCase();
        }
    }
    return trimmedString.split("").reverse().join("") === trimmedString;
};

// Do not edit below this line
module.exports = palindromes;
