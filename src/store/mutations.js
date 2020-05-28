export default {
    //音乐播放:   存储数据
    queryDataM(state, payload) {
        let { id, data } = payload
        state.cur = parseInt(id)
        if (data) {

            state.list.push({
                // 展开运算符,把data对象,展开为键值对
                ...data,
                // 替换 data中lyric的键值对
                lyric: formateLyric(data.lyric)
            })
        }

    }
}
function formateLyric(lyric) {
    // 因为 lyric 只有最后一行没有 &#10 
    lyric += '&#10'
    const obj = { 32: '', 40: '(', 41: ')', 45: '-' }
    lyric.replace(/&#(\d+);/g, (item, num) => {
        // 第一个参数 表示所有 匹配到的项 例如: &#40
        // 第二个参数 表示 正则表达式中 第n个括号内匹配的内容
        // 如果有多个(\d+) 则num1 num2... 分别与之对应
        item = obj[num] || item
        // 把匹配到的项 二次替换 为obj中对应的值
        return item
    })

    let lyricArr = []
    // replace 会匹配到多个项,每次匹配时都会执行一次回调函数 
    lyric.replace(
        /\[(\d+)&#58;(\d+)&#46;(?:\d+)\]([^&#;]+)&#10/g,
        (_, minutes, seconds, content) => {
            // 把匹配到的项 按照顺序 依次 作为回调函数的参数
            // 把每一项的信息以对象的形式存放至数组中
            lyricArr.push({
                minutes, seconds, content
            })
        })
    return lyricArr
}