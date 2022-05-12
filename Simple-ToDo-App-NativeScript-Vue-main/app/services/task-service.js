import { ApplicationSettingsService } from "./application-settings-service";

export const STORAGE_KEY = "tasks";

export const TaskService = {
  getAllTasks() {
    return ApplicationSettingsService.getStringItem(STORAGE_KEY, []);
  },

  setTasks(tasks) {
    console.log("Start setting");
    ApplicationSettingsService.setStringItem(STORAGE_KEY, tasks);
    console.log("success");
  },

  getTaskById(taskID) {
    const items = TaskService.getAllTasks();
    const index = items.findIndex((task) => task.id === taskID);
    if (index === -1) {
      return;
    }
    return items[index];
  },

  updateItem(taskID, payload) {
    const items = TaskService.getAllTasks();
    const index = items.findIndex((task) => task.id === taskID);
    if (index === -1) {
      items.push(payload);
    } else {
      items.splice(index, 1, payload);
    }
    TaskService.setTasks(items);
  },

  removeTask(taskID) {
    const items = TaskService.getAllTasks();
    const index = items.findIndex((item) => item.id === taskID);
    items.splice(index, 1)
    TaskService.setTasks(items);
  },
};
