import _ from 'lodash';

const maxTotalValue = (a: number[], k: number) => k * ((_.max(a) ?? 0) - (_.min(a) ?? 0));
