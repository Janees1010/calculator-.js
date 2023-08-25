var name = prompt ("enter your mark")
let mark = 50;
if(mark >=90) {
    alert("congratulation u got A");
}
else if (mark >=80 && mark<90){
    alert("congratulation u got B");
}
else if (mark <=50){
    alert("FAILED")
}




/*let i=1;
for(leti=1;i<=100;i++){
    if(i%2==0){
    document.write(` even ${ i } <br> `);
 }
   else{
      document.write("odd"+i);
   } 

}*/
 
 let j=1;
while(j<=100){
    if(j%2==0){
    document.write("even"+j+"<br>");
    }
    else{
        document.write("odd"+j);
        j++;
    }
}

/*
do while
let y=1;
do {
    if(y%2==0){
        document.write("even"+y);
        
    }
    else{
        document.write("odd"+y)
        y++;
    }
    
}while(y<=100)*/
