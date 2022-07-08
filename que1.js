//que1

1.//Find the Smaller Angle


var Minimal_Angle = (h, m) => 
{
   if( h===12){
            h = 0;
          }   
          if(m===60){
            m = 0;
            h+=1;
            if(h>12){
              h = h-12;
            }
          }
          let hAngle = 0.5*(h*60+m);
          let mAngle = 6*m;
          let res = Math.abs(hAngle-mAngle);
          res = Math.min((360-res),res);
          return res;   
};
 
