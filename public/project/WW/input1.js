var n=0,k=0, c=0, h=0,demand_1=0,demand_2=0;
var demand_3=0,demand_4=0,demand_5=0,demand_6=0;
var demand_7=0,demand_8=0,demand_9=0,demand_10=0,demand_11=0,demand_12=0;

function input_interface(){
	
//duration
var selected_index = input_form.elements["month"].selectedIndex;
var selected_option_value_durat = input_form.elements["month"].options[selected_index].value;
var selected_option_text_durat = input_form.elements["month"].options[selected_index].text;


//setup cost

var selected_index1 = input_form.elements["setupcost"];
var selected_option_value_k = selected_index1.value;
 
 
//holding cost

var selected_index2 = input_form.elements["hcost"];
var selected_option_value_h = selected_index2.value;

//variable cost

var selected_index3 = input_form.elements["vcost"];
var selected_option_value_c = selected_index3.value;

/*if(selected_index > 0 && selected_option_value_k > 0)
{
	
   var d=selected_index;
   var k=selected_option_value_k;
 
}

else
{
	alert("Please enter the number of duration from the drop down list!");
}
*/	

if(selected_index > 0 )	{
	
	n = selected_option_text_durat;
 
	if(selected_option_value_k > 0){
		
		k = selected_option_value_k;
		
			if(selected_option_value_h > 0){
				
				h = selected_option_value_h;
				
					if(selected_option_value_c > 0){
				
						c = selected_option_value_c;
			
					}
		
					else{
				
						alert("Please enter the required variable cost!");
				
					}
			
			}
		
			else{
				
				alert("Please enter the required holding cost!");
				
			}
	}
				
				
	
	else{
		
		alert("Please enter the required setup cost!");
	
	}
	
}
		
else{

	alert("Please enter the number of duration from the drop down list!");
}
	
if((n>0) && (k>0) && (h>0) && (c>0)){
	
		demand_interface(n,k,h,c);
		
	}

	
}


		

			
function demand_interface(n,k,h,c){
		
	//import input3.css file
	document.write("<head><link href='input3.css' type='text/css' rel='stylesheet' /></head>");
	
	//body
	document.write("<body>");
	
	//the second input form
	document.write("<form id='input_form1' name='input_form_one'>");	
	document.write("<div class='split left'>");	
	document.write("<br />");
	
	for (var number=1; number<=n ; number++){	
		
		if(number<=9){
			
			document.write("<p class='body_font'>&ensp;Demand for product during period " + number + " , d<sub>" + number + "</sub>:&nbsp;&nbsp;&ensp;&ensp;&ensp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='number' id='demand_num"+number+"' name='demand_1' min='0' maxlength='50'/></p><br />");
		}

		else{
				
			document.write("<p class='body_font'>&ensp;Demand for product during period " + number + " , d<sub>" + number + "</sub>:&ensp;&ensp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='number' id='demand_num1"+number+"' name='demand_1' min='0' maxlength='50'/></p><br />");
						
		}
	}	
			
	document.write("<br><br><br>&emsp;&emsp;&emsp;<button style='height:50px;width:65px' onclick='input_interface()'><p class='body_font'>Back</p></button>");
	document.write("&emsp;&emsp;&emsp;<input type='button' style='height:50px;width:65px' onclick='validate_demand(n,k,h,c)' value='Next' /><p class='body_font'></p>  ");
	document.write("</div>");	
	
	//split right
	document.write("<div class='split right'>");
	document.write("<div class='centered'>");
	
	//right screen content
	document.write("<h2 class='title_font_right'> Do you know?</h2><br />");
	document.write("<p class='body_font'>Dynamic lot-size model is introduced by Harvey M. Wagner and Thomson M. Whitin in 1958. This model is used widely in inventory control management with the purpose that minimizes the total holding costs and setup costs.");
	document.write("</div>");
	document.write("</form>");
	
	document.write("</div>");			
	document.write("</body>");
	
}


function validate_demand(n,k,h,c){
	
	
	for(var number=1; number<=n; number++){
		
		switch(number){			
			case 1:
				demand_1=document.getElementById("demand_num"+number).value;
				
				if(demand_1>=0){
					break;
				}
				
				else{
					alert("Please enter the demand for product during period 1!");
					break;
				}
															
			case 2:
				demand_2=document.getElementById("demand_num"+number).value;
				
				if(demand_2>=0){
					break;
				}
				
				else{
					alert("Please enter the demand for product during period 2!");
					break;
				}
												
			case 3:
				demand_3=document.getElementById("demand_num"+number).value;
				
				if(demand_3>=0){
					break;
				}
				
				else{
					alert("Please enter the demand for product during period 3!");
					break;
				}
							
			case 4:
				demand_4=document.getElementById("demand_num"+number).value;
				
				if(demand_4>=0){
					break;
				}
				
				else{
					alert("Please enter the demand for product during period 4!");
					break;
				}
							
			case 5:
				demand_5=document.getElementById("demand_num"+number).value;
				
				if(demand_5>=0){
					break;
				}
				
				else{
					alert("Please enter the demand for product during period 5!");
					break;
				}
							
			case 6:
				demand_6=document.getElementById("demand_num"+number).value;
				
				if(demand_6>=0){
					break;
				}
				
				else{
					alert("Please enter the demand for product during period 6!");
					break;
				}
								
			case 7:
				demand_7=document.getElementById("demand_num"+number).value;
				
				if(demand_7>=0){
					break;
				}
				
				else{
					alert("Please enter the demand for product during period 7!");
					break;
				}
			
			case 8:
				demand_8=document.getElementById("demand_num"+number).value;
				
				if(demand_8>=0){
					break;
				}
				
				else{
					alert("Please enter the demand for product during period 8!");
					break;
				}
			
			case 9:
				demand_9=document.getElementById("demand_num"+number).value;
				
				if(demand_9>=0){
					break;
				}
				
				else{
					alert("Please enter the demand for product during period 9!");
					break;
				}
				
			case 10:
				demand_10 = document.getElementById("demand_num1"+number).value;
				
				if(demand_10>=0){
					break;
				}
				
				else{
					alert("Please enter the demand for product during period 10!");
					break;
				}
				
			case 11:
				demand_11=document.getElementById("demand_num1"+number).value;
				
				if(demand_11>=0){
					break;
				}
				
				else{
					alert("Please enter the demand for product during period 11!");
					break;
				}
				
			case 12:
				demand_12=document.getElementById("demand_num1"+number).value;
				
				if(demand_12>=0){
					
					break;
				}
				
				else{
					alert("Please enter the demand for product during period 12!");
					break;
				}
		}
		
	}	
			if((n==1) && (demand_1>0)){
				
				computation(n,k,h,c,demand_1,demand_2,demand_3,demand_4,demand_5,demand_6,demand_7,demand_8,demand_9,demand_10,demand_11,demand_12);
			}
			
						
			else if((n==2) && (demand_1>0) && (demand_2>0)){
						
				computation(n,k,h,c,demand_1,demand_2,demand_3,demand_4,demand_5,demand_6,demand_7,demand_8,demand_9,demand_10,demand_11,demand_12);
			}
				
			else if((n==3) && (demand_1>0) && (demand_2>0) &&(demand_3>0)){
						
				computation(n,k,h,c,demand_1,demand_2,demand_3,demand_4,demand_5,demand_6,demand_7,demand_8,demand_9,demand_10,demand_11,demand_12);
			}
			
			
			
			else if((n==4) && (demand_1>0) && (demand_2>0) && (demand_3>0) && (demand_4>0)){
					
				computation(n,k,h,c,demand_1,demand_2,demand_3,demand_4,demand_5,demand_6,demand_7,demand_8,demand_9,demand_10,demand_11,demand_12);
			}
			
			
				
			else if((n==5) && (demand_1>0) && (demand_2>0) && (demand_3>0) && (demand_4>0) && (demand_5>0)){
					
				computation(n,k,h,c,demand_1,demand_2,demand_3,demand_4,demand_5,demand_6,demand_7,demand_8,demand_9,demand_10,demand_11,demand_12);
			}	
			
			
			
			else if((n==6) && (demand_1>0) && (demand_2>0) && (demand_3>0) && (demand_4>0) && (demand_5>0)&& (demand_6>0)){
					
				computation(n,k,h,c,demand_1,demand_2,demand_3,demand_4,demand_5,demand_6,demand_7,demand_8,demand_9,demand_10,demand_11,demand_12);
			}	
			
			else if((n==7) && (demand_1>0) && (demand_2>0) && (demand_3>0) && (demand_4>0) && (demand_5>0)&& (demand_6>0) && (demand_7>0)){
					
				computation(n,k,h,c,demand_1,demand_2,demand_3,demand_4,demand_5,demand_6,demand_7,demand_8,demand_9,demand_10,demand_11,demand_12);
			}	
			
			else if((n==8) && (demand_1>0) && (demand_2>0) && (demand_3>0) && (demand_4>0) && (demand_5>0)&& (demand_6>0) && (demand_7>0) && (demand_8>0)){
					
				computation(n,k,h,c,demand_1,demand_2,demand_3,demand_4,demand_5,demand_6,demand_7,demand_8,demand_9,demand_10,demand_11,demand_12);
			}
			
			else if((n==9) && (demand_1>0) && (demand_2>0) && (demand_3>0) && (demand_4>0) && (demand_5>0)&& (demand_6>0) && (demand_7>0) && (demand_8>0) && (demand_9>0)){
					
				computation(n,k,h,c,demand_1,demand_2,demand_3,demand_4,demand_5,demand_6,demand_7,demand_8,demand_9,demand_10,demand_11,demand_12);
			}
			
			else if((n==10) && (demand_1>0) && (demand_2>0) && (demand_3>0) && (demand_4>0) && (demand_5>0)&& (demand_6>0) && (demand_7>0) && (demand_8>0) && (demand_9>0) && (demand_10>0)){
					
				computation(n,k,h,c,demand_1,demand_2,demand_3,demand_4,demand_5,demand_6,demand_7,demand_8,demand_9,demand_10,demand_11,demand_12);
			}
			
			else if((n==11) && (demand_1>0) && (demand_2>0) && (demand_3>0) && (demand_4>0) && (demand_5>0)&& (demand_6>0) && (demand_7>0) && (demand_8>0) && (demand_9>0) && (demand_10>0) &&(demand_11>0)){
					
				computation(n,k,h,c,demand_1,demand_2,demand_3,demand_4,demand_5,demand_6,demand_7,demand_8,demand_9,demand_10,demand_11,demand_12);
			}
			
			else if((n==12) && (demand_1>0) && (demand_2>0) && (demand_3>0) && (demand_4>0) && (demand_5>0)&& (demand_6>0) && (demand_7>0) && (demand_8>0) && (demand_9>0) && (demand_10>0) &&(demand_11>0) &&(demand_12>0)){
					
				computation(n,k,h,c,demand_1,demand_2,demand_3,demand_4,demand_5,demand_6,demand_7,demand_8,demand_9,demand_10,demand_11,demand_12);
			}
			
			else{
				
				alert("Please enter the required information!");
			}
			
											
}		

	
	

function computation(n,k,h,c,demand_1,demand_2,demand_3,demand_4,demand_5,demand_6,demand_7,demand_8,demand_9,demand_10,demand_11,demand_12){
		
			if (typeof (Storage) !== "undefined") {
													
			localStorage.setItem('num_of_duration', n);
			localStorage.setItem('setupcost', k);
			localStorage.setItem('holdingcost', h);
			localStorage.setItem('vccost', c);											
			localStorage.setItem('demand1', demand_1);
			localStorage.setItem('demand2', demand_2);
			localStorage.setItem('demand3', demand_3);
			localStorage.setItem('demand4', demand_4);
			localStorage.setItem('demand5', demand_5);
			localStorage.setItem('demand6', demand_6);
			localStorage.setItem('demand7', demand_7);
			localStorage.setItem('demand8', demand_8);
			localStorage.setItem('demand9', demand_9);
			localStorage.setItem('demand10', demand_10);
			localStorage.setItem('demand11', demand_11);
			localStorage.setItem('demand12', demand_12);	
			
			}
			
			else {
				
				window.alert("Sorry, your browser does not support Web Storage...");
			}
			
						
			window.location.href = "computation.html";
					
}                                        



	
	
	

	


	


	

	





