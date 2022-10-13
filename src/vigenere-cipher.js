const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
    #isReversed;
    constructor(notReversed = true) {
        this.#isReversed = !notReversed
    }

    encryptChar(char, keyChar) {
        const firstChar = "A".charCodeAt(0)
        const encryptCharCode = (char.charCodeAt(0) - "A".charCodeAt(0) + keyChar.charCodeAt(0) - "A".charCodeAt(0)) % 26
        return String.fromCharCode(encryptCharCode + firstChar)
    }

    decryptChar(char, keyChar) {
        const firstChar = "A".charCodeAt(0)
        const decryptCharCode = (26+(char.charCodeAt(0) - keyChar.charCodeAt(0))) % 26
        return String.fromCharCode(decryptCharCode + firstChar)
    }

    makeKeyString(str, key) {
        const newString = str.toUpperCase().replace(/[^A-Z]/g, '')
        let resultString = [];
        let it = 0;
        for (let i = 0; i < newString.length; i++) {
            if (i % key.length === 0) {
                it = 0;
            }
            resultString.push(key[it]);
            it++;
        }
        for (let i = 0; i < str.length; i++) {

            if (/[^a-zA-Z]/.test(str[i])) {
                resultString.splice(i, 0, str[i])
            }
        }
        return resultString.join("").toUpperCase()
    }


    encrypt(str, key) {
        if (str === undefined || key === undefined) throw new Error("Incorrect arguments!")

        let encryptedStr = ""
        const cryptStr = this.makeKeyString(str, key)
        for (let i = 0; i < str.length; i++) {
            if (/[a-zA-Z]/.test(str[i])) {
                encryptedStr += this.encryptChar(str[i].toUpperCase(), cryptStr[i])
            } else encryptedStr += str[i]
        }
        console.log(encryptedStr)
        return this.#isReversed ? encryptedStr.split("").reverse().join("") : encryptedStr
    }

    decrypt(str, key) {
        if (str === undefined || key === undefined) throw new Error("Incorrect arguments!")

        let decryptedStr = ""
        const cryptStr = this.makeKeyString(str, key)
        for (let i = 0; i < str.length; i++) {
            if (/[a-zA-Z]/.test(str[i])) {
                decryptedStr += this.decryptChar(str[i].toUpperCase(), cryptStr[i])
            } else decryptedStr += str[i]
        }
        return this.#isReversed ? decryptedStr.split("").reverse().join("") : decryptedStr

    }
}

module.exports = {
    VigenereCipheringMachine
};
