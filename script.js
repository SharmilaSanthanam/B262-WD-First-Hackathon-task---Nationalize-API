function search(){
    var cc=document.getElementById('text').value;
    //console.log(cc);
    foo(cc);
  
}


function foo(cc){

    async function getdata(){
        let data=await fetch(`https://api.nationalize.io?name=`+cc);
        let datares=await data.json();
        console.log(datares);
        document.write("Name : " ,datares.name);
        document.write("<br>");

        try{
            document.write("Country_1 : ",datares.country[0].country_id);
            
        }
            
        catch(error){
           
            document.write("No data");
        }

        document.write("Country_1 : ",datares.country[0].country_id);
        document.write("<br>");
        document.write("Probability_1 : ",datares.country[0].probability);
        document.write("<br>");
        document.write("Country_2 : ",datares.country[1].country_id);
        document.write("<br>");
        document.write("Probability_2 : ",datares.country[1].probability);
        }
    getdata(); 

   


}


   
