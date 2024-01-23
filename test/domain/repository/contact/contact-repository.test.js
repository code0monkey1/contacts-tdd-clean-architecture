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
const contact_repository_impl_1 = require("../../../../src/domain/repositories/contact/contact-repository-impl");
class MockContactDataSource {
    create(contact) {
        throw new Error("Method not implemented.");
    }
    getOne(id) {
        throw new Error("Method not implemented.");
    }
    getAll() {
        throw new Error("Method not implemented.");
    }
    deleteOne(id) {
        throw new Error("Method not implemented.");
    }
    updateOne(id, data) {
        throw new Error("Method not implemented.");
    }
}
describe('Contact Repository', () => {
    let contactRepository;
    let mockContactDataSource;
    beforeEach(() => {
        jest.clearAllMocks();
        mockContactDataSource = new MockContactDataSource();
        contactRepository = new contact_repository_impl_1.ContactRepositoryImpl(mockContactDataSource);
    });
    describe('createContact', () => {
        const contact = {
            email: "mail@email.com",
            firstName: "a",
            surName: "b"
        };
        it('creates new contact', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = {
                data: [contact]
            };
            jest.spyOn(mockContactDataSource, 'create').mockImplementation(() => Promise.resolve(response));
            const res = yield contactRepository.createContact(contact);
            expect(mockContactDataSource.create).toHaveBeenCalledWith(contact);
            expect(res).toBe(response);
        }));
        it('does not create a contact and returns an error', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = {
                error: "contact not crated"
            };
            jest.spyOn(mockContactDataSource, 'create').mockImplementation(() => Promise.resolve(response));
            const res = yield contactRepository.createContact(contact);
            expect(mockContactDataSource.create).toHaveBeenCalledWith(contact);
            expect(res).toBe(response);
        }));
    });
});
