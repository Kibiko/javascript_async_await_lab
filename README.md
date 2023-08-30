# Lab - JS RESTCountries

We've explored the fundamentals of JavaScript and had a refresher of HTML and CSS, so now that we're familiar with the DOM, let's take this all a step further and attempt to bring all together.

Using an external API, let's begin constructing a front-end app which populates a page with dynamic information which we can then filter. We're talking **`fetch()` requests**, we're talking **DOM manipulation** and we're talking **user input**.

We'll be making use of the RESTCountries API for this lab:

[https://restcountries.com/v3.1/all](https://restcountries.com/v3.1/all)

We are focussing here on making as few requests to the external API as possible by making use of a local variable to house the information of ALL countries, which is then utilised within our filtering functionality in place of a second API call.

Start code has been provided for the HTML and JS files.

## MVP

1. In your JavaScript file, create a function which houses a `fetch()` request to the RESTCountries API and returns the response in JSON format
2. Create a `SetUp()` function which calls your first function and populates a global variable with the output. Have this function be called on load of your webpage
3. Create a function which uses this global variable to create a series of new HTML elements, populating each with information about each country (such as name and population), and adding them to the `<ul>` in your HTML. Call this function following your first function within the `SetUp()` function. Ensure that the original `<p>` element is removed ahead of populating your list
4. Add a simple `<form>` to your HTML with a single text-box input and a submit button. Create a function which is called when the form is submitted, printing the value of the `<input>` element to the console
5. Create a function which takes your global variable and filters it based off of the value received from your `<form>` above. Replace the contents of your `<ul>` with the filtered countries returned

> **TIPS** 
> - Remember you can use dot notation (`object.property`) to access the value of a specified `property`
> - The MDN Documentation has all you may need on JavaScript functionality. If you're unsure on any part, start there
> - To clear the entire contents of a given element, you can use `Element.innerHTML` method and set it to an empty string `""`
> - When creating your filter, you may find the `String.toLower()` method helpful
> - The RESTCountries API has multiple values under the `name` property. You will most likely want to use `name.common`

## Extensions

6. Neaten up your JavaScript functionality, making abstract functions for any repeated functionality
7. Add a dynamic heading which tells the user that the countries are being filtered. Add an artificial delay so that this header can be viewed as well as the original _"Awaiting API.."_ `<p>` element
8. Make your page display an error message should it meet an error on querying the API. Test this out by trying to access an endpoint which doesn't exist for the API

> **TIPS**
> - You can check whether a fetch request is successful or not by accessing the `ok` property of the response which is either `true` or `false`
> - When creating functionality tied to the appearance of an error, this should be housed within a `try catch` block