export const prod = process.env.NODE_ENV === 'production'

// 路由方式
export const ROUTERMODE = 'hash'; // or history

// 域名
export const HOST = prod ? '' : location.protocol + '//' + 'http://cs.gzraad.com' + '/'

// rpc 地址
export const RPCURL = prod ? 'web-rpc' : location.protocol + '//' + 'http://cs.gzraad.com' + '/web-rpc'
		
//上传文件地址
export const UPLOADURL = prod ? 'upload' : location.protocol + '//' + 'http://cs.gzraad.com' + '/upload'
// 修复动态title，空白页地址
export const TITLEFIXERPAGE = 'static/blank.html';

// token的储存名称
export const TOKEN = 'NFITNESS_TOKEN';


