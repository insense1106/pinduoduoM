# html5 新功能

- 简化语法 `<!doctype html>`
- 语义化标签 `header、footer、nav、article、figure...` 注意兼容性
- `新增 <audio> <video>`
- # 表单元素的升级
- `Html5给input新增加一些类型（search、email、number、tell、range、color、date）`

- `升级：给表单元素新增加属性placeholder（给表单元素设置提示信息）`

- `升级：提供了新的下拉框方式`
- # 新增 canvas 标签
- `Echarts图表插件（http://echarts.baidu.com），它是基于canvas实现`

- 删除`< b >`和`< font>` 标签

- 删除`<frame>, <center>, <big>` 标签
- 新增一些 API（主要是供 js 使用的）
- webstorage：localStorage、seessionStorage 本地存储解决方案 web
- socket：新的客户端和服务器端通信方案 获取地理位置或者重力感应等 API
- # Geolocation
- `定位功能（Geolocation）是HTML5的新特性，因此只有在支持HTML5的现代浏览器上运行，特别是手持设备如iphone，地理定位更加精确。`
- 浏览器是否支持地理定位
- 侵犯隐私
- 用户允许

````var x=document.getElementById("demo");
 function getLocation()
 {
 if (navigator.geolocation)
 {
 navigator.geolocation.getCurrentPosition(showPosition);
 }
 else
 {
 x.innerHTML="该浏览器不支持获取地理位置。";
 }
 }

function showPosition(position)
{
x.innerHTML="纬度: " + position.coords.latitude +
"<br>经度: " + position.coords.longitude;
}```
````

- `注意服务的启用有个要求：Only request geolocation information in response to a user gesture(仅在响应用户手势时请求地理位置信息)，也就是需要你绑定一个鼠标或者手势的dom操作事件。`
- API: `navigator.geolocation.getCurrentPosition(success, error, options)`
-  限于网络环境,请用国内的地图API 
- 