export const myApplicationPromise = (email) => {
  return fetch(`http://localhost:7777/applications?email=${email}`).then(
    (res) => res.json()
  );
};
