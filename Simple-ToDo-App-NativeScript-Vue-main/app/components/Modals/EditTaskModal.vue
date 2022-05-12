<template>
  <Page>
    <ActionBar>
      <Label text="Добвить задание" />
    </ActionBar>

    <StackLayout padding="20 10" width="300" height="360">
      <StackLayout width="100%" marginBottom="10">
        <Label
          text="Задача"
          textAlignment="center"
          fontSize="24"
        ></Label>
      </StackLayout>
      <StackLayout class="form-group">
        <Label text="Наименование" fontSize="18"></Label>
        <TextField v-model="item.title" fontSize="14" class="input" />
      </StackLayout>
      <StackLayout class="form-group" height="120">
        <Label text="Подробнее" fontSize="18"></Label>
        <TextField
          v-model="item.description"
          fontSize="14"
          class="input"
          height="100%"
        />
      </StackLayout>
      <StackLayout orientation="horizontal" marginTop="30" padding="0">
        <Button
          text="Удалить"
          @tap="deleteTask(task.id)"
          marginTop="30"
          class="btn-danger"
          margin="0"
          width="50%"
        ></Button>
        <Button
          text="Сохранить"
          @tap="save(task)"
          marginTop="30"
          class="btn-success"
          margin="0"
          width="50%"
        ></Button>
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<script>
import { TaskService } from "../../services/task-service";
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      item: this.task,
    };
  },
  methods: {
    save(item) {
      TaskService.updateItem(item.id, item);
      this.$modal.close();
    },
    deleteTask(id) {
      TaskService.removeTask(id);
      this.$modal.close();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>>
