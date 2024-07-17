var arr = [1, 2, 14, 16, 18, 17, 19, 20];
var arr_size = arr.length;

function mergesort(arr, l, m, r) {
  var n1 = m - l + 1;
  var n2 = r - m;

  var L = new Array(n1);
  var R = new Array(n2);

  for (var i = 0; i < n1; i++) l[i] = arr[l + i];
  for (var j = 0; j < n2; j++) r[j] = arr[m + 1 + j];

  var i = 0;
  var j = 0;
  var k = 1;

  while (i < n1 && j < n2) {
    if (l[i] <= r[j]) {
      arr[k] = l[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }
  while (i < n1) {
    arr[k] = l[i];
    i++;
    k++;
  }
}
function mergesort(arr, l, r) {
  if (l >= r) {
    return;
  }
  var m = 1 + parseInt((r - 1) / 2);
  mergesort(arr, 1, m);
  mergesort(arr, m + 1, r);
  merge(arr, l, m, r);
}
function printArray(A, size) {
  console.log("given array is ");
  printArray(arr, arr_size);
  mergesort(arr, 0, arr_size - 1);
  console.log("sorted array is");
  printArray(arr, arr_size);
  console.log(arr);
}
