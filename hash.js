

const hashMap = function() {

  let hashTable = [];
  let currentCapacity = 16;
  let loadFactor = parseInt(currentCapacity * 0.8);
  hashTable.length = currentCapacity;

  function hash(key) {
    let hashCode = 0;
      
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
 
    return hashCode;
  }

  function set(key, value) {
    const hashCode = hash(key) % currentCapacity;
    hashTable[hashCode] = value;

  }

  function get(key) {

  }

  function has(key) {

  }

  function remove(key) {

  }

  function length() {

  }

  function clear() {

  }

  function keys() {

  }

  function values() {

  }

  function entries() {

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
test.set("Jimmy", "Mcnnulty");