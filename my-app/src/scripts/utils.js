import UserService from "./services/userService";

export function formatarData(dataString) {
  const dataObjeto = new Date(dataString);

  const dia = dataObjeto.getDate();
  const mes = dataObjeto.getMonth() + 1;
  const ano = dataObjeto.getFullYear();
  const horas = dataObjeto.getHours();
  const minutos = dataObjeto.getMinutes();
  const segundos = dataObjeto.getSeconds();

  const diaFormatado = dia < 10 ? `0${dia}` : dia;
  const mesFormatado = mes < 10 ? `0${mes}` : mes;
  const horasFormatadas = horas < 10 ? `0${horas}` : horas;
  const minutosFormatados = minutos < 10 ? `0${minutos}` : minutos;
  const segundosFormatados = segundos < 10 ? `0${segundos}` : segundos;

  return `${diaFormatado}/${mesFormatado}/${ano} ${horasFormatadas}:${minutosFormatados}:${segundosFormatados}`;
}


export function verificaRota() {
  const url = window.location.pathname;
  var regex = /\/(post|portfolio|abs)\//;
  return regex.test(url);
}

export const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  } else {
    return text;
  }
};

export const renderHtmlWithLineBreaks = (text) => {
  if (!text) return '';
  return text.split('\n').map((line, index) => (
    <span key={index}>
      {line}
      {index !== text.split('\n').length - 1 && <br />}
    </span>
  ));
};

export function isConnected() {
  UserService.isConnected()
    .catch(() => {
      localStorage.setItem('login', "");
      localStorage.setItem('token', "");
      window.location.href = '/';
    });
}