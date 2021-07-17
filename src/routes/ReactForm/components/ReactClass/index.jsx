import createReactClass from "create-react-class";
const Demo = createReactClass({
  componentDidMount() {
    // console.log(this.props);
  },
  render() {
    console.log(this.props);
    return <span>I am Class Component by createReactClass!</span>;
  },
});

export default Demo;
