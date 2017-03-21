/*
	Implementation of sliding puzzle tile game! 
	Basic refactoring and coding.
*/

// Initialize global variables 
var board = [], 		// The game board: will be 2D array containing all the tiles
	blank = null,		// Lookup variable, the blank tile
	clicked = null;		// clicked variable
/*
	This function resets the table in which the game is being played on.
*/
var reset = function() {
	// Reset global variables when we make new game board
	board = []; 
	blank = null;

	// Initialize function variables
	var	tbl 		= document.getElementById('tbl'),
		tr,
		td,
		// simple atoi to get the number of rows and columns
		n 			= getSizeOfBoard(),
		// generate an array from [0...n-1] then shuffle until it
		// generates a solvable puzzle
		arr 		= getValidArray(n * n),
		// counter variable to iterate over the shuffled array
		m 			= 0; 

	// Delete the table rows from table
    while (tbl.rows.length > 0) {
        tbl.deleteRow(0);
    }

	// Turn array into <td>s
	for (var i = 0; i < n; i++) {
		// HTML API to insert a table row
		tr = tbl.insertRow(i);
		board.push([]); // populate the game board
		for (var j = 0; j < n; j++) {
			// HTML API to insert a cell to a table row
			td = tr.insertCell(j);
			// Save each td in board for easy access
			board[i].push(td);

			// Save blank for comparison purposes
			if (arr[m] == 0) {
				blank = td;
				td.innerHTML = '';
			} else {
				td.innerHTML = arr[m];
			}
			td.addEventListener('click', move, event);

			// Increment m
			m++;
		}
	}

	// Update blank
	blank.id = 'special';
};


/***
	Updates from our interview today! 
***/
var bubbleMove = function(tiles) {
	// Loop over all tds and switch inner HTMLs
	// Loop over all the tds and cascade properly
	var tile1, tile2, temp;
	for (var i = 0; i < tiles.length - 1; i++) {
		// Switch their innerHTMLs to simulate moving
		tile1 = tiles[i];
		tile2 = tiles[i + 1];

		temp = tile1.innerHTML;
		tile1.innerHTML = tile2.innerHTML;
		tile2.innerHTML = temp;
	}
	return tiles;
}

/*
	Returns the tiles needed to 'bubble sort';
*/
var getTilesForBubbleMove = function() {
	/*
	If the clicked element is on the same column then grab the tiles involved in 
	swapping by fixing the column and iterate on the row. Likewise for same row.

	In this function we determine which tiles we need to grab.
	*/

		// Initialize start, end, and addition flag
	var start, 
		end, 
		temp,
		// Initialize return list of tds
		tds 		= [], 

		// to check if clicked element is on the same row or column as blank
		colCheck 	= clicked.cellIndex == blank.cellIndex,

		// Initialize the fixed variable k, (is it the same column or row)
		k = clicked.parentElement.rowIndex,

		// Initialize start and end
		start = clicked.cellIndex,
		end = blank.cellIndex,
		i;

	// If the column is the one that is the same, iterate rows instead
	if (colCheck) {
		k = clicked.cellIndex;
		start = clicked.parentElement.rowIndex;
		end = blank.parentElement.rowIndex;
	}

	// Switch start and end if blank comes on the right or the bottom
	if (start > end) {
		temp = start;
		start = end;
		end = temp;
	}

	// Loop over tds to get all that needs to be switched
	for (i = start; i <= end; i++) {
		// Which one do we need to fix, column or row?
		temp = board[k][i];
		if (colCheck) {
			temp = board[i][k];
		} 
		temp.removeAttribute('id');
		tds.push(temp);
	}

	// Reverse loop if not the empty string
	if (tds[0].innerHTML != '') { // Changed to '', this can be more modular! :)
		tds.reverse();
	}

	return tds;
}


/*
	Function that gets executed when the the click event fires from the tds.
	1) Check if its a viable move
	2) Grab all the <td> that needs to be swapped around
		2a) Makes sure the first element is the blank element
	3) Performs bubble like swapping 
*/
var move = function(event) {
	clicked = event.toElement;
	if (!isViableMove(clicked)) {
		return;
	}

	// Get the involved tiles
	var tiles = getTilesForBubbleMove();

	// Bubble the blank to the end of the array
	tiles = bubbleMove(tiles); 

	// Update blank
	blank = tiles[tiles.length - 1];
	blank.id = 'special';

	if (checkWinCondition()) {
		alert('You Win! Reset the game! :)');
	}
}

var isViableMove = function(element) {
	// Same column or same row, otherwise illegal move
	var colCheck = element.cellIndex == blank.cellIndex,
		rowCheck = element.parentElement.rowIndex == blank.parentElement.rowIndex;
	return colCheck || rowCheck;
}

var getSizeOfBoard = function() {
	var inputBox = document.getElementById('n'),
		n;

	// Make sure input box is defined and valid, otherwise just put default
	if (inputBox) {
		n = parseInt(inputBox.value);
		// Check if n is a valid number, or if its within our range 
		if (n == null || n !== n || n > 15 || n < 2) {
			n = 4; // default number is 4
		}
	}

	return n;
}

/*
	Python's range(a, b, opt), very basic for now.
*/ 
var range = function(n) {
	var arr = [];
	for (var i = 0; i < n; i++) {
		arr.push(i);
	}
	return arr;
};

/*
	Shuffle the elements of the array, simple swapping in place.
*/
var shuffle = function(arr) {
	var i = 0,
		j = 0, 
		temp = null;

	for (i = arr.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1))
		temp = arr[i]
		arr[i] = arr[j]
		arr[j] = temp
	}
	return arr;
};

/*
	Helper function to help generate a solvable array.
*/
var getValidArray = function(n) {
	/*
		Helper function to find the "row" in the array.
		arr = [3,1,0,2] -> "blank" is on the second row

	*/
	var getBlankRow = function(arr, n) {
		return n - parseInt(arr.indexOf(0) / n);
	}

	/*
		Helper functions to determine solvability. (CURRENTLY NOT WORKING)
		Make sure the puzzle is solvable.
		http://www.cs.bham.ac.uk/~mdr/teaching/modules04/java2/TilesSolvability.html
	*/
	var getInversion = function(arr) {
	    var inversions = 0;
	    for (var i = 0; i < arr.length; i++) {
	        for (var j = i; j < arr.length; j++) {
	            if (arr[i] > arr[j])
	                inversions++;
	        }
	    }
	    return inversions;
	};

	// Shuffle and check solvability
	arr = shuffle(range(n));
	if (n % 2 == 0) {
		while (getBlankRow(arr, n) % 2 != 1 && getInversion(arr) % 2 == 0) {
			arr = shuffle(arr);
		}
	} else {
		while (getInversion(arr) % 2 == 1) {
			arr = shuffle(arr);
		}
	}

	return arr;
}

/*
	Helper function to help check win condition on every move.
	A winning move is the one that sorts the board's number in ascending order
	from lowest to highest, left to right, top to bottom.
*/
var checkWinCondition = function() {
	var m = 1, temp;
	for (var i = 0; i < board.length; i++) {
		for (var j = 0; j < board.length; j++) {
			temp = parseInt(board[i][j].innerHTML);

			// Check the last one
			if (i == j && j == board.length - 1) {
				temp = board.length * board.length;
			}

			if (m != temp) {
				return false;
			} 
			
			// Don't forget to increment counter
			m++;
		}
	}
	return true;
}


// Attach all listener
var resetButton = document.getElementById('reset');
window.addEventListener('load', reset);
resetButton.addEventListener('click', reset);