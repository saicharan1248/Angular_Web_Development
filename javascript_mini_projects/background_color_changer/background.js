// let color_element = document.getElementById("color_element")
//  color_element.oninput = function(){
//      document.body.style.background = this.value
//      console.log(this.value)
//  }
// color_element.addEventListener('input', function(){
//     document.body.style.background = this.value

// })
function bgchange(){
    let s = '0123456789abcdef'
    let color = "#"

    for (i=0;i<6;i++){
        let index = Math.floor(Math.random()*16)
        color = color+s[index]


    }
    document.body.style.background = color
}
setInterval(bgchange,1000)