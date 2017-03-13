<template>
  <div class="comments-wrap">
    <div class="title">最新评论</div>
    <div class="comments-list panel">
      <div class="comments-item" v-for="item in comments">
        <div class="top">
          <a :href="item.author.profileUrl" target="_blank" class="user">{{item.author.name}}</a>
          <br>
          <time>{{item.createdTime}}</time>
        </div>
        <div class="content">
          {{item.content}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    beforeMount () {
      this.$store.dispatch('FETCH_COMMENTS', {
        id: this.$store.state.route.params.id
      })
    },
    computed: {
      comments () {
        return this.$store.state.comments
      }
    }
  }
</script>

<style>
.comments-wrap {
	margin-top: 25px;
}
.comments-wrap .title {
	padding: 10px;
	font-size: 16px;
	font-weight: bold;
    background-color: #eaeaea;
    border-radius: 3px 3px 0 0;
}
.comments-item {
	padding: 25px 0;
	border-bottom: 1px solid #ccc;
}
.comments-item:first-child {
	padding: 0 0 20px 0;
}
.comments-item:last-child {
	border-bottom: none;
}
.comments-item .top {
	margin-bottom: 15px;
	color: #caa;
}
.comments-item .top>a {
	font-weight: bolder;
	font-size: 1em;
	padding-left: 24px;
	background: url(../../assets/icon/user.png) no-repeat top left;
}
</style>
