// 随机颜色
function randomColor() {
    let r = Math.floor(Math.random() * (222 - 72) + 72);
    let g = Math.floor(Math.random() * (222 - 77) + 77);
    let b = Math.floor(Math.random() * (238 - 128) + 128);
    return colors = `rgb(${r},${g},${b})`;
}
// 为nav导航栏绑定点击事件
var navLis = document.getElementsByClassName("top-nav-ul-li");
for (let i = 0; i < navLis.length; i++) {
    navLis[i].addEventListener('click', () => {
        console.log(navLis[i].innerHTML)
    })
    // navLis[i].style.borderColor = randomColor();
}
// 为不同的顶部知识li标签增添颜色
// var knowledgeLis = document.getElementsByClassName("top-knowledge-ul-li");
// for (let i = 0; i < knowledgeLis.length; i++) {
//     knowledgeLis[i].style.borderColor = randomColor();
//     // knowledgeLis[i].style.setProperty('border', '1px solid ' + randomColor());
//     // knowledgeLis[i].style.setProperty('color', "#666");
//     knowledgeLis[i].addEventListener('click', () => {
//         console.log(knowledgeLis[i].innerHTML);
//     })
// }
// 为文章列表提供点击与颜色切换
var articleList = document.getElementsByClassName("article-list");
for (let i = 0; i < articleList.length; i++) {
    articleList[i].addEventListener('click', () => {
        for (let i = 0; i < articleList.length; i++) {
            articleList[i].style.color = 'rgb(67, 67, 255)';
        }
        articleList[i].style.color = 'rgb(255, 196, 35)';
    })
}

// 修改所有元素的边框 提供随机颜色样式
// [].slice.call(document.getElementsByTagName('*')).forEach
// ((ele) => {ele.style.setProperty('border', '1px solid #' + Math.random().toString(16).slice(2, 8));})