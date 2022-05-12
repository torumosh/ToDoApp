<template>
  <Page>
    <ActionBar>
      <Label text="Добавить задание" />
    </ActionBar>

    <StackLayout padding="20 10" width="300" height="360">
      <StackLayout >
        <Label
          text="Добавить задачу"
          textAlignment="center"
          fontSize="24"
        ></Label>
      </StackLayout>
      <StackLayout class="form-group">
        <Label text="Наименование" fontSize="14"></Label>
        <TextField
          v-model="task.title"
          fontSize="12"
          class="input"
          marginTop="5"
          hint="Введите название"
        />
      </StackLayout>
      <StackLayout class="form-group" height="60">
        <Label text="Подробнее" fontSize="14"></Label>
        <TextField
          v-model="task.description"
          fontSize="12"
          class="text-area"
          height="20%"
          hint="Введите опиание"
        />
      </StackLayout>
      <StackLayout class="form-group" height="60">
        <Label text="Дата" fontSize="14"></Label>
        <TextField
          v-model="task.da"
          fontSize="12"
          class="input"
          height="20%"
          hint="Введите опиание"
        /> 
      </StackLayout> 
        <TextField
          v-model="task.da"
          fontSize="12"
          class="input"
          height="20%"
          hint="Введите опиание"
        /> 
      <Button
        text="Добавить"
        @tap="addTask"
        margin="0"
        class="btn-primary"
        width="100%"
      ></Button>
      <Button
        text="Назад"
        @tap="deleteTask(task.id)"
        margin="0"
        class="btn-primary"
        width="100%"
      ></Button>
    </StackLayout>
  </Page>
</template>

<script>
import { random } from "../../helpers/random";
export default {
  props: ["id"],
  data() {
    return {
      task: {
        id: null,
        title: "",
        description: "",
        da: "",
        completed: false,
      },
    };
  },
  methods: {
    addTask() {
      this.task.id = random();
      this.$modal.close(this.task);
    },
    deleteTask(id) {
      this.$modal.close();
    },
  },
};
</script>

<style lang="scss" scoped>
TextField {
  margin: 0;
  border-bottom-color: transparent;
}

.container {
  // width: 220;
  // height: 130;
  // border-radius: 15;
  // display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  // border-radius: 15;
  // padding: 20 10;
}
</style>>
