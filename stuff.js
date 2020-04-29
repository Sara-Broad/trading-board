addUser: (user) => {
    return { type: actionTypes.USER.ADD_USER, user }
}

switch (action.type) {
    case 'ADD_USER':
     return [...state, { ...action.user }]
        default:
            return state;
}

// used to dispatch the action that receives the dispatch as method and returns the callback function.
// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators(
//         { ...actions.user },
//         dispatch
//     )
// }

// const mapStateToProps = state => {
//     return {
//         blogs: state.blogs.all,
//         paginate: state.blogs.paginate,
//         totalCount: state.blogs.totalCount
//     }
// }

// const mapDispatchToProps = dispatch => ({
//     fetchBlogs: (paginate, category, sortingby) => {
//         dispatch(fetchBlogs(paginate, category, sortingby));
//     },
//     fetchBlogDetails: (id, paginate) => {
//         dispatch(fetchBlogDetails(id, paginate));
//     },
//     changePaginate: (paginate) => {
//         dispatch(changePaginate(paginate));
//     },
// })

// export default connect(mapStateToProps, mapDispatchToProps)(BlogList);


// export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser)


// const mapStateToProps = state => {
//     return {
//       availableIcecreams: state.icecream.availableIcecreams
//     };
//   };

//   const mapDispatchToProps = dispatch => {
//     return {
//       sellIcecream: () => {
//         dispatch(sellIcecream());
//       }
//     };
//   };

//   export default connect(mapStateToProps, mapDispatchToProps)(IcecreamContainer);


        // <div>
        //     {/* <h3 style={(styles.header)}>New User Page</h3>
        //     <div>
        //         <h6 style={(styles.holding)}>Not much to see here yet.</h6>
        //     </div>
        //     <Card className="cardBody">
        //         <Card.Title className="heading">Get Stuff</Card.Title>
        //         <Card.Body>
        //             <Form onSubmit={this.handleFormSubmit}>
        //                 <Form.Group controlId="formName">
        //                     <Form.Label>Name</Form.Label>
        //                     <Form.Control 
        //                     placeholder="Full Name" 
        //                     onChange={this.handleInputChage}
        //                     value={this.state.user.name}
        //                     />
        //                 </Form.Group>
        //                 <Form.Group controlId="formBasicEmail">
        //                     <Form.Label>Email address</Form.Label>
        //                     <Form.Control
        //                         type="email"
        //                         placeholder="Enter email"
        //                         onChange={this.handleInputChage}
        //                         value={this.state.user.email}                                />
        //                 </Form.Group>
        //                 <Form.Group controlId="formBasicPassword">
        //                     <Form.Label>Password</Form.Label>
        //                     <Form.Control type="password" placeholder="Password" />
        //                 </Form.Group>
        //                 {/* <Button variant="primary" type="submit" onSubmit={this.handleFormSubmit}>
        //                     Submit
        //                 </Button> */}
        //             </Form>
        //         </Card.Body>
        //     </Card> */}
        //     {/* <form>
        //         <input type="text" onChange={this.handleChange} value={this.state.user.name}></input>
        //         <input type="text" onChange={this.handleChange} value={this.state.user.email}></input>
        //         <input type="submit" value="Save" />
        //     </form> */}
        //     {/* <div>
        //         <NewAccountCard 
        //         handleInputChage={this.handleInputChage}
        //         handleFormSubmit={this.handleFormSubmit}
        //         name={this.state.name}
        //         // email={this.state.email}
        //         email={email}
        //         password={this.state.password}
        //         // renterPassword={this.state.renterPassword}
        //         />
        //     </div> */}
        // </div>

            //   handleInputChage = event => {
//       const { name, value } = event.target;
//       this.setState({
//           [name]: value
//       })
//   }

// const mapDispatchToProps = {
//     addUser: actions.addUser
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         // addUser: user => dispatch(actions.user.addUser(user))
//         actions: bindActionCreators(actions.user, dispatch)
//     }
// }