var arr =[1,2,3,4,5,6,7,8];

function even(){
	var evenArr=[];
	for(let element of arr){
		if(element%2==0) evenArr.push(element);
	}
	console.log(evenArr);
}
function odd(){
	var oddArr=[];
	for(let element of arr){
		if(element%2!=0) oddArr.push(element);
	}
	console.log(oddArr);
}
console.log('start');
setTimeout(even,0);
setImmediate(odd);
console.log('end');