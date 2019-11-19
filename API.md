<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## TOC

- [Modules](#modules)
- [Classes](#classes)
- [form-utils](#form-utils)
- [react-hook:random-colors](#react-hookrandom-colors)
- [react:index](#reactindex)
- [redux:book-actions](#reduxbook-actions)
- [redux:books-reducer](#reduxbooks-reducer)
- [redux:reducers](#reduxreducers)
- [redux:store](#reduxstore)
- [redux:subject-actions](#reduxsubject-actions)
- [redux:subjects-reducer](#reduxsubjects-reducer)
- [redux:subjects-filter-actions](#reduxsubjects-filter-actions)
- [redux:subjects-filter-reducer](#reduxsubjects-filter-reducer)
- [App](#app)
- [AppToolbar](#apptoolbar)
- [AppToolbarTitle](#apptoolbartitle)
- [Book](#book)
- [Books](#books)
- [BooksExpansionPanel](#booksexpansionpanel)
- [BooksRegister](#booksregister)
- [AddOrEditBookDialog](#addoreditbookdialog)
- [DeleteBookDialog](#deletebookdialog)
- [DetailsBookDialog](#detailsbookdialog)
- [ErrorDialog](#errordialog)
- [LoadingDialog](#loadingdialog)
- [TabPanel](#tabpanel)
- [Logo](#logo)
- [SideBar](#sidebar)
- [SideBarContent](#sidebarcontent)
- [SideBarToggleButton](#sidebartogglebutton)
- [SubjectList](#subjectlist)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Modules

<dl>
<dt><a href="#module_form-utils">form-utils</a></dt>
<dd><p>A utility module for fomrms.</p>
</dd>
<dt><a href="#module_react-hook_random-colors">react-hook:random-colors</a></dt>
<dd><p>A custom React hook to randomize Material-UI colors.</p>
</dd>
<dt><a href="#react_index">react:index</a></dt>
<dd><p>This module is the application entry point initializing the Redux store and the React app.</p>
</dd>
<dt><a href="#redux_book-actions">redux:book-actions</a></dt>
<dd><p>This module provides all relevant Redux actions to handle changes on <code>state.books</code>.</p>
</dd>
<dt><a href="#redux_books-reducer">redux:books-reducer</a></dt>
<dd><p>This module provides the relevant Redux reducer to handle changes on <code>state.books</code>.</p>
</dd>
<dt><a href="#redux_reducers">redux:reducers</a></dt>
<dd><p>This module provides the <em>combined</em> reducers for the Redux store.</p>
</dd>
<dt><a href="#redux_store">redux:store</a></dt>
<dd><p>This module creates and provides the Redux store.</p>
</dd>
<dt><a href="#redux_subject-actions">redux:subject-actions</a></dt>
<dd><p>This module provides all relevant Redux actions to handle changes on <code>state.subjects</code>.</p>
</dd>
<dt><a href="#redux_subjects-reducer">redux:subjects-reducer</a></dt>
<dd><p>This module provides the relevant Redux reducer to handle changes on <code>state.subjects</code>.</p>
</dd>
<dt><a href="#redux_subjects-filter-actions">redux:subjects-filter-actions</a></dt>
<dd><p>This module provides all relevant Redux actions to handle changes on <code>state.subjectsFilter</code>.</p>
</dd>
<dt><a href="#redux_subjects-filter-reducer">redux:subjects-filter-reducer</a></dt>
<dd><p>This module provides the relevant Redux reducer to handle changes on <code>state.subjectsFilter</code>.</p>
</dd>
</dl>

## Classes

<dl>
<dt><a href="#App">App</a></dt>
<dd><p>The application entry point.</p>
</dd>
<dt><a href="#AppToolbar">AppToolbar</a></dt>
<dd><p>An app toolbar.</p>
</dd>
<dt><a href="#AppToolbarTitle">AppToolbarTitle</a></dt>
<dd><p>A toolbar application title.</p>
</dd>
<dt><a href="#Book">Book</a></dt>
<dd><p>A book preview card in the register.</p>
</dd>
<dt><a href="#Books">Books</a></dt>
<dd><p>A component to show a list of books.</p>
</dd>
<dt><a href="#BooksExpansionPanel">BooksExpansionPanel</a></dt>
<dd><p>A panel which can expand to show several (filtered) books.</p>
</dd>
<dt><a href="#BooksRegister">BooksRegister</a></dt>
<dd><p>A component which shows books like a register.</p>
</dd>
<dt><a href="#AddOrEditBookDialog">AddOrEditBookDialog</a></dt>
<dd><p>A dialog to edit or add a book. For <em>add</em> mode leave out <code>book</code> property.</p>
</dd>
<dt><a href="#DeleteBookDialog">DeleteBookDialog</a></dt>
<dd><p>A (cancable) dialog to delete a book on user interaction. The dialog is responsive.</p>
</dd>
<dt><a href="#DetailsBookDialog">DetailsBookDialog</a></dt>
<dd><p>A (cancable) dialog to show book details on user interaction. The dialog is responsive.</p>
</dd>
<dt><a href="#ErrorDialog">ErrorDialog</a></dt>
<dd><p>A dialog to show error status. The dialog is responsive.</p>
</dd>
<dt><a href="#LoadingDialog">LoadingDialog</a></dt>
<dd><p>A dialog to show loading and/or error status. The dialog is responsive.</p>
</dd>
<dt><a href="#TabPanel">TabPanel</a></dt>
<dd><p>A content panel for tabs.</p>
</dd>
<dt><a href="#Logo">Logo</a></dt>
<dd><p>The application&#39;s logo component.</p>
</dd>
<dt><a href="#SideBar">SideBar</a></dt>
<dd><p>The sidebar to select subjects for books.</p>
</dd>
<dt><a href="#SideBarContent">SideBarContent</a></dt>
<dd><p>An content container component for the sidebar.</p>
</dd>
<dt><a href="#SideBarToggleButton">SideBarToggleButton</a></dt>
<dd><p>An icon action button component to toggle the sidebar.</p>
</dd>
<dt><a href="#SubjectList">SubjectList</a></dt>
<dd><p>A list component to show the subjects and an all books item and assign book counts to these.</p>
</dd>
</dl>

<a name="module_form-utils"></a>

## form-utils
A utility module for fomrms.

<a name="module_react-hook_random-colors"></a>

## react-hook:random-colors
A custom React hook to randomize Material-UI colors.

<a name="react_index"></a>

## react:index
This module is the application entry point initializing the Redux store and the React app.

<a name="redux_book-actions"></a>

## redux:book-actions
This module provides all relevant Redux actions to handle changes on `state.books`.


* [redux:book-actions](#redux_book-actions)
    * [.exports.ADD_BOOK](#redux_book-actions.exports.ADD_BOOK) : <code>string</code>
    * [.exports.UPDATE_BOOK](#redux_book-actions.exports.UPDATE_BOOK) : <code>string</code>
    * [.exports.DELETE_BOOK](#redux_book-actions.exports.DELETE_BOOK) : <code>string</code>
    * [.exports.FETCH_BOOKS](#redux_book-actions.exports.FETCH_BOOKS) : <code>string</code>
    * [.exports.GET_ALL_BOOKS](#redux_book-actions.exports.GET_ALL_BOOKS) : <code>string</code>
    * [.exports.addBook(book)](#redux_book-actions.exports.addBook) ⇒ <code>Object</code>
    * [.exports.updateBook(book)](#redux_book-actions.exports.updateBook) ⇒ <code>Object</code>
    * [.exports.deleteBook(id)](#redux_book-actions.exports.deleteBook) ⇒ <code>Object</code>
    * [.exports.getAllBooks(books)](#redux_book-actions.exports.getAllBooks) ⇒ <code>Object</code>
    * [.exports.startFetchBooks(method)](#redux_book-actions.exports.startFetchBooks) ⇒ <code>Object</code>
    * [.exports.erroredFetchBooks(error)](#redux_book-actions.exports.erroredFetchBooks) ⇒ <code>Object</code>
    * [.exports.fetchGetAllBooks()](#redux_book-actions.exports.fetchGetAllBooks)
    * [.exports.fetchPostBook(book)](#redux_book-actions.exports.fetchPostBook)
    * [.exports.fetchPutBook(book)](#redux_book-actions.exports.fetchPutBook)
    * [.exports.fetchPatchBook(book, patchObject)](#redux_book-actions.exports.fetchPatchBook)
    * [.exports.fetchDeleteBook(id)](#redux_book-actions.exports.fetchDeleteBook)

<a name="redux_book-actions.exports.ADD_BOOK"></a>

### redux:book-actions.exports.ADD\_BOOK : <code>string</code>
The action constant for adding a book.

**Kind**: static constant of [<code>redux:book-actions</code>](#redux_book-actions)  
<a name="redux_book-actions.exports.UPDATE_BOOK"></a>

### redux:book-actions.exports.UPDATE\_BOOK : <code>string</code>
The action constant for updating a book.

**Kind**: static constant of [<code>redux:book-actions</code>](#redux_book-actions)  
<a name="redux_book-actions.exports.DELETE_BOOK"></a>

### redux:book-actions.exports.DELETE\_BOOK : <code>string</code>
The action constant for deleting a book.

**Kind**: static constant of [<code>redux:book-actions</code>](#redux_book-actions)  
<a name="redux_book-actions.exports.FETCH_BOOKS"></a>

### redux:book-actions.exports.FETCH\_BOOKS : <code>string</code>
The action constant for signaling an `aysnc` fetch operation on book(s).

**Kind**: static constant of [<code>redux:book-actions</code>](#redux_book-actions)  
<a name="redux_book-actions.exports.GET_ALL_BOOKS"></a>

### redux:book-actions.exports.GET\_ALL\_BOOKS : <code>string</code>
The action constant for getting all books.

**Kind**: static constant of [<code>redux:book-actions</code>](#redux_book-actions)  
<a name="redux_book-actions.exports.addBook"></a>

### redux:book-actions.exports.addBook(book) ⇒ <code>Object</code>
An action creator to update the state with an added book.

**Kind**: static method of [<code>redux:book-actions</code>](#redux_book-actions)  
**Returns**: <code>Object</code> - The add book action.  

| Param | Type | Description |
| --- | --- | --- |
| book | <code>Object</code> | The new book. |

<a name="redux_book-actions.exports.updateBook"></a>

### redux:book-actions.exports.updateBook(book) ⇒ <code>Object</code>
An action creator to update the state with an updated book.

**Kind**: static method of [<code>redux:book-actions</code>](#redux_book-actions)  
**Returns**: <code>Object</code> - The action.  

| Param | Type | Description |
| --- | --- | --- |
| book | <code>Object</code> | The updated book. |

<a name="redux_book-actions.exports.deleteBook"></a>

### redux:book-actions.exports.deleteBook(id) ⇒ <code>Object</code>
An action creator to update the state with a deleted book.

**Kind**: static method of [<code>redux:book-actions</code>](#redux_book-actions)  
**Returns**: <code>Object</code> - The action.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The ID of the deleted book. |

<a name="redux_book-actions.exports.getAllBooks"></a>

### redux:book-actions.exports.getAllBooks(books) ⇒ <code>Object</code>
An action creator to update the state with received books.

**Kind**: static method of [<code>redux:book-actions</code>](#redux_book-actions)  
**Returns**: <code>Object</code> - The action.  

| Param | Type | Description |
| --- | --- | --- |
| books | <code>Array.&lt;string&gt;</code> | All received books. |

<a name="redux_book-actions.exports.startFetchBooks"></a>

### redux:book-actions.exports.startFetchBooks(method) ⇒ <code>Object</code>
An action creator to notify when a books related fetch ist started.

**Kind**: static method of [<code>redux:book-actions</code>](#redux_book-actions)  
**Returns**: <code>Object</code> - The action.  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>string</code> | The HTTP method type. |

<a name="redux_book-actions.exports.erroredFetchBooks"></a>

### redux:book-actions.exports.erroredFetchBooks(error) ⇒ <code>Object</code>
An action creator to update the state with whenever an error occurred while a books related fetch action.

**Kind**: static method of [<code>redux:book-actions</code>](#redux_book-actions)  
**Returns**: <code>Object</code> - The action.  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>Error</code> | The error received. |

<a name="redux_book-actions.exports.fetchGetAllBooks"></a>

### redux:book-actions.exports.fetchGetAllBooks()
Thunk action which gets all books from the API/DB.

**Kind**: static method of [<code>redux:book-actions</code>](#redux_book-actions)  
**Resolve**: <code>Object[]</code>  
**Reject**: <code>Error</code>  
<a name="redux_book-actions.exports.fetchPostBook"></a>

### redux:book-actions.exports.fetchPostBook(book)
Thunk action which creates a new book in React store and the API/DB.

**Kind**: static method of [<code>redux:book-actions</code>](#redux_book-actions)  
**Resolve**: <code>void</code>  
**Reject**: <code>Error</code>  

| Param | Type | Description |
| --- | --- | --- |
| book | <code>Object</code> | The new book to store. |

<a name="redux_book-actions.exports.fetchPutBook"></a>

### redux:book-actions.exports.fetchPutBook(book)
Thunk action which updates an existing book with given ID in React store and the API/DB.

**Kind**: static method of [<code>redux:book-actions</code>](#redux_book-actions)  
**Resolve**: <code>void</code>  
**Reject**: <code>Error</code>  

| Param | Type | Description |
| --- | --- | --- |
| book | <code>Object</code> | The book to update. |

<a name="redux_book-actions.exports.fetchPatchBook"></a>

### redux:book-actions.exports.fetchPatchBook(book, patchObject)
Thunk action which patches an existing book with given ID in React store and the API/DB.

**Kind**: static method of [<code>redux:book-actions</code>](#redux_book-actions)  
**Resolve**: <code>void</code>  
**Reject**: <code>Error</code>  

| Param | Type | Description |
| --- | --- | --- |
| book | <code>Object</code> | The book to patch. |
| patchObject | <code>Object</code> | The patch part for the book to patch. |

<a name="redux_book-actions.exports.fetchDeleteBook"></a>

### redux:book-actions.exports.fetchDeleteBook(id)
Thunk action which deletes a book with given ID in React store and the API/DB.

**Kind**: static method of [<code>redux:book-actions</code>](#redux_book-actions)  
**Resolve**: <code>void</code>  
**Reject**: <code>Error</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | The ID of he book. |

<a name="redux_books-reducer"></a>

## redux:books-reducer
This module provides the relevant Redux reducer to handle changes on `state.books`.

<a name="redux_books-reducer.exports.books"></a>

### redux:books-reducer.exports.books([state], action) ⇒ <code>Object</code>
The books reducer to provide the next state.

**Kind**: static method of [<code>redux:books-reducer</code>](#redux_books-reducer)  
**Returns**: <code>Object</code> - - The next state.  

| Param | Type | Description |
| --- | --- | --- |
| [state] | <code>Object</code> | The global books state. |
| action | <code>Object</code> | The books action to handle. |

<a name="redux_reducers"></a>

## redux:reducers
This module provides the _combined_ reducers for the Redux store.

<a name="redux_reducers.exports.reducers"></a>

### redux:reducers.exports.reducers
The combined Redux reducers.

**Kind**: static constant of [<code>redux:reducers</code>](#redux_reducers)  
<a name="redux_store"></a>

## redux:store
This module creates and provides the Redux store.

<a name="redux_store.exports.reduxStore"></a>

### redux:store.exports.reduxStore
The Redux store.

**Kind**: static constant of [<code>redux:store</code>](#redux_store)  
<a name="redux_subject-actions"></a>

## redux:subject-actions
This module provides all relevant Redux actions to handle changes on `state.subjects`.


* [redux:subject-actions](#redux_subject-actions)
    * [.exports.FETCH_SUBJECTS](#redux_subject-actions.exports.FETCH_SUBJECTS) : <code>string</code>
    * [.exports.GET_ALL_SUBJECTS](#redux_subject-actions.exports.GET_ALL_SUBJECTS) : <code>string</code>
    * [.exports.fetchGetAllSubjects()](#redux_subject-actions.exports.fetchGetAllSubjects)

<a name="redux_subject-actions.exports.FETCH_SUBJECTS"></a>

### redux:subject-actions.exports.FETCH\_SUBJECTS : <code>string</code>
The action constant for signaling an `aysnc` fetch operation on subjects(s).

**Kind**: static constant of [<code>redux:subject-actions</code>](#redux_subject-actions)  
<a name="redux_subject-actions.exports.GET_ALL_SUBJECTS"></a>

### redux:subject-actions.exports.GET\_ALL\_SUBJECTS : <code>string</code>
The action constant for getting all subjects.

**Kind**: static constant of [<code>redux:subject-actions</code>](#redux_subject-actions)  
<a name="redux_subject-actions.exports.fetchGetAllSubjects"></a>

### redux:subject-actions.exports.fetchGetAllSubjects()
Thunk action which gets all subjects from the API/DB.

**Kind**: static method of [<code>redux:subject-actions</code>](#redux_subject-actions)  
**Resolve**: <code>Object[]</code>  
**Reject**: <code>Error</code>  
<a name="redux_subjects-reducer"></a>

## redux:subjects-reducer
This module provides the relevant Redux reducer to handle changes on `state.subjects`.

<a name="redux_subjects-reducer.exports.subjects"></a>

### redux:subjects-reducer.exports.subjects([state], action) ⇒ <code>Object</code>
The subjects reducer to provide the next state.

**Kind**: static method of [<code>redux:subjects-reducer</code>](#redux_subjects-reducer)  
**Returns**: <code>Object</code> - The next state.  

| Param | Type | Description |
| --- | --- | --- |
| [state] | <code>Object</code> | The global books state. |
| action | <code>Object</code> | The subjects action to handle. |

<a name="redux_subjects-filter-actions"></a>

## redux:subjects-filter-actions
This module provides all relevant Redux actions to handle changes on `state.subjectsFilter`.

<a name="redux_subjects-filter-actions.setCategoryFilter"></a>

### redux:subjects-filter-actions.setCategoryFilter(subject)
TODO

**Kind**: static method of [<code>redux:subjects-filter-actions</code>](#redux_subjects-filter-actions)  

| Param | Type | Description |
| --- | --- | --- |
| subject | <code>string</code> | The subject to filter for. |

<a name="redux_subjects-filter-reducer"></a>

## redux:subjects-filter-reducer
This module provides the relevant Redux reducer to handle changes on `state.subjectsFilter`.

<a name="redux_subjects-filter-reducer.exports.subjectsFilter"></a>

### redux:subjects-filter-reducer.exports.subjectsFilter([state], action) ⇒ <code>Object</code>
The subjects filter reducer to provide the next state.

**Kind**: static method of [<code>redux:subjects-filter-reducer</code>](#redux_subjects-filter-reducer)  
**Returns**: <code>Object</code> - The next state.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [state] | <code>Object</code> | <code>All</code> | The global books state. |
| action | <code>Object</code> |  | The subjects filter action to handle. |

<a name="App"></a>

## App
The application entry point.

**Kind**: global class  
<a name="AppToolbar"></a>

## AppToolbar
An app toolbar.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| props.subjects | <code>Array.&lt;string&gt;</code> | The global subjects. |
| props.handleSideBarToggle | <code>function</code> | The sidebar toggle function. |

<a name="new_AppToolbar_new"></a>

### new AppToolbar(props)

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | The component props. |

<a name="AppToolbarTitle"></a>

## AppToolbarTitle
A toolbar application title.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | The title string. |

<a name="new_AppToolbarTitle_new"></a>

### new AppToolbarTitle(props)

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Obejct</code> | The component props. |

<a name="Book"></a>

## Book
A book preview card in the register.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| props.book | <code>Object</code> | The book represented by this component. |
| props.subjects | <code>Object</code> | The global subjects. |
| props.dispatch | <code>function</code> | The Redux dispatch function. |

<a name="new_Book_new"></a>

### new Book(props)

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | The component props. |

<a name="Books"></a>

## Books
A component to show a list of books.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| props.books | <code>Array.&lt;Object&gt;</code> | The books to list. |
| props.subjects | <code>Array.&lt;string&gt;</code> | The global subjects. |

<a name="new_Books_new"></a>

### new Books(props)

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | The component props. |

<a name="BooksExpansionPanel"></a>

## BooksExpansionPanel
A panel which can expand to show several (filtered) books.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| props.alphaBeticalFilter | <code>string</code> | The filter for the books to show. |
| props.books | <code>Array.&lt;Object&gt;</code> | The books to filter and show. |
| props.subjects | <code>string</code> | The global subjects. |
| [props.heading] | <code>string</code> | An optional heading. |

<a name="new_BooksExpansionPanel_new"></a>

### new BooksExpansionPanel(props)

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | The component props. |

<a name="BooksRegister"></a>

## BooksRegister
A component which shows books like a register.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
|  | <code>Array.&lt;Object&gt;</code> | The books to show. |
| subjects | <code>Array.&lt;string&gt;</code> | The global subjects. |

<a name="new_BooksRegister_new"></a>

### new BooksRegister(props)

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | The component props. |

<a name="AddOrEditBookDialog"></a>

## AddOrEditBookDialog
A dialog to edit or add a book. For _add_ mode leave out `book` property.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [props.book] | <code>Object</code> | The book to _edit_. |
| props.subjects | <code>Array.&lt;string&gt;</code> | The global subjects. |
| props.open | <code>boolean</code> | Initial value for dialog open state. |
| props.handleOnSave | <code>function</code> | The on save callback. |
| props.handleOnCancel | <code>function</code> | The on cancel callback. |

<a name="new_AddOrEditBookDialog_new"></a>

### new AddOrEditBookDialog(props)

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | The component props. |

<a name="DeleteBookDialog"></a>

## DeleteBookDialog
A (cancable) dialog to delete a book on user interaction. The dialog is responsive.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| props.id | <code>number</code> | The book ID. |
| props.title | <code>string</code> | The book title. |
| [props.authors] | <code>Array.&lt;number&gt;</code> | The names of book authors. |
| props.open | <code>boolean</code> | The initial dialog open state. |
| props.handleOnDelete | <code>function</code> | The book delete callback. |
| props.handleOnCancel | <code>function</code> | The cancel callback. |

<a name="new_DeleteBookDialog_new"></a>

### new DeleteBookDialog(props)

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | The dialog properties. |

<a name="DetailsBookDialog"></a>

## DetailsBookDialog
A (cancable) dialog to show book details on user interaction. The dialog is responsive.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| props.book | <code>number</code> | The book ID. |
| props.open | <code>number</code> | The initial dialog open state. |
| props.handleOnClose | <code>function</code> | The book delete callback. |
| props.dispatch | <code>function</code> | The Redux dispatch function. |

<a name="new_DetailsBookDialog_new"></a>

### new DetailsBookDialog(props)

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | The dialog properties. |

<a name="ErrorDialog"></a>

## ErrorDialog
A dialog to show error status. The dialog is responsive.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| props.open | <code>boolean</code> | The initial dialog open state. |
| props.error | <code>Error</code> | The error occurred. |

<a name="new_ErrorDialog_new"></a>

### new ErrorDialog(props)

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | The dialog properties. |

<a name="LoadingDialog"></a>

## LoadingDialog
A dialog to show loading and/or error status. The dialog is responsive.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| props.id | <code>number</code> | The book ID. |
| props.title | <code>number</code> | The book title. |
| props.authors | <code>number</code> | The book authors. |
| props.open | <code>number</code> | The initial dialog open state. |
| props.handleOnDelete | <code>function</code> | The book delete callback. |
| props.handleOnCancel | <code>function</code> | The cancel callback. |

<a name="new_LoadingDialog_new"></a>

### new LoadingDialog(props)

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | The dialog properties. |

<a name="TabPanel"></a>

## TabPanel
A content panel for tabs.

**Kind**: global class  
<a name="new_TabPanel_new"></a>

### new TabPanel(props)

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | The component props. |

<a name="Logo"></a>

## Logo
The application's logo component.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| className | <code>string</code> | The logo styles. |

<a name="new_Logo_new"></a>

### new Logo(props)

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | The component props. |

<a name="SideBar"></a>

## SideBar
The sidebar to select subjects for books.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| props.width | <code>number</code> | The sidebbar width. |
| props.mobileOpen | <code>boolean</code> | TODO |
| props.onCloseHandler | <code>function</code> | The on close handler callback |

<a name="new_SideBar_new"></a>

### new SideBar(props)

| Param | Type | Description |
| --- | --- | --- |
| props | <code>props</code> | The component props. |

<a name="SideBarContent"></a>

## SideBarContent
An content container component for the sidebar.

**Kind**: global class  
<a name="SideBarToggleButton"></a>

## SideBarToggleButton
An icon action button component to toggle the sidebar.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| props.onClickHandler | <code>function</code> | The click handler for toggeling. |

<a name="new_SideBarToggleButton_new"></a>

### new SideBarToggleButton(props)

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | The component props. |

<a name="SubjectList"></a>

## SubjectList
A list component to show the subjects and an all books item and assign book counts to these.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| props.subjects | <code>Array.&lt;string&gt;</code> | The received subjects. |
| props.books | <code>Array.&lt;Objects&gt;</code> | The received books. |
| props.dispatch | <code>function</code> | The Redux dispatch function. |

<a name="new_SubjectList_new"></a>

### new SubjectList(props)

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | The component props. |

