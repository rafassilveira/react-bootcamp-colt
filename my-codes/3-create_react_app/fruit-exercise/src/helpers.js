function choice(arr){
return arr[Math.floor(Math.random() * arr.length)];
	
}

function remove(arr, item){
	let newArr=[]
 arr.map(el=>{
	if( item!==el){
		newArr.push(el)
	}
	
 })
	return newArr
}
export { choice , remove}