import db from '../../../../utils/firebase/firebase.js';
//hacer un contenedor de firebase padre para heredar en products y cart
export default class Container {
  constructor(collection) {
    this.collection = db.collection(collection);
  }

  async getAll() {
    try {
      const querySnapshot = await this.collection.get();
      const items = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return items;
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }

  async getById(id) {
    try {
      const result = await this.collection.doc(id).get();
      return result;
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }

  async create(data) {
    try {
      const result = await this.collection.add(data);
      return result;
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }

  async update(id, data) {
    try {
      const result = await this.collection.doc(id).update(data);
      return result;
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }

  async deleteById(id) {
    try {
      const result = await this.collection.doc(id).delete();
      return result;
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }

  async deleteAll() {
    try {
      const result = await this.collection.get();
      result.docs.forEach((doc) => doc.ref.delete());
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }
}
