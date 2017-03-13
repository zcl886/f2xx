<template>
    <div class="loading-wrap">
        <svg v-if="loading" class="loading" width="44px" height="44px" viewBox="0 0 44 44">
            <circle class="path" fill="none" stroke-width="4" stroke-linecap="round" cx="22" cy="22" r="20"></circle>
        </svg>
        <div v-if="!loading" class="loading-text">
            加载更多...
        </div>
    </div>
</template>

<script>
    export default {
      props: ['list', 'loading']
    }
</script>

<style>
.loading-wrap {
    margin: 10px 0;
    text-align: center;
    box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.1);
}
.loading-wrap:hover {
    box-shadow: 1px 5px 8px rgba(0, 0, 0, 0.3);
}
.loading-text {
    color: #999;
    padding: 15px 0;
    cursor: pointer;
}
.loading {
    animation: rotator 1.4s linear infinite;
}
@keyframes rotator {
    0% {
        transform: scale(0.5) rotate(0deg);
    }
    100% {
        transform: scale(0.5) rotate(270deg);
    }
}
.loading .path {
    stroke: #009dd7;
    stroke-dasharray: 126;
    stroke-dashoffset: 0;
    transform-origin: center;
    animation: dash 1.4s ease-in-out infinite;
}
@keyframes dash {
    0% {
        stroke-dashoffset: 126;
    }
    50% {
        stroke-dashoffset: 63;
        transform: rotate(135deg);
    }
    100% {
        stroke-dashoffset: 126;
        transform: rotate(450deg);
    }
}
</style>

