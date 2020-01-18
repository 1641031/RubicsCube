// 引入canvas_get_image_colors库
// 实例代码

let input = document.querySelector("#file")

input.addEventListener("change", (event) => {
    /**
     * 上传图片之后
     * 替换图片
     * 执行方法
     */
    let img = document.querySelector("#img")
    let file = event.target.files[0]
    let fr = new FileReader() 

    fr.onload = (e) => {
        let n_img = new Image()
        n_img.src = e.target.result
        n_img.onload = (e) => {
            n_img.id = 'img'
            n_img.width = n_img.width
            n_img.height = n_img.height
            document.body.replaceChild(n_img, img)
            getImg()
        }
    }

    fr.readAsDataURL(file)
})

function getImg() {
    /**
     * 获取图片，实例化图片
     * 执行方法
     * 解析完成，获得数组，操作回调函数
     * 
     */
    var img = document.querySelector("#img")
    var a = new getImgColor(img)
    
    // 获取 坐标 0 0 点的颜色值
    console.log(a.getColorXY(0, 0))

    a.getColors().then((arr) => {

        let ul = document.querySelector("#ul")
        let text = document.querySelector("#text")
            text.innerText = '共有' + arr.length + '个颜色';
        let str = ''

        arr.forEach((obj, index) => {
            str += `<li style="background-color:${obj['#']}">${obj['#']} - ${obj['index']}次</li>`;
        })

        ul.innerHTML = str
    })
}