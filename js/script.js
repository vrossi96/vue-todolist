/*
Descrizione:
Rifare l'esercizio della to do list.
|Ogni todo sarà un oggetto, formato da due proprietà:
|- text, una stringa che indica il testo del todo
|- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
|MILESTONE 1
|Stampare all'interno di una lista, un item per ogni todo.Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
|MILESTONE 2
|Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
|MILESTONE 3
|Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
|Bonus:
|1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
|2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
 */

const root = new Vue({
   el: "#root",
   data: {
      taskToAdd: "",
      tasks: [
         {
            text: "Comprare le verdure",
            done: false,
         },
         {
            text: "Recuperare l'auto dal meccanico",
            done: false,
         },
         {
            text: "Fare benzina",
            done: true,
         },
         {
            text: "Finire il libro",
            done: false,
         },
      ],
   },
   methods: {
      deleteTask(index) {
         const newTasks = this.tasks.filter((task, i) => {
            if (index !== i) return true;
         });
         this.tasks = newTasks;
      },

      removeAllTasks() {
         const emptyTasks = [];
         this.tasks = emptyTasks;
      },

      addNewTask() {
         const newerTask = this.taskToAdd.trim();
         // Create empty object for array
         const newtask = {
            text: newerTask,
            done: false,
         };

         if (newerTask) {
            // Use spread to add new object to the array
            const newTasks = [...this.tasks, newtask];
            // Reassign the array with the new object
            this.tasks = newTasks;
         }

         this.taskToAdd = "";
      },

      taskCheck(index) {
         const newTasks = this.tasks.map((task, i) => {
            if (i === index) task.done = !task.done;
            return task;
         });
         this.tasks = newTasks;
      },
   },
});
