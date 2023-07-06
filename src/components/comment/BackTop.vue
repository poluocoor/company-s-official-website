<template>
    <div class="backtop" @click="zero">
        <el-icon style="font-size: 30px;"><Top /></el-icon>
    </div>
</template>


<script setup>
window.addEventListener('scroll', function () {
    let scrollTop = document.documentElement.scrollTop; // 滚动的距离
    if (scrollTop > 250) {
        document.querySelector('.backtop').style.display = 'block';
    } else {
        document.querySelector('.backtop').style.display = 'none';
    }
})
let zero = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
</script>
<style scoped>
.backtop {
    width: 50px;
    height: 50px;
    position: fixed;
    top: 90%;
    right: 50px;
    cursor: pointer;
    /* border: 1px solid #2b2b2b; */
    padding-left: 9px;
    line-height: 73px;
    border-radius: 50%;
    background-color: #076CE0;
    color: #fff;
}
</style>