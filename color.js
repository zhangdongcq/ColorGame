
// var game = {};
// game.init = function(){
//     setupModeButtons();
//     //生成六种色块并绑定鼠标监听
//     setupMySquares();
//     reset.addEventListener("click", function(){
//         resetAll();
//     });
// };

var numberOfSquares = 6;
var colors = generateColors(numberOfSquares);
var pickedColor = pickColor();
var colorBoard = document.querySelector("h1 span");
var barMessage = document.getElementById("message");
colorBoard.innerHTML = pickedColor;
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();
function init(){
    //按钮监听模式
    setupModeButtons();
    //生成六种色块并绑定鼠标监听
    setupMySquares();
    reset.addEventListener("click", function(){
        resetAll();
    });
}
function setupMySquares(){
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
                barMessage.textContent = "Good choice";
                reset.innerHTML = "Player again?"
                changeColors(pickedColor);
                h1.style.backgroundColor = pickedColor;
            }else{
                this.style.backgroundColor = "#232323";
                barMessage.textContent = "Try again!";
            }
        });
    }
}
function setupModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy"? numberOfSquares = 3 : numberOfSquares = 6;
            resetAll();
        });
    }
}

function resetAll(){
    reset.textContent = "New Colors";
    barMessage.textContent = "";
    colors = generateColors(numberOfSquares);//重新生成六种颜色
    pickedColor = pickColor();//从颜色中任选一种颜色
    colorBoard.innerHTML = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

//重置所有选项，重置颜色上面板显示，重置六种颜色

function changeColors(color){//回答正确后全部更改为一个颜色
	for (var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}
//选择六种颜色中任意一种
function pickColor(){
	return colors[Math.floor(Math.random()*colors.length)];
}
//生成 num 中颜色，3个或6个
function generateColors(num){
	var arr = [];
	for (var i = 0; i < num; i++){
        arr.push(randomColor());
	}
	return arr;
}
function randomColor(){//随机生成一个颜色值
	var p1 = Math.floor((Math.random() * 256));
	var p2 = Math.floor((Math.random() * 256));
	var p3 = Math.floor((Math.random() * 256));
	return "rgb("+p1+", "+p2+", "+p3+")";
}