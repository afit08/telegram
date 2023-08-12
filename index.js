const { TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");
const input = require("input"); // npm i input

const apiId = 123456;
const apiHash = "123456abcdfg";
const stringSession = new StringSession("1BQANOTEuMTA4LjU2LjE2MQG7FFRnh3GLsbFBd6rCSPG0I3z+Ual3y3NyT2mBhBQak+YxeXWrgDNxNlEY9j67AoDu1U7HaS3vRaDZ3h6hBJErlHcdxCBLdF4QYD57fZDVEnSuZcF2+sC9Cak4t6sJ2zcqxZBy/ZbGQlqE6UQTdTtCTZAnYQH8qtYPEdz3wxBIcL0PjU0sVrIxzrgWhvTgpDe4OpnN98VbYqQpIuOWzmL+UkdMoQEhWbyxmlOqV7lYd4I5FDlULf9NCsOQ6vV273qvL2BXyUvcRxjAabLLqJUIKQlZFBFXUutPdcsbO4v9rGRPsQjjlNn7+mdjGwu8md/5RmAWorNOYAFZ5iN2/NdoFg=="); // fill this later with the value from session.save()

(async () => {
  console.log("Loading interactive example...");
  const client = new TelegramClient(stringSession, apiId, apiHash, {
    connectionRetries: 5,
  });
  await client.start({
    phoneNumber: async () => await input.text("Please enter your number: "),
    password: async () => await input.text("Please enter your password: "),
    phoneCode: async () =>
      await input.text("Please enter the code you received: "),
    onError: (err) => console.log(err),
  });
  console.log("You should now be connected.");
  console.log(client.session.save()); // Save this string to avoid logging in again
  await client.sendMessage("+6281383178911", { message: "Hello!" });
})();