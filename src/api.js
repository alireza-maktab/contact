export const postContact = (contact) =>
  fetch("http://localhost:3000/contacts", {
    method: "POST",
    body: JSON.stringify(contact),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

export const deleteContact = (id) =>
  fetch(`http://localhost:3000/contacts/${id}`, {
    method: "DELETE",
  });

export const getContact = (id) =>
  fetch(`http://localhost:3000/contacts/${id}`).then((res) => res.json());

export const getContacts = () =>
  fetch(`http://localhost:3000/contacts`).then((res) => res.json());
