### Needs

- Parent components pass default value of state into children component
- state management is handled by the children component ( uncontrolled )
- **when some parts of state in parent component changes, the children component can be `reset`**

### key

- simply `key=<some_parts_of_state_in_parent>`

> When a key changes, React will create a `new component instance` rather than **update** the existing one.

```javascript
class EmailInput extends Component {
  state = { email: this.props.defaultEmail };

  handleChange = event => {
    this.setState({ email: event.target.value });
  };

  render() {
    return <input onChange={this.handleChange} value={this.state.email} />;
  }
}

<EmailInput defaultEmail={this.props.user.email} key={this.props.user.id} />;
```
