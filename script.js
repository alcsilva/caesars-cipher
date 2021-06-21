function rot13(str) {
    var newStr = "";
    var regExp = /[A-Z]/;
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(regExp)) {
            if (str.charCodeAt(i) < 78) {
                // Range A - Z == 65 - 90 (através da função charCode At) 
                newStr += String.fromCharCode(90 - (13 - (str.charCodeAt(i) - 64)));

            } else {
                newStr += String.fromCharCode(str.charCodeAt(i) - 13);
            }
        } else {
            newStr += str[i];
        }
    }
    return newStr;
}

console.log(rot13("SERR PBQR PNZC"));