export class UserForm {
  constructor(public parent: Element) { } //Element is the most general base class from which all objects in a Document inherit.

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick,
      'mouseenter:h1': this.onHeaderHover
    };
  };

  onButtonClick(): void {
    console.log('Hi, there..');
  };

  onHeaderHover(): void {
    console.log('h1 was hoverd');
  };

  template(): string {
    return `
      <div>
        <h1>User Form<h1>
        <input />
        <button>Click me</button>
      </div>
    `;
  };

  bindEvents(fragment: DocumentFragment) { //DocumentFragment: A minimal document object that has no parent.
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');
      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[eventKey])
      });
    }

  };

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  };
}