function mincost(arr)
{ 
	let tempArr = arr
	let res = 0;
	tempArr.sort((a,b)=>a-b);
	while(temp.length > 1){
		const n1 = tempArr.shift();
		const n2 = tempArr.shift();
		res += n1 + n2
		tempArr.push(n1+n2);
		tempArr.sort((a,b)=>a-b);	
}
	
return res;
  
}

module.exports=mincost;
