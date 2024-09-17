import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const {name,place} = this.props;
        return (
            <div className = "user-cart">
                    <h2>Name:{name}</h2>
                    <h3>Location :{place}</h3>
                    
                     <h4>Contact:@pinkun</h4>
            </div>
        );
    };
};
export default UserClass;