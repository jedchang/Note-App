<template>
  <div class="lists-container">
    <div class="header">
      <div class="views">
        <a
          href="javascript:;"
          class="btn btn-list"
        >
          <i class="material-icons">view_stream</i>
        </a>
        <a
          href="javascript:;"
          class="btn btn-thumbnail disabled"
        >
          <i class="material-icons">view_comfy</i>
        </a>
      </div>
      <div class="controls">
        <a
          href="javascript:;"
          class="btn btn-delete"
        >
          <i class="material-icons">delete</i>
        </a>
        <a
          href="javascript:;"
          class="btn btn-delete"
        >
          <i class="material-icons">star</i>
        </a>
        <a
          href="javascript:;"
          class="btn btn-delete"
          data-toggle="modal"
          data-target="#modalNote"
        >
          <i class="material-icons">add</i>
        </a>
      </div>
    </div>
    <div class="body">
      <a
        href="javascript:;"
        class="item"
        v-for="note in noteDatas"
        :key="note.id"
      >
        <div class="title">
          <h3 class="name"> {{note.title}} </h3>
          <i
            class="material-icons starred"
            :class="{'active' : note.isStarred }"
          >star</i>
        </div>
        <p class="content">The note with a star would be organized to the category named “STARRED”.</p>
      </a>
      <!-- <a
        href="javascript:;"
        class="item current"
      >
        <div class="title">
          <h3 class="name">Heading: The biggest title</h3>
          <i class="material-icons">star</i>
        </div>
        <p class="content">This is the body text area. The font size of the paragraph should be 16 px, and the line height...</p>
      </a>
      <a
        href="javascript:;"
        class="item"
      >
        <div class="title">
          <h3 class="name">Untitle note</h3>
          <i class="material-icons">star</i>
        </div>
        <p class="content">Just put a paragraph here to fill a fake content to this note card.</p>
      </a>
      <a
        href="javascript:;"
        class="item"
      >
        <div class="title">
          <h3 class="name">Untitle note</h3>
          <i class="material-icons">star</i>
        </div>
        <p class="content">Just put a paragraph here to fill a fake content to this note card.</p>
      </a>
      <a
        href="javascript:;"
        class="item"
      >
        <div class="title">
          <h3 class="name">Untitle note</h3>
          <i class="material-icons">star</i>
        </div>
        <p class="content">Just put a paragraph here to fill a fake content to this note card.</p>
      </a>
      <a
        href="javascript:;"
        class="item"
      >
        <div class="title">
          <h3 class="name">Untitle note</h3>
          <i class="material-icons">star</i>
        </div>
        <p class="content">Just put a paragraph here to fill a fake content to this note card.</p>
      </a> -->
    </div>
    <div class="footer">
      <div class="search">
        <i class="material-icons">search</i>
        <input
          type="text"
          placeholder="SEARCH"
          class="search-input"
        >
      </div>
    </div>
    <!-- modal -->
    <div
      id="modalNote"
      class="modal fade"
      tabindex="-1"
      role="dialog"
    >
      <div
        class="modal-dialog modal-dialog-centered"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">NOTE TITLE</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <input
                class="form-control"
                type="text"
                placeholder="Please enter a name"
                v-model="newNoteName"
              >
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >Cancel</button>
            <button
              type="button"
              class="btn btn-primary"
              @click="addNote"
            >Add</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 預先定義顯示筆記
const noteDatas = [
  {
    title: 'Test',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    isStarred: true
  }
];

export default {
  name: 'NoteLists',
  props: {
    msg: String
  },
  data() {
    return {
      newNoteName: '',
      noteDatas: [],
      isStarred: false
    };
  },
  created() {
    // 讀取 localStorage 資料，且使用上方預設的內容
    this.noteDatas = JSON.parse(localStorage.getItem('noteDatas')) || noteDatas;
  },
  computed: {
    // currentNote() {
    //   return this.noteDatas;
    // }
  },
  methods: {
    addNote() {
      if (!this.newNoteName.trim()) return;
      this.noteDatas.push({
        title: this.newNoteName,
        content: '',
        isStarred: false
      });
      // 寫入 localStorage
      localStorage.setItem('noteDatas', JSON.stringify(this.noteDatas));
      this.newNoteName = '';
      $('#modalNote').modal('hide');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.lists-container {
  width: 400px;
  background-color: #ffffff;
  user-select: none;
  border-right: 1px solid #dddddd;
  // min-height: 600px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #dddddd;
    padding: 30px 24px;

    .views {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 72px;
      height: 30px;
    }

    .btn {
      padding: 0;
      border: 0;
    }

    .controls {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 120px;
      .btn {
        border: 1px solid transparent;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        &:hover {
          border-color: #ddd;
          color: #333 !important;
        }
      }
    }

    .btn {
      color: #000000;
      text-decoration: none;
    }
    .disabled {
      color: #cecece;
    }
  }

  .body {
    height: calc(
      100vh - 91px - 64px
    ); // 扣除 header、footer 後 100vh 才能正確出現捲軸長度
    overflow-y: auto;
    .item {
      display: block;
      padding: 30px 24px;
      border-bottom: 1px solid #dddddd;
      position: relative;
      &:hover {
        text-decoration: none;
      }
    }
    .current {
      background-color: #f8f8f8;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 4px;
        height: 100%;
        background-color: #32a310;
      }
    }
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
      .name {
        font-size: 20px;
        color: #000000;
        font-weight: 600;
      }
      i {
        display: none;
      }
      .starred {
        display: none;
      }
      .active {
        display: block;
        color: #ffce00;
      }
    }
    .content {
      text-align: left;
      color: #7f7f7f;
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
      // overflow: hidden;
      // text-overflow: ellipsis;
      // white-space: nowrap;
    }
  }

  .footer {
    width: 400px;
    height: 80px;
    position: fixed;
    bottom: 0;
    left: 240px;
    background-color: #ffffff;
    z-index: 9991;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    border-right: 1px solid #dddddd;
    overflow: hidden;

    .search {
      width: 399px;
      height: 72px;
      padding: 24px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      box-shadow: 0px 0px 10px #b1b1b1;
    }
    i {
      margin-right: 13px;
      color: #000000;
    }
    .search-input {
      font-size: 16px;
      font-weight: 600;
      border: 0;
      z-index: 9991;
      &:focus {
        outline: 0;
      }
    }
  }
}

// dark
.dark {
  .lists-container {
    background-color: #5d6a48;
    border-right: 1px solid #42523d;
    .header {
      border-bottom: 1px solid #42523d;
      .btn {
        color: #fff;
        &:hover {
          color: #fff !important;
          border-color: #9fa79d;
        }
      }
      .btn.disabled {
        color: #7c876b;
      }
    }
    .body {
      .item {
        border-bottom: 1px solid #42523d;
        .name {
          color: #fff;
        }
        .content {
          color: #9fa79d;
        }
      }
      .current {
        background-color: #5d6a48;
        &:before {
          background-color: #00ff93;
        }
      }
    }
    .footer {
      background-color: #5d6a48;
      border-right: 1px solid #42523d;
      .search {
        box-shadow: 0px 0px 10px #454c39;
      }
      .search-input {
        color: #fff;
        background-color: #5d6a48;
      }
      i {
        color: #fff;
      }
    }
  }
}
</style>
