const { Api, TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");
const { readBigIntFromBuffer, generateRandomBytes } = require("telegram/Helpers");

const apiId = 123456;
const apiHash = "123456abcdfg";
const session = new StringSession("1BQANOTEuMTA4LjU2LjE2MQG7FFRnh3GLsbFBd6rCSPG0I3z+Ual3y3NyT2mBhBQak+YxeXWrgDNxNlEY9j67AoDu1U7HaS3vRaDZ3h6hBJErlHcdxCBLdF4QYD57fZDVEnSuZcF2+sC9Cak4t6sJ2zcqxZBy/ZbGQlqE6UQTdTtCTZAnYQH8qtYPEdz3wxBIcL0PjU0sVrIxzrgWhvTgpDe4OpnN98VbYqQpIuOWzmL+UkdMoQEhWbyxmlOqV7lYd4I5FDlULf9NCsOQ6vV273qvL2BXyUvcRxjAabLLqJUIKQlZFBFXUutPdcsbO4v9rGRPsQjjlNn7+mdjGwu8md/5RmAWorNOYAFZ5iN2/NdoFg=="); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  await client.connect(); // This assumes you have already authenticated with .start()

  const result = await client.invoke(
    new Api.contacts.ImportContacts({
      contacts: [
        new Api.InputPhoneContact({
          clientId: readBigIntFromBuffer(generateRandomBytes(8)),
          phone: "+6285216410688",
          firstName: "Yoan",
          lastName: "",
        }),
      ],
    })
  );
  console.log(result); // prints the result
})();