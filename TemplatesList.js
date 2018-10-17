'use strict';

const e = React.createElement;

class TemplatesApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
                        items: [
                                {
                                id: 1,
                                title: "Lorem Ipsum",
                                local_file: "templates/lorem_ipsum.txt",
                                remote_file: "https://templates.url/assets/lorem_ipsum.txt"
                                },
                                {
                                id: 2,
                                title: "Isabel Template",
                                local_file: "templates/random_template.txt",
                                remote_file: "https://templates.url/assets/random_template.txt"
                                }
                            ], 
                        text: ''
                  };
/*         this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); */
    }
  
/*     handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    } */
      
    render() {
        return e(
          "div",
          null,
          e("h3", null, "Templates"),
          e(TemplatesList, { items: this.state.items })
        );
  /*         <div>
            <h3>Templates</h3>
            <TemplatesList items={this.state.items} />
          </div>
        ); */
      }
}
  
class TemplatesList extends React.Component {
  render() {
    return e(
      "ul",
      null,
      this.props.items.map(item =>
        e("li", { key: item.id }, item.title)
      )
    );
/*         <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
*/    }
}

const domContainer = document.querySelector('#templates_list_container');
//ReactDOM.render(<TemplatesApp />, domContainer);

ReactDOM.render(e(TemplatesApp), domContainer);
