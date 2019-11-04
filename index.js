// Your code here
function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left >= -5 && left < 360 ) {
    dodger.style.left = `${left + 3}px`;
  }
  if (left > 360) {
		dodger.style.left = "360px"
  }
}


function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function jumpDodger() {
  let bottomNumbers = dodger.style.bottom.replace("px", "");
  let bottom = parseInt(bottomNumbers, 10);
 
  if (bottom >= 0) {
    dodger.style.bottom = `${bottom + 2}px`;
  }
  if (bottom > 380) {
	dodger.style.bottom = '380px'
  }
  
}

function downDodger() {
  let bottomNumbers = dodger.style.bottom.replace("px", "");
  let bottom = parseInt(bottomNumbers, 10);
 
  if (bottom > 0) {
    dodger.style.bottom = `${bottom - 3}px`;
  }
  if (bottom < 0 ) {
	dodger.style.bottom =  '0px'
  }
}