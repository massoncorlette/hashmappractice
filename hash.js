
function nodeObj(value, nextNode) {
  if (!(value)) {
    value = null;
  } else if (!(nextNode)) {
    nextNode = null;
  }
  this.value = value;
  this.nextNode = nextNode;

}


const hashMap = function() {

  let hashTable = [];
  let keyArray = [];
  let valueArray = [];
  let currentCapacity = 16;
  let loadFactor = parseInt(currentCapacity * 0.8);
  hashTable.length = currentCapacity;

  function hash(key) {
    let hashCode = 0;
      
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
 
    return hashCode % currentCapacity;
  }

  function set(key, value) {
    const hashCode = hash(key) % currentCapacity;
    let newNode = new nodeObj(value);

    if (hashTable[hashCode]) {
      let currentNode = hashTable[hashCode];
      
      while(currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = newNode;

    } else {
      hashTable[hashCode] = newNode;
      keyArray.push(key);
    }
    console.log(hashTable);
  }

  function get(key) {

    let hashKey = hash(key);

    if (!(hashTable[hashKey])) {
      return null;
    } else {
      return hashTable[hashKey].value;
    }
  }

  function has(key) {

    let getStatus = get(key);

    if (getStatus === null) {
      return false
    } else {
      return true;
    }

  }

  function remove(key) {

    let getStatus = has(key);

    if (getStatus === false) {
      return false;
    } else {
      let getNode = get(key);
      let hashKey = hash(key);
    
      hashTable[hashKey] = null;

      for (let i=0;i<keyArray.length;i++) {
        if (keyArray[i] === key) {
          keyArray[i] = null;
        }
      }
      return true;
    }

  }

  function length() {

    let counter = 0;

    for (let i=0;i<hashTable.length;i++) {
      if (hashTable[i]) {
        counter += 1;
      }
    }
    return counter;
  }

  function clear() {
    
    for (let i=0;i<hashTable.length;i++) {
      hashTable[i] = null;
    }
  }

  function keys() {

    console.log(keyArray);
    return keyArray;
  }

  function values() {


    for (let i=0;i<hashTable.length;i++) {
      let currentNode = hashTable[i];

      if (hashTable[i]) {
        valueArray.push(hashTable[i].value)

        while (currentNode.nextNode !== null) {
          currentNode = currentNode.nextNode;
          valueArray.push(currentNode.value);
        }
      }
    }
    console.log(valueArray);
    return valueArray;
  }


  return {
    set:set,
    get:get,
    has:has,
    remove:remove,
    length:length,
    clear:clear,
    keys:keys,
    values:values,
    entries:entries,
  }

}

const test = hashMap();

test.set("Joe", "Little");
test.set("Rick", "Harden");
test.set("Alex", "Jones");
test.set("Joe", "Dirt");
test.keys();
test.values();




