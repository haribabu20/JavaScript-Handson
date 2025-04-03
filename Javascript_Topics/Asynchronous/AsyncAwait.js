
// Handling Multiple Async operation in JS --> can achieve this using Promise.all


/*
✅ Promise.all() takes an array of promises and waits until all of them are resolved.
✅ Each fetch() request returns a Promise (because fetch() is asynchronous).
✅ Since we have three fetch() calls, we pass them as an array inside Promise.all([]).

💡 Why use an array?

When we wrap multiple promises inside Promise.all([]), it makes them execute simultaneously (parallel execution).

This helps reduce the total time instead of waiting for each API call one by one.



3️⃣ How Are the API Results Stored into [users, posts, comments]?

- ✅ Promise.all() returns an array of resolved values in the same order as the promises.
- ✅ We use array destructuring to store the results directly into variables.

*/



async function fetchMultipleData() {
  try {
    const [users, posts, comments] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()),
      fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()),
      fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json())
    ]);

    console.log("User Emails:", users.map(user => user.email));
    console.log("Total Posts:", posts.length);
    console.log("Total Comments:", comments.length);
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchMultipleData();



