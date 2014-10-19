/**
 * @author Phull, Raghuveer
 */

var list = [5, 2, 4, 6, 1, 34, 23, 5, 1, 66, 123, 66, 0, 7, 3, 41, 59, 26, 41, 58];

var Sorting = function (input) {
	this.input = input;
}

// Insertion Sort
Sorting.prototype.insertionSort = function (input) {
	console.log('Insertion Sort ');
	for (var i = 1; i < input.length; i++) {
		var key = input[i];
		var j = i - 1;

		while (j >= 0 && input[j] > key) {
			input[j + 1] = input[j];
			j--;
		}

		input[j + 1] = key;
	}

	return input;
};

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
}

// Merge Sort
Sorting.prototype.mergeSort = function (input) {
	console.log('Merge Sort ');
	if (input.length < 2) {
		return;
	}

	var mid = Math.floor(input.length / 2);
	var left = input.slice(0, mid);
	var right = input.slice(mid, input.length);

	this.mergeSort(left);
	this.mergeSort(right);
	merge(input, left, right);

	return input;
}

// Bubble Sort
Sorting.prototype.bubbleSort = function (input) {
	console.log('Bubble Sort ');
	var length = input.length;

	for (var i = 0; i < length - 1; i++) {
		var flag = 0;
		for (var j = 0; j < length - i - 1; j++) {
			if (input[j] > input[j + 1]) {
				input[j] = input[j] + input[j + 1];
				input[j + 1] = input[j] - input[j + 1];
				input[j] = input[j] - input[j + 1];
				flag = 1;
			}
			counter++;
		}

		if (flag == 0) {
			return input;
		}
	}
}

// Selection Sort
Sorting.prototype.selectionSort = function (input) {
	console.log('Selection Sort ');
	var length = input.length;

	for (var i = 0; i < length - 1; i++) {
		var key = i;
		for (var j = i + 1; j < length; j++) {
			if (input[j] < input[key]) {
				key = j;
			}
		}
		var temp = input[i];
		input[i] = input[key];
		input[key] = temp;
	}

	return input;
}

// Helper function for Quick sort
var partition = function (input, left, right) {
	var length = input.length;

	var pivot = right;
	var index = left;
	for (var i = left; i < right; i++) {
		if (input[i] <= input[pivot]) {
			// Swapping 
			var tmp = input[i];
			input[i] = input[index];
			input[index] = tmp;
			index++;
		}
	}

	// Swapping .. 
	var temp = input[right];
	input[right] = input[index];
	input[index] = temp;

	return index;
}

// Quick Sort 
Sorting.prototype.quickSort = function (input, left, right) {
	console.log('Quick Sort ');
	if (left < right) {
		var pivot = partition(input, left, right);
		this.quickSort(input, left, pivot - 1);
		this.quickSort(input, pivot + 1, right);
	}
	console.log('Quick Sort ');
	return input;
}

var sort = new Sorting();

console.log('input to be sorted: ' + list);
console.log('Insertion Sorted: ' + sort.insertionSort(list));
//console.log('Merge Sorted: ' + sort.mergeSort(list));
//console.log( 'Bubble Sorted: ' + sort.bubbleSort( list ) );
//console.log( 'Selection Sorted: ' + sort.selectionSort( list ) ); 
//console.log('Quick Sorted: ' + sort.quickSort(list, 0 , list.length -1));