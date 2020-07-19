import React, { Component } from "react";
import { Form } from "reactstrap";
import { Grid, TextField,Button } from "@material-ui/core";
import {connect} from 'react-redux';
import {fetchCreateCategory} from '../actions/index'
 class CategoryForm extends Component {
  state = {};

  handleForm = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    debugger
    let obj= this.state
    this.props.postCreate(obj)
    this.forceUpdate();
   // window.alert('inserted into the database')
     window.location.reload(true);
    
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Grid container>
            <Grid item xs={6}>
              <TextField
                name="CategoryName"
                variant="outlined"
                label="Category"
                onChange={this.handleForm}
              />
               <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                       >
                            Submit
                        </Button>
            </Grid>
          </Grid>
        </Form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  Categories: state.CategoryReducer.list,
});
const mapDispatchToProps = (dispatch) => ({
  postCreate: (data) => dispatch(fetchCreateCategory(data)),
});
export default connect(mapStateToProps,mapDispatchToProps)(CategoryForm);
