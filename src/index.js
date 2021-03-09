module.exports = function check(str, bracketsConfig) {
	var brc  = [];
  
	bracketsConfig.forEach(pr => {
		brc.push(pr.join(''));
	});
	for(let i=0; i<brc.length; i++){
	  if(str.includes(brc[i])){
		str = str.replace(brc[i], "");
		i = -1;
	  }
	}
	return str.length === 0 ? true : false;
  }
