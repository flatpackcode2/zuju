import _isEmpty from 'lodash/isEmpty';

export const isInteger = (param: string) => {
    const pattern = new RegExp('^\d+$`');
    return pattern.test(param);
}


declare interface PaginationCheckResponse {
    valid: boolean;
    errors: { [key: string]: string };
}

export const checkPaginationParams = (params: { page: string, limit: string }): PaginationCheckResponse => {
    const checked: PaginationCheckResponse = { valid: true, errors: {} };

    Object.keys(params).forEach(p => {
        if (!isInteger(params[p])) {
            checked.errors[p] = `${params[p]}is not a valid integer`;
        }
    })
    if (!_isEmpty(checked.errors)) {
        checked.valid = !checked.valid;
    }

    return checked;
}

