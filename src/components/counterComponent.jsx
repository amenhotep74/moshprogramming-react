import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: []
    };

    // if the array is empty 
    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;
        return <ul>{ this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }

    render() { 
        return (
        <React.Fragment>
            { this.state.tags.length === 0 && 'Please create a new tag'}
            { this.renderTags() }
        </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        if (count === 0) {
            return <h1>Zero</h1>;
        } else {
            return this.state.count;
        }
    }


}
 
export default Counter;