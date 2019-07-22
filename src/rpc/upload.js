import token from './token';
import { UPLOADURL } from './../config';

function convertDataURLToBlob(dataURL) {
  var arr = dataURL.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

  while(n--){
      u8arr[n] = bstr.charCodeAt(n);
  }

  return new Blob([u8arr], {type:mime});
}

function uploadFile(file, path) {
  let xhr = new XMLHttpRequest();
  let formData = new FormData();

  formData.append('$Authorization$', `Bearer ${token.getAuthToken()}`);
  formData.append('file', file, file.name);
  formData.append('path', path || 'default/');

  xhr.open('post', UPLOADURL, true);
  xhr.send(formData);

  return new Promise((resolve, reject) => {
    xhr.addEventListener('load', function(e) {
      let response = JSON.parse(xhr.responseText);
      let url = response && response.data && response.data.paths[0] || null;
      resolve(url);
    });

    xhr.addEventListener('error', function(e) {
      reject({
        error: `网络或服务器错误，状态：${xhr.status}，地址：${xhr.responseURL}`,
        eroortype: -1
      });
    });
  });
}


export default {
  convertDataURLToBlob,
  uploadFile
}
