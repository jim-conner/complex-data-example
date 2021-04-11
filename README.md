# Complex Data Example
In this example, I am going to set up some complex data in Firebase and then pseudocode how we can manipulate the data to send to the UI.

I will get you started, but you will need to think about what you have learned up to this point and then piece those bits of knowledge together to make the final data object that is sent to the UI.
## Get Started
```
$ git clone git@github.com:drteresavasquez/complex-data-example.git
$ cd complex-data-example
$ npm i
$ npm start
```

Videos: https://vimeo.com/showcase/8349609

## TODO (Click the links for Videos and Notes)
In this example, we have users and groups. There are several parts that we need to merge the data together to get it to the UI.

**DO A CODEBASED SEARCH for `TODO:` and you will see the files that need updating.

The only thing you should be working on is the data files for this exercise

1. [On Home View show all of the groups and the users that are in each group.](./markdown/1.md)
1. [Get the count of each user's groups and add to table](./markdown/2.md)
1. STUDENTS DO: Get the count of users in each group and add to table

Extra Stuff for YOU to try...
1. When you click on a user on the Users View, show all the info of the groups that they belong to
1. When you click on a group on the Groups View, show all the info of the users that belong to that group
1. Allow users to search both groups and users

## Endpoints for Project
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/f85d9684b29e8f36e0b7?action=collection%2Fimport)

- `/groups.json`
- `/users.json`
- `/user_groups.json`

## Firebase Info
While you can use the endpoints that I have set up using the following DB Url, you may also choose to setup your own Firebase DB as the provided one is read-only.

- Test DB Url: `https://complex-data-2a255-default-rtdb.firebaseio.com/`
- [ERD](https://dbdiagram.io/d/6072e982ecb54e10c33fb498)

Firebase Rules:
```
{
  "rules": {
    ".read": true,
    ".write": false,
    "groups": {
      ".indexOn": ["creator"]
    },
      "user_groups": {
      ".indexOn": ["user_id", "group_id"]
    }
  }
}
```
