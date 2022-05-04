const fs = require("fs");
import path from "path";

export type User = {
  name: string;
  avatar: string;
};
export interface UserData extends User {
  id: number;
}

// names in JSON file for simplicity, store in a db for production applications
let users: UserData[] = require("/data/users.json");

export const namesRepo = {
  getAll: () => users,
  create,
  update,
  delete: _delete,
};

function create(user: UserData) {
  user.id = users.length ? Math.max(...users.map((x) => x.id)) + 1 : 1;
  users.push(user);
  saveData();
}

function update(id: number, params: UserData) {
  const user = users.find((x) => x.id.toString() === id.toString());

  Object.assign(user, params);
  saveData();
}

function _delete(user: UserData) {
  users = users.filter((u: UserData) => u.id.toString() !== user.id.toString());
  saveData();
}

function saveData() {
  const USER_JSON_PATH = path.resolve(
    path.join(process.cwd(), "data/users.json")
  );

  fs.writeFileSync(USER_JSON_PATH, JSON.stringify(users, null, 4));
}
