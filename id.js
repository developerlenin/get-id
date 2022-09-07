   
   
     let input = document.getElementById("input-number");
	   
	  let button= document.getElementById("input-button");
	   let button1= document.getElementById("input-button1");
	  
	  let screen1 =  document.getElementById("screen1");
	  let screen =  document.getElementById("screen");
	     
	       let one = function(){
			 let  p = document.createElement("p")
			  
			  p. innerText=input.value;
			  screen.appendChild(p);
			  input.value="";
			   
		   }
	   
	  button. addEventListener ("click" , function(){
		  one();
	  });
	  
	    let two = function(){
			let p = document.createElement("p")
			p.innerText=input.value;
			screen1.appendChild(p);
			input.value="";
			
		}
	  
	  button1. addEventListener("click", function(){
		  two();
	  });
	  
	  