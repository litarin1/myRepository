var buttonscount=1, tmp=0;
function function_name() {
	buttonscount++;
	for(i=buttonscount;i!=buttonscount;i++)
	{
		var tmp=0;
		tmp=tmp+'<input type="button" onclick="function_name()">';
	}
	return(tmp);
}

/*
                               8
    000                       00
 0000000000000000000000000000000
00000000000000000000000000000000
 000000   1   0
 000000  1    0
 0000000000000
 000000
 000000
  0000
  */
/*
console.log("ЭТА ПРОГРАММА БУДЕТ РАБОТАТЬ ТОЛЬКО С НЕ БОЛЕЕ 20-ТИ ЦИФРАМИ");
console.log("ЭТА ПРОГРАММА БУДЕТ РАБОТАТЬ ТОЛЬКО С ПОЛОЖИТЕЛЬНЫМИ ЦИФРАМИ")
var a = 01010101010101010101; // Максимум - 20 символов!!!
var sum=0;
	for(i=0;i<20;i++)
		{
		sum = sum + a % 10;
		a = (a - a % 10)/10;
	}

document.write(sum)

*/
