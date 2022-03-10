$(function(){//sayfa tamamen yüklendikten sonra çalışacak

    var svg=Pablo('#ground').svg({//yükseklik ve genişlik ayarı svg için
        width:1200,
        height:1500
    });
    var topArray=new Array();
    var topArray1=new Array();
    var topArray2=new Array();
    var topArray4=new Array();
    var topArray5=new Array();
    var topArray6=new Array();
    var topArray7=new Array();
    var topArray11=new Array();
    var topArray22=new Array();
    var topArray33=new Array();
    var topArray44=new Array();
    var topArray55=new Array();
    top11=0;
    top22=0;
    top33=0;
    top44=0;
    top55=0;
    var kal=0;
    var parametre=1;
    var insanlar=[0];
    var degisken=0;
    var insanlar_tut=[0];
    var g=0;
    var degisken3=0;
    var kontrol=new Array();
    var a=[0];
    var degisken1=0;
    var artis=1;
    var b=[0];
    var asansorTut=[0];
    var top_sayisi=0;
    var boolean2=false;
    var boolean4=false;
    var boolean5=false;
    var top=0;
    var top2=0;
    var top3=0;
    var top4=0;
    var top5=0;
    for(let z=0;z<10;z++){
      asansorTut[z]=0;
    }
    var i,j;
    var asansor_insan=[0]
    var asansor_insan_index=0;
    for (let z = 0  ;z<10;z++){
      asansor_insan[z]=0;
    }
    var topindex=0;
    var flag=0;
    var guc=0;
    var bol22=false;
    let y=0;
    var boolean1=true;
    var index=0;
    var sayac=0;
    var degisken2=0;
    var boolean3=false;
    var upinsan2=10;
    var boolean22=true;
    var upinsan5=10;
    var boolean55=true;
    var t=0;
    var matrix = [];
    var indexler=[];
    for(i=0; i<1500; i++) {
      indexler[i] = new Array(2);
  }
  for(i=0;i<1500;i++){
    for(j=0;j<1500;j++){
       indexler[i][j]=0;
    }
  }
    for(i=0; i<1500; i++) {
        matrix[i] = new Array(2);
    }
    for(i=0;i<1500;i++){
      for(j=0;j<1500;j++){
         indexler[i][j]=0;
      }
    }
    for(i=20;i<160;i=i+20){
      matrix[i+1040][1040]=1;
    }
    for(i=20;i<160;i=i+20){
      matrix[i+1040][1060]=1;
    }
    for(i=20;i<160;i=i+20){
      matrix[i+1040][1080]=1;
    }
    for(i=20;i<160;i=i+20){
      matrix[i+1040][1100]=1;
    }
    for(i=20;i<160;i=i+20){
      matrix[i+1040][1120]=1;
    }
    for(i=20;i<160;i=i+20){
      matrix[i+1040][1140]=1;
    }
    for(i=20;i<160;i=i+20){
      matrix[i+1040][820]=1;
    }
    for(i=20;i<160;i=i+20){
      matrix[i+1040][840]=1;
    }
    for(i=20;i<160;i=i+20){
      matrix[i+1040][860]=1;
    }
    for(i=20;i<160;i=i+20){
      matrix[i+1040][880]=1;
    }
    for(i=20;i<160;i=i+20){
      matrix[i+1040][900]=1;
    }
    for(i=20;i<160;i=i+20){
      matrix[i+1040][920]=1;
    }
    for(i=20;i<160;i=i+20){
      matrix[i+1040][620]=1;
    }
    for(i=20;i<160;i=i+20){
      matrix[i+1040][640]=1;
    }
    for(i=20;i<160;i=i+20){
      matrix[i+1040][660]=1;
    }
    for(i=20;i<160;i=i+20){
      matrix[i+1040][680]=1;
    }
    for(i=20;i<160;i=i+20){
      matrix[i+1040][700]=1;
    }
    for(i=20;i<160;i=i+20){
      matrix[i+1040][720]=1;
    }
    for(i=20;i<160;i=i+20){
      matrix[i+1040][400]=1;
    }
    for(i=20;i<160;i=i+20){
      matrix[i+1040][420]=1;
    }
    for(i=20;i<160;i=i+20){
      matrix[i+1040][440]=1;
    }
    for(i=20;i<160;i=i+20){
      matrix[i+1040][460]=1;
    }
    for(i=20;i<160;i=i+20){
      matrix[i+1040][480]=1;
    }
    for(i=20;i<160;i=i+20){
      matrix[i+1040][500]=1;
    }
   
    for(i=0;i<400;i++){
      insanlar[i]=0;
    }
    for(i=0;i<400;i++){
      insanlar_tut[i]=0;
    }
       setInterval(function(){
            let x;
            x=Math.floor(Math.random()*5+1);
            while(x>0 && top_sayisi<25){                
                    topOlustur(20*parametre,1490);
                    topOlustur(20*parametre,1470);
                    insanlar[index]=20*parametre;
                    parametre++;
                    index++;
                    insanlar[index]=20*parametre;
                    index++;
                    top_sayisi++;
                    top_sayisi++;
                    x--;
                    x--;
          if(parametre==55 || parametre==54){
            artis++;
            parametre=0;
        }
            }
         
       },500);
      
       setInterval(function(){
              let random=Math.floor((Math.random()*4+1));
              let counter=Math.floor((Math.random()*5+1));   
              let say=0;
              if(random==1){
              for(i=1040;i<1300;i++){
                for(j=1040;j<1140;j++){
                  if(matrix[i][j]==2){
                  topOlustur2(i,j);
                  
                  topindex++;
                  top++;
                  matrix[i][j]=3;
                  say++;
                }
              if(say==counter) break;
              }
              if(say==counter) break;
            }
          }
          else if(random==2){
            for(i=1040;i<1300;i++){
              for(j=820;j<920;j++){
                if(matrix[i][j]==2){
                topOlustur4(i,j);
                
                top2++;
                topindex++;
                matrix[i][j]=3;
                say++;
              }
            if(say==counter) break;
            }
            if(say==counter) break;
          }
          }
          else if(random==3){
          for(i=1040;i<1300;i++){
            for(j=620;j<720;j++){
              if(matrix[i][j]==2){
              topOlustur5(i,j);
              
              topindex++;
              top3++;
              matrix[i][j]=3;
              say++;
            }
          if(say==counter) break;
          }
          if(say==counter) break;
        }
          }
          else if(random==4){
            for(i=1040;i<1300;i++){
              for(j=400;j<500;j++){
                if(matrix[i][j]==2){
                topOlustur6(i,j);
                
                top4++;
                topindex++;
                matrix[i][j]=3;
                say++;
              }
            if(say==counter) break;
            }
            if(say==counter) break;
          }
          }
  },1000);
       
       var asansor;
       var yonY=1;
       var yon2Y=-1;
       var yon3Y=-1;
       var yon4Y=-1;
       var yon5Y=-1;
       var bol=false;
       var bol2=false;
       var bol33=false;
       var bol3=false;
       var bol44=false;
       var bol55=false;
       var bol4=false;
       var upinsan=10;
       var asansorX = 50;
       var asansorY=1220;
       var asansor2X=250;
       var asansor2Y=1220;
       var asansor3X=450;
       var asansor3Y=1220;
       var asansor4X=650;
       var asansor4Y=1220;
       var asansor5X=850;
       var asansor5Y=1220;
       var upinsan3=10;
       var boolean33=true;
       var upinsan4=10;
       var boolean44=true;
       var b1=true;
       var kapasite=0;
       var kapasite2=0;
       var kapasite3=0;
       var kapasite4=0;
       var kapasite5=0;
      // var asansor1=asansorOlustur(50,1220);
      var asansor1;
       //var asansor2=asansorOlustur(250,1220);
     //  var asansor3=asansorOlustur(450,1220);
     //  var asansor4=asansorOlustur(650,1220);
       //var asansor4=asansorOlustur(850,1220);
       cizgiOlustur(50,1190);
       cizgiOlustur(50,990);
       cizgiOlustur(50,790);
       cizgiOlustur(50,590);
       tuglaOlustur(50,1430);
       tuglaOlustur(250,1430);
       tuglaOlustur(450,1430);
       tuglaOlustur(650,1430);
       tuglaOlustur(850,1430);
       if(topArray[100,200]==false){
         console.log("adsasd");
       }
       var asansor2c;
       var asansor3c;
       var asansor4c;
       var asansor5c;
       asansor1=svg.rect({
              x:50,
              y:1220,
              width:150,height:200,
              fill:'#FF2626'
          })
          asansor2c=svg.rect({
            x:50,
            y:1220,
            width:150,height:200,
            fill:'#FF2626'
        })
        asansor3c=svg.rect({
          x:50,
          y:1220,
          width:150,height:200,
          fill:'#FF2626'
      })
      asansor4c=svg.rect({
        x:50,
        y:1220,
        width:150,height:200,
        fill:'#FF2626'
    })
    asansor5c=svg.rect({
      x:50,
      y:1220,
      width:150,height:200,
      fill:'#FF2626'
  })
       setInterval(function(){
        if(asansorY==1220){
          yonY=yonY*-1;
          bol1=true;
        }
        if(asansorY==390){
          yonY=yonY*-1;
          bol1=true;
        }
        
        if(asansorY==1220){
         let counter=10;
            for(i=0;i<insanlar.length;i++){
              if( insanlar[i]>0 && counter>0){
              topArray[i].sanal.remove();
              top_sayisi--;
              insanlar[i]=0;
              sayac++;
              counter--;
              }
            }
            boolean1=true;
            upinsan=10;
            kapasite=0;
             for(i=400;i<1300;i=i+20){
               for(j=400;j<1300;j=j+20){
                 if(matrix[i][j]==6){
                   matrix[i][j]=1;
                 }
               }
             }
        }
       if(asansorY==1000){
        if(boolean1==true){
          let say=0;
          let counter=Math.floor((Math.random()*upinsan));   
        upinsan=upinsan-counter;
        if(kapasite<10){
          for(i=0;i<counter;i++){
            kapasite++;
            if(kapasite==10) break;
          }
          
          for(i=1040;i<1300;i++){
            for(j=1040;j<1140;j++){
              if(matrix[i][j]==1 && say!=counter){
              topOlustur11(i,j);
              top11++;
              matrix[i][j]=2;
              say++;
            }
          if(say==counter) break;
          }
          if(say==counter) break;
          }
        }
        
      }
        
        for(let q=0;q<topArray11.length;q++){
          for(i=1040;i<1300;i=i+20){
            for(j=1040;j<1140;j=j+20){
              if(matrix[i][j]==3 && topArray11[q].cx==i && topArray11[q].cy==j && kapasite>0){
                matrix[i][j]=6;
                console.log("r "+topArray11[q].cx);
                topOlustur9(i,j);
                top11--;
                kapasite--;
              }
              if(kapasite==0) break;
            }
            if(kapasite==0) break;
          }
          if(kapasite==0) break;
        }
      
  }
           
          
      
        else if(asansorY==780){
          if(boolean1==true){
          let counter=Math.floor((Math.random()*upinsan));  
          upinsan=upinsan-counter;
          if(kapasite<10){
            for(i=0;i<counter;i++){
              kapasite++;
              if(kapasite==10) break;
            }
            }
          console.log(kapasite+" kapasite");
          let say=0;
          for(i=1040;i<1300;i++){
            for(j=820;j<920;j++){
              if(matrix[i][j]==1 && say!=counter){
                topOlustur22(i,j);
                top22++;
              matrix[i][j]=2;
              say++;
            }
          if(say==counter) break;
          }
          if(say==counter) break;
        }  
      }
     for(let q=0;q<topArray22.length;q++){
      for(i=1040;i<1300;i++){
        for(j=820;j<920;j=j+20){
          if(matrix[i][j]==3 && topArray22[q].cx==i && topArray22[q].cy==j && kapasite>0){
            matrix[i][j]=6;
            indexler[i][j]=1;
            topOlustur9(i,j);
            kapasite--;
          }
          if(kapasite==0) break;
        }
        if(kapasite==0) break;
      }
      if(kapasite==0) break;
    }
    
    
    }
      else if(asansorY==590){
        if(boolean1==true){
        let counter=Math.floor((Math.random()*upinsan));  
          upinsan=upinsan-counter; 
          if(kapasite<10){
            for(i=0;i<counter;i++){
              kapasite++;
              if(kapasite==10) break;
            }
            }
            
          console.log(kapasite+" kapasite");
          let say=0;
          for(i=1040;i<1300;i++){
            for(j=620;j<720;j++){
              if(matrix[i][j]==1 && say!=counter){
                topOlustur33(i,j);
                top33++;
              matrix[i][j]=2;
              say++;
            }
          if(say==counter) break;
          }
          if(say==counter) break;
        }
      }
        
     for(let q=0;q<topArray33.length;q++){
      for(i=1040;i<1300;i++){
        for(j=620;j<720;j=j+20){
          if(matrix[i][j]==3 && topArray33[q].cx==i && topArray33[q].cy==j && kapasite>0){
        
            topOlustur9(i,j);
            indexler[i][j]=1;
            matrix[i][j]==6;
            kapasite--;
          }
          if(kapasite==0) break;
        }
        if(kapasite==0) break;
      }
      if(kapasite==0) break;
    }
    
      }
      else if(asansorY==420){
      if( boolean1==true){
        let counter=upinsan;
        if(kapasite<10){
          for(i=0;i<counter;i++){
            kapasite++;
            if(kapasite==10) break;
          }
          }
          console.log(kapasite+" kapasite");
          let say=0;
          for(i=1040;i<1300;i++){
            for(j=400;j<500;j++){
              if(matrix[i][j]==1 && say!=counter){
                topOlustur44(i,j);
                top44++;
              matrix[i][j]=2;
              say++;
            }
          if(say==counter) break;
          }
          if(say==counter) break;
        }
        boolean1=false;
      }
     for(let q=0;q<top44;q++){
      for(i=1040;i<1300;i++){
        for(j=400;j<500;j=j+20){
          if(matrix[i][j]==3 && topArray44[q].cx==i && topArray44[q].cy==j && kapasite>0){
            matrix[i][j]==6;
            topOlustur9(i,j);
            kapasite--;
          }
          if(kapasite==0) break;
        }
        if(kapasite==0) break;
      }
      if(kapasite==0) break;
    }
    
      }
    
        asansorY=asansorY+yonY;
           asansor1.attr({x:asansorX,y:asansorY});//svg nesnesinin attributelerini değiştirmeyi sağlar
           asansor1.remove();//svg nesnelerini silmeyi sağlar
             asansor1=svg.rect({
               x:asansorX,
               y:asansorY,
               width:150,height:200,
               fill:'#FF2626'
           })
   },1);
        

   
   setInterval(function(){
     if(boolean2==true){
    if(asansor2Y==1220){
      yon2Y=yon2Y*-1;
    }
    if(asansor2Y==390){
      yon2Y=yon2Y*-1;
    }
  }
  
  
  
    
    if(asansor2Y==1220){

        if(top_sayisi>20){
          let counter=10;
          for(i=0;i<topArray.length;i++){
            if( insanlar[i]>0 && counter>0){
            topArray[i].sanal.remove();
            top_sayisi--;
            insanlar[i]=0;
            sayac++;
            counter--;
            }
          }
            bol=true;
            boolean2=true;
        }
        else{
          boolean2=false;
        }
        for(i=400;i<1300;i=i+20){
          for(j=400;j<1300;j=j+20){
            if(matrix[i][j]==6){
              matrix[i][j]=1;
            }
          }
        }
        boolean22=true; 
        kapasite2=0;
        upinsan2=10;
    }
    if(asansor2Y==1000){
      if(boolean22==true){
      let counter=Math.floor((Math.random()*5+1));   
      upinsan2=upinsan2-counter;
      if(kapasite2<10){
        for(i=0;i<counter;i++){
          kapasite2++;
          if(kapasite2==10) break;
        }
        }
      let say=0;
      for(i=1040;i<1300;i++){
        for(j=1040;j<1140;j++){
          if(matrix[i][j]==1){
            topOlustur11(i,j);
            top11++;
          matrix[i][j]=2;
          say++;
        }
      if(say==counter) break;
      }
      if(say==counter) break;
    }
  }
  
      for(let q=0;q<top11;q++){
        for(i=1040;i<1300;i++){
          for(j=1040;j<1140;j=j+20){
            if(matrix[i][j]==3 && topArray11[q].cx==i && topArray11[q].cy==j && kapasite2>0){
               matrix[i][j]=6;
              topOlustur9(i,j);
              kapasite2--;
            }
            if(kapasite2==0) break;
          }
          if(kapasite2==0) break;
        }
        if(kapasite2==0) break;
      }
    
    }
      
  
    else if(asansor2Y==780){
      if(boolean22==true){
      let counter=Math.floor((Math.random()*5));  
      upinsan2=upinsan2-counter;
      if(kapasite2<10){
        for(i=0;i<counter;i++){
          kapasite2++;
          if(kapasite2==10) break;
        }
        }
      let say=0;
      for(i=1040;i<1300;i++){
        for(j=820;j<920;j++){
          if(matrix[i][j]==1){
            topOlustur22(i,j);
            top22++;
          matrix[i][j]=2;
          say++;
        }
      if(say==counter) break;
      }
      if(say==counter) break;
    }  
        } 
      for(let q=0;q<top22;q++){
        for(i=1040;i<1300;i++){
          for(j=820;j<920;j=j+20){
            if(matrix[i][j]==3 && topArray22[q].cx==i && topArray22[q].cy==j && kapasite2>0){
            
              matrix[i][j]=1;
              kapasite2--;
              topOlustur9(i,j);
            }
            if(kapasite2==0) break;
          }
          if(kapasite2==0) break;
        }
        if(kapasite2==0) break;
      }
  }
  else if(asansor2Y==590){
    if(boolean22==true){
    let counter=Math.floor((Math.random()*upinsan2));  
      upinsan2=upinsan2-counter;
      if(kapasite2<10){
        for(i=0;i<counter;i++){
          kapasite2++;
          if(kapasite2==10) break;
        }
        }
      let say=0;
      for(i=1040;i<1300;i++){
        for(j=620;j<720;j++){
          if(matrix[i][j]==1){
            topOlustur33(i,j);
            top33++;
          matrix[i][j]=2;
          say++;
        }
      if(say==counter) break;
      }
      if(say==counter) break;
    }
        }     
      for(let q=0;q<top33;q++){
        for(i=1040;i<1300;i++){
          for(j=620;j<720;j=j+20){
            if(matrix[i][j]==3 && topArray33[q].cx==i && topArray33[q].cy==j && kapasite2>0){
          
              matrix[i][j]=6;
              kapasite2--;
              topOlustur9(i,j);
            }
            if(kapasite2==0) break;
          }
          if(kapasite2==0) break;
        }
        if(kapasite2==0) break;
      }
  }
  else if(asansor2Y==420){
    if(boolean22==true){
    let counter=upinsan2;
    console.log("buraya giriyoe mu");
    if(kapasite2<10){
      for(i=0;i<counter;i++){
        kapasite2++;
        if(kapasite2==10) break;
      }
      }
      let say=0;
      for(i=1040;i<1300;i++){
        for(j=400;j<500;j++){
          if(matrix[i][j]==1){
            topOlustur44(i,j);
            top44++;
          matrix[i][j]=2;
          say++;
        }
      if(say==counter) break;
      }
      if(say==counter) break;
    }
        } 
       for(let q=0;q<top44;q++){
        for(i=1040;i<1300;i++){
          for(j=400;j<500;j=j+20){
            if(matrix[i][j]==3 && topArray44[q].cx==i && topArray44[q].cy==j && kapasite2>0){
              console.log(topArray6[q].cx+"rrr " + topArray44[q].cx);
              
              matrix[i][j]=6;
              kapasite2--;
              topOlustur9(i,j);
            }
            if(kapasite2==0) break;
          }
          if(kapasite2==0) break;
        }
        if(kapasite2==0) break;
      }
      
      upinsan2=10;
      boolean22=false;
  }
    if(boolean2==true){
    asansor2Y=asansor2Y+yon2Y;
  }
    asansor2c.attr({x:asansor2X,y:asansor2Y});//svg nesnesinin attributelerini değiştirmeyi sağlar
    asansor2c.remove();//svg nesnelerini silmeyi sağlar
      asansor2c=svg.rect({
        x:asansor2X,
        y:asansor2Y,
        width:150,height:200,
        fill:'#FF2626'
    })
  
  },5);


  setInterval(function(){
    if(boolean3==true && bol==true){
   if(asansor3Y==1220){
     yon3Y=yon3Y*-1;
   }
   if(asansor3Y==390){
     yon3Y=yon3Y*-1;
   }
 }
 
   
   if(asansor3Y==1220){

       if(top_sayisi>20 && bol==true){
         let counter=10;
         for(i=0;i<topArray.length;i++){
           if( insanlar[i]>0 && counter>0){
           topArray[i].sanal.remove();
           top_sayisi--;
           insanlar[i]=0;
           sayac++;
           counter--;
           }
         }
         boolean3=true;
         bol2=true;
       }
       else{
         boolean3=false;
       }
       for(i=400;i<1300;i=i+20){
        for(j=400;j<1300;j=j+20){
          if(matrix[i][j]==6){
            matrix[i][j]=1;
          }
        }
      }
         upinsan3=10;
         kapasite3=0;
       boolean33=true;
   }

   if(asansor3Y==1000 ){
     if(boolean33==true){
    let counter=Math.floor((Math.random()*5));   
    upinsan3=upinsan3-counter;
    if(kapasite3<10){
      for(i=0;i<counter;i++){
        kapasite3++;
        if(kapasite3==10) break;
      }
      }
    let say=0;
    for(i=1040;i<1300;i++){
      for(j=1040;j<1140;j++){
        if(matrix[i][j]==1){
          topOlustur11(i,j);
          top11++;
        matrix[i][j]=2;
        say++;
      }
    if(say==counter) break;
    }
    if(say==counter) break;
  }
}
  for(let q=0;q<top11;q++){
    for(i=1040;i<1300;i++){
      for(j=1040;j<1140;j=j+20){
        if(matrix[i][j]==3 && topArray11[q].cx==i && topArray11[q].cy==j && kapasite3>0){
           matrix[i][j]=6;
          topOlustur9(i,j);
          kapasite3--;
        }
        if(kapasite3==0) break;
      }
      if(kapasite3==0) break;
    }
    if(kapasite3==0) break;
  }

     }
    

  else if(asansor3Y==780){
    if(boolean33==true){
    let counter=Math.floor((Math.random()*5));  
    upinsan3=upinsan3-counter;
    if(kapasite3<10){
      for(i=0;i<counter;i++){
        kapasite3++;
        if(kapasite3==10) break;
      }
      }
    let say=0;
    for(i=1040;i<1300;i++){
      for(j=820;j<920;j++){
        if(matrix[i][j]==1){
          topOlustur22(i,j);
          top22++;
        matrix[i][j]=2;
        say++;
      }
    if(say==counter) break;
    }
    if(say==counter) break;
  }
}
for(let q=0;q<top22;q++){
  for(i=1040;i<1300;i++){
    for(j=820;j<920;j=j+20){
      if(matrix[i][j]==3 && topArray22[q].cx==i && topArray22[q].cy==j && kapasite3>0){
     
        matrix[i][j]=6;
        kapasite3--;
        topOlustur9(i,j);
      }
      if(kapasite3==0) break;
    }
    if(kapasite3==0) break;
  }
  if(kapasite3==0) break;
}
 
}
else if(asansor3Y==590 ){
  if(boolean33==true){
  let counter=Math.floor((Math.random()*upinsan3));  
    upinsan3=upinsan3-counter;
    if(kapasite3<10){
      for(i=0;i<counter;i++){
        kapasite3++;
        if(kapasite3==10) break;
      }
      }
    let say=0;
    for(i=1040;i<1300;i++){
      for(j=620;j<720;j++){
        if(matrix[i][j]==1){
          topOlustur33(i,j);
          top33++;
        matrix[i][j]=2;
        say++;
      }
    if(say==counter) break;
    }
    if(say==counter) break;
  }
}
for(let q=0;q<top33;q++){
  for(i=1040;i<1300;i++){
    for(j=620;j<720;j=j+20){
      if(matrix[i][j]==3 && topArray33[q].cx==i && topArray33[q].cy==j && kapasite3>0){
  
        matrix[i][j]=6;
        kapasite3--;
        topOlustur9(i,j);
      }
      if(kapasite3==0) break;
    }
    if(kapasite3==0) break;
  }
  if(kapasite3==0) break;
}

}
else if(asansor3Y==420 ){
  if(boolean33==true){
  let counter=upinsan3;
  if(kapasite3<10){
    for(i=0;i<counter;i++){
      kapasite3++;
      if(kapasite3==10) break;
    }
    }
    let say=0;
    if(counter>0){
    for(i=1040;i<1300;i++){
      for(j=400;j<500;j++){
        if(matrix[i][j]==1){
          topOlustur44(i,j);
          top44++;
        matrix[i][j]=2;
        say++;
      }
    if(say==counter) break;
    }
    if(say==counter) break;
    }
  }
}
for(let q=0;q<top44;q++){
  for(i=1040;i<1300;i++){
    for(j=400;j<500;j=j+20){
      if(matrix[i][j]==3 && topArray44[q].cx==i && topArray44[q].cy==j && kapasite3>0){
    
        matrix[i][j]=6;
        kapasite2--;
        topOlustur9(i,j);
      }
      if(kapasite3==0) break;
    }
    if(kapasite3==0) break;
  }
  if(kapasite3==0) break;
}
  upinsan3=10;
  boolean33=false;
}

   if(boolean3==true && bol==true){
   asansor3Y=asansor3Y+yon3Y;
 }
   asansor3c.attr({x:asansor3X,y:asansor3Y});//svg nesnesinin attributelerini değiştirmeyi sağlar
   asansor3c.remove();//svg nesnelerini silmeyi sağlar
     asansor3c=svg.rect({
       x:asansor3X,
       y:asansor3Y,
       width:150,height:200,
       fill:'#FF2626'
   })
 
 },5);



        setInterval(function(){
        if(boolean4==true && bol2==true){
        if(asansor4Y==1220){
          yon4Y=yon4Y*-1;
        }
        if(asansor4Y==390){
          yon4Y=yon4Y*-1;
        }
        }


        if(asansor4Y==1220){

            if(top_sayisi>20 && bol2==true){
              let counter=10;
              for(i=0;i<topArray.length;i++){
                if( insanlar[i]>0 && counter>0){
                topArray[i].sanal.remove();
                top_sayisi--;
                insanlar[i]=0;
                sayac++;
                counter--;
                }
                bol3=true;
              }
              boolean4=true;
            }
            else{
              boolean4=false;
            }
             upinsan4=10;
             kapasite4=0;
             boolean44=true;
             
        }
        if(asansor4Y==1000){
          if(boolean44==true){
          let counter=Math.floor((Math.random()*5));   
          upinsan4=upinsan4-counter;
          if(kapasite4<10){
            for(i=0;i<counter;i++){
              kapasite4++;
              if(kapasite4==10) break;
            }
            }
          let say=0;
          for(i=1040;i<1300;i++){
            for(j=1040;j<1140;j++){
              if(matrix[i][j]==1){
                topOlustur11(i,j);
                top11++;
              matrix[i][j]=2;
              say++;
            }
          if(say==counter) break;
          }
          if(say==counter) break;
        }
      }
      
      for(let q=0;q<top11;q++){
        for(i=1040;i<1300;i++){
          for(j=1040;j<1140;j=j+20){
            if(matrix[i][j]==3 && topArray11[q].cx==i && topArray11[q].cy==j && kapasite4>0){
               matrix[i][j]=6;
              topOlustur9(i,j);
              kapasite4--;
            }
            if(kapasite4==0) break;
          }
          if(kapasite4==0) break;
        }
        if(kapasite4==0) break;
      }
      
           }
          
      
        else if(asansor4Y==780){
          if(boolean44==true){
          let counter=Math.floor((Math.random()*5));  
          upinsan4=upinsan4-counter;
          if(kapasite4<10){
            for(i=0;i<counter;i++){
              kapasite4++;
              if(kapasite4==10) break;
            }
            }
          let say=0;
          for(i=1040;i<1300;i++){
            for(j=820;j<920;j++){
              if(matrix[i][j]==1){
                topOlustur22(i,j);
                top22++;
              matrix[i][j]=2;
              say++;
            }
          if(say==counter) break;
          }
          if(say==counter) break;
        }
      }
      for(let q=0;q<top22;q++){
        for(i=1040;i<1300;i++){
          for(j=820;j<920;j=j+20){
            if(matrix[i][j]==3 && topArray22[q].cx==i && topArray22[q].cy==j && kapasite4>0){
           
              matrix[i][j]=6;
              kapasite4--;
              topOlustur9(i,j);
            }
            if(kapasite4==0) break;
          }
          if(kapasite4==0) break;
        }
        if(kapasite4==0) break;
      }
      }
      else if(asansor4Y==590){
        if(boolean44==true){
        let counter=Math.floor((Math.random()*upinsan4));  
          upinsan4=upinsan4-counter;
          if(kapasite4<10){
            for(i=0;i<counter;i++){
              kapasite4++;
              if(kapasite4==10) break;
            }
            }
          let say=0;
          for(i=1040;i<1300;i++){
            for(j=620;j<720;j++){
              if(matrix[i][j]==1){
                topOlustur33(i,j);
                top33++;
              matrix[i][j]=2;
              say++;
            }
          if(say==counter) break;
          }
          if(say==counter) break;
        }

      }
      for(let q=0;q<top33;q++){
        for(i=1040;i<1300;i++){
          for(j=620;j<720;j=j+20){
            if(matrix[i][j]==3 && topArray33[q].cx==i && topArray33[q].cy==j && kapasite4>0){
        
              matrix[i][j]=6;
              kapasite4--;
              topOlustur9(i,j);
            }
            if(kapasite4==0) break;
          }
          if(kapasite4==0) break;
        }
        if(kapasite4==0) break;
      }
        
        
      }
      else if(asansor4Y==420){
        if(boolean44==true){
        let counter=upinsan4;
        if(kapasite4<10){
          for(i=0;i<counter;i++){
            kapasite4++;
            if(kapasite4==10) break;
          }
          }
          let say=0;
          for(i=1040;i<1300;i++){
            for(j=400;j<500;j++){
              if(matrix[i][j]==1){
                topOlustur44(i,j);
                top44++;
              matrix[i][j]=2;
              say++;
            }
          if(say==counter) break;
          }
          if(say==counter) break;
        }
      }
      for(let q=0;q<top44;q++){
        for(i=1040;i<1300;i++){
          for(j=400;j<500;j=j+20){
            if(matrix[i][j]==3 && topArray44[q].cx==i && topArray44[q].cy==j && kapasite4>0){
               matrix[i][j]=6;
              kapasite4--;
              topOlustur9(i,j);
            }
            if(kapasite4==0) break;
          }
          if(kapasite4==0) break;
        }
        if(kapasite4==0) break;
      }
        upinsan4=10;
        boolean44=false;
      }
        if(boolean4==true && bol2==true){
        asansor4Y=asansor4Y+yon4Y;
        }
        asansor4c.attr({x:asansor4X,y:asansor4Y});//svg nesnesinin attributelerini değiştirmeyi sağlar
        asansor4c.remove();//svg nesnelerini silmeyi sağlar
          asansor4c=svg.rect({
            x:asansor4X,
            y:asansor4Y,
            width:150,height:200,
            fill:'#FF2626'
        })

        },5);

        setInterval(function(){
          if(boolean5==true && bol3==true){
          if(asansor5Y==1220){
            yon5Y=yon5Y*-1;
          }
          if(asansor5Y==390){
            yon5Y=yon5Y*-1;
          }
          }
  
  
          if(asansor5Y==1220){
  
              if(top_sayisi>20 && bol3==true){
                let counter=10;
                for(i=0;i<topArray.length;i++){
                  if( insanlar[i]>0 && counter>0){
                  topArray[i].sanal.remove();
                  top_sayisi--;
                  insanlar[i]=0;
                  sayac++;
                  counter--;
                  }
                }
                boolean5=true;
              }
              else{
                boolean5=false;
              }
                
              boolean55=true;
              kapasite5=0;
              upinsan5=10;
              
          }
          if(asansor5Y==1000){
            if(boolean55=true){
            let counter=Math.floor((Math.random()*5));   
            upinsan5=upinsan5-counter;
            if(kapasite5<10){
              for(i=0;i<counter;i++){
                kapasite5++;
                if(kapasite5==10) break;
              }
              }
            let say=0;
            for(i=1040;i<1300;i++){
              for(j=1040;j<1140;j++){
                if(matrix[i][j]==1){
                  topOlustur11(i,j);
                  top11++;
                matrix[i][j]=2;
                say++;
              }
            if(say==counter) break;
            }
            if(say==counter) break;
          }
             }
            
        for(let q=0;q<top11;q++){
          for(i=1040;i<1300;i++){
            for(j=1040;j<1140;j=j+20){
              if(matrix[i][j]==3 && topArray11[q].cx==i && topArray11[q].cy==j && kapasite5>0){
                matrix[i][j]=6;
                topOlustur9(i,j);
                kapasite5--;
              }
              if(kapasite5==0) break;
            }
            if(kapasite5==0) break;
          }
          if(kapasite5==0) break;
        }
}         
        
          else if(asansor5Y==780){
            if(boolean55==true){
            let counter=Math.floor((Math.random()*5));  
            upinsan5=upinsan5-counter;
            if(kapasite5<10){
              for(i=0;i<counter;i++){
                kapasite5++;
                if(kapasite5==10) break;
              }
              }
            let say=0;
            for(i=1040;i<1300;i++){
              for(j=820;j<920;j++){
                if(matrix[i][j]==1){
                  topOlustur22(i,j);
                  top22++;
                matrix[i][j]=2;
                say++;
              }
            if(say==counter) break;
            }
            if(say==counter) break;
          }
             
        }
        for(let q=0;q<top22;q++){
          for(i=1040;i<1300;i++){
            for(j=820;j<920;j=j+20){
              if(matrix[i][j]==3 && topArray22[q].cx==i && topArray22[q].cy==j && kapasite5>0){
             
                matrix[i][j]=6;
                kapasite3--;
                topOlustur9(i,j);
              }
              if(kapasite5==0) break;
            }
            if(kapasite5==0) break;
          }
          if(kapasite5==0) break;
        }
      }
        else if(asansor5Y==590 ){
          if(boolean55==true){
          let counter=Math.floor((Math.random()*upinsan5));  
            upinsan5=upinsan5-counter;
            if(kapasite5<10){
              for(i=0;i<counter;i++){
                kapasite5++;
                if(kapasite5==10) break;
              }
              }
            let say=0;
            for(i=1040;i<1300;i++){
              for(j=620;j<720;j++){
                if(matrix[i][j]==1){
                  topOlustur33(i,j);
                  top33++;
                matrix[i][j]=2;
                say++;
              }
            if(say==counter) break;
            }
            if(say==counter) break;
          }
        }
        for(let q=0;q<top33;q++){
          for(i=1040;i<1300;i++){
            for(j=620;j<720;j=j+20){
              if(matrix[i][j]==3 && topArray33[q].cx==i && topArray33[q].cy==j && kapasite5>0){
          
                matrix[i][j]=6;
                kapasite3--;
                topOlustur9(i,j);
              }
              if(kapasite5==0) break;
            }
            if(kapasite5==0) break;
          }
          if(kapasite5==0) break;
        }
      }
        else if(asansor5Y==420){
          if(boolean55==true){
          let counter=upinsan5;
            let say=0;
            for(i=1040;i<1300;i++){
              for(j=400;j<500;j++){
                if(matrix[i][j]==1){
                  topOlustur44(i,j);
                  top44++;
                matrix[i][j]=2;
                say++;
              }
            if(say==counter) break;
            }
            if(say==counter) break;
          }
        }
        for(let q=0;q<top44;q++){
          for(i=1040;i<1300;i++){
            for(j=400;j<500;j=j+20){
              if(matrix[i][j]==3 && topArray44[q].cx==i && topArray44[q].cy==j && kapasite5>0){
            
                matrix[i][j]=6;
                kapasite2--;
                topOlustur9(i,j);
              }
              if(kapasite5==0) break;
            }
            if(kapasite5==0) break;
          }
          if(kapasite5==0) break;
        }
          upinsan5=10;
          boolean55=false;
        }

          if(boolean5==true && bol3==true){
          asansor5Y=asansor5Y+yon5Y;
          }
          asansor5c.attr({x:asansor5X,y:asansor5Y});//svg nesnesinin attributelerini değiştirmeyi sağlar
          asansor5c.remove();//svg nesnelerini silmeyi sağlar
            asansor5c=svg.rect({
              x:asansor5X,
              y:asansor5Y,
              width:150,height:200,
              fill:'#FF2626'
          })
  
          },5);

       function asansorOlustur(zx,zy)//tuğla oluşturan fonksiyon
       {
           asansor=svg.rect({
              x:zx,
              y:zy,
              width:150,height:200,
              fill:'#FF2626'
          })
     }
      function cizgiOlustur(zx,zy)//tuğla oluşturan fonksiyon
       {
           cizgi=svg.rect({
              x:zx,
              y:zy,
              width:1480,height:10,
              fill:'#FF2626'
          })

          
      }
       function tuglaOlustur(tx,ty)//tuğla oluşturan fonksiyon
         {
            var sanalTugla=svg.rect({
                x:tx,
                y:ty,
                width:150,height:20,
                fill:'#000000'
            })

        }
        
        // for(i=50;i<1000;i=i+20){
        //   topOlustur(i,1490);
        // // }
        // topArray[2].sanal.remove();
        //var top;
       function topOlustur(x,y)//tuğla oluşturan fonksiyon
       {
          var top=svg.circle({//daire oluşturmaya yarayan metot
             cx:x,
             cy:y,
             r:10,
             fill:'#060'
         });
         var top={
            cx:x,
            cy:y,
            guc:1,
            sanal:top
         }
         topArray.push(top);
    }
    function topOlustur1(x,y)//tuğla oluşturan fonksiyon
       {
          var top=svg.circle({//daire oluşturmaya yarayan metot
             cx:x,
             cy:y,
             r:10,
             fill:'#FF0000'
         });
         var top={
            cx:x,
            cy:y,
            guc:1,
            sanal:top
         }
         topArray1.push(top);
    }
    function topOlustur9(x,y)//tuğla oluşturan fonksiyon
       {
          var top=svg.circle({//daire oluşturmaya yarayan metot
             cx:x,
             cy:y,
             r:10.5,
             fill:'#ffffff'
         });
         var top={
            cx:x,
            cy:y,
            guc:1,
            sanal:top
         }
         topArray1.push(top);
    }
    function topOlustur2(x,y)//tuğla oluşturan fonksiyon
       {
          var top=svg.circle({//daire oluşturmaya yarayan metot
             cx:x,
             cy:y,
             r:10,
             fill:'#FF0000'
         });
         var top={
            cx:x,
            cy:y,
            guc:1,
            sanal:top
         }
         topArray2.push(top);
    }
    function topOlustur4(x,y)//tuğla oluşturan fonksiyon
       {
          var top=svg.circle({//daire oluşturmaya yarayan metot
             cx:x,
             cy:y,
             r:10,
             fill:'#FF0000'
         });
         var top={
            cx:x,
            cy:y,
            guc:1,
            sanal:top
         }
         topArray4.push(top);
    }
    function topOlustur5(x,y)//tuğla oluşturan fonksiyon
       {
          var top=svg.circle({//daire oluşturmaya yarayan metot
             cx:x,
             cy:y,
             r:10,
             fill:'#FF0000'
         });
         var top={
            cx:x,
            cy:y,
            guc:1,
            sanal:top
         }
         topArray5.push(top);
    }
    function topOlustur6(x,y)//tuğla oluşturan fonksiyon
       {
          var top=svg.circle({//daire oluşturmaya yarayan metot
             cx:x,
             cy:y,
             r:10,
             fill:'#FF0000'
         });
         var top={
            cx:x,
            cy:y,
            guc:1,
            sanal:top
         }
         topArray6.push(top);
    }
    function topOlustur7(x,y)//tuğla oluşturan fonksiyon
       {
          var top=svg.circle({//daire oluşturmaya yarayan metot
             cx:x,
             cy:y,
             r:10,
             fill:'#FF0000'
         });
         var top={
            cx:x,
            cy:y,
            guc:1,
            sanal:top
         }
         topArray7.push(top);
    }
    function topOlustur11(x,y)//tuğla oluşturan fonksiyon
       {
          var top=svg.circle({//daire oluşturmaya yarayan metot
             cx:x,
             cy:y,
             r:10,
             fill:'#060'
         });
         var top={
            cx:x,
            cy:y,
            guc:1,
            sanal:top
         }
         topArray11.push(top);
    }
    function topOlustur22(x,y)//tuğla oluşturan fonksiyon
       {
          var top=svg.circle({//daire oluşturmaya yarayan metot
             cx:x,
             cy:y,
             r:10,
             fill:'#060'
         });
         var top={
            cx:x,
            cy:y,
            guc:1,
            sanal:top
         }
         topArray22.push(top);
    }
    function topOlustur33(x,y)//tuğla oluşturan fonksiyon
       {
          var top=svg.circle({//daire oluşturmaya yarayan metot
             cx:x,
             cy:y,
             r:10,
             fill:'#060'
         });
         var top={
            cx:x,
            cy:y,
            guc:1,
            sanal:top
         }
         topArray33.push(top);
    }
    function topOlustur44(x,y)//tuğla oluşturan fonksiyon
       {
          var top=svg.circle({//daire oluşturmaya yarayan metot
             cx:x,
             cy:y,
             r:10,
             fill:'#060'
         });
         var top={
            cx:x,
            cy:y,
            guc:1,
            sanal:top
         }
         topArray44.push(top);
    }
    function topOlustur55(x,y)//tuğla oluşturan fonksiyon
       {
          var top=svg.circle({//daire oluşturmaya yarayan metot
             cx:x,
             cy:y,
             r:10,
             fill:'#060'
         });
         var top={
            cx:x,
            cy:y,
            guc:1,
            sanal:top
         }
         topArray55.push(top);
    }
})