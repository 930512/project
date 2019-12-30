<template>
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
    <!-- slides -->
    <swiper-slide>I'm Slide 1</swiper-slide>
    <swiper-slide>I'm Slide 2</swiper-slide>
    <swiper-slide>I'm Slide 3</swiper-slide>
    <swiper-slide>I'm Slide 4</swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
import 'swiper/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        autoplay:true,
        loop:true,
          pagination: {
            el: '.swiper-pagination'
          },
        }
    }
  },

}
</script>

<style>
.swiper-container{
  width: 100%;
  height: 150px;
  border: 1px solid #cccccc;
}
.swiper-slide{
  width: 100%;
  height: 100%;
}
</style>