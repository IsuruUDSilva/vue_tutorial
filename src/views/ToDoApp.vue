<template>
    <div class="container" style="max-width: 100%">
        <h2 class="text-center mt-5">Vue ToDo App</h2>
        <div class="d-flex mt-5">
            <input type="text" v-model="task" placeholder="Enter Task" class="w-100 form-control">
            <button type="button" class="btn btn-warning rounded" @click="addTask">Submit</button>
        </div>
        <div class="d-flex mt-5">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col" class="fw-bold">Task</th>
                        <th scope="col" class="fw-bold" style="width: 200px;">Status</th>
                        <th scope="col" class="text-center fw-bold" style="width: 100px;">Edit</th>
                        <th scope="col" class="text-center fw-bold" style="width: 100px;">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(task, index) in tasks" :key="index">
                        <td><span :class="{ 'line-through': task.status === 'Finished' }">{{ task.name }}</span></td>
                        <td>
                            <span class="pointer select" @click="changeStatus(index)" :class="{
                                'text-danger': task.status === 'TO-DO',
                                'text-warning': task.status === 'In-Progress',
                                'text-success': task.status === 'Finished'
                            }">{{ task.status }}</span>
                        </td>
                        <td class="text-center" @click="editTask(index)">
                            <i class="fas fa-pen pointer"></i>
                        </td>
                        <td class="text-center" @click="deleteTask(index)">
                            <i class="fas fa-trash pointer"></i>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ToDoApp',
    props: {
        msg: String
    },
    data() {
        return {
            task: "",
            editTaskIndex: null as number | null,
            Status: ["TO-DO", "In-Progress", "Finished"] as const,
            tasks: [
                {
                    name: "test 1",
                    status: "TO-DO"
                },
                {
                    name: "test 2",
                    status: "In-Progress"
                },
                {
                    name: "test 3",
                    status: "Finished"
                }
            ]
        }
    },
    methods: {
        addTask() {
            if (this.task.trim() !== "") {
                if (this.editTaskIndex !== null) {
                    this.tasks[this.editTaskIndex].name = this.task;
                    this.editTaskIndex = null;
                } else {
                    this.tasks.push({
                        name: this.task,
                        status: "TO-DO"
                    });
                }
                this.task = "";
            }
        },
        editTask(index: number) {
            console.error('hii')
            this.task = this.tasks[index].name;
            this.editTaskIndex = index;
        },
        deleteTask(index: number) {
            console.error('delete hii')
            this.tasks.splice(index, 1);
            if (this.editTaskIndex === index) {
                this.editTaskIndex = null;
                this.task = "";
            } else if (this.editTaskIndex !== null && this.editTaskIndex > index) {
                this.editTaskIndex--;
            }
        },
        changeStatus(index: number) {
            let currentIndex = this.Status.indexOf(this.tasks[index].status as typeof this.Status[number]);
            let newIndex = (currentIndex + 1) % this.Status.length;
            this.tasks[index].status = this.Status[newIndex];
        }
    }
});
</script>

<style scoped>
.line-through {
    text-decoration: line-through;
}

.pointer {
    cursor: pointer;
}
</style>