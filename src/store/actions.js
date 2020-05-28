import axios from '../assets/http/axios_movie'
export default {
    // 音乐播放器: 根据id更改数据
    async queryDataA({ state, commit }, id) {
        // 获取 id对应的值
        let result = state.list.find((item) => {
            return parseInt(item.id) === parseInt(id)
        })
        // 判断result是否存在
        if (result) {
            // 如果存在  通过mutations修改数据
            commit('queryDataM', {
                id
            })
            return
        }
        //如果 result 不存在  通过网络请求获取
        result = await axios.info(id)
        //判断服务器响应码是否正常
        if (parseInt(result.code) === 0) {
            // 通过mutations修改数据
            commit('queryDataM', {
                id, data: result.data
            })
        }

    }
}