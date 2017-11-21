function mean(arr){
	var ret = 0;
	for(var i = 0; i < arr.length; i++)
		ret = ret + parseInt(arr[i]);
	return ret;
}
function std_dev(arr){
	var m = mean(arr);
    var x = 0;
	for(var i = 0; i < arr.length; i++)
		x = x + (parseInt(arr[i])-m)*(parseInt(arr[i])-m);
    x = Math.sqrt(x/m);
	return x;
}
