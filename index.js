// const btn = document.getElementById('rectangle1');

// btn.addEventListener('click', function onClick(event) {
//   // 👇️ change background color
 
//   const box = document.getElementById('box');

//   box.style.backgroundColor = 'salmon';

//   // 👇️ optionally change text color
//   // event.target.style.color = 'white';
// });
var boxes = document.querySelectorAll('.box');

    for (var i = 0; i < boxes.length; i++) {
      boxes[i].addEventListener('click', function() {
        // Reset all boxes to default color
        for (var j = 0; j < boxes.length; j++) {
          boxes[j].style.backgroundColor = 'white';
        }
        // Change background color of clicked box
        this.style.backgroundColor = ' #EBEBEB';
      });
    }