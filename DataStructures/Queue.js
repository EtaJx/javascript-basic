function Queue() {
  var items = [];
  this.enqueue = function(element) { // 向队列末尾添加一个或多个元素
    items.push(element);
  };

  this.dequeue = function() { // 移除队列的第一（即排在队列最前面的）的项，并返回被移除的元素
    return items.shift();
  };

  this.front = function() {
    return items[0];
  };

  this.isEmpty = function() {
    return items.length == 0;
  };

  this.clear = function() {
    items = [];
  };

  this.size = function() {
    return items.length;
  };

  this.print = function() {
    console.log(items.toString());
  };
}

function PriorityQueue() { // 优先队列
  var items = [];

  function QueueElement (element, priority) {
    this.element = element;
    this.priority = priority;
  }

  this.enqueue = function(element, priority) {
    var queueElement = new QueueElement(element, priority);
    if(this.isEmpty()) {
      items.push(queueElement);
    } else {
      var added = false;
      for(var i = 0; i < items.length; i++) {
        if(queueElement.priority < items[i].priority) {
          items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }
      if(!added) {
        items.push(queueElement);
      }
    }
  }
}