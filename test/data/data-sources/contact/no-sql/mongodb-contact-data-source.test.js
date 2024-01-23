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
const mongodb_contact_data_source_1 = require("../../../../../src/data/data-sources/contact/no-sql/mongodb-contact-data-source");
class MockNoSqlDatabase {
    find(id) {
        throw new Error('Method not implemented.');
    }
    insertOne(data) {
        throw new Error('Method not implemented.');
    }
    deleteOne(id) {
        throw new Error('Method not implemented.');
    }
    updateOne(id, data) {
        throw new Error('Method not implemented.');
    }
}
describe('MongodbContactDataSource', () => {
    let mockNoSqlDb;
    let mongodbContactDbSource;
    beforeEach(() => {
        jest.clearAllMocks();
        mockNoSqlDb = new MockNoSqlDatabase();
        mongodbContactDbSource = new mongodb_contact_data_source_1.MongodbContactDataSource(mockNoSqlDb);
    });
    describe('insertOne', () => {
        const contact = {
            firstName: 'a',
            surName: 'b',
            email: "email@gmail.com"
        };
        it('creates a new contact', () => __awaiter(void 0, void 0, void 0, function* () {
            jest.spyOn(mockNoSqlDb, 'insertOne').mockImplementation(() => Promise.resolve(contact));
            const response = yield mockNoSqlDb.insertOne(contact);
            expect(mockNoSqlDb.insertOne).toHaveBeenCalledWith(contact);
            expect(response).toBe(contact);
        }));
        it('does not create new contact', () => __awaiter(void 0, void 0, void 0, function* () {
            jest.spyOn(mockNoSqlDb, 'insertOne').mockImplementation(() => Promise.resolve(contact));
            const response = yield mockNoSqlDb.insertOne(contact);
            expect(mockNoSqlDb.insertOne).toHaveBeenCalledWith(contact);
            expect(response).toBe(contact);
        }));
    });
});
