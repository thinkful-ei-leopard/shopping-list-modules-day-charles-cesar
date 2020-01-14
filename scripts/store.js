import item from './item.js';
const items = [];
const hideCheckedItems = false;

function findById(id){
  return this.items.find(item => item.id === id);
}

function addItem(name){
 try{
   item.validateName(name);
  this.items.push(item.create(name));
 }
 catch(error){
   console.log(`Cannot update name: ${error.message}`);
 }
}

function findAndToggleChecked(id){
  const foundItem = this.findById;
  foundItem.checked = !foundItem.checked;
}



function findAndUpdateName(id){
  try {
    item.validateName(id);
    this.items.push(item.create(id));
    render();
  }
  catch(error){
    console.log(`Cannot update name: ${error.message}`);
  }
};

function findAndDelete(id){
  const deleteItem = (element) => element = id;
  //const toDelete = this.items.findIndex(deleteItem);
  this.items.splice(deleteItem,1);
}

export default {
  items,
  hideCheckedItems
};



