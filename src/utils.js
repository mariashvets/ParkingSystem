import {OrderedMap} from 'immutable';

export function mapToArray(obj){
    return obj.valueSeq().toArray();
}

export function arrayToMap (arr, RecordModel) {
    return arr.reduce((acc, el) => acc.set(el.id, RecordModel ? new RecordModel(el) : el), new OrderedMap({}));
}