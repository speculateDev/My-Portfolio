interface Props {
  name: string;
  email: string;
  message: string;
}

function EmailTemplate({ name, email, message }: Props) {
  return (
    <div>
      <h3>New Portfolio Message</h3>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Message:</strong>
      </p>
      <p>{message.replace(/\n/g, "<br/>")}</p>
    </div>
  );
}

export default EmailTemplate;
