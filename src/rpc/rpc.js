/**************** post ****************/

function _handle(xhr, resolve, reject) {
	let response = {
			status: xhr.status,
			statusText: xhr.statusText,
			responseURL: xhr.responseURL,
			responseType: xhr.responseType,
			responseText: xhr.responseText
	};

	if( xhr.status == 200 ) {
		resolve(response);
	} else {
		reject(response);
	}
}

function _post(url, body, options) {
	let xhr = new XMLHttpRequest(),
	promise = new Promise((resolve, reject) => {
		xhr.onload = () => _handle(xhr, resolve, reject);
	});
	
	xhr.open('POST', url, true);
	xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');

	for(let name in options) {
		xhr.setRequestHeader(name, options[name]);
	}

	xhr.send(JSON.stringify(body));

	return promise;
}

//跨域
function _postCross(url, body, options) {
	let xhr = new XMLHttpRequest(),
	promise = new Promise((resolve, reject) => {
		xhr.onload = () => _handle(xhr, resolve, reject);
	});
	
	xhr.withCredentials = true;
	xhr.crossDomain= true;
    
	xhr.open('POST', url, true);
	xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');

	for(let name in options) {
		xhr.setRequestHeader(name, options[name]);
	}

	xhr.send(JSON.stringify(body));

	return promise;
}


/**************** rpc ****************/
import token from './token';

let _url = '';

function setUrl(url) {
	_url = url;
}

function invoke(name, args) {
	
	let body = [{ name: name, args: args }],
	options = { 'Authorization': `Bearer ${token.getAuthToken()}` };

	return _postCross(_url, body, options)
    	.then( response => JSON.parse(response.responseText)[0] )
    	/* 处理状态码非200 */
    	.catch( error => {
    		return Promise.reject({
    			error: `网络或服务器错误，状态：${error.status}，地址：${error.responseURL}`,
    			eroortype: true
    		});
    	})
    	.then( body => {
    		return Promise.resolve(body.result) 
    	} );
}


function baseInvoke(name, args) {
	
	let body = [{ name: name, args: args }],
	options = { 'Authorization': `Bearer ${token.getAuthToken()}` };

	return _post(_url, body, options)
    	.then( response => JSON.parse(response.responseText)[0] )
    	/* 处理状态码非200 */
    	.catch( error => {
    		return Promise.reject({
    			error: `网络或服务器错误，状态：${error.status}，地址：${error.responseURL}`,
    			eroortype: true
    		});
    	})
    	.then( body => {
    			if( body.error !=null ){
    				return Promise.resolve(body)
    			}
    			return Promise.resolve(body.result)
    		} );
}

export default {
  setUrl, invoke ,baseInvoke
}

