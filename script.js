function firstNonRepeatedChar(str) {
	let fmap=new Map();
	for(let ch of str){
		fmap.has(ch) ? (fmap.set(ch,fmap.get(ch)+1)) : fmap.set(ch,1);
	}

	for(let ch of str){
		if(fmap.get(ch)==1){
			return ch;
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
