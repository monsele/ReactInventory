import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Form } from "reactstrap";
import { connect } from "react-redux";
import { fetchCreateCategory } from "../actions/index";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
 class FormDialog extends React.Component {
   //const [open, setOpen] = React.useState(false);
   constructor(props) {
     super(props);
     this.state = {
       open: false,
     };
   }

   handleClickOpen = () => {
     this.setState({ open: true });
   };

   handleClose = () => {
     this.setState({ open: false });
   };
   handleSubmit = (e) => {
      e.preventDefault();
     let obj = this.state.CategoryName;
     this.props.postCreate(obj);
     this.setState({ open: false });
      this.forceUpdate();// window.alert('inserted into the database')
      window.location.reload(true);
   };
   handleForm = (e) => {
     this.setState({ [e.target.name]: e.target.value });
   };
   render() {
     console.log(this)
     return (
       <div>
         <Fab color="secondary" aria-label="add">
           <AddIcon onClick={this.handleClickOpen}></AddIcon>
         </Fab>
         <Dialog
           open={this.state.open}
           onClose={this.handleClose}
           aria-labelledby="form-dialog-title"
         >
           <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
           <DialogContent>
             <DialogContentText>Enter A new Category</DialogContentText>
             <Form onSubmit={this.handleSubmit}>
               <TextField
                 name="CategoryName"
                 variant="outlined"
                 label="Category"
                 onChange={this.handleForm}
               />
               <Button variant="contained" color="primary" type="submit">
                 Submit
               </Button>
             </Form>
           </DialogContent>
           <DialogActions>
             <Button onClick={this.handleClose} color="primary">
               Cancel
             </Button>
           </DialogActions>
         </Dialog>
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
export default connect(mapStateToProps,mapDispatchToProps)(FormDialog);