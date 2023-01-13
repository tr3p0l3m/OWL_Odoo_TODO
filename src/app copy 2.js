(function () {
  const { Component, mount, xml } = owl;

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
    <div class="task-list">
      <t t-foreach="tasks" t-as="task" t-key="task.id">
        <Task task="task"/>
      </t>
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
}

// -------------------------------------------------------------------------
// Setup
// -------------------------------------------------------------------------
mount(Root, document.body, {dev: true});
}) ();