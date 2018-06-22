
const DEFAULT_CONFIG = {
  preserveWhitespace: true,
  noBreaks: false,
  foo: 'bar'
};
const USER_CONFIG = {
  noBreaks: true
};
// si no pasamos el objeto vacío mutamos
const config = Object.assign({}, DEFAULT_CONFIG, USER_CONFIG);
console.log(config);
