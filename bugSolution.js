Instead of directly accessing the data after initiating a database query, use promises or async/await to ensure the data is available before attempting to access it.  Example using async/await:

```javascript
async function getData() {
  const snapshot = await db.ref('path/to/data').once('value');
  const data = snapshot.val();
  console.log(data);
}
```

Example using Promises:

```javascript
db.ref('path/to/data').once('value').then((snapshot) => {
  const data = snapshot.val();
  console.log(data);
});
```