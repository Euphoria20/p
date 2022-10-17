let progressBar= document.querySelector(".circular-progress");
let valuecontainer=document.querySelector(".value-container");

let progressvalue=0;
let progressEndvalue=65;
let speed=200;

let progress= setInterval(() =>{
	progressvalue++;
	valuecontainer.textcontent = "${progressvalue}%";
	progressBar.style.background = 'conic-gradient(
			#4d5bf9 ${progressvalue * 3.6}deg,
            #cadcff ${progressvalue * 3.6}deg
	)';
if (progressvalue == progressEndvalue) {
	clearInterval(progress);
}
}, speed);