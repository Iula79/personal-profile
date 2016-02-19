var cols = 2;
var rows = function() {
    var list = this.store.findAll('project');
    var numOfCols = this.get('cols');
    var rows = [];
    for (i=0, i<list.length, i++) {
        if (list % numOfCols === 0) {
            rows = list/numOfCols
        } else {
            rows = list/numOfCols + 1
        }
    }
  return rows;
}
