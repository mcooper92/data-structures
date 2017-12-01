var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  //fifo
  var size = 0;
  var first = 0;
  var last = 0;


  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[last++] = value;
    size++;
  };

  someInstance.dequeue = function(){
    if(size > 0){
      var removedValue = storage[first];
      delete storage[first++];
      size--;
      return removedValue;

    }
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};