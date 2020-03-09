import React from 'react';

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { sum: 0 };
        this.num1 = 0;
        this.num2 = 0;
    }

    txtChangeNum1 = (e) => {
        this.num1 = parseInt(e.target.value);
    }
    txtChangeNum2 = (e) => {
        this.num2 = parseInt(e.target.value);
    }

    btnAddClicked = () => {
        //alert(this.num1 + this.num2);
        //this.sum = this.num1 + this.num2;
        this.setState({
            sum: this.num1 + this.num2
        });
    }

    render() {
        return (
            <div>
                num1: <input type="text" onChange={this.txtChangeNum1} /> <br /><br />
                num2: <input type="text" onChange={this.txtChangeNum2} /> <br /><br />
                <button onClick={this.btnAddClicked} className="btn btn-success" >+</button> <br />
                sum = {this.state.sum}
            </div>
        );
    }
}

//export default Calculator;