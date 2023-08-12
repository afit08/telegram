const { TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");

const apiId = 123456;
const apiHash = "123456abcdfg";
const sessionString = "1BQANOTEuMTA4LjU2LjE2MQG7FFRnh3GLsbFBd6rCSPG0I3z+Ual3y3NyT2mBhBQak+YxeXWrgDNxNlEY9j67AoDu1U7HaS3vRaDZ3h6hBJErlHcdxCBLdF4QYD57fZDVEnSuZcF2+sC9Cak4t6sJ2zcqxZBy/ZbGQlqE6UQTdTtCTZAnYQH8qtYPEdz3wxBIcL0PjU0sVrIxzrgWhvTgpDe4OpnN98VbYqQpIuOWzmL+UkdMoQEhWbyxmlOqV7lYd4I5FDlULf9NCsOQ6vV273qvL2BXyUvcRxjAabLLqJUIKQlZFBFXUutPdcsbO4v9rGRPsQjjlNn7+mdjGwu8md/5RmAWorNOYAFZ5iN2/NdoFg=="; // fill this later with the value from session.save()

const phoneNumber = "https://t.me/+6281383178911"; // Replace with the target phone number

(async () => {
  const client = new TelegramClient(new StringSession(sessionString), apiId, apiHash, {
    connectionRetries: 5,
  });

  await client.start();

  const entity = await client.getInputEntity(phoneNumber);
  if (entity) {
    const result = await client.invoke(
      new Api.messages.SendMessage({
        peer: entity,
        message: "Hello from GramJS!",
        randomId: await client.generateRandomId(),
      })
    );

    console.log("Message sent successfully:", result);
  } else {
    console.log("Failed to get entity for phone number:", phoneNumber);
  }

  await client.disconnect();
})();
