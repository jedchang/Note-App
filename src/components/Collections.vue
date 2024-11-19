<template>
  <div class="collections-container">
    <div class="header">
      <div class="title">BLANK</div>
      <!-- element ui 套件需要用 change 觸發，不能用 click-->
      <el-switch
        v-model="value"
        active-color="#FFFFFF"
        inactive-color="#FFFFFF"
        @change="changeTheme"
      >
      </el-switch>
    </div>
    <div class="body">
      <el-collapse
        v-model="activeNames"
        @change="handleChange"
      >
        <el-collapse-item
          title="STARRED"
          name="1"
        >
          <a
            href="javascript:;"
            class="nav-item"
          >
            <i class="material-icons">star</i>
            Note with star
          </a>
          <a
            href="javascript:;"
            class="nav-item"
          >
            <i class="material-icons">star</i>
            Note with star 2
          </a>
          <a
            href="javascript:;"
            class="nav-item"
          >
            <i class="material-icons">star</i>
            Note with star 3
          </a>
        </el-collapse-item>
        <el-collapse-item
          title="COLLECTIONS"
          name="2"
        >
          <a
            href="javascript:;"
            class="nav-item"
          >
            <i class="material-icons">library_books</i>
            Home
          </a>
          <a
            href="javascript:;"
            class="nav-item"
          >
            <i class="material-icons">library_books</i>
            Work
          </a>
          <a
            href="javascript:;"
            class="nav-item active"
          >
            <i class="material-icons">library_books</i>
            Project
          </a>
        </el-collapse-item>
        <el-collapse-item
          title="TRASH"
          name="3"
        >
        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="footer">
      <button
        type="button"
        class="btn-new"
        data-toggle="modal"
        data-target="#modalCollection"
      >
        <i class="material-icons">library_add</i>
        NEW COLLECTION
      </button>
    </div>
    <!-- modal -->
    <div
      id="modalCollection"
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
            <h5 class="modal-title">NEW COLLECTION</h5>
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
                v-model="newCollectionName"
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
              @click="addCollection"
            >Add</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Collections',
  props: {
    msg: String
  },
  data() {
    return {
      value: true,
      activeNames: ['1', '2'],
      newCollectionName: '',
      collectionDatas: []
    };
  },
  methods: {
    // 提交到 store
    changeTheme() {
      this.$store.commit('setTheme');
    },
    handleChange(val) {
      console.log(val);
    },
    addCollection() {
      if (!this.newCollectionName.trim()) return;
      this.collectionDatas.push({
        title: this.newCollectionName
      });
      localStorage.setItem(
        'collectionDatas',
        JSON.stringify(this.collectionDatas)
      );
      this.newCollectionName = '';
      $('#modalCollection').modal('hide');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.collections-container {
  width: 240px;
  background-color: #292b2e;
  padding: 30px 0px;
  user-select: none;
  // height: 100vh;
  // min-height: 600px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 24px;
    .title {
      font-family: 'Baloo Thambi', cursive;
      color: #fff;
      font-size: 20px;
    }
  }

  .body {
    width: 240px;
    height: 100vh;
    background-color: #292b2e;
    .nav-item {
      font-size: 16px;
      font-family: 'Roboto', Helvetica, Arial, sans-serif;
      text-align: left;
      padding: 10px 24px;
      width: 100%;
      text-decoration: none;
      color: #949596;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      position: relative;
      transition: all 0.4s;
      i {
        margin-right: 8px;
      }
      &:hover {
        color: #ffffff;
        i {
          color: #ffffff;
        }
      }

      &:focus,
      &.active {
        color: #ffffff;
        background-color: rgba(0, 0, 0, 0.2);
        i {
          color: #ffffff;
        }
        &:before {
          background-color: #32a310;
        }
      }
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 4px;
        height: 100%;
        background-color: transparent;
      }
    }
  }

  .footer {
    width: 240px;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #292b2e;
    z-index: 9990;
    border-top: 1px solid #dddddd;

    .btn-new {
      width: 100%;
      padding: 24px;
      text-decoration: none;
      color: #ffffff;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-weight: 600;
      border: 0;
      background: transparent;
      background-color: #292b2e;
      transition: all 0.4s;
      i {
        margin-right: 13px;
      }
      &:hover {
        background-color: rgba(0, 0, 0, 1);
      }
      &:focus {
        outline: 0;
      }
    }

    [type='button']:not(:disabled) {
      cursor: pointer;
    }
  }
}

// dark
.dark {
  .collections-container {
    background-color: #42523d;
    .header {
      .title {
        color: #00ff93;
      }
    }
    .body {
      background-color: #42523d;
    }
    .footer {
      background-color: #42523d;
      border-top: 1px solid #5d6a48;
      .btn-new {
        background-color: #42523d;
      }
    }
  }
}
</style>
