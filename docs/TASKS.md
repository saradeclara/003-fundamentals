# Coding Tasks

**Note**

Where applicable, try to do the coding tasks with [ping pong pair programming](http://wiki.c2.com/?PairProgrammingPingPongPattern). 

For example, in your pairs, person A could do task 2, observe that the test fails because task 3 has not been completed. 

Person B then implements the code for task 3. 

You then re-run the test and find that it passes.

Then Person B writes the test and code for task 4.

Person A writes the code and implements the function for task 5 and so on and so on.

## 1) What use is an empty library?

The library currently doesn't have any books! We've had word that 3 new books have arrived.

Each book has the following properties/attributes associated with it:

* Title (String)
* Author (String)
* Available (Boolean)
* ISBN (Number)

The three books we've had delivered are:

* Don't Make Me Think by Steve Krug ISBN: 123
* Site Reliability Engineering by Niall Richard Murphy ISBN: 456
* Fantastic Mr Fox by Roald Dahl ISBN: 789

You can assume that each book has not yet been borrowed by anyone.

Using the information above make sure the library is now populated with the new book deliveries.

## 2) Complete the test for getting all the books in the libary

There is an incomplete test that checks to see that the library is correctly stocked.

This test should be completed. Note the test will fail at this stage until task 3.

## 3) Implement the function for getting all books

You should now implement the function for getting all the books.

Once implemented your stock check test should pass.

## 4) Can we check out books yet?

Write a test that proves whether the library allows people to check out books.

**HINT** The library currently does not provide a checkout function so you'll need to have a think and design in your pairs what the checkout function might look like.

## 5) Provide the checkout function

Now you've got a test - update the library code to provide a checkout function.

Your test should then pass.

## 6) Complete the test for getting all AVAILABLE books in the libary

There is an incomplete test that checks to see that the available books (not checked out) is functioning correctly.

This test should be completed. Note the test will fail at this stage until task 7.

**HINT** You'll probably want to leverage your checkout function created in task 5 in order to checkout a book.

## 7) Implement the available books function

Complete the available books function - it should return a list of books that are available.

**HINT** Think back to previous lectures on looping. Could any of the new ES5 functions help?



# Written questions

Using the books as a reference

1) If a book is an object, what is its _encapsulated data_?

2) If the library was an object, what procedures did we provide for working with it?




