function fibo(i = 0, n, output){
    if(n == i){
        return ;
    }else{
        if(i == 0){
            output.push(0);
            fibo(1, n, output)
        }else if(i == 1){
            output.push(1);
            fibo(2, n, output)
        }else{
            output.push(output[i-1] + output[i-2])
            fibo(i + 1, n, output)
        }
    }
}

document.getElementById("fibo").addEventListener("click", clickFibo = () =>{

    const input = document.getElementById("input");
    if(input.value){
        const val = document.getElementById("val");
        val.innerHTML = "";
        let output = [];
        fibo(1, input.value, output);
        val.innerHTML = output.toString().replace(/,/g, "   ");
    }
});

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const sizeSlider = document.getElementById("size");
const amountSlider = document.getElementById("amount");

let size = 50;
let floors = 0;

function drawTriangle(x, y, size){
    let height = Math.sqrt((Math.pow(size, 2) - Math.pow(size / 2, 2)));   

    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + size, y);
    context.lineTo(x + (size / 2), y - height);
    context.closePath();
    context.fillStyle = "#795548";
    context.fill();
}

//level- amount of floors to draw(by the amount we draw the number of inner triangels inside a triangel)
function drawTriangelBySizeAndAmount(posX, posY, size, level) {
    const innerSize = size / 2; 
    const innerPositions = [
      [posX, posY],
      [posX + innerSize, posY],
      [posX + innerSize * 0.5, posY - Math.sin(Math.PI / 3) * innerSize],
    ]; 
    if (level == 0) {
      innerPositions.forEach((trianglePosition) => {
        drawTriangle(trianglePosition[0], trianglePosition[1], innerSize);
      });
    } else {
      innerPositions.forEach((trianglePosition) => {
        drawTriangelBySizeAndAmount(trianglePosition[0], trianglePosition[1], innerSize, level - 1);
      });
    }
  }
drawTriangle(0, canvas.height, size);

sizeSlider.addEventListener("change", (e) => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  size = parseInt(sizeSlider.value);
  startX = (canvas.width - size) / 2;
  if (floors === 0) {
    drawTriangle(0, canvas.height, size);
  } else {
    drawTriangelBySizeAndAmount(0, canvas.height, size, floors - 1);
  }
});

amountSlider.addEventListener("change", (e) => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  floors = parseInt(amountSlider.value);
  startX = (canvas.width - size) / 2;
  if (floors === 0) {
    drawTriangle(0, canvas.height, size);
  } else {
    drawTriangelBySizeAndAmount(0, canvas.height, size, floors - 1);
  }
});