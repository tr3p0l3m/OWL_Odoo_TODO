(function () {
  const { Component, mount, xml } = owl;

  // Owl Components
  // class Root extends Component {
  //   static template = xml`<div>todo app</div>`;
  // }

  class Root extends Component {
    static template = xml/* xml */ `
      <div class="task-list">
          <t t-foreach="tasks" t-as="task" t-key="task.id">
              <div class="task" t-att-class="task.isCompleted ? 'done' : ''">
                <input type="checkbox" t-att-checked="task.isCompleted"/>
                <span><t t-esc="task.text"/></span>
              </div>
          </t>
      </div>`;

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
        id: 1,
        text: "Meeting with Christian.",
        isCompleted: true,
      },
      {
        id: 2,
        text: "Interview with Goldman Sachs",
        isCompleted: false,
      },
    ];
  }

  mount(Root, document.body);
})();