function mincost(arr)
{ 
arr.sort((a,b)=>a-b);
	let cost = 0;
	let sum = arr[0];
	for(let i = 1; i < arr.length; i++){
		sum += arr[i]
		cost += sum;
	}
	return cost;
  
}

module.exports=mincost;
