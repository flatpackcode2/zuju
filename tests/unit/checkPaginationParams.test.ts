import { checkPaginationParams } from '../../helpers';

describe('Helper test', () => {
    test('should not work with text represented as string', () => {
        const result = checkPaginationParams({ page: 'page', limit: 'limit' });
        const { valid } = result;
        expect(valid).toBeFalsy();
    });
    test('should work with numbers represented as string', () => {
        const result = checkPaginationParams({ page: '1', limit: '10' });
        const { valid } = result;
        expect(valid).toBeTruthy();
    })
})