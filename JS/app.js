 let counter = 0;
const toggleBtn = () =>{

    const content = document.getElementById('content');
   
    console.log(counter)
    if(counter === 0){

        content.style.display = 'inline';
        counter++;
        
    }else{
        counter = 0;
        content.style.display = 'none';
    }
   

}