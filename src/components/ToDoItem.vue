<template>
  <div class="todo_item">
    <!-- 点击完成 -->
    <div class="todo_check">
      <input
        class="todo_btn_check"
        type="image"
        src="/static/img/check.png"
        v-show="item.state=='finish'"
        v-on:click="CheckTodoCheckbox"
      >
      <input
        class="todo_btn_check"
        type="image"
        src="/static/img/uncheck.png"
        v-show="item.state!='finish'"
        v-on:click="CheckTodoCheckbox"
      >
    </div>

    <!-- 点击控制todo功能 -->
    <div class="todo_tools">
      <input
        class="todo_btn_add"
        type="image"
        src="/static/img/add.png"
        v-show="item.state=='new'"
        v-on:click="ClickBtnNew"
      >
      <input
        class="todo_btn_edit"
        type="image"
        src="/static/img/edit.png"
        v-show="item.state=='normal'"
        v-on:click="ClickBtnEdit"
      >
      <input
        class="todo_btn_del"
        type="image"
        src="/static/img/del.png"
        v-show="item.state=='normal'"
        v-on:click="ClickBtnDel"
      >
    </div>

    <!-- todo文本显示 -->
    <div class="todo_text">
      <span
        class="todo_text_new"
        v-show="item.state=='new'"
        v-on:click="ClickTextEdit"
      >{{item.text}}</span>
      <span
        class="todo_text_normal"
        v-show="item.state=='normal'"
        v-on:click="ClickTextEdit"
      >{{item.text}}</span>
      <span
        class="todo_text_finish"
        v-show="item.state=='finish'"
        v-on:click="ClickTextEdit"
      >{{item.text}}</span>
      <input
        class="todo_text_input"
        type="text"
        value="新的todo输入中..."
        v-show="item.state=='edit'"
        v-model="item.text"
        v-on:blur="LeftTextEdit"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "ToDoItem",
  data() {
    // setInterval(function() {
    //   var self;
    //   $(".todo_btn_check > input").each(function() {
    //     this.checked = !this.checked;
    //     self = this;
    //   });

    //   // $(".todo_tools > input").each(function() {
    //   // 	item.state = self.checked?"edit":"normal";
    //   // });

    //   console.log(2);
    // }, 2000);

    // state : new edit normal finish
    return {
      item: {
        text: "一个等待被填充寂寞的空格",
        state: "new"
      }
    };
  },
  mounted:function(){
    //window.item = this.item;
  },
  methods: {
    InnerDebug: function(name) {
      console.log(
        `method:${name},state:${
          this.item.state
        },text:${this.item.text}`
      );
    },
    ///////////////////////////////////////////////////////////////////////
    // 点击勾选框
    CheckTodoCheckbox: function() {
      switch (this.item.state) {
        case "new":
          break;
        case "edit":
          break;
        case "normal":
          this.InnerSetFinish();
          break;
        case "finish":
          this.InnerSetNormal();
          break;
        default:
          break;
      }
    },
    ///////////////////////////////////////////////////////////////////////
    // 点击文本
    ClickTextEdit: function(mouse) {
      console.log(mouse);
      switch (this.item.state) {
        case "new":
          this.InnerSetEdit();
          break;
        case "edit":
          break;
        case "normal":
          this.InnerSetFinish();
          break;
        case "finish":
          this.InnerSetNormal();
          break;
        default:
          break;
      }
    },
    // 点击文本离开
    LeftTextEdit: function() {
      this.InnerDebug("LeftTextEdit");
      let old_text = this.item.text;
      let new_text = "一个等待被填充寂寞的空格";
      switch (this.item.state) {
        case "new":
          break;
        case "edit":
          if (this.item.text === new_text) {
            this.InnerSetNew();
          } else {
            //TODO: 应该插入一条，自己仍然是new
            this.InnerSetNormal();
          }
          break;
        case "normal":
          break;
        case "finish":
          break;
        default:
          break;
      }
    },
    ///////////////////////////////////////////////////////////////////////
    // 按钮 新建
    ClickBtnNew: function() {
      this.InnerSetEdit();
    },
    // 按钮 编辑
    ClickBtnEdit: function() {
      this.InnerSetEdit();
    },
    // 按钮 删除
    ClickBtnDel: function() {
      //TODO: 影响父亲列表
      this.InnerSetNew();
    },
    ///////////////////////////////////////////////////////////////////////
    // 内部方法
    InnerSetNew: function() {
      this.item.text = "一个等待被填充寂寞的空格";
      this.item.state = "new";
    },
    InnerSetEdit: function() {
      this.item.state = "edit";
    },
    InnerSetNormal: function() {
      this.item.state = "normal";
    },
    InnerSetFinish: function() {
      this.item.state = "finish";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 整个元素 begin --------------------------------------------------------------- */
.todo_item {
  background-color: transparent;
  height: 70px;
  padding: 10px 25px 10px 25px;
  border-bottom: 1px solid rgb(201, 201, 201);

  max-width: 1000px;
  min-width: 550px;
}
/* 勾选项 begin --------------------------------------------------------------- */
.todo_check {
  width: 70px;
  height: 70px;
  position: relative;
  float: left;
}

.todo_btn_check {
  background-color: transparent;
  width: 70px;
  height: 70px;
}

/* 按钮样式 begin --------------------------------------------------------------- */
.todo_tools {
  height: 70px;
  float: right;
  position: relative;
  background-color: transparent;
  top: 9px;
  right: 0;
}

.todo_tools input {
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
}
/* 文本 begin --------------------------------------------------------------- */
.todo_text {
  position: relative;
  background-color: transparent;
  top: 10px;
  margin-left: 90px;
  margin-right: 100px;
}

.todo_text span {
  display: block;
  background-color: transparent;
  margin-left: 0;
  font-size: 38px;
  font-weight: bold;
  text-align: left;
}

.todo_text input {
  margin-left: 0;
  font-size: 38px;
  font-weight: bold;
  top: 50%;
  position: relative;
  float: left;
  width: 100%;
}

.todo_text .todo_text_new {
  color: rgb(211, 211, 211);
}

.todo_text .todo_text_normal {
  color: rgb(46, 46, 46);
}

.todo_text .todo_text_finish {
  color: rgb(160, 160, 160);
  font-style: italic;
  text-decoration: line-through;
}

.todo_text .todo_text_input {
  background-color: white;
  border: 0;
  margin-top: 3px;
  padding-left: 0px;
  color: rgb(19, 19, 59);
}
</style>
