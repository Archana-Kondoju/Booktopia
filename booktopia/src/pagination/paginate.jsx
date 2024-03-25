import _ from 'lodash';
export function paginate(items, pageNumber, pageSize) {
    if (!pageNumber || !pageSize) {
        return items;
    }
    const startIndex = (pageNumber - 1) * pageSize;
    return _(items).slice(startIndex).take(pageSize).value();
}