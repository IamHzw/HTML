export const prod = process.env.NODE_ENV === 'production'

// 路由方式
export const ROUTERMODE = 'hash'; // or history

// 域名
export const HOST = prod ? '' : 'http://cs.gzraad.com/'
//  export const HOST = prod ? '' : location.protocol + '//' + 'localhost' + ':8088/'
		
// rpc 地址
export const RPCURL = prod ? 'web-rpc' : 'http://cs.gzraad.com/web-rpc'
//  export const RPCURL = prod ? 'web-rpc' : location.protocol + '//' + 'localhost' + ':8088/web-rpc'
		
//上传文件地址
export const UPLOADURL = prod ? 'upload' : location.protocol + '//' + 'cs.gzraad.com' + '/upload'
// export const UPLOADURL = prod ? 'upload' : location.protocol + '//' + 'localhost' + ':8088/upload'
				
// 修复动态title，空白页地址
export const TITLEFIXERPAGE = 'static/blank.html';

// token的储存名称
export const TOKEN = 'NFITNESS_TOKEN';





