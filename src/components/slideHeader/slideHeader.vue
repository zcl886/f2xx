<template>
  <div class='hero'>
    <div class='h-container'>
      <h1>知 乎 · {{title || '发现'}}</h1>
      <p class='sub-title'>随心写作，自由表达</p>
      <p class='label-list'>
        <span>热门专栏：</span>
        <span v-for='(val, key) in columns1' v-on:click='search(key)'>{{val}}</span>
      </p>
      <p class='label-list'>
        <span v-for='(val, key) in columns2' v-on:click='search(key)'>{{val}}</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      columns1: {
        neuroscience: '神经科学',
        lswlsw: '潜台词',
        zhishifenzi: '知识分子',
        qiechihe: '企鹅吃喝指南',
        zhimovie: '知影',
        he110world: '我们的征途是星辰大海',
        hibetterme: '女神进化论',
        huyou: '忽悠的原理与技巧',
        WebNotes: '小道消息',
        haoqishiyanshi: '好奇实验室'
      },
      columns2: {
        zhangjiawei: '张佳玮写字的地方',
        zuimei: '最美应用',
        yeka52: '虚晃一枪',
        huizi: '你不可能做不好一锅红烧肉',
        plant: '花事未了'
      }
    }
  },
  computed: {
    title () {
      return this.columns1[this.$store.state.columnName] || this.columns2[this.$store.state.columnName]
    }
  },
  methods: {
    search(name) {
      this.$store.state.list = null
      this.$store.dispatch('FETCH_COLUMN_LIST', {
        column: name
      })
    }
  }
}
</script>
<style>
  .hero {
    background-image: url(http://i1.piimg.com/575157/9fde24e6975dec11.jpg);
    /*margin-top: -50px;*/
    position: relative;
    z-index: 0;
    margin: 0;
    padding-top: 50px;
    background-size: cover;
    background-position: 100% 50%;
    text-align: center;
    color: #fff;
    background-color: #555;
  }

  .hero .h-container {
    position: relative;
    padding: 80px 0 80px;
  }

  .h-container {
    padding-left: 15px;
    padding-right: 15px;
  }

  .label-list span {
    margin-right: 10px;
    cursor: pointer;
    font-weight: bold;
    font-size: 19px;
  }

  .label-list span:hover {
    color: #fcc;
  }

  .sub-title {
    margin-bottom: 40px;
  }
</style>
