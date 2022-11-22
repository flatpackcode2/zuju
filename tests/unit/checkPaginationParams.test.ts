import { checkPaginationParams } from '../../helpers';

describe('Helper test', () => {
    test('should not work with string', () => {
        const result = checkPaginationParams({ page: 'page', limit: 'limit' });
        const { valid } = result;
        expect(valid).toBeFalsy();
    })
})