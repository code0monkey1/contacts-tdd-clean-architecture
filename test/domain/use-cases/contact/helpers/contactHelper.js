"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContacts = void 0;
const getContacts = (n) => {
    let contacts = [];
    for (let i = 1; i <= n; i++) {
        let contact = {
            firstName: i + '',
            surName: i + '',
            email: i + "@email.com"
        };
        contacts.push(contact);
    }
    return contacts;
};
exports.getContacts = getContacts;
