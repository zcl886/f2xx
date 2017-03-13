<template>
  <div class="main-container">
    <div class="item-details">
      <div class="panel article-wrap" v-if="item">
        <div class="title" :style="{ backgroundImage:'url(' + item.titleImage + ')' }">
          <h2>{{item.title}}</h2>
          <div class="img-mask"></div>
        </div>
        <h3 class="meta">
          <span class="user">{{item.author.name}}</span>
          <span class="desc">{{item.author.description}}</span>
          <time>发表时间：{{item.publishedTime}}</time>
        </h3>
        <article v-html="item.content"></article>
      </div>
      <comments v-if="item"></comments>
    </div>
  </div>
</template>

<script>
import Comments from '../comments/comments.vue'
export default {
  components: {
    Comments
  },
  beforeMount () {
    this.$store.dispatch('FETCH_ITEM', {
      id: this.$store.state.route.params.id
    })
  },
  computed: {
    item () {
      return this.$store.state.item
    }
  }
}
</script>

<style>
  .item-details * {
    max-width: 100%;
    overflow-x: hidden;
  }

  .item-details {
    padding-top: 50px;
  }

  .panel {
    background: #fff;
    padding: 20px;
  }

  .article-wrap .title {
    position: relative;
    width: 100%;
    height: 400px;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
  }

  .article-wrap .title .img-mask {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: -webkit-linear-gradient(270deg, rgba(0, 0, 0, 0) 65%, rgba(0, 0, 0, 0.6));
    background: -moz-linear-gradient(270deg, rgba(0, 0, 0, 0) 65%, rgba(0, 0, 0, 0.6));
    background: -o-linear-gradient(270deg, rgba(0, 0, 0, 0) 65%, rgba(0, 0, 0, 0.6));
    background: -ms-linear-gradient(270deg, rgba(0, 0, 0, 0) 65%, rgba(0, 0, 0, 0.6));
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 65%, rgba(0, 0, 0, 0.6));
  }

  .article-wrap .title > img {
    width: 100%;
  }

  .article-wrap .meta {
    margin: 15px 0;
  }

  .article-wrap .meta .user {
    padding-left: 24px;
    background: url(../../assets/icon/user.png) no-repeat top left;
  }

  .article-wrap .meta .desc {
    color: #caa;
    font-size: 0.8em;
    margin-left: 15px;
  }

  .article-wrap .meta time {
    float: right;
    color: #caa;
    font-size: 0.8em;
  }

  .article-wrap .title > h2 {
    position: absolute;
    bottom: 10px;
    padding: 0 25px;
    color: #fff;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    z-index: 1;
  }

  article img {
    max-width: 100%;
    display: block;
    margin: 20px auto 30px;
  }
</style>
