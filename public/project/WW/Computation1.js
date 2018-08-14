
	n=parseInt(localStorage.getItem("num_of_duration"));
	k=parseInt(localStorage.getItem("setupcost"));	
	h=parseInt(localStorage.getItem("holdingcost"));
	c=parseInt(localStorage.getItem("vccost"));	
	demand1= parseInt(localStorage.getItem("demand1"));
	demand2= parseInt(localStorage.getItem("demand2"));
	demand3= parseInt(localStorage.getItem("demand3"));
	demand4= parseInt(localStorage.getItem("demand4"));
	demand5= parseInt(localStorage.getItem("demand5"));
	demand6= parseInt(localStorage.getItem("demand6"));
	demand7= parseInt(localStorage.getItem("demand7"));
	demand8= parseInt(localStorage.getItem("demand8"));
	demand9= parseInt(localStorage.getItem("demand9"));
	demand10= parseInt(localStorage.getItem("demand10"));
	demand11= parseInt(localStorage.getItem("demand11"));
	demand12= parseInt(localStorage.getItem("demand12"));
	
var f1=0, f2=0, f3=0, f4=0, f5=0, f6=0, f7=0, f8=0, f9=0, f10=0, f11=0, f12=0;
var d1=0, d2=0, d3=0, d4=0, d5=0, d6=0, d7=0, d8=0, d9=0, d10=0, d11=0, d12=0;
	
	//Computation
		
		
	if(n==12){
		
		stage12(k,c,h,demand1,demand2,demand3,demand4,demand5,demand6,demand7,demand8,demand9,demand10,demand11,demand12);
	
	}
	
	if(n==11){
		
		stage11(k,c,h,demand1,demand2,demand3,demand4,demand5,demand6,demand7,demand8,demand9,demand10,demand11);
	}
	
	if(n==10){
			
		stage10(k,c,h,demand1,demand2,demand3,demand4,demand5,demand6,demand7,demand8,demand9,demand10);
	}
	
	if(n==9){
			
		stage9(k,c,h,demand1,demand2,demand3,demand4,demand5,demand6,demand7,demand8,demand9);
		
	}
	if(n==8){
			
		stage8(k,c,h,demand1,demand2,demand3,demand4,demand5,demand6,demand7,demand8);
	}
	if(n==7){
			
		stage7(k,c,h,demand1,demand2,demand3,demand4,demand5,demand6,demand7);
	}
	if(n==6){
			
		stage6(k,c,h,demand1,demand2,demand3,demand4,demand5,demand6);
	}
	
	if(n==5){
			
		stage5(k,c,h,demand1,demand2,demand3,demand4,demand5);
	}
	
	if(n==4){
			
		stage4(k,c,h,demand1,demand2,demand3,demand4);
	}
	if(n==3){
			
		stage3(k,c,h,demand1,demand2,demand3);
	}
	if(n==2){
			
		stage2(k,c,h,demand1,demand2);
	}
	if(n==1){
			
		stage3(k,c,h,demand1);
	}



function stage12(k,c,h,demand1,demand2,demand3,demand4,demand5,demand6,demand7,demand8,demand9,demand10,demand11,demand12){
	
	//stage12
	
	var f13=0;
	f12=k+(c*demand12)+f13;
	d12=demand12;
	
	
		
	//stage 11
	
	f11_a= k+(c*demand11)+ f12;                              		
	f11_b= k + (c*(demand11+demand12)) + (h*demand12) + f13;  
	f11= Math.min(f11_a, f11_b);
	
	
	if(f11 == f11_a){
		
		d11=demand11;
	}
	
	else{
		
		d11=demand11+demand12;
		d12=0;
		
	}
		
		
	

	//stage 10
	
	f10_a= k+(c*demand10)+ f11;
	f10_b= k + (c*(demand10+demand11)) + (h*demand11) + f12;
	f10_c= k + (c*(demand10+demand11+demand12)) + (h*demand11) +(2*h*demand12)+ f13;
	f10= Math.min(f10_a,f10_b,f10_c);
	
	if(f10==f10_a){
		
		d10=demand10;
	}
	
	else if(f10 == f10_b){
		
		d10=demand10+demand11;
		d11=0;
		 
	}
	
	else{ 
		
		d10=demand10+demand11+demand12;
		d11=0;
		d12=0;
		 
	}
	
	
	
	//stage 9
	
	f9_a= k +(c*demand9)+ f10;
	f9_b= k + (c*(demand9+demand10)) + (h*demand10) + f11;
	f9_c= k + (c*(demand9+demand10+demand11)) + (h*demand10) +(2*h*demand11)+ f12;
	f9_d= k + (c*(demand9+demand10+demand11+demand12)) + (h*demand10) +(2*h*demand11)+(3*h*demand12)+ f13;
	f9= Math.min(f9_a,f9_b,f9_c,f9_d);
	
	if(f9==f9_a){
		
		d9=demand9;
	}
	
	else if(f9 == f9_b){
		
		d9=demand9+demand10;
		d10=0;
		  
	}
	
	else if(f9 == f9_c){
		
		d9=demand9+demand10+demand11;
		d10=0;
		d11=0;
		 
	}
	
	else{
		
		d9=demand9+demand10+demand11+demand12;
		d10=0;
		d11=0;
		d12=0;
		 
	}


	
	//stage 8
	
	f8_a= k +(c*demand8)+ f9;
	f8_b= k + (c*(demand8+demand9)) + (h*demand9) + f10;
	f8_c= k + (c*(demand8+demand9+demand10)) + (h*demand9) +(2*h*demand10)+ f11;
	f8_d= k + (c*(demand8+demand9+demand10+demand11)) + (h*demand9) +(2*h*demand10)+(3*h*demand11)+ f12;
	f8_e= k + (c*(demand8+demand9+demand10+demand11+demand12)) + (h*demand9) +(2*h*demand10)+(3*h*demand11)+ (4*h*demand12)+ f13;
	f8= Math.min(f8_a,f8_b,f8_c,f8_d,f8_e);
	
	if(f8==f8_a){
		
		d8=demand8;
	}
	
	else if(f8 == f8_b){
		
		d8=demand8+demand9;
		d9=0;
		 
	}
	
	else if(f8 == f8_c){
		
		d8=demand8+demand9+demand10;
		d9=0;
		d10=0;
		 
	}
	
	else if(f8 == f8_d){
		
		d8=demand8+demand9+demand10+demand11;
		d9=0;
		d10=0;
		d11=0;
		 
		
	}
	
	else{
		
		d8=demand8+demand9+demand10+demand11+demand12;
		d9=0;
		d10=0;
		d11=0;
		d12=0;
		 
	}
		

	
	//stage 7
	
	f7_a= k +(c*demand7)+ f8;
	f7_b= k + (c*(demand7+demand8)) + (h*demand8) + f9;
	f7_c= k + (c*(demand7+demand8+demand9)) + (h*demand8) +(2*h*demand9)+ f10;
	f7_d= k + (c*(demand7+demand8+demand9+demand10)) + (h*demand8) +(2*h*demand9)+(3*h*demand10)+ f11;
	f7_e= k + (c*(demand7+demand8+demand9+demand10+demand11)) + (h*demand8) +(2*h*demand9)+(3*h*demand10)+ (4*h*demand11)+ f12;
	f7_f= k + (c*(demand7+demand8+demand9+demand10+demand11+demand12)) + (h*demand8) +(2*h*demand9)+(3*h*demand10)+ (4*h*demand11)+ (5*h*demand12)+f13;
	f7= Math.min(f7_a,f7_b,f7_c,f7_d,f7_e,f7_f);
	
	if(f7==f7_a){
		
		d7=demand7;
	}
	
	else if(f7 == f7_b){
		
		d7=demand7+demand8;
		d8=0;
		 
	}
	
	else if(f7 == f7_c){
		
		d7=demand7+demand8+demand9;
		d8=0;
		d9=0;
		 
	}
	
	else if(f7 == f7_d){
		
		d7=demand7+demand8+demand9+demand10;
		d8=0;
		d9=0;
		 
	}
	
	else if(f7 == f7_e){
		
		d7=demand7+demand8+demand9+demand10+demand11;
		d8=0;
		d9=0;
		d10=0;
		d11=0;
	 
	}
	
	else{
		
		d7=demand7+demand8+demand9+demand10+demand11+demand12;
		d8=0;
		d9=0;
		d10=0;
		d11=0;
		d12=0;
  
	}
	
	
	
	//stage 6
	
	f6_a= k +(c*demand6)+ f7;
	f6_b= k + (c*(demand6+demand7)) + (h*demand7) + f8;
	f6_c= k + (c*(demand6+demand7+demand8)) + (h*demand7) +(2*h*demand8)+ f9;
	f6_d= k + (c*(demand6+demand7+demand8+demand9)) + (h*demand7) +(2*h*demand8)+(3*h*demand9)+ f10;
	f6_e= k + (c*(demand6+demand7+demand8+demand9+demand10)) + (h*demand7) +(2*h*demand8)+(3*h*demand9)+ (4*h*demand10)+ f11;
	f6_f= k + (c*(demand6+demand7+demand8+demand9+demand10+demand11)) + (h*demand7) +(2*h*demand8)+(3*h*demand9)+ (4*h*demand10)+ (5*h*demand11)+f12;
	f6_g= k + (c*(demand6+demand7+demand8+demand9+demand10+demand11+demand12)) + (h*demand7) +(2*h*demand8)+(3*h*demand9)+ (4*h*demand10)+ (5*h*demand11)+ (6*h*demand12)+f13;
	f6= Math.min(f6_a,f6_b,f6_c,f6_d,f6_e,f6_f,f6_g);
	
	if(f6==f6_a){
		
		d6=demand6;
	}
	
	else if(f6 == f6_b){
		
		d6=demand6+demand7;
		d7=0;
		
		 
	}
	
	else if(f6 == f6_c){
		
		d6=demand6+demand7+demand8;
		d7=0;
		d8=0;
		
		 
	}
	
	else if(f6 == f6_d){
		
		d6=demand6+demand7+demand8+demand9;
		d7=0;
		d8=0;
		d9=0;
	 
	}
	
	else if(f6 == f6_e){
		
		d6=demand6+demand7+demand8+demand9+demand10;
		d7=0;
		d8=0;
		d9=0;
		d10=0;
	  
	}
	
	else if(f6 == f6_f){
		
		d6=demand6+demand7+demand8+demand9+demand10+demand11;
		d7=0;
		d8=0;
		d9=0;
		d10=0;
		d11=0;
	 
				
	}
	
	else{
		
		d6=demand6+demand7+demand8+demand9+demand10+demand11+demand12;
		d7=0;
		d8=0;
		d9=0;
		d10=0;
		d11=0;
		d12=0;
	 
	}
	
	//stage 5
	
	f5_a= k +(c*demand5)+ f6;
	f5_b= k + (c*(demand5+demand6)) + (h*demand6) + f7;
	f5_c= k + (c*(demand5+demand6+demand7)) + (h*demand6) +(2*h*demand7)+ f8;
	f5_d= k + (c*(demand5+demand6+demand7+demand8)) + (h*demand6) +(2*h*demand7)+(3*h*demand8)+ f9;
	f5_e= k + (c*(demand5+demand6+demand7+demand8+demand9)) + (h*demand6) +(2*h*demand7)+(3*h*demand8)+ (4*h*demand9)+ f10;
	f5_f= k + (c*(demand5+demand6+demand7+demand8+demand9+demand10)) + (h*demand6) +(2*h*demand7)+(3*h*demand8)+ (4*h*demand9)+ (5*h*demand10)+f11;
	f5_g= k + (c*(demand5+demand6+demand7+demand8+demand9+demand10+demand11)) + (h*demand6) +(2*h*demand7)+(3*h*demand8)+ (4*h*demand9)+ (5*h*demand10)+ (6*h*demand11)+f12;
	f5_h= k + (c*(demand5+demand6+demand7+demand8+demand9+demand10+demand11+demand12)) + (h*demand6) +(2*h*demand7)+(3*h*demand8)+ (4*h*demand9)+ (5*h*demand10)+ (6*h*demand11)+(7*h*demand12)+f13;
	f5= Math.min(f5_a,f5_b,f5_c,f5_d,f5_e,f5_f,f5_g,f5_h);
	
	
	if(f5==f5_a){
		
		d5=demand5;
	}
	
	else if(f5 == f5_b){
		
		d5=demand5+demand6;
		d6=0;
	 
	}
	
	else if(f5 == f5_c){
		
		d5=demand5+demand6+demand7;
		d6=0;
		d7=0;
		
		 
	}
	
	else if(f5 == f5_d){
		
		d5=demand5+demand6+demand7+demand8;
		d6=0;
		d7=0;
		d8=0;
		
	 
	}
	
	else if(f5 == f5_e){
		
		d5=demand5+demand6+demand7+demand8+demand9;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
	 
	}
	
	else if(f5 == f5_f){
		
		d5=demand5+demand6+demand7+demand8+demand9+demand10;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		d10=0;
		
 
				
	}
	
	else if(f5 == f5_g){
		
		d5=demand5+demand6+demand7+demand8+demand9+demand10+demand11;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		d10=0;
		d11=0;
	 
	}
	
	else{
		
		d5=demand5+demand6+demand7+demand8+demand9+demand10+demand11+demand12;		
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		d10=0;
		d11=0;
		d12=0;
 
	}
	
	
	
	//stage 4
	
	f4_a= k +(c*demand4)+ f5;
	f4_b= k + (c*(demand4+demand5)) + (h*demand5) + f6;
	f4_c= k + (c*(demand4+demand5+demand6)) + (h*demand5) +(2*h*demand6)+ f7;
	f4_d= k + (c*(demand4+demand5+demand6+demand7)) + (h*demand5) +(2*h*demand6)+(3*h*demand7)+ f8;
	f4_e= k + (c*(demand4+demand5+demand6+demand7+demand8)) + (h*demand5) +(2*h*demand6)+(3*h*demand7)+ (4*h*demand8)+ f9;
	f4_f= k + (c*(demand4+demand5+demand6+demand7+demand8+demand9)) + (h*demand5) +(2*h*demand6)+(3*h*demand7)+ (4*h*demand8)+ (5*h*demand9)+f10;
	f4_g= k + (c*(demand4+demand5+demand6+demand7+demand8+demand9+demand10)) + (h*demand5) +(2*h*demand6)+(3*h*demand7)+ (4*h*demand8)+ (5*h*demand9)+ (6*h*demand10)+f11;
	f4_h= k + (c*(demand4+demand5+demand6+demand7+demand8+demand9+demand10+demand11)) + (h*demand5) +(2*h*demand6)+(3*h*demand7)+ (4*h*demand8)+ (5*h*demand9)+ (6*h*demand10)+(7*h*demand11)+f12;
	f4_i= k + (c*(demand4+demand5+demand6+demand7+demand8+demand9+demand10+demand11+demand12)) + (h*demand5) +(2*h*demand6)+(3*h*demand7)+ (4*h*demand8)+ (5*h*demand9)+ (6*h*demand10)+(7*h*demand11)+(8*h*demand12)+f13;
	f4= Math.min(f4_a,f4_b,f4_c,f4_d,f4_e,f4_f,f4_g,f4_h,f4_i);
	
	if(f4==f4_a){
		
		d4=demand4;
	}
	
	else if(f4 == f4_b){
		
		d4=demand4+demand5;
		d5=0;
 
	}
	
	else if(f4 == f4_c){
		
		d4=demand4+demand5+demand6;
		d5=0;
		d6=0;
	 
	}
	
	else if(f4 == f4_d){
		
		d4=demand4+demand5+demand6+demand7;
		d5=0;
		d6=0;
		d7=0;
 
	}
	
	else if(f4 == f4_e){
		
		d4=demand4+demand5+demand6+demand7+demand8;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
 
	}
	
	else if(f4 == f4_f){
		
		d4=demand4+demand5+demand6+demand7+demand8+demand9;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
	 
				
	}
	
	else if(f4 == f4_g){
		
		d4=demand4+demand5+demand6+demand7+demand8+demand9+demand10;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		d10=0;
	 
	}
	
	else if(f4 == f4_h){
		
		d4=demand4+demand5+demand6+demand7+demand8+demand9+demand10+demand11;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		d10=0;
		d11=0;
	 
	}
	
	else{
		
		d4=demand4+demand5+demand6+demand7+demand8+demand9+demand10+demand11+demand12;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		d10=0;
		d11=0;
		d12=0;
		
	 
	}
	
	
	//stage 3
	
	f3_a= k +(c*demand3)+ f4;
	f3_b= k + (c*(demand3+demand4)) + (h*demand4) + f5;
	f3_c= k + (c*(demand3+demand4+demand5)) + (h*demand4) +(2*h*demand5)+ f6;
	f3_d= k + (c*(demand3+demand4+demand5+demand6)) + (h*demand4) +(2*h*demand5)+(3*h*demand6)+ f7;
	f3_e= k + (c*(demand3+demand4+demand5+demand6+demand7)) + (h*demand4) +(2*h*demand5)+(3*h*demand6)+ (4*h*demand7)+ f8;
	f3_f= k + (c*(demand3+demand4+demand5+demand6+demand7+demand8)) + (h*demand4) +(2*h*demand5)+(3*h*demand6)+ (4*h*demand7)+ (5*h*demand8)+f9;
	f3_g= k + (c*(demand3+demand4+demand5+demand6+demand7+demand8+demand9)) + (h*demand4) +(2*h*demand5)+(3*h*demand6)+ (4*h*demand7)+ (5*h*demand8)+ (6*h*demand9)+f10;
	f3_h= k + (c*(demand3+demand4+demand5+demand6+demand7+demand8+demand9+demand10)) + (h*demand4) +(2*h*demand5)+(3*h*demand6)+ (4*h*demand7)+ (5*h*demand8)+ (6*h*demand9)+(7*h*demand10)+f11;
	f3_i= k + (c*(demand3+demand4+demand5+demand6+demand7+demand8+demand9+demand10+demand11)) + (h*demand4) +(2*h*demand5)+(3*h*demand6)+ (4*h*demand7)+ (5*h*demand8)+ (6*h*demand9)+(7*h*demand10)+(8*h*demand11)+f12;
	f3_j= k + (c*(demand3+demand4+demand5+demand6+demand7+demand8+demand9+demand10+demand11+demand12)) + (h*demand4) +(2*h*demand5)+(3*h*demand6)+ (4*h*demand7)+ (5*h*demand8)+ (6*h*demand9)+(7*h*demand10)+(8*h*demand11)+(9*h*demand12)+f13;
	f3= Math.min(f3_a,f3_b,f3_c,f3_d,f3_e,f3_f,f3_g,f3_h,f3_i,f3_j);
	
	
	if(f3==f3_a){
		
		d3=demand3;
	}
	
	else if(f3 == f3_b){
		
		d3=demand3+demand4;
		d4=0;
	 
	}
	
	else if(f3 == f3_c){
		
		d3=demand3+demand4+demand5;
		d4=0;
		d5=0;
	 
	}
	
	else if(f3 == f3_d){
		
		d3=demand3+demand4+demand5+demand6;
		d4=0;
		d5=0;
		d6=0;
		
	 
	}
	
	else if(f3 == f3_e){
		
		d3=demand3+demand4+demand5+demand6+demand7;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
	 
	}
	
	else if(f3 == f3_f){
		
		d3=demand3+demand4+demand5+demand6+demand7+demand8;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
	 
				
	}
	
	else if(f3 == f3_g){
		
		d3=demand3+demand4+demand5+demand6+demand7+demand8+demand9;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		
	 
	}
	
	else if(f3 == f3_h){
		
		d3=demand3+demand4+demand5+demand6+demand7+demand8+demand9+demand10;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		d10=0;
		
	 
	}
	
	else if(f3 ==f3_i){
		
		d3=demand3+demand4+demand5+demand6+demand7+demand8+demand9+demand10+demand11;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		d10=0;
		d11=0;
		
	 
	}
	
	else {
		
		d3=demand3+demand4+demand5+demand6+demand7+demand8+demand9+demand10+demand11+demand12;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		d10=0;
		d11=0;
		d12=0;
		
	 
	}
	
		
	//stage 2
	
	f2_a= k +(c*demand2)+ f3;
	f2_b= k + (c*(demand2+demand3)) + (h*demand3) + f4;
	f2_c= k + (c*(demand2+demand3+demand4)) + (h*demand3) +(2*h*demand4)+ f5;
	f2_d= k + (c*(demand2+demand3+demand4+demand5)) + (h*demand3) +(2*h*demand4)+(3*h*demand5)+ f6;
	f2_e= k + (c*(demand2+demand3+demand4+demand5+demand6)) + (h*demand3) +(2*h*demand4)+(3*h*demand5)+ (4*h*demand6)+ f7;
	f2_f= k + (c*(demand2+demand3+demand4+demand5+demand6+demand7)) + (h*demand3) +(2*h*demand4)+(3*h*demand5)+ (4*h*demand6)+ (5*h*demand7)+f8;
	f2_g= k + (c*(demand2+demand3+demand4+demand5+demand6+demand7+demand8)) + (h*demand3) +(2*h*demand4)+(3*h*demand5)+ (4*h*demand6)+ (5*h*demand7)+ (6*h*demand8)+f9;
	f2_h= k + (c*(demand2+demand3+demand4+demand5+demand6+demand7+demand8+demand9)) + (h*demand3) +(2*h*demand4)+(3*h*demand5)+ (4*h*demand6)+ (5*h*demand7)+ (6*h*demand8)+(7*h*demand9)+f10;
	f2_i= k + (c*(demand2+demand3+demand4+demand5+demand6+demand7+demand8+demand9+demand10)) + (h*demand3) +(2*h*demand4)+(3*h*demand5)+ (4*h*demand6)+ (5*h*demand7)+ (6*h*demand8)+(7*h*demand9)+(8*h*demand10)+f11;
	f2_j= k + (c*(demand2+demand3+demand4+demand5+demand6+demand7+demand8+demand9+demand10+demand11)) + (h*demand3) +(2*h*demand4)+(3*h*demand5)+ (4*h*demand6)+ (5*h*demand7)+ (6*h*demand8)+(7*h*demand9)+(8*h*demand10)+(9*h*demand11)+f12;
	f2_k= k + (c*(demand2+demand3+demand4+demand5+demand6+demand7+demand8+demand9+demand10+demand11+demand12)) + (h*demand3) +(2*h*demand4)+(3*h*demand5)+ (4*h*demand6)+ (5*h*demand7)+ (6*h*demand8)+(7*h*demand9)+(8*h*demand10)+(9*h*demand11)+(10*h*demand12)+f13;
	f2= Math.min(f2_a,f2_b,f2_c,f2_d,f2_e,f2_f,f2_g,f2_h,f2_i,f2_j,f2_k);
	
	if(f2==f2_a){
		
		d2=demand2;
	}
	
	else if(f2 == f2_b){
		
		d2=demand2+demand3;
		d3=0;
	 
	}
	
	else if(f2 == f2_c){
		
		d2=demand2+demand3+demand4;
		d3=0;
		d4=0;
	 
	}
	
	else if(f2 == f2_d){
		
		d2=demand2+demand3+demand4+demand5;
		d3=0;
		d4=0;
		d5=0;
	 
	}
	
	else if(f2 == f2_e){
		
		d2=demand2+demand3+demand4+demand5+demand6;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
	 
	}
	
	else if(f2 == f2_f){
		
		d2=demand2+demand3+demand4+demand5+demand6+demand7;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
	 
	}
	
	else if(f2 == f2_g){
		
		d2=demand2+demand3+demand4+demand5+demand6+demand7+demand8;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
	 
	}
	
	else if(f2 == f2_h){
		
		d2=demand2+demand3+demand4+demand5+demand6+demand7+demand8+demand9;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
	 
	}
	
	else if(f2 ==f2_i){
		
		d2=demand2+demand3+demand4+demand5+demand6+demand7+demand8+demand9+demand10;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		d10=0;
		
	 
	}
	
	else if(f2 ==f2_j){
		
		d2=demand2+demand3+demand4+demand5+demand6+demand7+demand8+demand9+demand10+demand11;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		d10=0;
		d11=0;
		
	 
	}
	
	else{
		
		d2=demand2+demand3+demand4+demand5+demand6+demand7+demand8+demand9+demand10+demand11+demand12;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		d10=0;
		d11=0;
		d12=0;
		
	 
	}
		
	
	
	//stage1 
	
	f1_a= k +(c*demand1)+ f2;
	f1_b= k + (c*(demand1+demand2)) + (h*demand2) + f3;
	f1_c= k + (c*(demand1+demand2+demand3)) + (h*demand2) +(2*h*demand3)+ f4;
	f1_d= k + (c*(demand1+demand2+demand3+demand4)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ f5;
	f1_e= k + (c*(demand1+demand2+demand3+demand4+demand5)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ (4*h*demand5)+ f6;
	f1_f= k + (c*(demand1+demand2+demand3+demand4+demand5+demand6)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ (4*h*demand5)+ (5*h*demand6)+f7;
	f1_g= k + (c*(demand1+demand2+demand3+demand4+demand5+demand6+demand7)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ (4*h*demand5)+ (5*h*demand6)+ (6*h*demand7)+f8;
	f1_h= k + (c*(demand1+demand2+demand3+demand4+demand5+demand6+demand7+demand8)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ (4*h*demand5)+ (5*h*demand6)+ (6*h*demand7)+(7*h*demand8)+f9;
	f1_i= k + (c*(demand1+demand2+demand3+demand4+demand5+demand6+demand7+demand8+demand9)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ (4*h*demand5)+ (5*h*demand6)+ (6*h*demand7)+(7*h*demand8)+(8*h*demand9)+f10;
	f1_j= k + (c*(demand1+demand2+demand3+demand4+demand5+demand6+demand7+demand8+demand9+demand10)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ (4*h*demand5)+ (5*h*demand6)+ (6*h*demand7)+(7*h*demand8)+(8*h*demand9)+(9*h*demand10)+f11;
	f1_k= k + (c*(demand1+demand2+demand3+demand4+demand5+demand6+demand7+demand8+demand9+demand10+demand11)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ (4*h*demand5)+ (5*h*demand6)+ (6*h*demand7)+(7*h*demand8)+(8*h*demand9)+(9*h*demand10)+(10*h*demand11)+f12;
	f1_l= k + (c*(demand1+demand2+demand3+demand4+demand5+demand6+demand7+demand8+demand9+demand10+demand11+demand12)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ (4*h*demand5)+ (5*h*demand6)+ (6*h*demand7)+(7*h*demand8)+(8*h*demand9)+(9*h*demand10)+(10*h*demand11)+(11*h*demand12)+f13;
	f1= Math.min(f1_a,f1_b,f1_c,f1_d,f1_e,f1_f,f1_g,f1_h,f1_i,f1_j,f1_k,f1_l);
	
	
	if(f1==f1_a){
		
		d1=demand1;
	}
	
	else if(f1 == f1_b){
		
		d1=demand1+demand2;
		d2=0;
	 
	}
	
	else if(f1 == f1_c){
		
		d1=demand1+demand2+demand3;
		d2=0;
		d3=0;
		
		 
	}
	
	else if(f1 == f1_d){
		
		d1=demand1+demand2+demand3+demand4;
		d2=0;
		d3=0;
		d4=0;
	 
	}
	
	else if(f1 == f1_e){
		
		d1=demand1+demand2+demand3+demand4+demand5;
		d2=0;
		d3=0;
		d4=0;
		d5=0;
	 
	}
	
	else if(f1 == f1_f){
		
		d1=demand1+demand2+demand3+demand4+demand5+demand6;
		d2=0;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		
	 
				
	}
	
	else if(f1 == f1_g){
		
		d1=demand1+demand2+demand3+demand4+demand5+demand6+demand7;
		d2=0;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		
	 
	}
	
	else if(f1 == f1_h){
		
		d1=demand1+demand2+demand3+demand4+demand5+demand6+demand7+demand8;
		d2=0;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		
	 
	}
	
	else if(f1 ==f1_i){
		
		d1=demand1+demand2+demand3+demand4+demand5+demand6+demand7+demand8+demand9;
		d2=0;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		
	}
	
	else if(f1 ==f1_j){
		
		d1=demand1+demand2+demand3+demand4+demand5+demand6+demand7+demand8+demand9+demand10;
		d2=0;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		d10=0;
	 
	}
	
	else if(f1 ==f1_k){
		
		d1=demand1+demand2+demand3+demand4+demand5+demand6+demand7+demand8+demand9+demand10+demand11;
		d2=0;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		d10=0;
		d11=0;
		
	 
	}
	
	else{
		
		
		d1=demand1+demand2+demand3+demand4+demand5+demand6+demand7+demand8+demand9+demand10+demand11+demand12;
		d2=0;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		d10=0;
		d11=0;
		d12=0;
		
	 
	}
		
}
	

function stage11(k,c,h,demand1,demand2,demand3,demand4,demand5,demand6,demand7,demand8,demand9,demand10,demand11){
	//stage11
	
	f12=0;
	f11= k+(c*demand11)+ f12;
	d11=demand11;

	
	//stage10
	f10_a= k+(c*demand10)+ f11;
	f10_b= k + (c*(demand10+demand11)) + (h*demand11) + f12;
	f10= Math.min(f10_a,f10_b);
	
	if(f10==f10_a){
		
		d10=demand10;
	}
	
	else{
		
		d10=demand10+demand11;
		d11=0;
		
		 
	}
	
 
	//stage9
	
	f9_a= k +(c*demand9)+ f10;
	f9_b= k + (c*(demand9+demand10)) + (h*demand10) + f11;
	f9_c= k + (c*(demand9+demand10+demand11)) + (h*demand10) +(2*h*demand11)+ f12;
	f9= Math.min(f9_a,f9_b,f9_c);
	
	if(f9==f9_a){
		
		d9=demand9;
	}
	
	else if(f9 == f9_b){
		
		d9=demand9+demand10;
		d10=0;
		 
	}
	
	else {
		
		d9=demand9+demand10+demand11;
		d10=0;
		d11=0;
		
	 
	}
	
	
	//stage8
	
	f8_a= k +(c*demand8)+ f9;
	f8_b= k + (c*(demand8+demand9)) + (h*demand9) + f10;
	f8_c= k + (c*(demand8+demand9+demand10)) + (h*demand9) +(2*h*demand10)+ f11;
	f8_d= k + (c*(demand8+demand9+demand10+demand11)) + (h*demand9) +(2*h*demand10)+(3*h*demand11)+ f12;
	f8= Math.min(f8_a,f8_b,f8_c,f8_d);
	
	if(f8==f8_a){
		
		d8=demand8;
	}
	
	else if(f8 == f8_b){
		
		d8=demand8+demand9;
		d9=0;
		 
		
	}
	
	else if(f8 == f8_c){
		
		d8=demand8+demand9+demand10;
		d9=0;
		d10=0;
		
		 
	}
	
	else{
		
		d8=demand8+demand9+demand10+demand11;
		d9=0;
		d10=0;
		d11=0;
		
	 
	}
	
	
	
	//stage7;
	
	f7_a= k +(c*demand7)+ f8;
	f7_b= k + (c*(demand7+demand8)) + (h*demand8) + f9;
	f7_c= k + (c*(demand7+demand8+demand9)) + (h*demand8) +(2*h*demand9)+ f10;
	f7_d= k + (c*(demand7+demand8+demand9+demand10)) + (h*demand8) +(2*h*demand9)+(3*h*demand10)+ f11;
	f7_e= k + (c*(demand7+demand8+demand9+demand10+demand11)) + (h*demand8) +(2*h*demand9)+(3*h*demand10)+ (4*h*demand11)+ f12;
	f7= Math.min(f7_a,f7_b,f7_c,f7_d,f7_e);
	
	if(f7==f7_a){
		
		d7=demand7;
	}
	
	else if(f7 == f7_b){
		
		d7=demand7+demand8;
		d8=0;
		
	 
		
	}
	
	else if(f7 == f7_c){
		
		d7=demand7+demand8+demand9;
		d8=0;
		d9=0;
		
		 
	}
	
	else if(f7 == f7_d){
		
		d7=demand7+demand8+demand9+demand10;
		d8=0;
		d9=0;
		d10=0;
		
		 
	}
	
	else{
		
		d7=demand7+demand8+demand9+demand10+demand11;
		d8=0;
		d9=0;
		d10=0;
		d11=0;
		
	 
	}
	
	
	
	//stage6
	
	f6_a= k +(c*demand6)+ f7;
	f6_b= k + (c*(demand6+demand7)) + (h*demand7) + f8;
	f6_c= k + (c*(demand6+demand7+demand8)) + (h*demand7) +(2*h*demand8)+ f9;
	f6_d= k + (c*(demand6+demand7+demand8+demand9)) + (h*demand7) +(2*h*demand8)+(3*h*demand9)+ f10;
	f6_e= k + (c*(demand6+demand7+demand8+demand9+demand10)) + (h*demand7) +(2*h*demand8)+(3*h*demand9)+ (4*h*demand10)+ f11;
	f6_f= k + (c*(demand6+demand7+demand8+demand9+demand10+demand11)) + (h*demand7) +(2*h*demand8)+(3*h*demand9)+ (4*h*demand10)+ (5*h*demand11)+f12;
	f6= Math.min(f6_a,f6_b,f6_c,f6_d,f6_e,f6_f);
	
	if(f6==f6_a){
		
		d6=demand6;
	}
	
	else if(f6 == f6_b){
		
		d6=demand6+demand7;
		d7=0;
		
	 
	}
	
	else if(f6 == f6_c){
		
		d6=demand6+demand7+demand8;
		d7=0;
		d8=0;
		
		 
		
	}
	
	else if(f6 == f6_d){
		
		d6=demand6+demand7+demand8+demand9;
		d7=0;
		d8=0;
		d9=0;
		
		 
	} 
	
	else if(f6 == f6_e){
		
		d6=demand6+demand7+demand8+demand9+demand10;
		d7=0;
		d8=0;
		d9=0;
		d10=0;
		
		 
	}
	
	else{
		
		d6=demand6+demand7+demand8+demand9+demand10+demand11;
		d7=0;
		d8=0;
		d9=0;
		d10=0;
		d11=0;
		
	 
				
	}
	
	
	
	//stage5
	f5_a= k +(c*demand5)+ f6;
	f5_b= k + (c*(demand5+demand6)) + (h*demand6) + f7;
	f5_c= k + (c*(demand5+demand6+demand7)) + (h*demand6) +(2*h*demand7)+ f8;
	f5_d= k + (c*(demand5+demand6+demand7+demand8)) + (h*demand6) +(2*h*demand7)+(3*h*demand8)+ f9;
	f5_e= k + (c*(demand5+demand6+demand7+demand8+demand9)) + (h*demand6) +(2*h*demand7)+(3*h*demand8)+ (4*h*demand9)+ f10;
	f5_f= k + (c*(demand5+demand6+demand7+demand8+demand9+demand10)) + (h*demand6) +(2*h*demand7)+(3*h*demand8)+ (4*h*demand9)+ (5*h*demand10)+f11;
	f5_g= k + (c*(demand5+demand6+demand7+demand8+demand9+demand10+demand11)) + (h*demand6) +(2*h*demand7)+(3*h*demand8)+ (4*h*demand9)+ (5*h*demand10)+ (6*h*demand11)+f12;
	f5= Math.min(f5_a,f5_b,f5_c,f5_d,f5_e,f5_f,f5_g);
	
	if(f5==f5_a){
		
		d5=demand5;
	}
	
	else if(f5 == f5_b){
		
		d5=demand5+demand6;
		d6=0;
	 
	}
	
	else if(f5 == f5_c){
		
		d5=demand5+demand6+demand7;
		d6=0;
		d7=0;
		
		 
	}
	
	else if(f5 == f5_d){
		
		d5=demand5+demand6+demand7+demand8;
		d6=0;
		d7=0;
		d8=0;
	 
	}
	
	else if(f5 == f5_e){
		
		d5=demand5+demand6+demand7+demand8+demand9;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		
	 
	}
	
	else if(f5 == f5_f){
		
		d5=demand5+demand6+demand7+demand8+demand9+demand10;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		d10=0;
		
	 
				
	}
	
	else{
		
		d5=demand5+demand6+demand7+demand8+demand9+demand10+demand11;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		d10=0;
		d11=0;
		
	 
	}
	
	
	//stage4
	
	f4_a= k +(c*demand4)+ f5;
	f4_b= k + (c*(demand4+demand5)) + (h*demand5) + f6;
	f4_c= k + (c*(demand4+demand5+demand6)) + (h*demand5) +(2*h*demand6)+ f7;
	f4_d= k + (c*(demand4+demand5+demand6+demand7)) + (h*demand5) +(2*h*demand6)+(3*h*demand7)+ f8;
	f4_e= k + (c*(demand4+demand5+demand6+demand7+demand8)) + (h*demand5) +(2*h*demand6)+(3*h*demand7)+ (4*h*demand8)+ f9;
	f4_f= k + (c*(demand4+demand5+demand6+demand7+demand8+demand9)) + (h*demand5) +(2*h*demand6)+(3*h*demand7)+ (4*h*demand8)+ (5*h*demand9)+f10;
	f4_g= k + (c*(demand4+demand5+demand6+demand7+demand8+demand9+demand10)) + (h*demand5) +(2*h*demand6)+(3*h*demand7)+ (4*h*demand8)+ (5*h*demand9)+ (6*h*demand10)+f11;
	f4_h= k + (c*(demand4+demand5+demand6+demand7+demand8+demand9+demand10+demand11)) + (h*demand5) +(2*h*demand6)+(3*h*demand7)+ (4*h*demand8)+ (5*h*demand9)+ (6*h*demand10)+(7*h*demand11)+f12;
	f4= Math.min(f4_a,f4_b,f4_c,f4_d,f4_e,f4_f,f4_g,f4_h);
	
	if(f4==f4_a){
		
		d4=demand4;
	}
	
	else if(f4 == f4_b){
		
		d4=demand4+demand5;
		d5=0;
		
		 
	}
	
	else if(f4 == f4_c){
		
		d4=demand4+demand5+demand6;
		d5=0;
		d6=0;
		 
		
	}
	
	else if(f4 == f4_d){
		
		d4=demand4+demand5+demand6+demand7;
		d5=0;
		d6=0;
		d7=0;
		
	 
	}
	
	else if(f4 == f4_e){
		
		d4=demand4+demand5+demand6+demand7+demand8;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		
	 
	}
	
	else if(f4 == f4_f){
		
		d4=demand4+demand5+demand6+demand7+demand8+demand9;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		
	 
				
	}
	
	else if(f4 == f4_g){
		
		d4=demand4+demand5+demand6+demand7+demand8+demand9+demand10;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		d10=0;
		
	 
	}
	
	else{
		
		d4=demand4+demand5+demand6+demand7+demand8+demand9+demand10+demand11;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		d10=0;
		d11=0;
	 
	}
	
	
	
	
	//stage3
	
	
	f3_a= k +(c*demand3)+ f4;
	f3_b= k + (c*(demand3+demand4)) + (h*demand4) + f5;
	f3_c= k + (c*(demand3+demand4+demand5)) + (h*demand4) +(2*h*demand5)+ f6;
	f3_d= k + (c*(demand3+demand4+demand5+demand6)) + (h*demand4) +(2*h*demand5)+(3*h*demand6)+ f7;
	f3_e= k + (c*(demand3+demand4+demand5+demand6+demand7)) + (h*demand4) +(2*h*demand5)+(3*h*demand6)+ (4*h*demand7)+ f8;
	f3_f= k + (c*(demand3+demand4+demand5+demand6+demand7+demand8)) + (h*demand4) +(2*h*demand5)+(3*h*demand6)+ (4*h*demand7)+ (5*h*demand8)+f9;
	f3_g= k + (c*(demand3+demand4+demand5+demand6+demand7+demand8+demand9)) + (h*demand4) +(2*h*demand5)+(3*h*demand6)+ (4*h*demand7)+ (5*h*demand8)+ (6*h*demand9)+f10;
	f3_h= k + (c*(demand3+demand4+demand5+demand6+demand7+demand8+demand9+demand10)) + (h*demand4) +(2*h*demand5)+(3*h*demand6)+ (4*h*demand7)+ (5*h*demand8)+ (6*h*demand9)+(7*h*demand10)+f11;
	f3_i= k + (c*(demand3+demand4+demand5+demand6+demand7+demand8+demand9+demand10+demand11)) + (h*demand4) +(2*h*demand5)+(3*h*demand6)+ (4*h*demand7)+ (5*h*demand8)+ (6*h*demand9)+(7*h*demand10)+(8*h*demand11)+f12;
	f3= Math.min(f3_a,f3_b,f3_c,f3_d,f3_e,f3_f,f3_g,f3_h,f3_i);
	
	if(f3==f3_a){
		
		d3=demand3;
	}
	
	else if(f3 == f3_b){
		
		d3=demand3+demand4;
		d4=0;
		
		 
	}
	
	else if(f3 == f3_c){
		
		d3=demand3+demand4+demand5;
		d4=0;
		d5=0;
	 
	}
	
	else if(f3 == f3_d){
		
		d3=demand3+demand4+demand5+demand6;
		d4=0;
		d5=0;
		d6=0;
	 
	}
	
	else if(f3 == f3_e){
		
		d3=demand3+demand4+demand5+demand6+demand7;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
	 
	}
	
	else if(f3 == f3_f){
		
		d3=demand3+demand4+demand5+demand6+demand7+demand8;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		
	 
				
	}
	
	else if(f3 == f3_g){
		
		d3=demand3+demand4+demand5+demand6+demand7+demand8+demand9;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		
	 
	}
	
	else if(f3 == f3_h){
		
		d3=demand3+demand4+demand5+demand6+demand7+demand8+demand9+demand10;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		d10=0;
	 
	}
	
	else{
		
		d3=demand3+demand4+demand5+demand6+demand7+demand8+demand9+demand10+demand11;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		d10=0;
		d11=0;
	 
	}
	
	
	//stage2
	
		
	f2_a= k +(c*demand2)+ f3;
	f2_b= k + (c*(demand2+demand3)) + (h*demand3) + f4;
	f2_c= k + (c*(demand2+demand3+demand4)) + (h*demand3) +(2*h*demand4)+ f5;
	f2_d= k + (c*(demand2+demand3+demand4+demand5)) + (h*demand3) +(2*h*demand4)+(3*h*demand5)+ f6;
	f2_e= k + (c*(demand2+demand3+demand4+demand5+demand6)) + (h*demand3) +(2*h*demand4)+(3*h*demand5)+ (4*h*demand6)+ f7;
	f2_f= k + (c*(demand2+demand3+demand4+demand5+demand6+demand7)) + (h*demand3) +(2*h*demand4)+(3*h*demand5)+ (4*h*demand6)+ (5*h*demand7)+f8;
	f2_g= k + (c*(demand2+demand3+demand4+demand5+demand6+demand7+demand8)) + (h*demand3) +(2*h*demand4)+(3*h*demand5)+ (4*h*demand6)+ (5*h*demand7)+ (6*h*demand8)+f9;
	f2_h= k + (c*(demand2+demand3+demand4+demand5+demand6+demand7+demand8+demand9)) + (h*demand3) +(2*h*demand4)+(3*h*demand5)+ (4*h*demand6)+ (5*h*demand7)+ (6*h*demand8)+(7*h*demand9)+f10;
	f2_i= k + (c*(demand2+demand3+demand4+demand5+demand6+demand7+demand8+demand9+demand10)) + (h*demand3) +(2*h*demand4)+(3*h*demand5)+ (4*h*demand6)+ (5*h*demand7)+ (6*h*demand8)+(7*h*demand9)+(8*h*demand10)+f11;
	f2_j= k + (c*(demand2+demand3+demand4+demand5+demand6+demand7+demand8+demand9+demand10+demand11)) + (h*demand3) +(2*h*demand4)+(3*h*demand5)+ (4*h*demand6)+ (5*h*demand7)+ (6*h*demand8)+(7*h*demand9)+(8*h*demand10)+(9*h*demand11)+f12;
	f2= Math.min(f2_a,f2_b,f2_c,f2_d,f2_e,f2_f,f2_g,f2_h,f2_i,f2_j);
	
	if(f2==f2_a){
		
		d2=demand2;
	}
	
	else if(f2 == f2_b){
		
		d2=demand2+demand3;
		d3=0;
		
	}	 
	
	else if(f2 == f2_c){
		
		d2=demand2+demand3+demand4;
		d3=0;
		d4=0;
	 
	}
	
	else if(f2 == f2_d){
		
		d2=demand2+demand3+demand4+demand5;
		d3=0;
		d4=0;
		d5=0;
		
	 
	}
	
	else if(f2 == f2_e){
		
		d2=demand2+demand3+demand4+demand5+demand6;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		
	 
	}
	
	else if(f2 == f2_f){
		
		d2=demand2+demand3+demand4+demand5+demand6+demand7;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
	 	
	}
	
	else if(f2 == f2_g){
		
		d2=demand2+demand3+demand4+demand5+demand6+demand7+demand8;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		
	 
	}
	
	else if(f2 == f2_h){
		
		d2=demand2+demand3+demand4+demand5+demand6+demand7+demand8+demand9;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		
	 
	}
	
	else if(f2 ==f2_i){
		
		d2=demand2+demand3+demand4+demand5+demand6+demand7+demand8+demand9+demand10;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		d10=0;
		
	 
	}
	
	else{
		
		d2=demand2+demand3+demand4+demand5+demand6+demand7+demand8+demand9+demand10+demand11;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		d10=0;
		d11=0;
	 
	}
	
	
	//stage1
	
	f1_a= k +(c*demand1)+ f2;
	f1_b= k + (c*(demand1+demand2)) + (h*demand2) + f3;
	f1_c= k + (c*(demand1+demand2+demand3)) + (h*demand2) +(2*h*demand3)+ f4;
	f1_d= k + (c*(demand1+demand2+demand3+demand4)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ f5;
	f1_e= k + (c*(demand1+demand2+demand3+demand4+demand5)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ (4*h*demand5)+ f6;
	f1_f= k + (c*(demand1+demand2+demand3+demand4+demand5+demand6)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ (4*h*demand5)+ (5*h*demand6)+f7;
	f1_g= k + (c*(demand1+demand2+demand3+demand4+demand5+demand6+demand7)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ (4*h*demand5)+ (5*h*demand6)+ (6*h*demand7)+f8;
	f1_h= k + (c*(demand1+demand2+demand3+demand4+demand5+demand6+demand7+demand8)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ (4*h*demand5)+ (5*h*demand6)+ (6*h*demand7)+(7*h*demand8)+f9;
	f1_i= k + (c*(demand1+demand2+demand3+demand4+demand5+demand6+demand7+demand8+demand9)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ (4*h*demand5)+ (5*h*demand6)+ (6*h*demand7)+(7*h*demand8)+(8*h*demand9)+f10;
	f1_j= k + (c*(demand1+demand2+demand3+demand4+demand5+demand6+demand7+demand8+demand9+demand10)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ (4*h*demand5)+ (5*h*demand6)+ (6*h*demand7)+(7*h*demand8)+(8*h*demand9)+(9*h*demand10)+f11;
	f1_k= k + (c*(demand1+demand2+demand3+demand4+demand5+demand6+demand7+demand8+demand9+demand10+demand11)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ (4*h*demand5)+ (5*h*demand6)+ (6*h*demand7)+(7*h*demand8)+(8*h*demand9)+(9*h*demand10)+(10*h*demand11)+f12;
	f1= Math.min(f1_a,f1_b,f1_c,f1_d,f1_e,f1_f,f1_g,f1_h,f1_i,f1_j,f1_k);
	
	if(f1==f1_a){
		
		d1=demand1;
	}
	
	else if(f1 == f1_b){
		
		d1=demand1+demand2;
		d2=0;
		 
	}
	
	else if(f1 == f1_c){
		
		d1=demand1+demand2+demand3;
		d2=0;
		d3=0;
		
		 
		
	}
	
	else if(f1 == f1_d){
		
		d1=demand1+demand2+demand3+demand4;
		d2=0;
		d3=0;
		d4=0;
	 
	}
	
	else if(f1 == f1_e){
		
		d1=demand1+demand2+demand3+demand4+demand5;
		d2=0;
		d3=0;
		d4=0;
		d5=0;
		
		 
	}
	
	else if(f1 == f1_f){
		
		d1=demand1+demand2+demand3+demand4+demand5+demand6;
		d2=0;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		 
				
	}
	
	else if(f1 == f1_g){
		
		d1=demand1+demand2+demand3+demand4+demand5+demand6+demand7;
		d2=0;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
	 
		
	}
	
	else if(f1 == f1_h){
		
		d1=demand1+demand2+demand3+demand4+demand5+demand6+demand7+demand8;
		d2=0;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		
	 
	}
	
	else if(f1 ==f1_i){
		
		d1=demand1+demand2+demand3+demand4+demand5+demand6+demand7+demand8+demand9;
		d2=0;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
	 
	}
	
	else if(f1 ==f1_j){
		
		d1=demand1+demand2+demand3+demand4+demand5+demand6+demand7+demand8+demand9+demand10;
		d2=0;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		d10=0;
		
	 
	}
	
	else{
		
		d1=demand1+demand2+demand3+demand4+demand5+demand6+demand7+demand8+demand9+demand10+demand11;
		d2=0;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		d10=0;
		d11=0;
		
	 
	}
	
	
}

function stage10(k,c,h,demand1,demand2,demand3,demand4,demand5,demand6,demand7,demand8,demand9,demand10){
	
	var f11=0;
	
	//stage10
	
	f10= k+(c*demand10)+ f11;
	d10=demand10;
	
	
	//stage9
	
	f9_a= k +(c*demand9)+ f10;
	f9_b= k + (c*(demand9+demand10)) + (h*demand10) + f11;
	f9= Math.min(f9_a,f9_b);
	
	if(f9==f9_a){
		
		d9=demand9;
	}
	
	else{
		
		d9=demand9+demand10;
		d10=0;
		 
	}
	
	//stage8
	
	f8_a= k +(c*demand8)+ f9;
	f8_b= k + (c*(demand8+demand9)) + (h*demand9) + f10;
	f8_c= k + (c*(demand8+demand9+demand10)) + (h*demand9) +(2*h*demand10)+ f11;
	f8= Math.min(f8_a,f8_b,f8_c);
	if(f8==f8_a){
		
		d8=demand8;
	}
	
	else if(f8 == f8_b){
		
		d8=demand8+demand9;
		d9=0;
		 
	}
	
	else{
		
		d8=demand8+demand9+demand10;
		d9=0;
		d10=0;
		
		 
	}
	
	//stage 7
	
	f7_a= k +(c*demand7)+ f8;
	f7_b= k + (c*(demand7+demand8)) + (h*demand8) + f9;
	f7_c= k + (c*(demand7+demand8+demand9)) + (h*demand8) +(2*h*demand9)+ f10;
	f7_d= k + (c*(demand7+demand8+demand9+demand10)) + (h*demand8) +(2*h*demand9)+(3*h*demand10)+ f11;
	f7= Math.min(f7_a,f7_b,f7_c,f7_d);
	
	if(f7==f7_a){
		
		d7=demand7;
	}
	
	else if(f7 == f7_b){
		
		d7=demand7+demand8;
		d8=0;
		
		 
	}
	
	else if(f7 == f7_c){
		
		d7=demand7+demand8+demand9;
		d8=0;
		d9=0;
		 
	}
	
	else{
		
		d7=demand7+demand8+demand9+demand10;
		d8=0;
		d9=0;
		d10=0;
		
		 
	}

	
	//stage 6
	
	f6_a= k +(c*demand6)+ f7;
	f6_b= k + (c*(demand6+demand7)) + (h*demand7) + f8;
	f6_c= k + (c*(demand6+demand7+demand8)) + (h*demand7) +(2*h*demand8)+ f9;
	f6_d= k + (c*(demand6+demand7+demand8+demand9)) + (h*demand7) +(2*h*demand8)+(3*h*demand9)+ f10;
	f6_e= k + (c*(demand6+demand7+demand8+demand9+demand10)) + (h*demand7) +(2*h*demand8)+(3*h*demand9)+ (4*h*demand10)+ f11;
	f6= Math.min(f6_a,f6_b,f6_c,f6_d,f6_e);
	
	if(f6==f6_a){
		
		d6=demand6;
	}
	
	else if(f6 == f6_b){
		
		d6=demand6+demand7;
		d7=0;
		
		 
	}
	
	else if(f6 == f6_c){
		
		d6=demand6+demand7+demand8;
		d7=0;
		d8=0;
		
		 
	}
	
	else if(f6 == f6_d){
		
		d6=demand6+demand7+demand8+demand9;
		d7=0;
		d8=0;
		d9=0;
		
		 
	}
	
	else{
		
		d6=demand6+demand7+demand8+demand9+demand10;
		d7=0;
		d8=0;
		d9=0;
		d10=0;
		 
	}
		
	//stage 5
	
	f5_a= k +(c*demand5)+ f6;
	f5_b= k + (c*(demand5+demand6)) + (h*demand6) + f7;
	f5_c= k + (c*(demand5+demand6+demand7)) + (h*demand6) +(2*h*demand7)+ f8;
	f5_d= k + (c*(demand5+demand6+demand7+demand8)) + (h*demand6) +(2*h*demand7)+(3*h*demand8)+ f9;
	f5_e= k + (c*(demand5+demand6+demand7+demand8+demand9)) + (h*demand6) +(2*h*demand7)+(3*h*demand8)+ (4*h*demand9)+ f10;
	f5_f= k + (c*(demand5+demand6+demand7+demand8+demand9+demand10)) + (h*demand6) +(2*h*demand7)+(3*h*demand8)+ (4*h*demand9)+ (5*h*demand10)+f11;
	f5= Math.min(f5_a,f5_b,f5_c,f5_d,f5_e,f5_f);
	
	if(f5==f5_a){
		
		d5=demand5;
	}
	
	else if(f5 == f5_b){
		
		d5=demand5+demand6;
		d6=0;
		 
	}
	
	else if(f5 == f5_c){
		
		d5=demand5+demand6+demand7;
		d6=0;
		d7=0;
		
		 
		
		
	}
	
	else if(f5 == f5_d){
		
		d5=demand5+demand6+demand7+demand8;
		d6=0;
		d7=0;
		d8=0;
		
		 
	}
	
	else if(f5 == f5_e){
		
		d5=demand5+demand6+demand7+demand8+demand9;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		
		 
	}
	
	else{
		
		d5=demand5+demand6+demand7+demand8+demand9+demand10;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		d10=0;
		 
				
	}
	
	
	//stage 4
	
	f4_a= k +(c*demand4)+ f5;
	f4_b= k + (c*(demand4+demand5)) + (h*demand5) + f6;
	f4_c= k + (c*(demand4+demand5+demand6)) + (h*demand5) +(2*h*demand6)+ f7;
	f4_d= k + (c*(demand4+demand5+demand6+demand7)) + (h*demand5) +(2*h*demand6)+(3*h*demand7)+ f8;
	f4_e= k + (c*(demand4+demand5+demand6+demand7+demand8)) + (h*demand5) +(2*h*demand6)+(3*h*demand7)+ (4*h*demand8)+ f9;
	f4_f= k + (c*(demand4+demand5+demand6+demand7+demand8+demand9)) + (h*demand5) +(2*h*demand6)+(3*h*demand7)+ (4*h*demand8)+ (5*h*demand9)+f10;
	f4_g= k + (c*(demand4+demand5+demand6+demand7+demand8+demand9+demand10)) + (h*demand5) +(2*h*demand6)+(3*h*demand7)+ (4*h*demand8)+ (5*h*demand9)+ (6*h*demand10)+f11;
	f4= Math.min(f4_a,f4_b,f4_c,f4_d,f4_e,f4_f,f4_g);
	
	if(f4==f4_a){
		
		d4=demand4;
	}
	
	else if(f4 == f4_b){
		
		d4=demand4+demand5;
		d5=0;
		
		 
	}
	
	else if(f4 == f4_c){
		
		d4=demand4+demand5+demand6;
		d5=0;
		d6=0;
		
		 
	}
	
	else if(f4 == f4_d){
		
		d4=demand4+demand5+demand6+demand7;
		d5=0;
		d6=0;
		d7=0;
	}
	
	else if(f4 == f4_e){
		
		d4=demand4+demand5+demand6+demand7+demand8;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		
		 
	}
	
	else if(f4 == f4_f){
		
		d4=demand4+demand5+demand6+demand7+demand8+demand9;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		
	 
				
	}
	
	else{
		
		d4=demand4+demand5+demand6+demand7+demand8+demand9+demand10;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		d10=0;
		
	 
	}
	
	
	
	//stage 3
	
	f3_a= k +(c*demand3)+ f4;
	f3_b= k + (c*(demand3+demand4)) + (h*demand4) + f5;
	f3_c= k + (c*(demand3+demand4+demand5)) + (h*demand4) +(2*h*demand5)+ f6;
	f3_d= k + (c*(demand3+demand4+demand5+demand6)) + (h*demand4) +(2*h*demand5)+(3*h*demand6)+ f7;
	f3_e= k + (c*(demand3+demand4+demand5+demand6+demand7)) + (h*demand4) +(2*h*demand5)+(3*h*demand6)+ (4*h*demand7)+ f8;
	f3_f= k + (c*(demand3+demand4+demand5+demand6+demand7+demand8)) + (h*demand4) +(2*h*demand5)+(3*h*demand6)+ (4*h*demand7)+ (5*h*demand8)+f9;
	f3_g= k + (c*(demand3+demand4+demand5+demand6+demand7+demand8+demand9)) + (h*demand4) +(2*h*demand5)+(3*h*demand6)+ (4*h*demand7)+ (5*h*demand8)+ (6*h*demand9)+f10;
	f3_h= k + (c*(demand3+demand4+demand5+demand6+demand7+demand8+demand9+demand10)) + (h*demand4) +(2*h*demand5)+(3*h*demand6)+ (4*h*demand7)+ (5*h*demand8)+ (6*h*demand9)+(7*h*demand10)+f11;
	f3= Math.min(f3_a,f3_b,f3_c,f3_d,f3_e,f3_f,f3_g,f3_h);
	
	if(f3==f3_a){
		
		d3=demand3;
	}
	
	else if(f3 == f3_b){
		
		d3=demand3+demand4;
		d4=0;
		 
	}
	
	else if(f3 == f3_c){
		
		d3=demand3+demand4+demand5;
		d4=0;
		d5=0;
	}
	
	else if(f3 == f3_d){
		
		d3=demand3+demand4+demand5+demand6;
		d4=0;
		d5=0;
		d6=0;
		 
	}
	
	else if(f3 == f3_e){
		
		d3=demand3+demand4+demand5+demand6+demand7;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		 
	}
	
	else if(f3 == f3_f){
		
		d3=demand3+demand4+demand5+demand6+demand7+demand8;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		
		
	 
				
	}
	
	else if(f3 == f3_g){
		
		d3=demand3+demand4+demand5+demand6+demand7+demand8+demand9;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		
	 
	}
	
	else{
		
		d3=demand3+demand4+demand5+demand6+demand7+demand8+demand9+demand10;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		d10=0;
	 
	}
	
	
	//stage 2
	f2_a= k +(c*demand2)+ f3;
	f2_b= k + (c*(demand2+demand3)) + (h*demand3) + f4;
	f2_c= k + (c*(demand2+demand3+demand4)) + (h*demand3) +(2*h*demand4)+ f5;
	f2_d= k + (c*(demand2+demand3+demand4+demand5)) + (h*demand3) +(2*h*demand4)+(3*h*demand5)+ f6;
	f2_e= k + (c*(demand2+demand3+demand4+demand5+demand6)) + (h*demand3) +(2*h*demand4)+(3*h*demand5)+ (4*h*demand6)+ f7;
	f2_f= k + (c*(demand2+demand3+demand4+demand5+demand6+demand7)) + (h*demand3) +(2*h*demand4)+(3*h*demand5)+ (4*h*demand6)+ (5*h*demand7)+f8;
	f2_g= k + (c*(demand2+demand3+demand4+demand5+demand6+demand7+demand8)) + (h*demand3) +(2*h*demand4)+(3*h*demand5)+ (4*h*demand6)+ (5*h*demand7)+ (6*h*demand8)+f9;
	f2_h= k + (c*(demand2+demand3+demand4+demand5+demand6+demand7+demand8+demand9)) + (h*demand3) +(2*h*demand4)+(3*h*demand5)+ (4*h*demand6)+ (5*h*demand7)+ (6*h*demand8)+(7*h*demand9)+f10;
	f2_i= k + (c*(demand2+demand3+demand4+demand5+demand6+demand7+demand8+demand9+demand10)) + (h*demand3) +(2*h*demand4)+(3*h*demand5)+ (4*h*demand6)+ (5*h*demand7)+ (6*h*demand8)+(7*h*demand9)+(8*h*demand10)+f11;
	f2= Math.min(f2_a,f2_b,f2_c,f2_d,f2_e,f2_f,f2_g,f2_h,f2_i);
	
	if(f2==f2_a){
		
		d2=demand2;
	}
	
	else if(f2 == f2_b){
		
		d2=demand2+demand3;
		d3=0;
		
		 
	}
	
	else if(f2 == f2_c){
		
		d2=demand2+demand3+demand4;
		d3=0;
		d4=0;
		
		 
	}
	
	else if(f2 == f2_d){
		
		d2=demand2+demand3+demand4+demand5;
		d3=0;
		d4=0;
		d5=0;
		
		 
	}
	
	else if(f2 == f2_e){
		
		d2=demand2+demand3+demand4+demand5+demand6;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		 
	}
	
	else if(f2 == f2_f){
		
		d2=demand2+demand3+demand4+demand5+demand6+demand7;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
	 
				
	}
	
	else if(f2 == f2_g){
		
		d2=demand2+demand3+demand4+demand5+demand6+demand7+demand8;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
	 
	}
	
	else if(f2 == f2_h){
		
		d2=demand2+demand3+demand4+demand5+demand6+demand7+demand8+demand9;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		
	 
	}
	
	else{
		
		d2=demand2+demand3+demand4+demand5+demand6+demand7+demand8+demand9+demand10;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		d10=0;
	}
		
	 
	

	//stage 1
	f1_a= k +(c*demand1)+ f2;
	f1_b= k + (c*(demand1+demand2)) + (h*demand2) + f3;
	f1_c= k + (c*(demand1+demand2+demand3)) + (h*demand2) +(2*h*demand3)+ f4;
	f1_d= k + (c*(demand1+demand2+demand3+demand4)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ f5;
	f1_e= k + (c*(demand1+demand2+demand3+demand4+demand5)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ (4*h*demand5)+ f6;
	f1_f= k + (c*(demand1+demand2+demand3+demand4+demand5+demand6)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ (4*h*demand5)+ (5*h*demand6)+f7;
	f1_g= k + (c*(demand1+demand2+demand3+demand4+demand5+demand6+demand7)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ (4*h*demand5)+ (5*h*demand6)+ (6*h*demand7)+f8;
	f1_h= k + (c*(demand1+demand2+demand3+demand4+demand5+demand6+demand7+demand8)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ (4*h*demand5)+ (5*h*demand6)+ (6*h*demand7)+(7*h*demand8)+f9;
	f1_i= k + (c*(demand1+demand2+demand3+demand4+demand5+demand6+demand7+demand8+demand9)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ (4*h*demand5)+ (5*h*demand6)+ (6*h*demand7)+(7*h*demand8)+(8*h*demand9)+f10;
	f1_j= k + (c*(demand1+demand2+demand3+demand4+demand5+demand6+demand7+demand8+demand9+demand10)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ (4*h*demand5)+ (5*h*demand6)+ (6*h*demand7)+(7*h*demand8)+(8*h*demand9)+(9*h*demand10)+f11;
	f1= Math.min(f1_a,f1_b,f1_c,f1_d,f1_e,f1_f,f1_g,f1_h,f1_i,f1_j);
	
	if(f1==f1_a){
		
		d1=demand1;
	}
	
	else if(f1 == f1_b){
		
		d1=demand1+demand2;
		d2=0;
	 
	}
	
	else if(f1 == f1_c){
		
		d1=demand1+demand2+demand3;
		d2=0;
		d3=0;
	 
	}
	
	else if(f1 == f1_d){
		
		d1=demand1+demand2+demand3+demand4;
		d2=0;
		d3=0;
		d4=0;
	 
	}
	
	else if(f1 == f1_e){
		
		d1=demand1+demand2+demand3+demand4+demand5;
		d2=0;
		d3=0;
		d4=0;
		d5=0;
	 
		 
	}
	
	else if(f1 == f1_f){
		
		d1=demand1+demand2+demand3+demand4+demand5+demand6;
		d2=0;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		
	 
				
	}
	
	else if(f1 == f1_g){
		
		d1=demand1+demand2+demand3+demand4+demand5+demand6+demand7;
		d2=0;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
	    d7=0;
	 
	}
	
	else if(f1 == f1_h){
		
		d1=demand1+demand2+demand3+demand4+demand5+demand6+demand7+demand8;
		d2=0;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
	    d7=0;
		d8=0;
	 
	}
	
	else if(f1 ==f1_i){
		
		d1=demand1+demand2+demand3+demand4+demand5+demand6+demand7+demand8+demand9;
		d2=0;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
	    d7=0;
		d8=0;
		d9=0;
	 
	}
	
	else{
		
		d1=demand1+demand2+demand3+demand4+demand5+demand6+demand7+demand8+demand9+demand10;
		d2=0;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
	    d7=0;
		d8=0;
		d9=0;
		d10=0;
	 
	}
	

}

function stage9(k,c,h,demand1,demand2,demand3,demand4,demand5,demand6,demand7,demand8,demand9){
	
	var f10=0;
	
	//stage 9
	f9= k +(c*demand9)+ f10;
	d9=demand9;
	
	//stage 8
	f8_a= k +(c*demand8)+ f9;
	f8_b= k + (c*(demand8+demand9)) + (h*demand9) + f10;
	f8= Math.min(f8_a,f8_b);
	
	if(f8==f8_a){
		
		d8=demand8;
	}
	
	else{
		
		d8=demand8+demand9;
		d9=0;
		 
	}
	
	//stage 7
	
	f7_a= k +(c*demand7)+ f8;
	f7_b= k + (c*(demand7+demand8)) + (h*demand8) + f9;
	f7_c= k + (c*(demand7+demand8+demand9)) + (h*demand8) +(2*h*demand9)+ f10;
	f7= Math.min(f7_a,f7_b,f7_c);
	
	if(f7==f7_a){
		
		d7=demand7;
	}
	
	else if(f7 == f7_b){
		
		d7=demand7+demand8;
		d8=0;
		
	 
		
		
	}
	
	else{
		
		d7=demand7+demand8+demand9;
		d8=0;
		d9=0;
	 
	}
	
	//stage 6
	f6_a= k +(c*demand6)+ f7;
	f6_b= k + (c*(demand6+demand7)) + (h*demand7) + f8;
	f6_c= k + (c*(demand6+demand7+demand8)) + (h*demand7) +(2*h*demand8)+ f9;
	f6_d= k + (c*(demand6+demand7+demand8+demand9)) + (h*demand7) +(2*h*demand8)+(3*h*demand9)+ f10;
	f6= Math.min(f6_a,f6_b,f6_c,f6_d);
	
	if(f6==f6_a){
		
		d6=demand6;
	}
	
	else if(f6 == f6_b){
		
		d6=demand6+demand7;
		d7=0;
		
		
		 
	}
	
	else if(f6 == f6_c){
		
		d6=demand6+demand7+demand8;
		d7=0;
		d8=0;
		
		 
	}
	
	else{
		
		d6=demand6+demand7+demand8+demand9;
		d7=0;
		d8=0;
		d9=0;
		 
	}
	
	//stage 5
	
	f5_a= k +(c*demand5)+ f6;
	f5_b= k + (c*(demand5+demand6)) + (h*demand6) + f7;
	f5_c= k + (c*(demand5+demand6+demand7)) + (h*demand6) +(2*h*demand7)+ f8;
	f5_d= k + (c*(demand5+demand6+demand7+demand8)) + (h*demand6) +(2*h*demand7)+(3*h*demand8)+ f9;
	f5_e= k + (c*(demand5+demand6+demand7+demand8+demand9)) + (h*demand6) +(2*h*demand7)+(3*h*demand8)+ (4*h*demand9)+ f10;
	f5= Math.min(f5_a,f5_b,f5_c,f5_d,f5_e);
	
	if(f5==f5_a){
		
		d5=demand5;
	}
	
	else if(f5 == f5_b){
		
		d5=demand5+demand6;
		d6=0;
		
		 
	}
	
	else if(f5 == f5_c){
		
		d5=demand5+demand6+demand7;
		d6=0;
		d7=0;
		
		 
	}
	
	else if(f5 == f5_d){
		
		d5=demand5+demand6+demand7+demand8;
		d6=0;
		d7=0;
		d8=0;
		
		 
	}
	
	else{
		
		d5=demand5+demand6+demand7+demand8+demand9;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		
	 
	}
	

	//stage 4	
	f4_a= k +(c*demand4)+ f5;
	f4_b= k + (c*(demand4+demand5)) + (h*demand5) + f6;
	f4_c= k + (c*(demand4+demand5+demand6)) + (h*demand5) +(2*h*demand6)+ f7;
	f4_d= k + (c*(demand4+demand5+demand6+demand7)) + (h*demand5) +(2*h*demand6)+(3*h*demand7)+ f8;
	f4_e= k + (c*(demand4+demand5+demand6+demand7+demand8)) + (h*demand5) +(2*h*demand6)+(3*h*demand7)+ (4*h*demand8)+ f9;
	f4_f= k + (c*(demand4+demand5+demand6+demand7+demand8+demand9)) + (h*demand5) +(2*h*demand6)+(3*h*demand7)+ (4*h*demand8)+ (5*h*demand9)+f10;
	f4= Math.min(f4_a,f4_b,f4_c,f4_d,f4_e,f4_f);
	
	
	if(f4==f4_a){
		
		d4=demand4;
	}
	
	else if(f4 == f4_b){
		
		d4=demand4+demand5;
		d5=0;
		
		 
	}
	
	else if(f4 == f4_c){
		
		d4=demand4+demand5+demand6;
		d5=0;
		d6=0;
		
		f5=0;
		f6=0;
	}
	
	else if(f4 == f4_d){
		
		d4=demand4+demand5+demand6+demand7;
		d5=0;
		d6=0;
		d7=0;
		
	 
	}
	
	else if(f4 == f4_e){
		
		d4=demand4+demand5+demand6+demand7+demand8;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		
		 
	}
	
	else{
		
		d4=demand4+demand5+demand6+demand7+demand8+demand9;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		
		 
				
	}
	
	//stage 3
	
	f3_a= k +(c*demand3)+ f4;
	f3_b= k + (c*(demand3+demand4)) + (h*demand4) + f5;
	f3_c= k + (c*(demand3+demand4+demand5)) + (h*demand4) +(2*h*demand5)+ f6;
	f3_d= k + (c*(demand3+demand4+demand5+demand6)) + (h*demand4) +(2*h*demand5)+(3*h*demand6)+ f7;
	f3_e= k + (c*(demand3+demand4+demand5+demand6+demand7)) + (h*demand4) +(2*h*demand5)+(3*h*demand6)+ (4*h*demand7)+ f8;
	f3_f= k + (c*(demand3+demand4+demand5+demand6+demand7+demand8)) + (h*demand4) +(2*h*demand5)+(3*h*demand6)+ (4*h*demand7)+ (5*h*demand8)+f9;
	f3_g= k + (c*(demand3+demand4+demand5+demand6+demand7+demand8+demand9)) + (h*demand4) +(2*h*demand5)+(3*h*demand6)+ (4*h*demand7)+ (5*h*demand8)+ (6*h*demand9)+f10;
	f3= Math.min(f3_a,f3_b,f3_c,f3_d,f3_e,f3_f,f3_g);
	
	if(f3==f3_a){
		
		d3=demand3;
	}
	
	else if(f3 == f3_b){
		
		d3=demand3+demand4;
		d4=0;
		
		 
	}
	
	else if(f3 == f3_c){
		
		d3=demand3+demand4+demand5;
		d4=0;
		d5=0;
		
		 
	}
	
	else if(f3 == f3_d){
		
		d3=demand3+demand4+demand5+demand6;
		d4=0;
		d5=0;
		d6=0;
		 
	}
	
	else if(f3 == f3_e){
		
		d3=demand3+demand4+demand5+demand6+demand7;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		
		 
	}
	
	else if(f3 == f3_f){
		
		d3=demand3+demand4+demand5+demand6+demand7+demand8;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
	 
				
	}
	
	else{
		
		d3=demand3+demand4+demand5+demand6+demand7+demand8+demand9;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		
	 
	}
	
	
	
	//stage 2
	f2_a= k +(c*demand2)+ f3;
	f2_b= k + (c*(demand2+demand3)) + (h*demand3) + f4;
	f2_c= k + (c*(demand2+demand3+demand4)) + (h*demand3) +(2*h*demand4)+ f5;
	f2_d= k + (c*(demand2+demand3+demand4+demand5)) + (h*demand3) +(2*h*demand4)+(3*h*demand5)+ f6;
	f2_e= k + (c*(demand2+demand3+demand4+demand5+demand6)) + (h*demand3) +(2*h*demand4)+(3*h*demand5)+ (4*h*demand6)+ f7;
	f2_f= k + (c*(demand2+demand3+demand4+demand5+demand6+demand7)) + (h*demand3) +(2*h*demand4)+(3*h*demand5)+ (4*h*demand6)+ (5*h*demand7)+f8;
	f2_g= k + (c*(demand2+demand3+demand4+demand5+demand6+demand7+demand8)) + (h*demand3) +(2*h*demand4)+(3*h*demand5)+ (4*h*demand6)+ (5*h*demand7)+ (6*h*demand8)+f9;
	f2_h= k + (c*(demand2+demand3+demand4+demand5+demand6+demand7+demand8+demand9)) + (h*demand3) +(2*h*demand4)+(3*h*demand5)+ (4*h*demand6)+ (5*h*demand7)+ (6*h*demand8)+(7*h*demand9)+f10;
	f2= Math.min(f2_a,f2_b,f2_c,f2_d,f2_e,f2_f,f2_g,f2_h);
	
	if(f2==f2_a){
		
		d2=demand2;
	}
	
	else if(f2 == f2_b){
		
		d2=demand2+demand3;
		d3=0;
		
		 
	}
	
	else if(f2 == f2_c){
		
		d2=demand2+demand3+demand4;
		d3=0;
		d4=0;
		
		 
	}
	
	else if(f2 == f2_d){
		
		d2=demand2+demand3+demand4+demand5;
		d3=0;
		d4=0;
		d5=0;
		
	 
	
	}
	
	else if(f2 == f2_e){
		
		d2=demand2+demand3+demand4+demand5+demand6;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		
		 
	}
	
	else if(f2 == f2_f){
		
		d2=demand2+demand3+demand4+demand5+demand6+demand7;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		
		 
				
	}
	
	else if(f2 == f2_g){
		
		d2=demand2+demand3+demand4+demand5+demand6+demand7+demand8;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		
		 
	}
	
	else{
		
		d2=demand2+demand3+demand4+demand5+demand6+demand7+demand8+demand9;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		
		 
	}
	
	
		
	//stage 1
	f1_a= k +(c*demand1)+ f2;
	f1_b= k + (c*(demand1+demand2)) + (h*demand2) + f3;
	f1_c= k + (c*(demand1+demand2+demand3)) + (h*demand2) +(2*h*demand3)+ f4;
	f1_d= k + (c*(demand1+demand2+demand3+demand4)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ f5;
	f1_e= k + (c*(demand1+demand2+demand3+demand4+demand5)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ (4*h*demand5)+ f6;
	f1_f= k + (c*(demand1+demand2+demand3+demand4+demand5+demand6)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ (4*h*demand5)+ (5*h*demand6)+f7;
	f1_g= k + (c*(demand1+demand2+demand3+demand4+demand5+demand6+demand7)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ (4*h*demand5)+ (5*h*demand6)+ (6*h*demand7)+f8;
	f1_h= k + (c*(demand1+demand2+demand3+demand4+demand5+demand6+demand7+demand8)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ (4*h*demand5)+ (5*h*demand6)+ (6*h*demand7)+(7*h*demand8)+f9;
	f1_i= k + (c*(demand1+demand2+demand3+demand4+demand5+demand6+demand7+demand8+demand9)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ (4*h*demand5)+ (5*h*demand6)+ (6*h*demand7)+(7*h*demand8)+(8*h*demand9)+f10;
	f1= Math.min(f1_a,f1_b,f1_c,f1_d,f1_e,f1_f,f1_g,f1_h,f1_i);
	
	if(f1==f1_a){
		
		d1=demand1;
	}
	
	else if(f1 == f1_b){
		
		d1=demand1+demand2;
		d2=0;
		
		 
	}
	
	else if(f1 == f1_c){
		
		d1=demand1+demand2+demand3;
		d2=0;
		d3=0;
		
 
	}
	
	else if(f1 == f1_d){
		
		d1=demand1+demand2+demand3+demand4;
		d2=0;
		d3=0;
		d4=0;
		
		 
		
		
	}
	
	else if(f1 == f1_e){
		
		d1=demand1+demand2+demand3+demand4+demand5;
		d2=0;
		d3=0;
		d4=0;
		d5=0;
		
	 
	}
	
	else if(f1 == f1_f){
		
		d1=demand1+demand2+demand3+demand4+demand5+demand6;
		d2=0;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		
		
	 
	}
	
	else if(f1 == f1_g){
		
		d1=demand1+demand2+demand3+demand4+demand5+demand6+demand7;
		d2=0;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		
		
	 
	}
	
	else if(f1 == f1_h){
		
		d1=demand1+demand2+demand3+demand4+demand5+demand6+demand7+demand8;
		d2=0;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
	 
	}
	
	else{
		
		d1=demand1+demand2+demand3+demand4+demand5+demand6+demand7+demand8+demand9;
		d2=0;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		d9=0;
		
		
	 
	}
		
}

function stage8(k,c,h,demand1,demand2,demand3,demand4,demand5,demand6,demand7,demand8){
	
	var f9=0;
	//stage 8
	f8= k + (c*demand8)+ f9;
	d8=demand8;

	//stage 7
	
	f7_a= k +(c*demand7)+ f8;
	f7_b= k + (c*(demand7+demand8)) + (h*demand8) + f9;
	f7= Math.min(f7_a,f7_b);
	
	if(f7==f7_a){
		
		d7=demand7;
	}
	
	else{
		
		d7=demand7+demand8;
		d8=0;
		
		 
	}
	
	//stage 6
	f6_a= k +(c*demand6)+ f7;
	f6_b= k + (c*(demand6+demand7)) + (h*demand7) + f8;
	f6_c= k + (c*(demand6+demand7+demand8)) + (h*demand7) +(2*h*demand8)+ f9;
	f6= Math.min(f6_a,f6_b,f6_c);
	
	if(f6==f6_a){
		
		d6=demand6;
	}
	
	else if(f6 == f6_b){
		
		d6=demand6+demand7;
		d7=0;
		
		 
	}
	
	else{
		
		d6=demand6+demand7+demand8;
		d7=0;
		d8=0;
		 
	}
	

	
	//stage 5
	
	f5_a= k +(c*demand5)+ f6;
	f5_b= k + (c*(demand5+demand6)) + (h*demand6) + f7;
	f5_c= k + (c*(demand5+demand6+demand7)) + (h*demand6) +(2*h*demand7)+ f8;
	f5_d= k + (c*(demand5+demand6+demand7+demand8)) + (h*demand6) +(2*h*demand7)+(3*h*demand8)+ f9;
	f5= Math.min(f5_a,f5_b,f5_c,f5_d);
	
	if(f5==f5_a){
		
		d5=demand5;
	}
	
	else if(f5 == f5_b){
		
		d5=demand5+demand6;
		d6=0;
		
		 
	}
	
	else if(f5 == f5_c){
		
		d5=demand5+demand6+demand7;
		d6=0;
		d7=0;
		
	 
	}
	
	else{
		
		d5=demand5+demand6+demand7+demand8;
		d6=0;
		d7=0;
		d8=0;
	 
	}
	
	//stage 4
	f4_a= k +(c*demand4)+ f5;
	f4_b= k + (c*(demand4+demand5)) + (h*demand5) + f6;
	f4_c= k + (c*(demand4+demand5+demand6)) + (h*demand5) +(2*h*demand6)+ f7;
	f4_d= k + (c*(demand4+demand5+demand6+demand7)) + (h*demand5) +(2*h*demand6)+(3*h*demand7)+ f8;
	f4_e= k + (c*(demand4+demand5+demand6+demand7+demand8)) + (h*demand5) +(2*h*demand6)+(3*h*demand7)+ (4*h*demand8)+ f9;
	f4= Math.min(f4_a,f4_b,f4_c,f4_d,f4_e);
	
	
	if(f4==f4_a){
		
		d4=demand4;
	}
	
	else if(f4 == f4_b){
		
		d4=demand4+demand5;
		d5=0;
		
		 
	}
	
	else if(f4 == f4_c){
		
		d4=demand4+demand5+demand6;
		d5=0;
		d6=0;
		
		 
	}
	
	else if(f4 == f4_d){
		
		d4=demand4+demand5+demand6+demand7;
		d5=0;
		d6=0;
		d7=0;
		
	 
	}
	
	else{
		
		d4=demand4+demand5+demand6+demand7+demand8;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		
	 
	
	}
	
	//stage 3
	f3_a= k +(c*demand3)+ f4;
	f3_b= k + (c*(demand3+demand4)) + (h*demand4) + f5;
	f3_c= k + (c*(demand3+demand4+demand5)) + (h*demand4) +(2*h*demand5)+ f6;
	f3_d= k + (c*(demand3+demand4+demand5+demand6)) + (h*demand4) +(2*h*demand5)+(3*h*demand6)+ f7;
	f3_e= k + (c*(demand3+demand4+demand5+demand6+demand7)) + (h*demand4) +(2*h*demand5)+(3*h*demand6)+ (4*h*demand7)+ f8;
	f3_f= k + (c*(demand3+demand4+demand5+demand6+demand7+demand8)) + (h*demand4) +(2*h*demand5)+(3*h*demand6)+ (4*h*demand7)+ (5*h*demand8)+f9;
	f3= Math.min(f3_a,f3_b,f3_c,f3_d,f3_e,f3_f);
	
	if(f3==f3_a){
		
		d3=demand3;
	}
	
	else if(f3 == f3_b){
		
		d3=demand3+demand4;
		d4=0;
		 
	}
	
	else if(f3 == f3_c){
		
		d3=demand3+demand4+demand5;
		d4=0;
		d5=0;
		
	 
	}
	
	else if(f3 == f3_d){
		
		d3=demand3+demand4+demand5+demand6;
		d4=0;
		d5=0;
		d6=0;
	 
	}
	
	else if(f3 == f3_e){
		
		d3=demand3+demand4+demand5+demand6+demand7;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
	 
	}
	
	else{
		
		d3=demand3+demand4+demand5+demand6+demand7+demand8;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		
	 
				
	}
	
	
	//stage 2
	f2_a= k +(c*demand2)+ f3;
	f2_b= k + (c*(demand2+demand3)) + (h*demand3) + f4;
	f2_c= k + (c*(demand2+demand3+demand4)) + (h*demand3) +(2*h*demand4)+ f5;
	f2_d= k + (c*(demand2+demand3+demand4+demand5)) + (h*demand3) +(2*h*demand4)+(3*h*demand5)+ f6;
	f2_e= k + (c*(demand2+demand3+demand4+demand5+demand6)) + (h*demand3) +(2*h*demand4)+(3*h*demand5)+ (4*h*demand6)+ f7;
	f2_f= k + (c*(demand2+demand3+demand4+demand5+demand6+demand7)) + (h*demand3) +(2*h*demand4)+(3*h*demand5)+ (4*h*demand6)+ (5*h*demand7)+f8;
	f2_g= k + (c*(demand2+demand3+demand4+demand5+demand6+demand7+demand8)) + (h*demand3) +(2*h*demand4)+(3*h*demand5)+ (4*h*demand6)+ (5*h*demand7)+ (6*h*demand8)+f9;
	f2= Math.min(f2_a,f2_b,f2_c,f2_d,f2_e,f2_f,f2_g);
	
	
	if(f2==f2_a){
		
		d2=demand2;
	}
	
	else if(f2 == f2_b){
		
		d2=demand2+demand3;
		d3=0;
		
	 
	}
	
	else if(f2 == f2_c){
		
		d2=demand2+demand3+demand4;
		d3=0;
		d4=0;
		
		 
	}
	
	else if(f2 == f2_d){
		
		d2=demand2+demand3+demand4+demand5;
		d3=0;
		d4=0;
		d5=0;
		
		
		 
	}
	
	else if(f2 == f2_e){
		
		d2=demand2+demand3+demand4+demand5+demand6;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		
		 
	}
	
	else if(f2 == f2_f){
		
		d2=demand2+demand3+demand4+demand5+demand6+demand7;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		
		 
				
	}
	
	else{
		
		d2=demand2+demand3+demand4+demand5+demand6+demand7+demand8;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		
		
	 
	}
	

	//stage 1
	
	f1_a= k +(c*demand1)+ f2;
	f1_b= k + (c*(demand1+demand2)) + (h*demand2) + f3;
	f1_c= k + (c*(demand1+demand2+demand3)) + (h*demand2) +(2*h*demand3)+ f4;
	f1_d= k + (c*(demand1+demand2+demand3+demand4)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ f5;
	f1_e= k + (c*(demand1+demand2+demand3+demand4+demand5)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ (4*h*demand5)+ f6;
	f1_f= k + (c*(demand1+demand2+demand3+demand4+demand5+demand6)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ (4*h*demand5)+ (5*h*demand6)+f7;
	f1_g= k + (c*(demand1+demand2+demand3+demand4+demand5+demand6+demand7)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ (4*h*demand5)+ (5*h*demand6)+ (6*h*demand7)+f8;
	f1_h= k + (c*(demand1+demand2+demand3+demand4+demand5+demand6+demand7+demand8)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ (4*h*demand5)+ (5*h*demand6)+ (6*h*demand7)+(7*h*demand8)+f9;
	f1= Math.min(f1_a,f1_b,f1_c,f1_d,f1_e,f1_f,f1_g,f1_h);
	
	if(f1==f1_a){
		
		d1=demand1;
	}
	
	else if(f1 == f1_b){
		
		d1=demand1+demand2;
		d2=0;
		 
	}
	
	else if(f1 == f1_c){
		
		d1=demand1+demand2+demand3;
		d2=0;
		d3=0;
		 
	}
	
	else if(f1 == f1_d){
		
		d1=demand1+demand2+demand3+demand4;
		d2=0;
		d3=0;
		d4=0;
		
	 
	}
	
	else if(f1 == f1_e){
		
		d1=demand1+demand2+demand3+demand4+demand5;
		d2=0;
		d3=0;
		d4=0;
		d5=0;
		
	 
	}
	
	else if(f1 == f1_f){
		
		d1=demand1+demand2+demand3+demand4+demand5+demand6;
		d2=0;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		 
				
	}
	
	else if(f1 == f1_g){
		
		d1=demand1+demand2+demand3+demand4+demand5+demand6+demand7;
		d2=0;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		
		
	 
	}
	
	else{
		
		d1=demand1+demand2+demand3+demand4+demand5+demand6+demand7+demand8;
		d2=0;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		d8=0;
		
	 
	}
	
	
}
	
function stage7(k,c,h,demand1,demand2,demand3,demand4,demand5,demand6,demand7){
		
	var f8=0;
	//stage 7
	f7= k +(c*demand7)+ f8;
	d7=demand7;

	//stage 6
	f6_a= k +(c*demand6)+ f7;
	f6_b= k + (c*(demand6+demand7)) + (h*demand7) + f8;
	f6= Math.min(f6_a,f6_b);
	if(f6==f6_a){
		
		d6=demand6;
	}
	
	else{
		
		d6=demand6+demand7;
		d7=0;
		 
	}
	
	

	
	//stage 5
	f5_a= k +(c*demand5)+ f6;
	f5_b= k + (c*(demand5+demand6)) + (h*demand6) + f7;
	f5_c= k + (c*(demand5+demand6+demand7)) + (h*demand6) +(2*h*demand7)+ f8;
	f5= Math.min(f5_a,f5_b,f5_c);
	
	
	if(f5==f5_a){
		
		d5=demand5;
	}
	
	else if(f5 == f5_b){
		
		d5=demand5+demand6;
		d6=0;
		 
	}
	
	else{
		
		d5=demand5+demand6+demand7;
		d6=0;
		d7=0;
		 
	}
	

	//stage 4
	f4_a= k +(c*demand4)+ f5;
	f4_b= k + (c*(demand4+demand5)) + (h*demand5) + f6;
	f4_c= k + (c*(demand4+demand5+demand6)) + (h*demand5) +(2*h*demand6)+ f7;
	f4_d= k + (c*(demand4+demand5+demand6+demand7)) + (h*demand5) +(2*h*demand6)+(3*h*demand7)+ f8;
	f4= Math.min(f4_a,f4_b,f4_c,f4_d);
	
	if(f4==f4_a){
		
		d4=demand4;
	}
	
	else if(f4 == f4_b){
		
		d4=demand4+demand5;
		d5=0;
		 
	}
	
	else if(f4 == f4_c){
		
		d4=demand4+demand5+demand6;
		d5=0;
		d6=0;
		
		 
	}
	
	else{
		
		d4=demand4+demand5+demand6+demand7;
		d5=0;
		d6=0;
		d7=0;
		
		 
		
	}
	
	
	
	//stage 3
	f3_a= k +(c*demand3)+ f4;
	f3_b= k + (c*(demand3+demand4)) + (h*demand4) + f5;
	f3_c= k + (c*(demand3+demand4+demand5)) + (h*demand4) +(2*h*demand5)+ f6;
	f3_d= k + (c*(demand3+demand4+demand5+demand6)) + (h*demand4) +(2*h*demand5)+(3*h*demand6)+ f7;
	f3_e= k + (c*(demand3+demand4+demand5+demand6+demand7)) + (h*demand4) +(2*h*demand5)+(3*h*demand6)+ (4*h*demand7)+ f8;
	f3= Math.min(f3_a,f3_b,f3_c,f3_d,f3_e);
	
	if(f3==f3_a){
		
		d3=demand3;
	}
	
	else if(f3 == f3_b){
		
		d3=demand3+demand4;
		d4=0;
		
		 
	}
	
	else if(f3 == f3_c){
		
		d3=demand3+demand4+demand5;
		d4=0;
		d5=0;
		 
	}
	
	else if(f3 == f3_d){
		
		d3=demand3+demand4+demand5+demand6;
		d4=0;
		d5=0;
		d6=0;
		
		 
	}
	
	else{
		
		d3=demand3+demand4+demand5+demand6+demand7;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		
		 
	}
	
	//stage 2			
	f2_a= k +(c*demand2)+ f3;
	f2_b= k + (c*(demand2+demand3)) + (h*demand3) + f4;
	f2_c= k + (c*(demand2+demand3+demand4)) + (h*demand3) +(2*h*demand4)+ f5;
	f2_d= k + (c*(demand2+demand3+demand4+demand5)) + (h*demand3) +(2*h*demand4)+(3*h*demand5)+ f6;
	f2_e= k + (c*(demand2+demand3+demand4+demand5+demand6)) + (h*demand3) +(2*h*demand4)+(3*h*demand5)+ (4*h*demand6)+ f7;
	f2_f= k + (c*(demand2+demand3+demand4+demand5+demand6+demand7)) + (h*demand3) +(2*h*demand4)+(3*h*demand5)+ (4*h*demand6)+ (5*h*demand7)+f8;
	f2= Math.min(f2_a,f2_b,f2_c,f2_d,f2_e,f2_f);
	
	if(f2==f2_a){
		
		d2=demand2;
	}
	
	else if(f2 == f2_b){
		
		d2=demand2+demand3;
		d3=0;
		
		 
	}
	
	else if(f2 == f2_c){
		
		d2=demand2+demand3+demand4;
		d3=0;
		d4=0;
		
		 
	}
	
	else if(f2 == f2_d){
		
		d2=demand2+demand3+demand4+demand5;
		d3=0;
		d4=0;
		d5=0;
		
	 
	}
	
	else if(f2 == f2_e){
		
		d2=demand2+demand3+demand4+demand5+demand6;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		
		 
	}
	
	else{
		
		d2=demand2+demand3+demand4+demand5+demand6+demand7;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
		
		 
				
	}
	
	
	//stage 1
	f1_a= k +(c*demand1)+ f2;
	f1_b= k + (c*(demand1+demand2)) + (h*demand2) + f3;
	f1_c= k + (c*(demand1+demand2+demand3)) + (h*demand2) +(2*h*demand3)+ f4;
	f1_d= k + (c*(demand1+demand2+demand3+demand4)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ f5;
	f1_e= k + (c*(demand1+demand2+demand3+demand4+demand5)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ (4*h*demand5)+ f6;
	f1_f= k + (c*(demand1+demand2+demand3+demand4+demand5+demand6)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ (4*h*demand5)+ (5*h*demand6)+f7;
	f1_g= k + (c*(demand1+demand2+demand3+demand4+demand5+demand6+demand7)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ (4*h*demand5)+ (5*h*demand6)+ (6*h*demand7)+f8;
	f1= Math.min(f1_a,f1_b,f1_c,f1_d,f1_e,f1_f,f1_g);
	
	if(f1==f1_a){
		
		d1=demand1;
	}
	
	else if(f1 == f1_b){
		
		d1=demand1+demand2;
		d2=0;
	 
	}
	
	else if(f1 == f1_c){
		
		d1=demand1+demand2+demand3;
		d2=0;
		d3=0;
		
		f2=0;
		 
	}
	
	else if(f1 == f1_d){
		
		d1=demand1+demand2+demand3+demand4;
		d2=0;
		d3=0;
		d4=0;
		
		 
	}
	
	else if(f1 == f1_e){
		
		d1=demand1+demand2+demand3+demand4+demand5;
		d2=0;
		d3=0;
		d4=0;
		d5=0;
		
		 
	}
	
	else if(f1 == f1_f){
		
		d1=demand1+demand2+demand3+demand4+demand5+demand6;
		d2=0;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		
		 
				
	}
	
	else{
		
		d1=demand1+demand2+demand3+demand4+demand5+demand6+demand7;
		d2=0;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		d7=0;
	 
	}
	
	
}

function stage6(k,c,h,demand1,demand2,demand3,demand4,demand5,demand6){
	
	var f7=0;
	
	//stage6
	f6= k +(c*demand6)+ f7;
	d6=demand6;

	//stage 5
	f5_a= k +(c*demand5)+ f6;
	f5_b= k + (c*(demand5+demand6)) + (h*demand6) + f7;
	f5= Math.min(f5_a,f5_b);
	
	if(f5==f5_a){
		
		d5=demand5;
	}
	
	else{
		
		d5=demand5+demand6;
		d6=0;
		 
	}
	
	
	
	
	//stage 4
	f4_a= k +(c*demand4)+ f5;
	f4_b= k + (c*(demand4+demand5)) + (h*demand5) + f6;
	f4_c= k + (c*(demand4+demand5+demand6)) + (h*demand5) +(2*h*demand6)+ f7;
	f4= Math.min(f4_a,f4_b,f4_c);
	
	if(f4==f4_a){
		
		d4=demand4;
	}
	
	else if(f4 == f4_b){
		
		d4=demand4+demand5;
		d5=0;
		 
	}
	
	else{
		
		d4=demand4+demand5+demand6;
		d5=0;
		d6=0;
		
		 
	}
	
	
	
	
	//stage 3
	f3_a= k +(c*demand3)+ f4;
	f3_b= k + (c*(demand3+demand4)) + (h*demand4) + f5;
	f3_c= k + (c*(demand3+demand4+demand5)) + (h*demand4) +(2*h*demand5)+ f6;
	f3_d= k + (c*(demand3+demand4+demand5+demand6)) + (h*demand4) +(2*h*demand5)+(3*h*demand6)+ f7;
	f3= Math.min(f3_a,f3_b,f3_c,f3_d);
	
	if(f3==f3_a){
		
		d3=demand3;
	}
	
	else if(f3 == f3_b){
		
		d3=demand3+demand4;
		d4=0;
		 
	}
	
	else if(f3 == f3_c){
		
		d3=demand3+demand4+demand5;
		d4=0;
		d5=0;
		
		 
		
	}
	
	else{
		
		d3=demand3+demand4+demand5+demand6;
		d4=0;
		d5=0;
		d6=0;
		
		 
	}
	

	//stage 2
	f2_a= k +(c*demand2)+ f3;
	f2_b= k + (c*(demand2+demand3)) + (h*demand3) + f4;
	f2_c= k + (c*(demand2+demand3+demand4)) + (h*demand3) +(2*h*demand4)+ f5;
	f2_d= k + (c*(demand2+demand3+demand4+demand5)) + (h*demand3) +(2*h*demand4)+(3*h*demand5)+ f6;
	f2_e= k + (c*(demand2+demand3+demand4+demand5+demand6)) + (h*demand3) +(2*h*demand4)+(3*h*demand5)+ (4*h*demand6)+ f7;
	f2= Math.min(f2_a,f2_b,f2_c,f2_d,f2_e);
	
	if(f2==f2_a){
		
		d2=demand2;
	}
	
	else if(f2 == f2_b){
		
		d2=demand2+demand3;
		d3=0;
		 
	}
	
	else if(f2 == f2_c){
		
		d2=demand2+demand3+demand4;
		d3=0;
		d4=0;
		
		 

	}
	
	else if(f2 == f2_d){
		
		d2=demand2+demand3+demand4+demand5;
		d3=0;
		d4=0;
		d5=0;
		
		 
	}
	
	else{
		
		d2=demand2+demand3+demand4+demand5+demand6;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		
		 
	}
	
	
	
	
	//stage 1
	f1_a= k +(c*demand1)+ f2;
	f1_b= k + (c*(demand1+demand2)) + (h*demand2) + f3;
	f1_c= k + (c*(demand1+demand2+demand3)) + (h*demand2) +(2*h*demand3)+ f4;
	f1_d= k + (c*(demand1+demand2+demand3+demand4)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ f5;
	f1_e= k + (c*(demand1+demand2+demand3+demand4+demand5)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ (4*h*demand5)+ f6;
	f1_f= k + (c*(demand1+demand2+demand3+demand4+demand5+demand6)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ (4*h*demand5)+ (5*h*demand6)+f7;
	f1= Math.min(f1_a,f1_b,f1_c,f1_d,f1_e,f1_f);
	
	if(f1==f1_a){
		
		d1=demand1;
	}
	
	else if(f1 == f1_b){
		
		d1=demand1+demand2;
		d2=0;
		 
	}
	
	else if(f1 == f1_c){
		
		d1=demand1+demand2+demand3;
		d2=0;
		d3=0;
		
		 
	}
	
	else if(f1 == f1_d){
		
		d1=demand1+demand2+demand3+demand4;
		d2=0;
		d3=0;
		d4=0;
		
		f2=0;
		f3=0;
		f4=0;
	}
	
	else if(f1 == f1_e){
		
		d1=demand1+demand2+demand3+demand4+demand5;
		d2=0;
		d3=0;
		d4=0;
		d5=0;
		
	 
		
	}
	
	else{
		
		d1=demand1+demand2+demand3+demand4+demand5+demand6;
		d2=0;
		d3=0;
		d4=0;
		d5=0;
		d6=0;
		
		 
				
	}
	

	
}

function stage5(k,c,h,demand1,demand2,demand3,demand4,demand5){
	
	var f6=0;
	
	//stage 5
	f5= k +(c*demand5)+ f6;
	d5=demand5;
	

	//stage 4
	f4_a= k +(c*demand4)+ f5;
	f4_b= k + (c*(demand4+demand5)) + (h*demand5) + f6;
	f4= Math.min(f4_a,f4_b);
	
	if(f4==f4_a){
		
		d4=demand4;
	}
	
	else{
		
		d4=demand4+demand5;
		d5=0;
		 
	}
	
	
	//stage 3
	f3_a= k +(c*demand3)+ f4;
	f3_b= k + (c*(demand3+demand4)) + (h*demand4) + f5;
	f3_c= k + (c*(demand3+demand4+demand5)) + (h*demand4) +(2*h*demand5)+ f6;
	f3= Math.min(f3_a,f3_b,f3_c);
	
	if(f3==f3_a){
		
		d3=demand3;
	}
	
	else if(f3 == f3_b){
		
		d3=demand3+demand4;
		d4=0;
		 
	}
	
	else{
		
		d3=demand3+demand4+demand5;
		d4=0;
		d5=0;
		
		
		 
		
	}

	
	
	
	//stage 2
	f2_a= k +(c*demand2)+ f3;
	f2_b= k + (c*(demand2+demand3)) + (h*demand3) + f4;
	f2_c= k + (c*(demand2+demand3+demand4)) + (h*demand3) +(2*h*demand4)+ f5;
	f2_d= k + (c*(demand2+demand3+demand4+demand5)) + (h*demand3) +(2*h*demand4)+(3*h*demand5)+ f6;
	f2= Math.min(f2_a,f2_b,f2_c,f2_d);
	
	if(f2==f2_a){
		
		d2=demand2;
	}
	
	else if(f2 == f2_b){
		
		d2=demand2+demand3;
		d3=0;
		 
	}
	
	else if(f2 == f2_c){
		
		d2=demand2+demand3+demand4;
		d3=0;
		d4=0;
	 
	}
	
	else{
		
		d2=demand2+demand3+demand4+demand5;
	}
	
	
	//stage 1
	f1_a= k +(c*demand1)+ f2;
	f1_b= k + (c*(demand1+demand2)) + (h*demand2) + f3;
	f1_c= k + (c*(demand1+demand2+demand3)) + (h*demand2) +(2*h*demand3)+ f4;
	f1_d= k + (c*(demand1+demand2+demand3+demand4)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ f5;
	f1_e= k + (c*(demand1+demand2+demand3+demand4+demand5)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ (4*h*demand5)+ f6;
	f1= Math.min(f1_a,f1_b,f1_c,f1_d,f1_e);
	
	if(f1==f1_a){
		
		d1=demand1;
	}
	
	else if(f1 == f1_b){
		
		d1=demand1+demand2;
		d2=0;
		 
	}
	
	else if(f1 == f1_c){
		
		d1=demand1+demand2+demand3;
		d2=0;
		d3=0;
		
		 
	}
	
	else if(f1 == f1_d){
		
		d1=demand1+demand2+demand3+demand4;
		d2=0;
		d3=0;
		d4=0;
		
	}
	
	else{
		
		d1=demand1+demand2+demand3+demand4+demand5;
		d2=0;
		d3=0;
		d4=0;
		d5=0;
		
	 
	}

	
}
	
	
function stage4(k,c,h,demand1,demand2,demand3,demand4){
	
	var f5=0;
	f4= k +(c*demand4)+ f5;
	d4=demand4;
	
	
	f3_a= k +(c*demand3)+ f4;
	f3_b= k + (c*(demand3+demand4)) + (h*demand4) + f5;
	f3= Math.min(f3_a,f3_b);
	
	if(f3==f3_a){
		
		d3=demand3;
	}
	
	else{
		
		d3=demand3+demand4;
		d4=0;
		 
	}
	
	
	//stage2
	f2_a= k +(c*demand2)+ f3;
	f2_b= k + (c*(demand2+demand3)) + (h*demand3) + f4;
	f2_c= k + (c*(demand2+demand3+demand4)) + (h*demand3) +(2*h*demand4)+ f5;
	f2= Math.min(f2_a,f2_b,f2_c);
	
	if(f2==f2_a){
		
		d2=demand2;
	}
	
	else if(f2 == f2_b){
		
		d2=demand2+demand3;
		d3=0;
		 
	}
	
	else{
		
		d2=demand2+demand3+demand4;
		d3=0;
		d4=0;
		 
	}

	//stage 1
	f1_a= k +(c*demand1)+ f2;
	f1_b= k + (c*(demand1+demand2)) + (h*demand2) + f3;
	f1_c= k + (c*(demand1+demand2+demand3)) + (h*demand2) +(2*h*demand3)+ f4;
	f1_d= k + (c*(demand1+demand2+demand3+demand4)) + (h*demand2) +(2*h*demand3)+(3*h*demand4)+ f5;
	f1= Math.min(f1_a,f1_b,f1_c,f1_d);
	
	if(f1==f1_a){
		
		d1=demand1;
	}
	
	else if(f1 == f1_b){
		
		d1=demand1+demand2;
		d2=0;
		 
		
	}
	
	else if(f1 == f1_c){
		
		d1=demand1+demand2+demand3;
		d2=0;
		d3=0;
		
	 
	}
	
	else{
		
		d1=demand1+demand2+demand3+demand4;
		d2=0;
		d3=0;
		d4=0;
		 
	}
	
}

function stage3(k,c,h,demand1,demand2,demand3){
	
	var f4=0;
	f3= k +(c*demand3)+ f4;
	d3=demand3;
	
	
	//stage2
	f2_a= k +(c*demand2)+ f3;
	f2_b= k + (c*(demand2+demand3)) + (h*demand3) + f4;
	f2= Math.min(f2_a,f2_b);
	
	if(f2==f2_a){
		
		d2=demand2;
	}
	
	else{
		
		d2=demand2+demand3;
		d3=0;
		 
	}
	

	
	
	//stage1
	f1_a= k +(c*demand1)+ f2;
	f1_b= k + (c*(demand1+demand2)) + (h*demand2) + f3;
	f1_c= k + (c*(demand1+demand2+demand3)) + (h*demand2) +(2*h*demand3)+ f4;
	f1= Math.min(f1_a,f1_b,f1_c);
	if(f1==f1_a){
		
		d1=demand1;
	}
	
	else if(f1 == f1_b){
		
		d1=demand1+demand2;
		d2=0;
		
		 
	}
	
	else{
		
		d1=demand1+demand2+demand3;
		d2=0;
		d3=0;
		
		 
	}
	
	
	
	
}

function stage2(k,c,h,demand1,demand2){
	
	var f3=0;
	f2= k +(c*demand2)+ f3;
	d2=demand2;
	
	//stage1
	f1_a= k +(c*demand1)+ f2;
	f1_b= k + (c*(demand1+demand2)) + (h*demand2) + f3;
	f1= Math.min(f1_a,f1_b);
	if(f1==f1_a){
		
		d1=demand1;
	}
	
	else{
		
		d1=demand1+demand2;
		d2=0;
		 
	}
	
	
}

function stage1(k,c,h,demand1){
	
	var f2=0;
	
	//stage1
	f1= k +(c*demand1)+ f2;
	d1=demand1;
	
}
	
	//body

	
	
	
	
	
	//container
	document.write("<div class='container' 'w3-row'>");
	
	//left portion
		document.write("<div class='w3-col s10'>");

		document.write("<h1 style='font-family:Comic Sans MS';>Result Summary</h1><br /><br />");
	
		for(var number=1; number<=n; number++){
		
	
	
			switch(number){		
			
				case 1:
			
					document.write("<div class='col-sm-7' style='background-color:Lavender;'>");
					
						document.write("<b><font size=3>Period "+number+"</b> Production&emsp;&emsp;&ensp;&ensp;&ensp;: "+d1+" units</font><br />");
						document.write("<font size=3>Demand for the product&nbsp;&nbsp;&ensp;&ensp;: "+demand1+" units</font><br><br>");
				
					document.write("</div>");
				
					break;
															
				case 2:
			
					document.write("<div class='col-sm-7' style='background-color:White;'>");
				
						document.write("<b><font size=3>Period "+number+"</b> Production&emsp;&emsp;&ensp;&ensp;&ensp;: "+d2+" units</font><br />");
						document.write("<font size=3>Demand for the product&nbsp;&nbsp;&ensp;&ensp;: "+ demand2+" units</font><br><br>");
						document.write("<font size=3>Total cost incurred&emsp;&emsp;&emsp;&emsp;&ensp;: "+"$"+f2+"</font><br><br>");
					document.write("</div>");
				
					break;
																	
				case 3:
			
					document.write("<div class='col-sm-7' style='background-color:Lavender;'>");
				
						document.write("<b><font size=3>Period "+number+"</b> Production&emsp;&emsp;&ensp;&ensp;&ensp;: "+d3+" units</font><br />");
						document.write("<font size=3>Demand for the product&nbsp;&nbsp;&ensp;&ensp;: "+ demand3+" units</font><br><br>");
						document.write("<font size=3>Total cost incurred&emsp;&emsp;&emsp;&emsp;&ensp;: "+"$"+f3+"</font><br><br>");
					document.write("</div>");
				
					break;
							
				case 4:
			
					document.write("<div class='col-sm-7' style='background-color:White;'>");
				
						document.write("<b><font size=3>Period "+number+"</b> Production&emsp;&emsp;&ensp;&ensp;&ensp;: "+d4+" units</font><br />");
						document.write("<font size=3>Demand for the product&nbsp;&nbsp;&ensp;&ensp;: "+ demand4+" units</font><br><br>");
						document.write("<font size=3>Total cost incurred&emsp;&emsp;&emsp;&emsp;&ensp;: "+"$"+f4+"</font><br><br>");
					document.write("</div>");
				
					break;
							
				case 5:
				
					document.write("<div class='col-sm-7' style='background-color:Lavender;'>");
				
						document.write("<b><font size=3>Period "+number+"</b> Production&emsp;&emsp;&ensp;&ensp;&ensp;: "+d5+" units</font><br />");
						document.write("<font size=3>Demand for the product&nbsp;&nbsp;&ensp;&ensp;: "+ demand5+" units</font><br><br>");
						document.write("<font size=3>Total cost incurred&emsp;&emsp;&emsp;&emsp;&ensp;: "+"$"+f5+"</font><br><br>");
					document.write("</div>");
				
					break;
							
				case 6:
			
					document.write("<div class='col-sm-7' style='background-color:White;'>");
				
						document.write("<b><font size=3>Period "+number+"</b> Production&emsp;&emsp;&ensp;&ensp;&ensp;: "+d6+" units</font><br />");
						document.write("<font size=3>Demand for the product&nbsp;&nbsp;&ensp;&ensp;: "+ demand6+" units</font><br><br>");
						document.write("<font size=3>Total cost incurred&emsp;&emsp;&emsp;&emsp;&ensp;: "+"$"+f6+"</font><br><br>");
					document.write("</div>");
				
					break;
						
								
				case 7:
			
					document.write("<div class='col-sm-7' style='background-color:Lavender;'>");
				
						document.write("<b><font size=3>Period "+number+"</b> Production&emsp;&emsp;&ensp;&ensp;&ensp;: "+d7+" units</font><br />");
						document.write("<font size=3>Demand for the product&nbsp;&nbsp;&ensp;&ensp;: "+ demand7+" units</font><br><br>");
						document.write("<font size=3>Total cost incurred&emsp;&emsp;&emsp;&emsp;&ensp;: "+"$"+f7+"</font><br><br>");
					document.write("</div>");
				
					break;
							
			
				case 8:
				
					document.write("<div class='col-sm-7' style='background-color:White;'>");
				
						document.write("<b><font size=3>Period "+number+"</b> Production&emsp;&emsp;&ensp;&ensp;&ensp;: "+d8+" units</font><br />");
						document.write("<font size=3>Demand for the product&nbsp;&nbsp;&ensp;&ensp;: "+ demand8+" units</font><br><br>");
						document.write("<font size=3>Total cost incurred&emsp;&emsp;&emsp;&emsp;&ensp;: "+"$"+f8+"</font><br><br>");
					document.write("</div>");
				
					break;
			
				case 9:
				
					document.write("<div class='col-sm-7' style='background-color:Lavender;'>");
				
						document.write("<b><font size=3>Period "+number+"</b> Production&emsp;&emsp;&ensp;&ensp;&ensp;: "+d9+" units</font><br />");
						document.write("<font size=3>Demand for the product&nbsp;&nbsp;&ensp;&ensp;: "+ demand9+" units</font><br><br>");
						document.write("<font size=3>Total cost incurred&emsp;&emsp;&emsp;&emsp;&ensp;: "+"$"+f9+"</font><br><br>");
					document.write("</div>");
				
					break;
				
				case 10:
					document.write("<div class='col-sm-7' style='background-color:White;'>");
				
						document.write("<b><font size=3>Period "+number+"</b> Production&ensp;&ensp;&ensp;&ensp;&nbsp;&nbsp;: "+d10+" units</font><br />");
						document.write("<font size=3>Demand for the product&nbsp;&nbsp;&ensp;&ensp;: "+ demand10+" units</font><br><br>");
						document.write("<font size=3>Total cost incurred&emsp;&emsp;&emsp;&emsp;&ensp;: "+"$"+f10+"</font><br><br>");
					document.write("</div>");
				
					break;
				
				case 11:
				
					document.write("<div class='col-sm-7' style='background-color:Lavender;'>");
				
						document.write("<b><font size=3>Period "+number+"</b> Production&ensp;&ensp;&ensp;&ensp;&nbsp;&nbsp;: "+d11+" units</font><br />");
						document.write("<font size=3>Demand for the product&nbsp;&nbsp;&ensp;&ensp;: "+ demand11+" units</font><br><br>");
						document.write("<font size=3>Total cost incurred&emsp;&emsp;&emsp;&emsp;&ensp;: "+"$"+f11+"</font><br><br>");
					document.write("</div>");
				
					break;
				
				case 12:
				
					document.write("<div class='col-sm-7' style='background-color:White;'>");
				
						document.write("<b><font size=3>Period "+number+"</b> Production&ensp;&ensp;&ensp;&ensp;&nbsp;&nbsp;: "+d12+" units</font><br />");
						document.write("<font size=3>Demand for the product&nbsp;&nbsp;&ensp;&ensp;: "+ demand12+" units</font><br><br>");
						document.write("<font size=3>Total cost incurred&emsp;&emsp;&emsp;&emsp;&ensp;: "+"$"+f12+"</font><br><br>");
					document.write("</div>");
				
					break;
			}
		}
		
			document.write("<div class='col-sm-7' style='background-color:White;'>");
				document.write("<br><br><br><br>");
			document.write("</div>");

			//Optimal Cost

			document.write("<div class='col-sm-7' style='background-color:Lavender'>");
			
				document.write("<font size=3>Optimal cost&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&ensp;&nbsp;: $"+f1+"</font>");
				
			document.write("</div>");

			//White space

			document.write("<div class='col-sm-7' style='background-color:White;'>");

				document.write("<br><br><br><br>");

			document.write("</div>");



		document.write("</div>");
		
		
		//right section
		
		document.write("<div class='w3-col s2'>");
			

			document.write("<br /><br /><br /><br /><br /><br /><br /><br /><br />");

			//holding cost
			document.write("<div class='col-sm-18' style='background-color:LavenderBlush'>");
			
				document.write("<font size=3>&ensp;&ensp;Holding cost&ensp;&ensp;: $"+h+"</font>");
				
			document.write("</div>");
			
			
			
			//Variable cost
			document.write("<div class='col-sm-18' style='background-color:White'>");
			
				document.write("<font size=3>&ensp;&ensp;Variable cost&ensp;&nbsp;: $"+c+"</font>");
				
			document.write("</div>");
			
			
			
			// Setup cost
			document.write("<div class='col-sm-18' style='background-color:LavenderBlush'>");
			
				document.write("<font size=3>&ensp;&ensp;Setup cost&ensp;&ensp;&ensp;&ensp;: $"+k+"</font>");
				
			document.write("</div>");

			

			
			//white space & button
			document.write("<div class='col-sm-18' style='background-color:White'>");
			
				document.write("<br><br><br><br><br><br><br><br><br>");
				
			
			
			
			document.write("<input type='button' class='button' value='Print' onclick=print()>");
			
			//white space
			document.write("&ensp;&nbsp;");
				
			//Email
			document.write("<a href='mailto:kalvin_kaiwen@hotmail.com' class='button' role='button'>Report</a>");

			
			//New line

			document.write("<br /><br/>");

			
			//footer

			document.write("<div class='col-sm-7' style='background-color:White;'>");

				document.write("<br><br><br><br><br><br>");

				document.write("2018&nbsp;Version&nbsp;1.0<br>");
				document.write("<br /><br />");
				

			document.write("</div>");

			
		


											
			document.write("</div>");
			
			
			
			
	
		document.write("</div>");
		
		
		
	document.write("</div>");
	
		
		
		
		 
	
		
		
	
		
	
	
	


	
	

	
	
	
	


	
	
		
		
		

	
	
	
	
	
	
		
	
	
	
	