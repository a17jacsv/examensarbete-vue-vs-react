import React, { Component } from 'react';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);


class App extends Component {
    render() {
        return (
            <div class="wrapper">
                <div class="content">
                    <div id="header">
                        <h1>Enkel lista</h1>
                    </div>
                    <div id="list">
                        <ul>{listItems}</ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;