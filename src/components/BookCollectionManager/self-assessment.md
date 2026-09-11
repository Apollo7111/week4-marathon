# Self-Assessment: BookCollectionManager

Branch: book-collection-manager

## Individual Score: 45 / 45

**Correct use of useState and controlled forms - 15/15**

I keep two pieces of state with useState: the list of books and the form. The
form is one object instead of eight separate states, and one handleChange
function updates the right field using the input's name attribute. Every input
has a value and an onChange, so all of them are controlled. Pages, rating and
year use type="number".

**Clean, readable and well-organized code - 15/15**

The component is split into small functions (handleChange, addBook, deleteBook)
and I reused an emptyForm constant to reset the form after adding. The single
book row is moved into its own Book.jsx file and gets its data through props,
including the onDelete callback. Names are clear and the file is easy to follow.

**Self-assessment - 15/15**

Filled in honestly with real scores and a reflection.

## Group Score: [fill in with the team]

**Effective Git branching and merging - 20 / 20**

**GitHub Pages deployment - 15 / 15**

## Reflection

**1. What did you implement?**

A book collection manager. There is a form to add a book with eight fields
(title, author, genre, language, edition, pages, rating, year). The books show
in a numbered list, and each book has a delete button. Title and author are
required, the rest are optional.

**2. What React concepts did you practice?**

useState for the list and the form, controlled inputs, one change handler that
uses the name attribute, updating state without mutating it (spread to add,
filter to delete), rendering a list with map(), splitting a component out into
its own file, and passing props including a function for delete.

**3. What was challenging?**

Handling eight inputs without writing eight separate handlers. I fixed it by
putting the form in one object and using event.target.name. Getting the branch
name and push sorted out on Git also took a few tries.

**4. What would you improve in your code?**

Give each book a real unique id instead of using the index as the key. Turn the
number fields into actual numbers instead of strings when a book is added. Show
some feedback when a required field is empty instead of just doing nothing. In
the Book component, skip the fields that were left blank instead of showing an
empty value.

**5. How did your team collaborate?**

[fill in with the team]

## Testing checklist

- [x] All inputs work and are controlled
- [x] Empty title or author is rejected
- [x] A new book shows up right away
- [x] Books render with map()
- [x] Delete removes the correct book
- [x] Book component is extracted and gets its data from props
- [x] Year field is stored and shown
