"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_contact_1 = require("../../../../src/domain/use-cases/create-contact");
class MockContactRepository {
    createContact(contact) {
        throw new Error("Method not implemented.");
    }
    getContact(id) {
        throw new Error("Method not implemented.");
    }
    getContacts() {
        throw new Error("Method not implemented.");
    }
    updateContact(id, data) {
        throw new Error("Method not implemented.");
    }
    deleteContact(id) {
        throw new Error("Method not implemented.");
    }
}
describe('CreateContactUseCase', () => {
    let createContact;
    let mockContactRepository;
    beforeEach(() => {
        jest.clearAllMocks();
        mockContactRepository = new MockContactRepository();
        createContact = new create_contact_1.CreateContact(mockContactRepository);
    });
    //success
    describe('Contact ', () => {
        const contact = {
            firstName: 'a',
            surName: 'b',
            email: "email@gmail.com"
        };
        it(`is created `, () => __awaiter(void 0, void 0, void 0, function* () {
            jest
                .spyOn(mockContactRepository, 'createContact')
                .mockImplementation(() => Promise.resolve({ data: [contact] }));
            const res = yield createContact.execute(contact);
            expect(mockContactRepository.createContact)
                .toHaveBeenCalledWith(contact);
            expect(res.data)
                .toEqual([contact]);
        }));
        //failure
        it('was a not created', () => __awaiter(void 0, void 0, void 0, function* () {
            jest
                .spyOn(mockContactRepository, 'createContact')
                .mockImplementation(() => Promise.resolve({ error: "The contact was not created" }));
            const res = yield createContact.execute(contact);
            expect(mockContactRepository.createContact).toHaveBeenCalledWith(contact);
            yield expect(res.error).toBe("The contact was not created");
        }));
    });
});
