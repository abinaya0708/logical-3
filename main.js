//Input:[22,55,31,63,121]----->output:[22,55,121];

let a=[22,55,31,63,121];
let b=[];
for(let i=0;i<a.length;i++){
	if(a[i]%11==0){
		b.push(a[i])
	}
}
document.write(b+"<br>");

//-------------------------------------------------

//Find given number is prime or notify
let n=18;
let check=true;

for(i=2;i<n;i++){
	if(n%i==0){
		check=false;
		break;
	}
}
if(check==true){
	document.write("Prime number")
}
else{
	document.write("Not a Prime number")
}