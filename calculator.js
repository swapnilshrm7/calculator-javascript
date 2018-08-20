var flag=0;
			function myFunction(event) {
				if(flag==1)
					{
					flag=0;
					window.onOperationClickAc();
					}
				var x = event.which || event.keyCode;
				if(x===13)
				{
				document.getElementById("equate").click();
				}
			}
			function onNumberClickOne() {
				if(flag==1)
					{
					flag=0;
					window.onOperationClickAc();
					}
				document.getElementById("input-box").value+="1";
			}
			function onNumberClickTwo() {
				if(flag==1)
					{
					flag=0;
					window.onOperationClickAc();
					}
				document.getElementById("input-box").value+="2";
			}
			function onNumberClickThree() {
				if(flag==1)
					{
					flag=0;
					window.onOperationClickAc();
					}
				document.getElementById("input-box").value+="3";
			}
			function onOperationClickMultiply() {
				if(flag==1)
					{
					flag=0;
					window.onOperationClickAc();
					}
				document.getElementById("input-box").value+="*";
			}
			function onOperationClickDivide() {
				if(flag==1)
					{
					flag=0;
					window.onOperationClickAc();
					}
				document.getElementById("input-box").value+="/";
			}
			function onNumberClickFour() {
				if(flag==1)
					{
					flag=0;
					window.onOperationClickAc();
					}
				document.getElementById("input-box").value+="4";
			}
			function onNumberClickFive() {
				if(flag==1)
					{
					flag=0;
					window.onOperationClickAc();
					}
				document.getElementById("input-box").value+="5";
			}
			function onNumberClickSix() {
				if(flag==1)
					{
					flag=0;
					window.onOperationClickAc();
					}
				document.getElementById("input-box").value+="6";
			}
			function onOperationClickMinus() {
				if(flag==1)
					{
					flag=0;
					window.onOperationClickAc();
					}
				document.getElementById("input-box").value+="-";
			}
			function onOperationClickAdd() {
				if(flag==1)
					{
					flag=0;
					window.onOperationClickAc();
					}
				document.getElementById("input-box").value+="+";
			}
			function onNumberClickSeven() {
				if(flag==1)
					{
					flag=0;
					window.onOperationClickAc();
					}
				document.getElementById("input-box").value+="7";
			}
			function onNumberClickEight() {
				if(flag==1)
					{
					flag=0;
					window.onOperationClickAc();
					}
				document.getElementById("input-box").value+="8";
			}
			function onNumberClickNine() {
				if(flag==1)
					{
					flag=0;
					window.onOperationClickAc();
					}
				document.getElementById("input-box").value+="9";
			}
			function onNumberClickZero() {
				if(flag==1)
					{
					flag=0;
					window.onOperationClickAc();
					}
				document.getElementById("input-box").value+="0";
			}
			function onOperationClickAc() {
				if(flag==1)
					{
					flag=0;
					window.onOperationClickAc();
					}
				document.getElementById("input-box").value="";
			}
			function onOperationClickOpenBracket() {
				if(flag==1)
					{
					flag=0;
					window.onOperationClickAc();
					}
				document.getElementById("input-box").value+="(";
			}
			function onOperationClickCloseBracket() {
				if(flag==1)
					{
					flag=0;
					window.onOperationClickAc();
					}
				document.getElementById("input-box").value+=")";
			}
			function onOperationClickDecimal() {
				if(flag==1)
					{
					flag=0;
					window.onOperationClickAc();
					}
				document.getElementById("input-box").value+=".";
			}
			function onOperationClickBackspace() {
				if(flag==1)
					{
					flag=0;
					window.onOperationClickAc();
					}
				var current=document.getElementById("input-box").value;
				var len=0;
				len=current.length;
				if(len>0)
					{
					document.getElementById("input-box").value=current.substr(0,len-1);
					}
			}
			function onOperationClickEquate(){
				if(flag==1)
					{
					flag=0;
					window.onOperationClickAc();
					}
				var current=document.getElementById("input-box").value;
				var len=current.length;
				var i=0;
				var check=0;
				flag=1;
				for(i=0;i<len-1;i++)
					{
					if(current[i]!=1&&current[i]!=2&&current[i]!=3&&current[i]!=4&&current[i]!=5&&current[i]!=6&&current[i]!=7&&current[i]!=8&&current[i]!=9&&current[i]!=0&&current[i]!=")"&&current[i]!='('&&current[i]!="*"&&current[i]!="/"&&current[i]!="+"&&current[i]!='-'&&current[i]!='.')
						{
						check=1;
						document.getElementById("input-box").value="Invalid Input";
						window.setTimeout(onOperationClickAc,1000);
						break;
						}
					}
				if(check==0)
					{
					try{
					var answer=eval(current);
					document.getElementById("input-box").value=answer;
					}
					catch(err){
					document.getElementById("input-box").value ="invalid!";
					window.setTimeout(onOperationClickAc,1000);
					}
					}
				}