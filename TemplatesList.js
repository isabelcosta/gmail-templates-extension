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
  
    onModalItemClick(e) {
        this.setState({ text: e.target.value });
    }
    
/*
    handleChange(e) {
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
    }

      
    componentDidMount() {

        const self = this;

        InboxSDK.load('1', 'sdk_gmail-templates_d763639e5c').then(function(sdk){

            // the SDK has been loaded, now do something with it!
            sdk.Compose.registerComposeViewHandler(function(composeView){
        
                // a compose view has come into existence, do something with it!
                composeView.addButton({
                    title: "Use Templates",
                    iconUrl: 'http://icons.iconarchive.com/icons/google/noto-emoji-objects/128/62941-card-file-box-icon.png',
                    onClick: function(event) {
                        
                        sdk.Widgets.showModalView({
                            title: "Pick a template",
                            buttons: [
                                {
                                    title: "Choose template",
                                    text: "Ok",
                                    onClick: onModalItemClick(event)
                                }
                            ],
                            el: iframeDocument
                        });
                        
                        event.composeView.insertTextIntoBodyAtCursor('Hello World!');
                        //event.composeView.setBodyText("Lola Maria");
                    },
                });
        
            });
        
        });

    }
*/
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
