| ArrayName       | doublerAppend | doublerInsert |
| :-------------- | :-----------: | :-----------: |
| tinyArray       |  103.424 μs   |   40.693 μs   |
| smallArray      |  127.485 μs   |   50.894 μs   |
| mediumArray     |  170.137 μs   |  178.599 μs   |
| largeArray      |  821.765 μs   |  7.970677 ms  |
| extraLargeArray |  6.724243 ms  |    1.006 s    |




This chart shows that when you start at the tinyArray the doubleInsert is faster but once you get to
the mediumArray it switches and then from there on the doubleAppend is faster. .unshift() is fast when you are not dealing
with a lot of objects in the array. Once you get to a certain amount of objects then you should switch to the .push()
instead. .unshift() adds an element to the beginning of the array which forces the other elements to switch position 
and thats what makes it slower once you get to a certain amount. The .push() puts the element at the end of the array
which keeps all the other elements in their same position.
