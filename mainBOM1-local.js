window.onload=function(){
	
	
	
	
	
	
	let liz=document.querySelectorAll("li");
	console.log(liz);
	let mdiv=document.querySelector(".expermentcolor");
	console.log(mdiv);
	
	if(window.localStorage.getItem("color")){
		mdiv.style.backgroundColor=window.localStorage.getItem("color");
			liz.forEach(function(el){
				el.classList.remove("active");
			});
			document.querySelector(`[data-color='${window.localStorage.getItem("color")}']`).classList.add("active");
		
	}
	
	liz.forEach(function(el){
		el.addEventListener("click",function(ele){
			liz.forEach(function(ee){
				ee.classList.remove("active");
			});
			ele.currentTarget.classList.add("active");
			window.localStorage.setItem("color",ele.currentTarget.dataset.color);
			mdiv.style.backgroundColor=window.localStorage.getItem("color");
		});
	});
	
	
/* 	liz.forEach(function(ele){
		ele.addEventListener("click",function(ele){
			ele.currentTarget.classList.add("active");
			
			
		});
		
		
	});
	 */
	
	
	
/* 	
	let lis=document.querySelectorAll("li");
	
console.log(lis);

lis.forEach(function(liss){
	liss.onclick=function(e){
		liss.classList.add("active");
		//console.log(e.currentTarget.dataset.color);
	};
	
	
});

 */

}