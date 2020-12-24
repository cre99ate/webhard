const fs = require('fs-extra');

function filesCopy2(oriPath, backupPath, workPath){     
    
    fs.copy( oriPath, backupPath );
    fs.copy( oriPath, workPath );
//    , err=>{
//        if(err) return alert(err);
//        alert('success!');
//    });
  
}



function aa(){
    fs.copy('C:/Users/cre99/Desktop/웹하드DownLoad/1', 'Z:/222')
}

aa()



function test2(copyData, number) {
   
    let data = copyData;
    
    let date = data.substr(0,4) + data.substr(5,2) + data.substr(8,2)+ " " + data.substr(11,2) + data.substr(14,2) + data.substr(17,2); 
    
    data = data.slice(0,-2); 
    
    data = data.split(">");
  
    let data1 = data[data.length-1].replace(" ","");
    let data2 = data[data.length-2].replace(" ",""); //지역과 이름 결함
    
    let lastData = [ date, data1, data2 ];
        
    return lastData[number];
    
  }

function fillZero(width, str){
    return str.length >= width ? str : new Array(width-str.length+1).join('0') + str; //남는 길이만큼 0으로 채움
    
}  


  
  
