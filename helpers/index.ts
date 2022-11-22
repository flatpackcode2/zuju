export const isInteger = (param: string) => {
    const pattern = new RegExp('^\d+$`');
    return pattern.test(param);
}


declare interface PaginationCheckResponse {
    valid: boolean;
    errors: { [key: string]: string }[];
}

export const checkPaginationParams = (params: { page: string, limit: string }): PaginationCheckResponse => {
    const checked: PaginationCheckResponse = { valid: true, errors: [] };

    Object.keys(params).forEach(p => {
        if (!isInteger(params[p])) {
            checked.errors.push({ [p]: `${params[p]}is not a valid integer` })
        }
    })
    if (checked.errors.length) {
        checked.valid = !checked.valid;
    }

    return checked;
}

