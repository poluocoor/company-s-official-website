<template>
    <a class="newsAll">
        <!-- 日期 -->
        <div class="time">
            <div class="date">
                <slot name="date"></slot>
            </div>
            <div class="year">
                <slot name="year"></slot>
            </div>
        </div>
        <!-- 图片 -->
        <div class="picture">
            <slot name="image"></slot>
        </div>
        <!-- 内容 -->
        <div class="newsContent">
            <div class="newsTitle">
                <slot name="newsTitle"></slot>
            </div>
            <div class="newsNav">
                <slot name="newsNav"></slot>
            </div>
        </div>
    </a>
</template>

<script>
    export default {
        setup(){
           
        }
    }
</script>

<style lang="scss" scoped>
.newsAll{
    display: block;
    width: 100%;
    height: 240px;
    display: flex;
    // justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 28px 59px;
    .time{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .date{
            font-size: 20px;
        }
        .year{
            font-size: 14px;
            color: #B6BDC3;
        }
    }
    .picture{
        margin-left: 50px;
        margin-right: 24px;
        width: 250px;
        height: 184px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .newsContent{
        .newsTitle{
            color: #2B2B2B;
        }
        .newsNav{
            font-size: 14px;
            margin-top: 50px;
            color: #AEAFB5;
        }
        
    }
}
.newsAll:hover{
    cursor: pointer;
    transition: 1s;
    background-color: #0034AB;
    
    .date{
        color: #FFFFFF;
    }
    .year{
        color: #B6BDC3;
    }
    .newsTitle{
        color: #FFFFFF;
    }
    .newsNav{
        color: #D9D9D9;
    }
}
</style>