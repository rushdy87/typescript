import { User } from "./models/User";

const user = new User({ id: 1, name: 'Test1', age: 0 });

user.on('save', () => {
  console.log(user);
});

user.save();
