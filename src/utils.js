import crypto from "crypto";


const utils = {
    decryptCipher: async (encrypted, password) => {
        let iv = Buffer.from(encrypted.iv, 'hex');
        let encryptedText = Buffer.from(encrypted.encryptedData, 'hex');
        let key = password.padStart(24, '0');
        let decipher = crypto.createDecipheriv('aes-192-cbc', key, iv);

        let decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()]);

        return decrypted.toString();
    },
    ConvertToCSV: (items) => {
        const replacer = (key, value) => value === null ? '' : value // specify how you want to handle null values here
        const header = Object.keys(items[0])
        const csv = [
            header.join(','), // header row first
            ...items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
        ].join('\r\n')

        return csv;
        // let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        // var str = '';
        //
        // for (var i = 0; i < array.length; i++) {
        //     var line = '';
        //     for (var index in array[i]) {
        //         if (line != '') line += ','
        //
        //         line += array[i][index];
        //     }
        //
        //     str += line + '\r\n';
        // }
        //
        // return str;
    }
}

export default utils;
