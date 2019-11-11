const axios = require('axios')
const FormFields = require("FormFields")
class FormWrapper extends Component {
    
    state = {
        data: FormField
    }
    
    onChange = ev => {
        ev.preventDefault();
        const myNewData = this.state.data.map(item => {
            if(item.id === ev.target.id) {
                return {...item, value: ev.target.value }
            }
            return item
        })
        
        this.setState({
            data: myNewData
        })
    }
    
    validate = () => {
        this.state.data()
    }
    handleSubmit = ev => {
        ev.preventDefault()
        
        this.validate()
        
        // Do your validation
        // if you want to change anything in your data change it
        
        // if all is validated send
        this.props.send(this.state.data)
    }
    
    
    
    render() {
        return (
            <div>
                <form>
                    <input type="text" id="1" value={this.state.data.input1} onChange={this.onChange}/>
                    <input type="text" id="2"  value={this.state.data.input2} onChange={this.onChange} />
                    <input type="text" id="3"  value={this.state.data.input3} onChange={this.onChange} />
                    <input type="text" id="4"  value={this.state.data.input4} onChange={this.onChange} />
                </form>
                
                
                <button onClick={this.handleSubmit}>I am form gen</button>
            </div>
        )
    }
    
}
const SEOChecklist = function() {
    
    function sendToSlack(data) {
        // send data to slack
        axios.post("url", { data })
    }
    
    return(
        <FormWrapper send={sendToSlack}/>
    )
}