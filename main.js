const photo = document.querySelector('.photo');
let innerli = '';
let current = 1;
let prev;
let next;
let timer;
const firstphoto = photo.firstElementChild.cloneNode(true);
const lastphoto = photo.lastElementChild.cloneNode(true);

photo.appendChild(firstphoto);
photo.insertBefore(lastphoto,photo.firstElementChild);
const photoImgs = document.querySelectorAll('.photo1');
let listImgNum = photoImgs.length -1;
photo.style.width = (photoImgs.length) * 100 + '%';
photo.style.left = -(current*100) + '%';
photoImgs.forEach((item,index)=>{
    item.style.width = (100/photoImgs.length) + '%';
    item.style.left = (index * (100/photoImgs.length)) + '%';
})

function slideMove(imgNum){
    photo.style.transition = 0.5+'s';
    photo.style.left = -(imgNum*100)+'%';
    current = imgNum;
    console.log(current);
    if(imgNum==listImgNum){
        firstCurrent();
    }
    if(imgNum==0){
        lastCurrent();
    }
}
function firstCurrent(){
    current = 1;
    setTimeout(function(){
        photo.style.transition = '0s';
        photo.style.left = -(100)+'%';
    },500)
}
function lastCurrent(){
    setTimeout(function(){
        photo.style.transition = '0s';
        photo.style.left = -(listImgNum-1)*100+'%';
        current = listImgNum-1;
    },500)
}
function stopMove(){
    clearInterval(timer);
    console.log('중지');
}
startMove();