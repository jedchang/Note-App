<template>
  <div class="markdown-container">
    <vue-simplemde
      v-model="content"
      ref="markdownEditor"
      :highlight="true"
      :configs="configs"
    />
  </div>
</template>

<script>
import hljs from 'highlight.js';
import VueSimplemde from 'vue-simplemde';
window.hljs = hljs;

export default {
  name: 'MarkDown',
  components: {
    VueSimplemde
  },
  props: {
    msg: String
  },
  data() {
    return {
      content: '',
      configs: {
        toolbar: [
          'bold',
          'italic',
          'heading',
          '|',
          'quote',
          'unordered-list',
          'ordered-list',
          '|',
          'link',
          'image',
          '|',
          'preview'
        ],
        spellChecker: false // disable spell check
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '~highlight.js/styles/atom-one-dark.css';
@import '~simplemde-theme-base/dist/simplemde-theme-base.min.css';

.markdown-container {
  width: calc(100% - 640px);
  // height: 100vh;
  // border-left: 1px solid #dddddd;
  background-color: #fff;
  z-index: 9992;
}

// dark
.dark {
  .markdown-container {
    background-color: #333926;
  }
}
</style>
