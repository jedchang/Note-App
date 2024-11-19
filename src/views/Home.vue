<template>
  <!-- 判斷 store 中 theme 的值，用 computed 取得的函式來比對 -->
  <div
    class="home"
    :class="{'dark' : changeTheme === 'dark'}"
  >
    <Collections></Collections>
    <NoteLists></NoteLists>
    <MarkDown></MarkDown>
  </div>
</template>

<script>
// @ is an alias to /src
import Collections from '@/components/Collections.vue';
import NoteLists from '@/components/NoteLists.vue';
import MarkDown from '@/components/MarkDown.vue';

export default {
  name: 'home',
  components: {
    Collections,
    NoteLists,
    MarkDown
  },
  data() {
    return {};
  },
  computed: {
    // 讀取 store 上的 theme 的值
    changeTheme() {
      return this.$store.state.theme;
    }
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.home {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
}
</style>

