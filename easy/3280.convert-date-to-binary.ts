const convertDateToBinary = (date: string) => date.split('-').map((v) => (+v).toString(2)).join('-');
