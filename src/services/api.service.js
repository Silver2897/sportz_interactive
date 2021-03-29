export const fetchDataFromAPI = async() => {
   let response;
          try{  
            const results = await fetch('https://api.npoint.io/20c1afef1661881ddc9c');
            return results.json();
    
          }
          catch(error){
            return error;
            response=error;
            console.log("Error",error)
          } 
          
          return response;
        };
 