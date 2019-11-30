var url = window.location.hostname;
var p= window.location.protocol;
export const environment = {
  production: true,
  url: p + '//'+url + ':3000'
};
