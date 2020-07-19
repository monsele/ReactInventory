import React, { Component } from "react";
import './Category.css';
import {connect} from "react-redux";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  ButtonGroup,
  Button,
  withStyles,
  TextField
} from "@material-ui/core";
import { fetchCreateCategory } from "../actions/index";
import { Form } from "reactstrap";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import DetailsSharp from "@material-ui/icons/DetailsSharp";
import { fetchAllCategories } from "../actions/index";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
//import compose from "recompose/compose";
import Modal from "react-modal";

const useStyles = makeStyles((theme) =>
 ({
    table: {
      minWidth: 100,
    },
    paper: {
      margin: theme.spacing(4),
      padding: theme.spacing(4),
    },
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));
 class CategoryList extends Component {
   constructor(props) {
     super(props);
     this.state = {
       obj: {},
       open: false,
     };
   }
   componentDidMount() {
     this.props.fetchCategories();
   }
   openModal = () => {
     this.setState({ open: true });
   };
   closeModal = () => {
     this.setState({ open: false });
   };
   handleSubmit = (e) => {
     e.preventDefault();
     let obj = this.state.CategoryName;
     this.props.postCreate(obj);
     this.setState({ open: false });
     this.forceUpdate();
     window.location.reload(true);
   };
   handleForm = (e) => {
     this.setState({[e.target.name]: e.target.value});
   };
   render() {
     //const classes = useStyles;
     const { classes } = this.props;

     const categorylist = this.props.Categories;
     console.log(categorylist);
     return (
       <div className={classes.root}>
         <Link to="/createCategory">
           <Fab color="primary" aria-label="add">
             <AddIcon />
           </Fab>
         </Link>
         <Fab color="secondary" aria-label="add">
           <AddIcon onClick={this.openModal}></AddIcon>
         </Fab>
         {/*This is the Modal*/}
         <Modal
           className="modal"
           overlayClassName="overlay"
           isOpen={this.state.open}
           onRequestClose={this.closeModal}
           contentLabel="Modal"
         >
           <div>
             <h3>Enter Create a new Category</h3>
             {/* This is the form inside the modal*/}
             <Form onSubmit={this.handleSubmit}>
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
                 onClick={this.handleSubmit}
               >
                 Submit
               </Button>
             </Form>
             {/*This is the end of the form*/}
           </div>
         </Modal>
         {/*this is the end of the modal*/}
         <TableContainer component={Paper}>
           <Table
             className={classes.table}
             size="small"
             aria-label="a dense table"
           >
             <TableHead>
               <TableRow>
                 <TableCell align="center">Category</TableCell>
               </TableRow>
             </TableHead>
             <TableBody>
               {categorylist.map((row) => (
                 <TableRow key={row.id}>
                   <TableCell align="center">{row.categoryName}</TableCell>
                   <ButtonGroup variant="text">
                     <Button>
                       <EditIcon color="primary" />
                     </Button>
                     <Button>
                       <DeleteIcon color="secondary" />
                     </Button>
                     <Link to={`/Category/${row.id}`}>
                       <Button>
                         <DetailsSharp />
                       </Button>
                     </Link>
                   </ButtonGroup>
                 </TableRow>
               ))}
             </TableBody>
           </Table>
         </TableContainer>
       </div>
     );
   }
 }
const mapStateToProps = (state) => ({
  Categories: state.CategoryReducer.list,
});
const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchAllCategories()),
  postCreate: (data) => dispatch(fetchCreateCategory(data)),
});
export default withStyles(useStyles)(connect(mapStateToProps,mapDispatchToProps)(CategoryList));