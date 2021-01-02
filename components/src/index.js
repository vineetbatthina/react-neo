import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ComponentDetail from './ComponentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard'

const App = () =>
{
    return (
        <div className="ui comments container">
            <ApprovalCard>
                <ComponentDetail author="Vineet" timeAgo="Yesterday at 12:00 PM" text="Intuitive!" image={faker.image.image()}/>
            </ApprovalCard> 
            <ApprovalCard>
                <ComponentDetail author="Madhavi" timeAgo="Yesterday at 10:00 AM" text="Copy Cat :p" image={faker.image.image()}/>
            </ApprovalCard> 
            <ApprovalCard>
                <ComponentDetail author="Chalapathi" timeAgo="Yesterday at 05:00 AM" text="Great going!!" image={faker.image.image()}/>
            </ApprovalCard> 
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));