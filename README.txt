Twig Coding Challenge

How to run:

- Firstly, clone the repo!
- Modify the groupArrayElements args in the ArrayDivider.js file 
- Run from the command line using node specifying the file to run followed by the input
- e.g. node ArrayDivider.js
- result will be printed to the console

How it works:
Used Math.ceil to round up the amount to increment by such 
that we're always incrementing by a whole number, resulting in balance chunks. Uses slice method 
to push to the new array which leaves the original array unmodified. Test cases listed below:


Test Cases
groupArrayElements([1, 2, 3, 4, 5], 3)
[ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]

groupArrayElements([1, 2, 3, 4, 5], 5)
[ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ] ]

groupArrayElements([1, 2, 3, 4, 5], 0)
[ [ 1, 2, 3, 4, 5 ] ]

groupArrayElements([1, 2, 3, 4, 5, 6], 3);
[ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]

groupArrayElements([1, 2, 3, 4, 5, 6, 7], 4)
[ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7 ] ]

groupArrayElements([1, 2, 3, 4, 5, 6, 7], 'f')
Second arg must be an integer!
null

groupArrayElements([1, 2, 3, 4, 5, 6, 7], -1)
Please specify a positive number for dividing array!
[]

groupArrayElements([], 5)
No elements in array!
[]