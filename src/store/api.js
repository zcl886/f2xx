import reqwest from 'reqwest'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function fetch(url, params) {
  return new Promise((resolve, reject) => {
    reqwest({
      url: 'https://bird.ioliu.cn/v1/?url=http://101.200.47.87:3001' + url,
      data: Object.assign({}, params),
      success: resolve,
      error: reject
    })
  })
}

const store = new Vuex.Store({
  state: {
    list: null,  // 文章列表
    item: null,  // 文章详情
    comments: null,  // 评论
    resultCode: null,  // 接口返回状态码
    isColumn: false, // 是否是专栏（发现）
    columnName: null   // 专栏名
  },
  actions: {
    /**
     * 获取列表
     */
    FETCH_LIST_DATA: ({commit, state}, {limit, offset, seed}) => {
      return fetch('/getNews', {
        limit: limit || 12,
        offset: offset || 0,
        seed: seed || 45
      }).then(data => {
        commit('SET_LIST', data)
        commit('SET_RESULTCODE', 200)
        // console.log("列表数据：", data)
      }).catch(data => {
        commit('SET_RESULTCODE', 500)
        console.error('error occured.')
      })
    },
    /**
     * 记录详情
     */
    FETCH_ITEM: ({commit, state}, {id}) => {
      return fetch('/getNewsDetail', {
        id: id
      }).then(data => {
        commit('SET_ITEM', data)
        commit('SET_RESULTCODE', 200)
      }).catch(data => {
        commit('SET_RESULTCODE', 500)
        console.error('error occured.')
      })
    },
    /**
     * 评论列表
     */
    FETCH_COMMENTS: ({commit, state}, {id}) => {
      return fetch('/getNewsComments', {
        id: id,
        limit: 10,
        offset: 0
      }).then(data => {
        commit('SET_COMMENTS', data)
        commit('SET_RESULTCODE', 200)
      }).catch(data => {
        commit('SET_RESULTCODE', 500)
        console.error('error occured.')
      })
    },
    /**
     * 获取专栏列表
     */
    FETCH_COLUMN_LIST: ({commit, state}, {column, limit, offset}) => {
      return fetch('/getZhuanLan', {
        column: column,
        limit: limit || 12,
        offset: offset || 0
      }).then(data => {
        commit('SET_LIST', data)
        commit('SET_RESULTCODE', 200)
        commit('IS_COLUMN', true)
        commit('SET_COLUMN', column)
        // console.log("专栏列表数据：", data)
      }).catch(data => {
        commit('SET_RESULTCODE', 500)
        console.error('error occured.')
      })
    }
  },
  mutations: {
    SET_LIST(state, data) {
      state.list = state.list ? state.list.concat(data) : data
    },
    SET_ITEM(state, data) {
      state.item = data
    },
    SET_COMMENTS(state, data) {
      state.comments = data
    },
    SET_RESULTCODE(state, code) {
      state.resultCode = code
    },
    IS_COLUMN(state, code) {
      state.isColumn = code
    },
    SET_COLUMN(state, name) {
      state.columnName = name
    }
  }
})

export default store
