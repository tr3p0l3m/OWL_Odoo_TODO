(function () {
  // on top of file:
  const { Component, mount, xml, useRef, onMounted } = owl;

  // -------------------------------------------------------------------------
  // Task Component
  // -------------------------------------------------------------------------
  class Task extends Component {
    static template = xml /* xml */`
      <div class="task" t-att-class="props.task.isCompleted ? 'done' : ''">
        <input type="checkbox" t-att-checked="props.task.isCompleted"/>
        <span><t t-esc="props.task.text"/></span>
      </div>`;

    static props = ["task"];
  }

  // -------------------------------------------------------------------------
  // Root Component
  // -------------------------------------------------------------------------
  class Root extends Component {
    static template = xml /* xml */`
      <div class="todo-app">
      <input placeholder="Enter a new task" t-on-keyup="addTask" t-ref="add-input"/>
      <div class="task-list">
        <t t-foreach="tasks" t-as="task" t-key="task.id">
            <Task task="task"/>
        </t>
      </div>
      </div>`;

    static components = { Task };

    tasks = [
      {
        id: 1,
        text: "Read 7 habits of highly effective people",
        isCompleted: true,
      },
      {
        id: 2,
        text: "Read the documentation of the owl library",
        isCompleted: false,
      },
      {
        id: 3,
        text: "Meeting with Christian.",
        isCompleted: true,
      },
      {
        id: 4,
        text: "Interview with Goldman Sachs",
        isCompleted: false,
      },
    ];

    addTask(ev) {
      // 13 is keycode for ENTER
      if (ev.keyCode === 13) {
        const text = ev.target.value.trim();
        ev.target.value = "";
        console.log('adding task', text);
        // todo
      }
    }

    // in App
    setup() {
      const inputRef = useRef("add-input");
      onMounted(() => inputRef.el.focus());
    }
  }

  // -------------------------------------------------------------------------
  // Setup
  // -------------------------------------------------------------------------

  mount(Root, document.body, { dev: true });
})();