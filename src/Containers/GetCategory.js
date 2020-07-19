import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { fetchCategory } from "../actions/index";
import { fetchCategoryProducts } from "../actions/index";
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
 
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DetailsSharp from "@material-ui/icons/DetailsSharp";
//import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
class GetCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    this.props.fetchById(params.id);
    this.props.fetchProducts(params.id);
    console.log(this.props.productList)
  }
  render() {
    console.log(this.props);
    const productlist=this.props.productList
    return (
      <div>
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {this.props.choice.categoryName}
            </Typography>
            <TableContainer component={Paper}>
              <Table size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Category</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {productlist.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.productName}</TableCell>
                      <TableCell>{row.amountInStock}</TableCell>
                      <ButtonGroup variant="text">
                        <Button>
                          <EditIcon color="primary" />
                        </Button>
                        <Button>
                          <DeleteIcon color="secondary" />
                        </Button>
                        <Link to={`/Product/${row.id}`}>
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
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  choice: state.CategoryReducer.choice,
  productList: state.ProductReducer.list,
});
const mapDispatchToProps = (dispatch) => ({
  fetchById: (id) => dispatch(fetchCategory(id)),
  fetchProducts:(id) => dispatch(fetchCategoryProducts(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(GetCategory);
