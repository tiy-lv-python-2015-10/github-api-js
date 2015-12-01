# github-api-profile

## Objectives

After completing this assignment, you should be able to:

* Demonstrate understanding of functions, loops/array
* Demonstrate Functional Programming methods
* Demonstrate use of AJAX methods
* Demonstrate ability to update DOM elements and their attributes/innerHTML via JS/JQuery

## Details

### Deliverables

* Github Repo with html, css, and js 

### Requirements

* No JS errors in the browser
* All functions and code should work according to the following description.

## Easy Mode

Using the HTML/CSS from the [previous assignment](https://github.com/tiy-lv-python-2015-10/github-remake) add javascript needed to load the following:

- Your profile: `https://api.github.com/users/<username>`
- Your repos: `https://api.github.com/users/<username>/repos`

After loading data from the Github API, write at least the following information to the DOM:

- name
- blog
- location
- email
- an `<img>` with its source as the avatar_url
- html_url
- for each repo owned by your user, list that repo in a `<ul>`

### Important Note
Github api has a hard rate limit of 60 per HOUR if the user is unathenticated.  Create a Personal Access Token (under personal settings).  Then use basic auth where
your github username is the username and the token is the password.  You can find how to add the header to the ajax call [here](http://stackoverflow.com/questions/5507234/how-to-use-basic-auth-and-jquery-and-ajax)

