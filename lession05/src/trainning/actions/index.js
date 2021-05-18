import * as type from './ActionType'
export const status = () => {
    return {
        type: type.status
    }
}
export const sort = (sort) => {
    return {
        type: type.sort,
        sort
    }
}