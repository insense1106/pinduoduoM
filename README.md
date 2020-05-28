# pdd

# https://github.com/insense1106/pinduoduoM.git

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
"id": 1302494,
"haspromotionTag": false,
"img": "http://p1.meituan.net/w.h/moviemachine/6664cd8c31f1254bc52793a158dc53ff8811971.jpg",
"version": "",
"nm": "调酒师",
"preShow": false,
"sc": 0,
"globalReleased": false,
"wish": 819,
"star": "刘挺,陆莹,张如意",
"rt": "2020-03-13",
"showst": 1,
"wishst": 0,
"comingTitle": "3 月 13 日 周五"

        .logo a:hover:before
            margin-left: -55px;
            transition: margin 0.3s;
        .link a
            font-size 1rem
            &:hover
            color red
            .children
            opacity 1
            height 220px
            z-index 990

.other
background-color: #fff;

.other input
box-sizing: border-box;
padding-left: 8px;
width: 100px;
border: none
&:focus
outline: none;

前端 后端 协调
g1header 组件
全部商品分类  
是否有子菜单 如果有 获取数据 渲染
后端提供 /xiaomi/g1header 该选项的数据 设置 flag 0 表示没有 1 表示有

### @touchend.prevent 只有在移动端生效

var isHide = true;
52 var textContainer;
53 function initView() {
54 textContainer = $("#info-manager-content");
 55         var single=document.createElement("div");
 56         // 设置文字样式
 57         single.style.cssText = "padding:0;visibility:hidden;font-familly:微软雅黑;font-size:12px";
 58         single.innerHTML = "单";
 59         document.body.appendChild(single);
 60         //获取该样式下的单个文字的高度
 61         var singleHeight = single.offsetHeight;
 62         document.body.removeChild(single);
 63         //获取整个段落的高度
 64         var paragraphHeight = textContainer.innerHeight();
 65         //设置你要限制的高度
 66         var limitHeight = 50;
 67         //当前文本行数
 68         var currentLine = (paragraphHeight/singleHeight).toFixed(0);
 69         //转化为行数
 70         var lineCount = (limitHeight / singleHeight).toFixed(0);
 71 //        alert(singleHeight+"----"+paragraphHeight+"---"+lineCount+"---"+currentLine);
 72 //        修改段落限制行数
 73         textContainer.attr("style", "-webkit-line-clamp:" + lineCount);
 74 //        设置按钮的显示或隐藏
 75         if (currentLine >= lineCount) {
 76             $(".more-text").show();
77 isHide = true;
78 } else {
79 $(".more-text").hide();
 80         }
 81     }
 82     initView();
 83 
 84     window.onresize = function () {
 85         initView();
 86     };
 87     //添加点击事件
 88     $(".more-text").on("click", function () {
89 if (isHide) {
90 textContainer.removeClass("info-shrink-text");
91 $(this).text("收起");
 92             isHide = false;
 93         } else {
 94             textContainer.addClass("info-shrink-text");
 95             $(this).text("查看更多");
96 isHide = true;
97 }
98
99 });

### 问题

f1listitem.vue?60d1:84 [Violation] Added non-passive event listener to a scroll-blocking 'touchmove' event. Consider marking event handler as 'passive' to make the page more responsive. See https://www.chromestatus.com/feature/5745543795965952

### 解决方案

npm i default-passive-events -S
main.js 中引入
import 'default-passive-events';

# 但是会导致页面的尺寸出现问题...

# 双向居中

# text-transform

# border-box

# bgc linear-gradient(90deg,xx,xx,xx,)
