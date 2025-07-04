import { Form } from "../atoms/Form";
import { Input } from "../atoms/Input";
import { Label } from "../atoms/Label";
import { Button } from "../atoms/Button";
import { Textarea } from "../atoms/Textarea";

export const ContactForm = () => (
  <Form
    onSubmit={(e) => {
      e.preventDefault();
      alert("Submitted!");
    }}
  >
    <div>
      <Label htmlFor="name">Name</Label>
      <Input id="name" name="name" required />
    </div>
    <div>
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" name="message" required />
    </div>
    <Button type="submit">Send</Button>
  </Form>
);
