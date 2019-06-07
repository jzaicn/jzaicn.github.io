<template>
  <div class="todo_item">
    <div class="todo_check">
      <label class="todo_check_label">
        <input
          type="checkbox"
          name="check-protocol"
          v-model="item.isFinish"
          v-on:click="CheckTodoCheckbox"
        >
        <span></span>
      </label>
    </div>

    <div class="todo_tools">
      <input class="todo_btn_add" type="image" src="/static/img/add.png" v-show="item.state=='new'">
      <input
        class="todo_btn_add"
        type="image"
        src="/static/img/add.png"
        v-show="item.state=='edit'"
      >
      <input
        class="todo_btn_edit"
        type="image"
        src="/static/img/edit.png"
        v-show="item.state=='normal'"
      >
      <input
        class="todo_btn_del"
        type="image"
        src="/static/img/del.png"
        v-show="item.state=='normal'"
      >
      <input
        class="todo_btn_edit"
        type="image"
        src="/static/img/hide.png"
        v-show="item.state=='finish'"
      >
    </div>

    <div class="todo_text">
      <span class="todo_text_new" v-show="item.state=='new'" v-on:click="ClickEditNew">{{item.text}}</span>
      <span class="todo_text_normal" v-show="item.state=='normal'">{{item.text}}</span>
      <span class="todo_text_finish" v-show="item.state=='finish'">{{item.text}}</span>
      <input
        class="todo_text_input"
        type="text"
        value="新的todo输入中..."
        v-show="item.state=='edit'"
        v-model="item.text"
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
    //   $(".todo_check_label > input").each(function() {
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
        isFinish: false,
        text: "我是一条已完成的todo",
        state: "normal"
      }
    };
  },
  methods: {
    CheckTodoCheckbox: function() {
      console.log(
        `CheckTodoCheckbox:isFinish${this.item.isFinish},state:${
          this.item.state
        }`
      );
      if (this.item.isFinish == true) {
        this.item.isFinish = false;
        this.item.state = "normal";
      } else {
        this.item.isFinish = true;
        this.item.state = "finish";
      }
    },
    ClickEditNew: function() {
      console.log("ClickEditNew");
    },
    LostFocusEdit: function() {
      console.log("LostFocusEdit");
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
}
/* 勾选项 begin --------------------------------------------------------------- */
.todo_check {
  width: 70px;
  height: 70px;
  position: relative;
  float: left;
}

.todo_check_label {
  background-color: transparent;
}

.todo_check_label input {
  display: none;
}

.todo_check_label span {
  margin: 0px;
}

.todo_check_label input + span {
  display: block;
  width: 70px;
  height: 70px;
  background: url(/static/img/uncheck.png);
  background-size: 70px 70px;
  float: left;
}

.todo_check_label input:checked + span {
  background: url(/static/img/check.png) no-repeat;
  background-size: 70px 70px;
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
  font-size: 36px;
  font-weight: bold;
  top: 50%;
  position: relative;
  float: left;
}

.todo_text .todo_text_new {
  color: rgb(156, 156, 156);
}

.todo_text .todo_text_normal {
  color: rgb(114, 114, 114);
}

.todo_text .todo_text_finish {
  color: rgb(160, 160, 160);
  font-style: italic;
  text-decoration: line-through;
}

.todo_text .todo_text_input {
  background-color: white;
  border: 0;
  margin-top: 8px;
  padding-left: 10px;
  color: rgb(19, 19, 59);
  width: 70%;
}
</style>
