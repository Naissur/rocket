import moment from 'moment';

export const randomArrayItem = arr => (arr[Math.floor(Math.random() * arr.length)]);
export const formatDate = date => moment(date).format('DD.MM.YYYY | HH:mm');
