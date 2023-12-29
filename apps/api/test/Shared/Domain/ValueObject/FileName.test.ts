import BadRequestException from '../../../../src/Context/Shared/Domain/Exception/BadRequestException';
import { SharedMother } from '../../SharedMother';

describe('FileName', () => {
    it('should create with existing phisically file into fs', () => {
        expect(() => {
            SharedMother.FileName();
        }).not.toThrow();

        expect(() => {
            SharedMother.FileName('./tmp/esto-vale.jpg');
            SharedMother.FileName('/tmp/esto-vale.jpg');
            SharedMother.FileName('./esto-vale.jpg');
            SharedMother.FileName('/cdn/path/full/esto-v__ale.jpg');
        }).not.toThrow();
        expect(() => {}).not.toThrow();
    });
    it('should throw bad request exception if file dont exists or its a directory', () => {
        expect(() => {
            SharedMother.FileName('non-existing-file');
        }).toThrowError(BadRequestException);
        expect(() => {
            SharedMother.FileName(__dirname);
            SharedMother.FileName('/');
            SharedMother.FileName('/tmp');
            SharedMother.FileName('esto no vale.jpg');
        }).toThrowError(BadRequestException);
    });
});
