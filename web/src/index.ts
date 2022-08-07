import { User } from "./models/User";


// After Refactoring
const user = new User({ name: 'Test4', age: 43 });
const id = user.attributes.get('id');
const name = user.attributes.get('name');
const age = user.attributes.get('age');

user.sync.save({ id, name, age });

// befor:
// user.save();