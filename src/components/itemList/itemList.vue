<template>
  <div class='main-content'>
    <slide-header></slide-header>
    <div class='main-container'>
      <ul class='item-list'>
        <li class='item-card' v-for='(item, index) in list'>
          <router-link :to="'/details/' + item.slug">
          <div class='img-cover'>
            <img :src='item.image_url || item.titleImage' alt='pic' v-on:error='def($event)'>
          </div>
          <h4>{{item.title}}</h4>
          <div class='item-meta'>
            <time>{{item.created | timeAgo}} ago</time>
            <span class='like'>{{item.likes!=undefined ? item.likes.toString():item.likesCount}}</span>
            <span class='comment'>{{item.comments!=undefined ? item.comments.toString():item.commentsCount}}</span>
          </div>
          </router-link>
        </li>
      </ul>
      <loading :list='list' :loading='loading' v-on:click.native='loadMore()'></loading>
    </div>
  </div>
</template>

<script>
import loading from '../loadMore/loadMore.vue'
import SlideHeader from '../slideHeader/slideHeader.vue'
export default {
  components: {
    loading,
    SlideHeader
  },
  data() {
    return {
      loading: false,
      cur: 1,
      limit: 12,
      offset: 0
    }
  },
  beforeMount() {
    if (!this.$store.state.list) {
      this.loading = true
      this.$store.dispatch('FETCH_LIST_DATA', {
        seed: Math.floor(Math.random() * 100)
      }).then(() => {
        this.loading = false
      })
    }
  },
  computed: {
    list() {
      return this.$store.state.list
    }
  },
  methods: {
    loadMore() {
      this.loading = true
      if (!this.$store.state.isColumn) {
        // 发现列表
        this.$store.dispatch('FETCH_LIST_DATA', {
          limit: this.limit,
          offset: this.cur * this.limit
        }).then(() => {
          this.loading = false
          this.cur++
        })
      } else {
        // 专栏列表
        this.$store.dispatch('FETCH_COLUMN_LIST', {
          limit: this.limit,
          offset: this.cur * this.limit,
          column: this.$store.state.columnName
        }).then(() => {
          this.loading = false
          this.cur++
        })
      }
    },
    def(e) {
      let defaultImg = require('../../assets/errorDefault.png')
      e.target.setAttribute('src', defaultImg)
    }
  }
}
</script>

<style>
  ul.item-list {
    overflow: auto;
    margin: 0;
    padding: 0;
  }

  ul.item-list li {
    width: 261px;
    height: 270px;
    list-style: none;
    float: left;
    margin-right: 12px;
    margin-bottom: 16px;
    background: #fff;
  }

  ul.item-list li:nth-child(4n) {
    margin-right: 0;
  }

  .item-card .img-cover {
    width: 100%;
    height: 175px;
    text-align: center;
    overflow: hidden;
  }

  .item-card .img-cover > img {
    width: 100%;
    height: 100%;
    transition: 1s;
    background-color: #eee;
  }

  .item-card .img-cover > img:hover {
    transform: scale(1.1);
  }

  .item-card .item-meta {
    padding: 0 10px;
    text-align: right;
    color: #999;
  }

  .item-card .item-meta time {
    float: left;
    padding-left: 24px;
    background: url(../../assets/icon/time.png) no-repeat top left;
  }

  .item-card .item-meta .like {
    padding-left: 24px;
    background: url(../../assets/icon/like.png) no-repeat top left;
  }

  .item-card .item-meta .comment {
    margin-left: 10px;
    padding-left: 24px;
    background: url(../../assets/icon/comment.png) no-repeat top left;
  }

  .item-card h4 {
    padding: 10px;
    margin: 0;
    font-weight: 400;
    height: 45px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 1.0rem;
    line-height: 26px;
  }
</style>
