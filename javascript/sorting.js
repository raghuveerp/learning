/**
 * @author Phull, Raghuveer
 */

var Sorting = function (list) {
	this.list = list;
}



var list = [5, 2, 4, 6, 1, 7, 3, 41, 59, 26, 41, 58];

function insertionSort() {
	if (!input) {
		alert('No Input');
		input = [];
	}

	for (var i = 1; i < input.length; i++) {
		var key = input[i];

		var j = i - 1;

		while (j >= 0 && input[j] > key) {
			input[j + 1] = input[j];
			console.log("Intermediate: " + input + " and I: " + i + " and J: " + j);
			j--;
		}

		input[j + 1] = key;

	}
	console.log("The Sorted Array: " + input);

}

function merge(array, left, right) {
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

function mergeSort(list) {
	if (list.length < 2) {
		return;
	}

	var mid = Math.floor(list.length / 2);
	var left = list.slice(0, mid);
	var right = list.slice(mid, list.length);

	mergeSort(left);
	mergeSort(right);
	merge(list, left, right);

	return list;
}

function bubbleSort(list) {
	var length = list.length;

	for (var i = 0; i < length - 1; i++) {
		var flag = 0;
		for (var j = 0; j < length - i - 1; j++) {
			if (list[j] > list[j + 1]) {
				list[j] = list[j] + list[j + 1];
				list[j + 1] = list[j] - list[j + 1];
				list[j] = list[j] - list[j + 1];
				flag = 1;
			}
			counter++;
		}

		if (flag == 0) {
			return list;
		}
	}
}

function selectionSort(list) {
	var length = list.length;

	for (var i = 0; i < length - 1; i++) {
		var key = i;
		for (var j = i + 1; j < length; j++) {
			if (list[j] < list[key]) {
				key = j;
			}
		}
		var temp = list[i];
		list[i] = list[key];
		list[key] = temp;
	}

	return list;

}


function partition(list, left, right) {
	var length = list.length;

	var pivot = right;
	var index = left;
	for (var i = left; i < right ; i++) {
		if (list[i] <= list[pivot]) {
			var tmp = list[i];
			list[i] = list[index];
			list[index] = tmp;
			index++;
		}
	}

	var temp = list[right];
	list[right] = list[index];
	list[index] = temp;

	return index;
}

function quickSort(list, left, right) {
	if (left < right) {
		var pivot = partition(list, left, right);
		quickSort(list, left, pivot - 1);
		quickSort(list, pivot + 1, right);
	}
	return list;
}

console.log('list to be sorted: ' + list);
//console.log( 'Merge Sorted: ' + mergeSort( list ));
//console.log( 'Bubble Sorted: ' + bubbleSort( list ) );
//console.log( 'Selection Sorted: ' + selectionSort( list ) ); 
console.log('Quick Sorted: ' + quickSort(list, 0 , list.length -1));