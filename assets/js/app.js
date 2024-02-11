let cl=console.log;

function Creaatefun( fname,lname,email){
   
      this. fname = fname;
       this.lname= lname;
       this .email= email
   }

   let obja= new Creaatefun("john","duo","1gamil.com");
   cl(obja)
   let obja1= new Creaatefun("john","duo","1gamil.com");
   cl(obja1)


   let p= {
   fname: "dip",
   lname:"kam"
   }

   let p1=p;
   cl(p1)
   p1.fname =" pra";
   cl(p1)






   let arr=[[25,7][2,3][1,3]];
   let newarr= arr.flat();
   cl(newarr);