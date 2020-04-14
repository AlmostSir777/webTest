
var timer,index = 1,tapBtn,
list = [
"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586320547076&di=4f4682f85960b040b34008f25b148c38&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853",
"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586320547073&di=8df034934f9d49c8fb8236dda3d70174&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D2247852322%2C986532796%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853",
"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586320547072&di=45d85f275c15cd69455df29812c64e71&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D3363001160%2C1163944807%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D830",
"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586320668201&di=c31c5d0c4fc9529715cd73dfe13ce364&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D3949188917%2C63856583%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D875"];
;

function startTimer (url){
var urlString = list[index];
 index =  ++index%list.length;
document.body.style.backgroundImage = "url("+urlString+")";
}
window.onload = function(){
   document.body.style.backgroundImage = "url("+list[0]+")";
   timer = window.setInterval("startTimer()",5000)
}
window.onunload = function(){
    if(timer){this.clearInterval(timer);}
}
function btnAction(button){
    button.value = index%2?"带你飞":"带你装逼";
                // $("btn").val(function(){
                //   this.value = index%2?"带你飞":"带你装逼";
                // });
              console.log($("#btn"));
              var urlStr = list[index%2?1:0];
              var img = document.getElementById('img1');
              img.src = urlStr; 
                console.log(urlStr);
                console.log(document.getElementById('img1'));
                // document.getElementById('img1').src = "url("+list[index%2?1:0]+")";
    startTimer();
}
// $(function(){
//     $("#btn").click(function(){
//         this.value = index%2?"带你飞":"带你装逼";
//         console.log($("#btn"));
//     });
// });