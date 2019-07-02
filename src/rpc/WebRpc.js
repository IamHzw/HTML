import rpc from './rpc';


export default {
	
	invoke(rpcName,...args) {
		var lea = args.map( value => JSON.stringify(value) )
		return rpc.baseInvoke(rpcName,lea);
	},
	
	
	invokeCross(rpcName,...args) {
		var lea = args.map( value => JSON.stringify(value) )
		return rpc.invoke(rpcName,lea);
	},
	
}
