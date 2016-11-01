/**
 * @author Phull, Raghuveer
 */

// Helper Merge function for Merge Sort
var merge = function (array, left, right) {
    var i = j = k = 0;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            array[k++] = left[i];
            i++;
        } else {
            array[k++] = right[j];
            j++;
        }
    }

    while (i < left.length) {
        array[k++] = left[i];
        i++;
    }

    while (j < right.length) {
        array[k++] = right[j];
        j++;
    }
};

/**
 * Merge Sort
 * Worst-case performance    O(n log n)
 * Best-case performance    O(n log n) typical, O(n) natural variant
 * Average performance    O(n log n)
 * @param input
 * @returns {*}
 * @private
 */
var _mergeSort = function (input) {
    if (input.length < 2) {
        return;
    }

    var mid   = Math.floor(input.length / 2);
    var left  = input.slice(0, mid);
    var right = input.slice(mid, input.length);

    _mergeSort(left);
    _mergeSort(right);
    merge(input, left, right);

    return input;
};

// Helper function for Quick sort
var partition = function (input, left, right) {
    var length = input.length;

    var pivot = right;
    var index = left;
    for (var i = left; i < right; i++) {
        if (input[i] <= input[pivot]) {
            // Swapping
            var tmp      = input[i];
            input[i]     = input[index];
            input[index] = tmp;
            index++;
        }
    }

    // Swapping ..
    var temp     = input[right];
    input[right] = input[index];
    input[index] = temp;

    return index;
};

/**
 * Quick Sort
 * Worst-case performance    O(n^2)
 * Best-case performance    O(n log n) (simple partition) or O(n) (three-way partition and equal keys)
 * Average performance    O(n log n)
 * Worst-case space complexity    O(n) auxiliary (naive) O(log n) auxiliary
 * @param input
 * @param left
 * @param right
 * @returns {*}
 * @private
 */
var _quickSort = function (input, left, right) {
    // console.log('Quick Sort ');
    if (left < right) {
        var pivot = partition(input, left, right);
        this.quickSort(input, left, pivot - 1);
        this.quickSort(input, pivot + 1, right);
    }
    // console.log('Quick Sort ');
    return input;
};

/**
 * Insertion Sort
 * Worst-case performance    О(n^2) comparisons, swaps
 * Best-case performance    O(n) comparisons, O(1) swaps
 * Average performance    О(n^2) comparisons, swaps
 * Worst-case space complexity    О(n) total, O(1) auxiliary
 * @param input
 * @returns {*}
 * @private
 */
var _insertionSort = function (input) {
    // console.log('Insertion Sort ');
    for (var i = 1; i < input.length; i++) {
        var key = input[i];
        var j   = i - 1;

        while (j >= 0 && input[j] > key) {
            input[j + 1] = input[j];
            j--;
        }

        input[j + 1] = key;
    }

    return input;
};

/**
 * Bubble Sort
 * Worst-case performance    О(n^2)
 * Best-case performance    О(n^2)
 * Average performance    О(n^2)
 * @param input
 * @returns {*}
 * @private
 */
var _bubbleSort = function (input) {
    // console.log('Bubble Sort ');
    var length  = input.length;
    var counter = 0;

    for (var i = 0; i < length - 1; i++) {
        var flag = 0;
        for (var j = 0; j < length - i - 1; j++) {
            if (input[j] > input[j + 1]) {
                input[j]     = input[j] + input[j + 1];
                input[j + 1] = input[j] - input[j + 1];
                input[j]     = input[j] - input[j + 1];
                flag         = 1;
            }
            counter++;
        }

        if (flag == 0) {
            return input;
        }
    }
};

/**
 * Selection Sort:
 * Worst-case performance    О(n^2)
 * Best-case performance    О(n^2)
 * Average performance    О(n^2)
 * @param input
 * @returns {*} Sorted list
 * @private
 */
var _selectionSort = function (input) {
    // console.log('Selection Sort ');
    var length = input.length;

    for (var i = 0; i < length - 1; i++) {
        var key = i;
        for (var j = i + 1; j < length; j++) {
            if (input[j] < input[key]) {
                key = j;
            }
        }
        var temp   = input[i];
        input[i]   = input[key];
        input[key] = temp;
    }

    return input;
};

/**
 * Sort Class which will return few types of sorting algorithms
 * @returns {{insertionSort: _insertionSort, mergeSort: _mergeSort, bubbleSort: _bubbleSort, selectionSort: _selectionSort, quickSort: _quickSort}}
 * @constructor
 */
var Sort = function () {
    return {
        insertionSort: _insertionSort,
        mergeSort: _mergeSort,
        bubbleSort: _bubbleSort,
        selectionSort: _selectionSort,
        quickSort: _quickSort
    }
};

var list = [18, 6, 4, 12, 5, 14, 7, 20, 15, 3, 10, 1, 9, 8, 13, 11, 17, 16, 19, 2];
var sort = new Sort();

console.log('Input to be sorted: ' + list);
console.log('Insertion Sorted: ' + sort.insertionSort(list));
console.log('Merge Sorted: ' + sort.mergeSort(list));
console.log('Bubble Sorted: ' + sort.bubbleSort(list));
console.log('Selection Sorted: ' + sort.selectionSort(list));
console.log('Quick Sorted: ' + sort.quickSort(list, 0, list.length - 1));