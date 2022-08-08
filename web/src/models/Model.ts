import { AxiosPromise, AxiosResponse } from "axios";

interface ModelAttributes<T> {
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}
interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}
interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

interface hasId {
  id?: number;
}

export class Model<T extends hasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) { }

  /*get on() {
    return this.events.on; // return a reffrence to this.events.on
  };
 or we can write it:*/
  on = this.events.on;

  /*get trigger() {
    return this.events.trigger;
  };
this too: */
  trigger = this.events.trigger;

  /* get get() {
    return this.attributes.get;
  };
  and this: */
  get = this.attributes.get;
  /*
  Importent note: the short hand above work only if we put the attributes of class in the Parentheses of constructor.
  */

  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger('change');
  };

  fetch(): void {
    const id = this.attributes.get('id');
    if (typeof (id) !== 'number') {
      throw new Error('Can not fetch without an id');
    }
    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data); // we refreence to this.set because it has {this.attributes.set, and this.events.trigger}
    });
  };


  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((response: AxiosResponse): void => {
        this.events.trigger('save');
      })
      .catch(() => {
        this.events.trigger('error');
      });
  };
}